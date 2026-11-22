import { getServerLocale } from '@it-tech-blog/preferences/server';

import { MultiStepFormsPage } from '@/components/forms/multi-step-forms/MultiStepFormsPage';

const metadata = {
  ko: {
    title: '다단계 폼 · 조건부 필드 · 반복 입력을 설계하기 — A11y Lab',
    description:
      '두 단계 신청에서 뒤로 · 다음, 조건부 필드의 노출과 값 · 검증 · 제출 정책을 맞추고, 같은 과정에서 받은 정보를 다시 입력시키지 않는 11장 다섯째 페이지.',
  },
  en: {
    title: 'Designing multi-step forms, conditional fields, and repeated entry — A11y Lab',
    description:
      'Chapter 11, fifth page: aligning back and next, and the visibility, value, validation, and submission policy of conditional fields in a two-step application, without asking again for information already given in the same process.',
  },
};

export const generateMetadata = async () => metadata[await getServerLocale()];

const Page = async () => <MultiStepFormsPage locale={await getServerLocale()} />;

export default Page;
