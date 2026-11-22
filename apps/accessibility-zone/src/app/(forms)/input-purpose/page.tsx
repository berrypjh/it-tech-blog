import { getServerLocale } from '@it-tech-blog/preferences/server';

import { InputPurposePage } from '@/components/forms/input-purpose/InputPurposePage';

const metadata = {
  ko: {
    title: '입력 유형 · autocomplete · inputmode와 필수 · 형식 안내 설계하기 — A11y Lab',
    description:
      '작은 신청서에서 type · autocomplete · inputmode가 맡는 일을 나누고, 필수 여부와 형식 예시를 입력 전후에 보이게 두는 11장 첫 페이지.',
  },
  en: {
    title:
      'Designing input types, autocomplete, inputmode, and required and format instructions — A11y Lab',
    description:
      'Chapter 11, first page: separating what type, autocomplete, and inputmode do in a small application form, and keeping required and format instructions visible before and after input.',
  },
};

export const generateMetadata = async () => metadata[await getServerLocale()];

const Page = async () => <InputPurposePage locale={await getServerLocale()} />;

export default Page;
