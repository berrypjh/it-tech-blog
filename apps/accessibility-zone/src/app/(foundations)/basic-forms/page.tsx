import { getServerLocale } from '@it-tech-blog/preferences/server';

import { BasicFormsPage } from '@/components/foundations/basic-forms/BasicFormsPage';

const metadata = {
  ko: {
    title: 'label·input·fieldset·legend로 기본 입력 폼 만들기 — A11y Lab',
    description:
      '보이는 라벨 연결과 고유 ID, 입력 유형과 autocomplete, fieldset·legend로 묶는 그룹을 배우고 실제 폼에서 브라우저가 계산한 연결을 확인하는 02장 네 번째 페이지.',
  },
  en: {
    title: 'Building a basic form with label, input, fieldset, and legend — A11y Lab',
    description:
      'Chapter 02, page 4: visible label association and unique IDs, input types and autocomplete, grouping with fieldset and legend, and checking the associations the browser computes in a real form.',
  },
};

export const generateMetadata = async () => metadata[await getServerLocale()];

const Page = async () => <BasicFormsPage locale={await getServerLocale()} />;

export default Page;
