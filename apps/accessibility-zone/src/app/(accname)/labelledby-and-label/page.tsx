import { getServerLocale } from '@it-tech-blog/preferences/server';

import { LabelledbyAndLabelPage } from '@/components/accname/labelledby-and-label/LabelledbyAndLabelPage';

const metadata = {
  ko: {
    title: 'aria-labelledby · aria-label · 내용 기반 이름의 조건과 우선순위 — A11y Lab',
    description:
      '같은 버튼의 내용 · aria-label · 유효한 aria-labelledby를 비교하고, 적용 가능한 출처 · 역할 · 참조 · 끝난 단계를 기록하는 06장 세 번째 페이지.',
  },
  en: {
    title:
      'Conditions and precedence of aria-labelledby, aria-label, and name from content — A11y Lab',
    description:
      'Chapter 06, page 3: comparing content, aria-label, and a valid aria-labelledby on the same button, and recording the applicable source, role, references, and the step that finished.',
  },
};

export const generateMetadata = async () => metadata[await getServerLocale()];

const Page = async () => <LabelledbyAndLabelPage locale={await getServerLocale()} />;

export default Page;
