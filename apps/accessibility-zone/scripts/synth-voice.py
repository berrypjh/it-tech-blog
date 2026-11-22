"""
09장 클립의 말소리를 MeloTTS(MIT)로 합성한다. 대사는 clip.ts의 clipLines를 JSON으로 받는다.

    node --no-warnings -e "import('./src/components/content/shared/clip.ts').then((m) => process.stdout.write(JSON.stringify(m.clipLines)))" > lines.json
    MECAB_KO_DIR=<dir> python synth-voice.py <out_dir> lines.json

환경(저장소 의존성 아님, 임시 가상환경): Python 3.10, MeloTTS 커밋 209145371cff, setuptools<81, unidic-lite,
python-mecab-ko(대소문자만 다른 일본어용 MeCab과 겹치지 않게 `pip install --target <dir>`로 따로 설치),
NLTK의 cmudict · averaged_perceptron_tagger(_eng). 결과는 <out_dir>/<lang>-<id>.wav이고, make-clip.mjs build가 읽는다.
"""
import json
import os
import sys

sys.path.insert(0, os.environ['MECAB_KO_DIR'])

import unidic
import unidic_lite

# 일본어 사전은 쓰지 않지만 melo가 import할 때 필요하다. 큰 unidic 대신 unidic-lite 경로를 쓴다.
unidic.DICDIR = unidic_lite.DICDIR

from melo.api import TTS  # noqa: E402

out, lines_path = sys.argv[1], sys.argv[2]
lines = json.load(open(lines_path, encoding='utf8'))
for lang, code, speaker in [('ko', 'KR', 'KR'), ('en', 'EN', 'EN-US')]:
    model = TTS(language=code, device='cpu')
    spk = model.hps.data.spk2id[speaker]
    for line in lines[lang]:
        model.tts_to_file(line['text'], spk, f"{out}/{lang}-{line['id']}.wav", speed=1.0, quiet=True)
        print('wrote', lang, line['id'])
