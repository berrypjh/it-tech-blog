/** 기기마다 이름이 다른 고품질 음성의 표지. 자동 선택일 때 기본 음성보다 먼저 고른다. */
const NATURAL_VOICE = /natural|premium|enhanced|neural|online|google|siri/i;
/** 목록에 남길 음성. 고품질 음성에 macOS 기본 한국어 음성 유나를 더한다. 나머지는 장난감용에 가까워 숨긴다. */
const LISTED_VOICE = new RegExp(`${NATURAL_VOICE.source}|yuna`, 'i');

/** 고른 목소리 이름을 기억하는 브라우저 저장소 키. 음성 목록이 기기마다 달라 쿠키 설정에 두지 않는다. */
export const VOICE_KEY = 'listen-voice';

/** 그 언어로 읽을 수 있는 좋은 음성. 고품질 음성을 앞에 두고, 좋은 음성이 하나도 없는 기기에서만 전부 보인다. */
export const voicesFor = (voices: SpeechSynthesisVoice[], lang: string) => {
  const inLang = voices
    .filter((voice) => voice.lang.toLowerCase().startsWith(lang.toLowerCase()))
    .sort((a, b) => Number(NATURAL_VOICE.test(b.name)) - Number(NATURAL_VOICE.test(a.name)));
  const listed = inLang.filter((voice) => LISTED_VOICE.test(voice.name));
  return listed.length > 0 ? listed : inLang;
};

/** 사용자가 고른 목소리가 있으면 그것, 없으면(자동) 고품질 음성, 그것도 없으면 첫 음성. */
export const pickVoice = (voices: SpeechSynthesisVoice[], lang: string, preferred: string) => {
  const list = voicesFor(voices, lang);
  return list.find((voice) => voice.name === preferred) ?? list[0];
};
