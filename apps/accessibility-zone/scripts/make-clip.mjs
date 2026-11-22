/**
 * 09장 녹화 클립 제작 도구(macOS · ffmpeg). 대사 · 시간은 src/components/content/shared/clip.ts 하나에서 읽는다.
 *
 *   node scripts/make-clip.mjs frames   글자 없는 두 장면 그림(PNG)을 그린다
 *   node scripts/make-clip.mjs build    합성 음성 · 안내음 · 그림을 합쳐 public/media에 webm · mp4를 만든다
 *
 * 말소리는 scripts/synth-voice.py(MeloTTS)로 만든 <lang>-<id>.wav를 CLIP_VOICE_DIR(기본 ~/clip-voice)에서 읽는다.
 * 운영체제의 시스템 음성은 사용권이 공개 재배포를 허용하지 않으므로 쓰지 않는다.
 */
import { execFileSync } from 'node:child_process';
import { mkdirSync, mkdtempSync, writeFileSync } from 'node:fs';
import { homedir, tmpdir } from 'node:os';
import { join } from 'node:path';
import { crc32, deflateSync } from 'node:zlib';

const app = new URL('..', import.meta.url).pathname;
const clip = await import(join(app, 'src/components/content/shared/clip.ts'));
const framesDir = join(app, 'src/components/content/shared/images');
const mediaDir = process.env.CLIP_MEDIA_DIR ?? join(app, 'public/media');
const voiceDir = process.env.CLIP_VOICE_DIR ?? join(homedir(), 'clip-voice');

const W = 640;
const H = 360;
const colors = {
  bg: [15, 23, 42],
  line: [226, 232, 240],
  cross: [248, 113, 113],
  arrow: [74, 222, 128],
};

/** RGB 그림판. 도형만 그리므로 서체 사용권이 끼지 않는다. */
const canvas = () => {
  const px = Buffer.alloc(W * H * 3);
  const set = (x, y, c) => {
    if (x < 0 || y < 0 || x >= W || y >= H) return;
    px.set(c, (y * W + x) * 3);
  };
  const rect = (x0, y0, x1, y1, c) => {
    for (let y = y0; y < y1; y++) for (let x = x0; x < x1; x++) set(x, y, c);
  };
  const line = (ax, ay, bx, by, width, c) => {
    const len2 = (bx - ax) ** 2 + (by - ay) ** 2;
    for (let y = Math.min(ay, by) - width; y <= Math.max(ay, by) + width; y++) {
      for (let x = Math.min(ax, bx) - width; x <= Math.max(ax, bx) + width; x++) {
        const t = Math.max(0, Math.min(1, ((x - ax) * (bx - ax) + (y - ay) * (by - ay)) / len2));
        if (Math.hypot(x - (ax + t * (bx - ax)), y - (ay + t * (by - ay))) <= width / 2)
          set(x, y, c);
      }
    }
  };
  const triangle = ([ax, ay], [bx, by], [cx, cy], c) => {
    const area = (bx - ax) * (cy - ay) - (cx - ax) * (by - ay);
    for (let y = Math.min(ay, by, cy); y <= Math.max(ay, by, cy); y++) {
      for (let x = Math.min(ax, bx, cx); x <= Math.max(ax, bx, cx); x++) {
        const w0 = ((bx - x) * (cy - y) - (cx - x) * (by - y)) / area;
        const w1 = ((cx - x) * (ay - y) - (ax - x) * (cy - y)) / area;
        if (w0 >= 0 && w1 >= 0 && w0 + w1 <= 1) set(x, y, c);
      }
    }
  };
  rect(0, 0, W, H, colors.bg);
  return { px, rect, line, triangle };
};

const png = (px) => {
  const chunk = (type, data) => {
    const body = Buffer.concat([Buffer.from(type), data]);
    const head = Buffer.alloc(4);
    head.writeUInt32BE(data.length);
    const crc = Buffer.alloc(4);
    crc.writeUInt32BE(crc32(body));
    return Buffer.concat([head, body, crc]);
  };
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(W, 0);
  ihdr.writeUInt32BE(H, 4);
  ihdr.set([8, 2, 0, 0, 0], 8);
  const rows = Buffer.alloc((W * 3 + 1) * H);
  for (let y = 0; y < H; y++) px.copy(rows, y * (W * 3 + 1) + 1, y * W * 3, (y + 1) * W * 3);
  return Buffer.concat([
    Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]),
    chunk('IHDR', ihdr),
    chunk('IDAT', deflateSync(rows)),
    chunk('IEND', Buffer.alloc(0)),
  ]);
};

/** 장면 A: 본관과 두 출입구. 장면 B: 정문에 ✕, 화살표가 동쪽 입구를 가리킴. */
const drawScene = (withSign) => {
  const c = canvas();
  const t = 6;
  c.rect(170, 90, 470, 90 + t, colors.line);
  c.rect(170, 290 - t, 470, 290, colors.line);
  c.rect(170, 90, 170 + t, 290, colors.line);
  c.rect(470 - t, 90, 470, 290, colors.line);
  c.rect(290, 78, 350, 102, colors.line);
  c.rect(458, 165, 482, 235, colors.line);
  if (withSign) {
    c.line(276, 56, 364, 124, 10, colors.cross);
    c.line(364, 56, 276, 124, 10, colors.cross);
    c.line(500, 200, 620, 200, 12, colors.arrow);
    c.triangle([492, 200], [526, 176], [526, 224], colors.arrow);
  }
  return png(c.px);
};

const frames = () => {
  mkdirSync(framesDir, { recursive: true });
  writeFileSync(join(framesDir, 'clip-scene-a.png'), drawScene(false));
  writeFileSync(join(framesDir, 'clip-scene-b.png'), drawScene(true));
  console.log(`frames written to ${framesDir}`);
};

const run = (args) => execFileSync('ffmpeg', ['-hide_banner', '-loglevel', 'error', '-y', ...args]);
const duration = (file) =>
  Number(
    execFileSync('ffprobe', [
      '-v',
      'error',
      '-show_entries',
      'format=duration',
      '-of',
      'csv=p=0',
      file,
    ]),
  );

/** 앞뒤 무음을 자르고 음량을 맞춘다. 대사 칸보다 길면 다시 녹음하라고 멈춘다. */
const prepareVoice = (work, lang, line) => {
  const out = join(work, `${lang}-${line.id}.wav`);
  const trim = 'silenceremove=start_periods=1:start_threshold=-40dB';
  run([
    '-i',
    join(voiceDir, `${lang}-${line.id}.wav`),
    '-af',
    `${trim},areverse,${trim},areverse,loudnorm=I=-18:TP=-2`,
    '-ar',
    '48000',
    '-ac',
    '1',
    out,
  ]);
  const length = duration(out);
  const slot = line.end - line.start;
  if (length > slot)
    throw new Error(
      `${lang}-${line.id}: ${length.toFixed(2)}s > ${slot.toFixed(2)}s. 조금 빠르게 다시 녹음하세요.`,
    );
  return out;
};

const build = () => {
  mkdirSync(mediaDir, { recursive: true });
  const work = mkdtempSync(join(tmpdir(), 'clip-'));
  const sceneA = join(framesDir, 'clip-scene-a.png');
  const sceneB = join(framesDir, 'clip-scene-b.png');
  for (const lang of ['ko', 'en']) {
    for (const version of ['standard', 'described']) {
      const lines = clip.clipLines[lang].filter(
        (line) => line.id !== 'ad' || version === 'described',
      );
      const voices = lines.map((line) => prepareVoice(work, lang, line));
      const ms = (s) => Math.round(s * 1000);
      const inputs = voices.flatMap((file) => ['-i', file]);
      const delays = lines.map((line, i) => `[${i + 1}:a]adelay=${ms(line.start)}[v${i}]`);
      const chime = `[${lines.length + 1}:a]afade=t=out:st=0.3:d=0.3,volume=0.4,adelay=${ms(clip.CHIME.start)}[c]`;
      const mixIn = lines.map((_, i) => `[v${i}]`).join('');
      const audio = join(work, `${lang}-${version}.wav`);
      run([
        '-f',
        'lavfi',
        '-t',
        String(clip.CLIP_SECONDS),
        '-i',
        'anullsrc=r=48000:cl=mono',
        ...inputs,
        '-f',
        'lavfi',
        '-i',
        `sine=f=880:d=${(clip.CHIME.end - clip.CHIME.start).toFixed(2)}:r=48000`,
        '-filter_complex',
        `${delays.join(';')};${chime};[0:a]${mixIn}[c]amix=inputs=${lines.length + 2}:normalize=0:duration=first[a]`,
        '-map',
        '[a]',
        audio,
      ]);
      const name = clip.clipName(lang, version);
      const video = [
        '-loop',
        '1',
        '-t',
        String(clip.SCENE_B_START),
        '-i',
        sceneA,
        '-loop',
        '1',
        '-t',
        String(clip.CLIP_SECONDS - clip.SCENE_B_START),
        '-i',
        sceneB,
        '-i',
        audio,
        '-filter_complex',
        '[0:v][1:v]concat=n=2:v=1:a=0,fps=10,format=yuv420p[v]',
        '-map',
        '[v]',
        '-map',
        '2:a',
        '-t',
        String(clip.CLIP_SECONDS),
      ];
      run([
        ...video,
        '-c:v',
        'libvpx-vp9',
        '-crf',
        '40',
        '-b:v',
        '0',
        '-c:a',
        'libopus',
        '-b:a',
        '48k',
        join(mediaDir, `${name}.webm`),
      ]);
      run([
        ...video,
        '-c:v',
        'libx264',
        '-tune',
        'stillimage',
        '-crf',
        '28',
        '-c:a',
        'aac',
        '-b:a',
        '64k',
        '-movflags',
        '+faststart',
        join(mediaDir, `${name}.mp4`),
      ]);
      console.log(`built ${name}.webm / .mp4`);
    }
  }
};

const [command] = process.argv.slice(2);
if (command === 'frames') frames();
else if (command === 'build') build();
else console.log('usage: node scripts/make-clip.mjs frames | build');
