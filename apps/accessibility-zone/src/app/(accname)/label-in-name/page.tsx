import { getServerLocale } from '@it-tech-blog/preferences/server';

import { LabelInNamePage } from '@/components/accname/label-in-name/LabelInNamePage';

const metadata = {
  ko: {
    title: 'Label in Name을 확인하고 계산 근거와 브라우저 결과 대조하기 — A11y Lab',
    description:
      'WCAG 2.2 SC 2.5.3의 적용 대상과 포함 요건을 원문으로 읽고, "예약 변경" 사례를 판정하며, 이름의 출처와 브라우저 검사값을 04.6 판정 기록으로 남기는 06장 마지막 페이지.',
  },
  en: {
    title: 'Checking Label in Name against the computation and browser results — A11y Lab',
    description:
      'Chapter 06, last page: reading the scope and containment requirement of WCAG 2.2 SC 2.5.3, judging the "Change booking" cases, and recording the name source and browser values in the 04.6 judgment record.',
  },
};

export const generateMetadata = async () => metadata[await getServerLocale()];

const Page = async () => <LabelInNamePage locale={await getServerLocale()} />;

export default Page;
