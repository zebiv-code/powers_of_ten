// ─── Powers of Ten explorer ─────────────────────────────────────
import { scales } from './scales.js';

const scene = document.querySelector('.scene');
const slider = document.getElementById('slider');
const powerLabel = document.getElementById('power-label');
const scaleValue = document.getElementById('scale-value');
const scaleTitle = document.getElementById('scale-title');
const scaleDesc = document.getElementById('scale-desc');
const infoCard = document.querySelector('.info-card');
const playFwd = document.getElementById('play-fwd');
const playBack = document.getElementById('play-back');
const playPause = document.getElementById('play-pause');

// Build slider range
const minPower = scales[0].power;
const maxPower = scales[scales.length - 1].power;
slider.min = 0;
slider.max = scales.length - 1;
// Starting scale: ?scale=N query param, or default 10^0
const urlScale = new URLSearchParams(window.location.search).get('scale');
const startPower = urlScale !== null ? parseInt(urlScale, 10) : 1;
let startIdx = 0, minDist = Infinity;
scales.forEach((s, i) => { const d = Math.abs(s.power - startPower); if (d < minDist) { minDist = d; startIdx = i; } });
slider.value = startIdx;

// Preload scene layers
const layers = scales.map((s, i) => {
    const div = document.createElement('div');
    div.className = 'scene-layer';

    // Try image first, fall back to CSS gradient
    const img = new Image();
    img.src = `images/${s.image}`;
    img.onload = () => {
        div.style.background = `url(images/${s.image}) center/cover no-repeat`;
    };
    img.onerror = () => { div.style.background = s.bg; };

    // Set gradient immediately as fallback
    div.style.background = s.bg;

    scene.appendChild(div);
    return div;
});

let currentIndex = -1;
let playDir = 0; // -1 backward, 0 stopped, 1 forward
let playTimer = null;

function formatPower(p) {
    if (p === 0) return '1 meter';
    const abs = Math.abs(p);
    const units = [
        [26, ''], [24, ''], [22, ''], [20, ''],
        [18, ' (~100 ly)'], [16, ' (~1 ly)'], [14, ''], [12, ''],
        [10, ''], [8, ''], [7, ''], [6, ''], [5, ''],
        [4, ''], [3, ''], [2, ''], [1, ''],
    ];
    return `10<sup>${p}</sup> m`;
}

function formatDistance(p) {
    if (p >= 18) return `~${Math.pow(10, p - 16).toLocaleString()} light-years`;
    if (p >= 12) return `${Math.pow(10, p - 12)} Tm`;
    if (p >= 9) return `${Math.pow(10, p - 9)} Gm`;
    if (p >= 6) return `${Math.pow(10, p - 6)} Mm`;
    if (p >= 3) return `${Math.pow(10, p - 3)} km`;
    if (p >= 0) return `${Math.pow(10, p)} m`;
    if (p >= -3) return `${Math.pow(10, p + 3)} mm`;
    if (p >= -6) return `${Math.pow(10, p + 6)} μm`;
    if (p >= -9) return `${Math.pow(10, p + 9)} nm`;
    if (p >= -12) return `${Math.pow(10, p + 12)} pm`;
    return `${Math.pow(10, p + 15)} fm`;
}

function showScale(index) {
    if (index === currentIndex) return;
    const prev = currentIndex;
    currentIndex = index;
    const s = scales[index];

    // Crossfade: new layer fades in over the previous
    layers.forEach((l, i) => {
        if (i === index) {
            l.style.zIndex = 2;
            l.classList.add('active');
        } else if (i === prev) {
            l.style.zIndex = 1;
            // Keep previous visible during crossfade, then hide
            setTimeout(() => { l.classList.remove('active'); l.style.zIndex = ''; }, 800);
        } else {
            l.classList.remove('active');
            l.style.zIndex = '';
        }
    });

    // Update info
    infoCard.classList.add('hidden');
    setTimeout(() => {
        powerLabel.innerHTML = `10<sup>${s.power}</sup> meters — ${formatDistance(s.power)}`;
        scaleValue.innerHTML = `10<sup>${s.power}</sup> m`;
        scaleTitle.textContent = s.title;
        scaleDesc.textContent = s.desc;
        document.title = `10^${s.power} m — ${s.title} — Powers of Ten`;
        history.replaceState(null, '', `?scale=${s.power}`);
        infoCard.classList.remove('hidden');
    }, prev === -1 ? 0 : 300);

    slider.value = index;
}

// ─── Controls ───────────────────────────────────────────────────
slider.addEventListener('input', () => {
    showScale(parseInt(slider.value));
    stopPlay();
});

document.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowUp') {
        e.preventDefault();
        showScale(Math.min(currentIndex + 1, scales.length - 1));
        stopPlay();
    }
    if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') {
        e.preventDefault();
        showScale(Math.max(currentIndex - 1, 0));
        stopPlay();
    }
    if (e.key === ' ') {
        e.preventDefault();
        stopPlay();
    }
});

const stepBack = document.getElementById('step-back');
const stepFwd = document.getElementById('step-fwd');

stepBack.addEventListener('click', () => { showScale(Math.max(currentIndex - 1, 0)); stopPlay(); });
stepFwd.addEventListener('click', () => { showScale(Math.min(currentIndex + 1, scales.length - 1)); stopPlay(); });

function updateButtons() {
    playFwd.classList.toggle('active', playDir === 1);
    playBack.classList.toggle('active', playDir === -1);
    playPause.style.opacity = playDir === 0 ? '0.4' : '1';
    const playing = playDir !== 0;
    stepBack.classList.toggle('hidden', playing);
    stepFwd.classList.toggle('hidden', playing);
}

function startPlay(dir) {
    if (playDir === dir) { stopPlay(); return; }
    playDir = dir;
    updateButtons();
    advance();
}

function stopPlay() {
    playDir = 0;
    clearTimeout(playTimer);
    updateButtons();
}

function advance() {
    if (playDir === 0) return;
    const next = currentIndex + playDir;
    if (next < 0 || next >= scales.length) { stopPlay(); return; }
    showScale(next);
    playTimer = setTimeout(advance, 3500);
}

playFwd.addEventListener('click', () => startPlay(1));
playBack.addEventListener('click', () => startPlay(-1));
playPause.addEventListener('click', stopPlay);

// ─── Init ───────────────────────────────────────────────────────
showScale(parseInt(slider.value));
