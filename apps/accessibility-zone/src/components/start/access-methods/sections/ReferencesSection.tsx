import type { Locale } from '@it-tech-blog/preferences';
import { DocH2, type DocReference, ReferenceList } from '@it-tech-blog/ui';

import { getToc } from '../toc';

const same = (text: string) => ({ ko: text, en: text });

const references: DocReference[] = [
  {
    href: 'https://www.w3.org/WAI/people-use-web/tools-techniques/',
    source: same('W3C WAI'),
    title: same('Tools and Techniques'),
    note: {
      ko: '화면 낭독기, 화면 확대, 음성 입력, 스위치 같은 보조기술과 적응 전략',
      en: 'Assistive technologies and adaptive strategies such as screen readers, magnification, speech recognition, and switches',
    },
  },
  {
    href: 'https://www.w3.org/TR/WCAG22/',
    source: same('W3C'),
    title: same('Web Content Accessibility Guidelines (WCAG) 2.2'),
    note: {
      ko: 'W3C Recommendation, 2024년 12월 12일 갱신본',
      en: 'W3C Recommendation, updated 12 December 2024',
    },
  },
  {
    href: 'https://support.apple.com/guide/voiceover/turn-voiceover-on-or-off-vo2682/mac',
    source: same('Apple'),
    title: same('Turn VoiceOver on or off on Mac'),
    note: { ko: 'macOS VoiceOver 켜고 끄기', en: 'Turning macOS VoiceOver on and off' },
  },
  {
    href: 'https://support.microsoft.com/en-us/windows/complete-guide-to-narrator-e4397a0d-ef4f-b386-d8ae-c172f109bdb1',
    source: same('Microsoft'),
    title: same('Complete guide to Narrator'),
    note: { ko: 'Windows 내레이터 사용 안내', en: 'Using Windows Narrator' },
  },
  {
    href: 'https://www.nvaccess.org/about-nvda/',
    source: same('NV Access'),
    title: same('About NVDA'),
    note: { ko: '무료 Windows 화면 낭독기', en: 'A free Windows screen reader' },
  },
  {
    href: 'https://support.apple.com/guide/mac-help/turn-voice-control-on-or-off-mchl63d14732/mac',
    source: same('Apple'),
    title: same('Turn Voice Control on or off on Mac'),
    note: { ko: 'macOS 음성 제어 켜기', en: 'Turning on macOS Voice Control' },
  },
  {
    href: 'https://support.microsoft.com/en-us/accessibility/windows/voice-access/set-up-voice-access',
    source: same('Microsoft'),
    title: same('Set up voice access'),
    note: { ko: 'Windows 11 음성 액세스 설정', en: 'Setting up Windows 11 voice access' },
  },
  {
    href: 'https://support.google.com/accessibility/android/answer/6151848',
    source: same('Google'),
    title: same('Voice Access'),
    note: { ko: 'Android 음성 조작', en: 'Controlling Android by voice' },
  },
  {
    href: 'https://support.apple.com/en-us/119835',
    source: same('Apple'),
    title: same('Use Switch Control on iPhone'),
    note: { ko: 'iOS 스위치 제어와 항목 스캐닝', en: 'iOS Switch Control and item scanning' },
  },
  {
    href: 'https://support.google.com/accessibility/android/answer/6301490',
    source: same('Google'),
    title: same('Switch Access'),
    note: { ko: 'Android 스위치 제어와 자동 스캔', en: 'Android switch control and auto-scanning' },
  },
];

export const ReferencesSection = ({ locale }: { locale: Locale }) => {
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.references.id}>
      <DocH2 {...toc.references} />
      <ReferenceList references={references} locale={locale} />
    </section>
  );
};
