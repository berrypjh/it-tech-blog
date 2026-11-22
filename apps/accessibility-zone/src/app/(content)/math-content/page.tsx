import { getServerLocale } from '@it-tech-blog/preferences/server';

import { MathContentPage } from '@/components/content/math-content/MathContentPage';

const metadata = {
  ko: {
    title: '수식의 구조를 전달하고 MathML과 텍스트 대안 검증하기 — A11y Lab',
    description:
      '분수 하나를 실제 MathML과 문장으로 표기하고, 화면 표시와 보조기술의 낭독 · 구조 탐색 · 점자 출력을 나눠 확인하는 09장 네 번째 페이지.',
  },
  en: {
    title: 'Conveying the structure of math and verifying MathML and text alternatives — A11y Lab',
    description:
      'Chapter 09, page 4: one fraction in real MathML and a sentence, checking screen display apart from speech, structural navigation, and braille.',
  },
};

export const generateMetadata = async () => metadata[await getServerLocale()];

const Page = async () => <MathContentPage locale={await getServerLocale()} />;

export default Page;
