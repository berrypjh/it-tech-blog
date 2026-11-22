import { getServerLocale } from '@it-tech-blog/preferences/server';

import { ValidationResponsibilityPage } from '@/components/forms/validation-responsibility/ValidationResponsibilityPage';

const metadata = {
  ko: {
    title: '네이티브 검증과 사용자 정의 검증의 책임 나누기 — A11y Lab',
    description:
      '같은 잘못된 값을 브라우저 기본 제약과 사용자 정의 방식으로 검증해 제출이 멈춘 이유를 비교하고, 클라이언트 검증의 한계를 정리하는 11장 둘째 페이지.',
  },
  en: {
    title: 'Dividing responsibility between native and custom validation — A11y Lab',
    description:
      'Chapter 11, second page: validating the same wrong value with the browser’s built-in constraints and a custom approach to compare why submission stopped, and stating the limits of client-side validation.',
  },
};

export const generateMetadata = async () => metadata[await getServerLocale()];

const Page = async () => <ValidationResponsibilityPage locale={await getServerLocale()} />;

export default Page;
