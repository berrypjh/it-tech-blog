import { getServerLocale } from '@it-tech-blog/preferences/server';

import { AuthenticationPathsPage } from '@/components/forms/authentication-paths/AuthenticationPathsPage';

const metadata = {
  ko: {
    title: '비밀번호 · 붙여넣기 · OTP · CAPTCHA와 대체 인증 경로 검토하기 — A11y Lab',
    description:
      '합성 값과 시험용 코드만 쓰는 모형으로 붙여넣기 · 비밀번호 관리자 · 대체 인증 경로를 확인하고, 3.3.8과 3.3.9의 조건을 구분하는 11장 여섯째 페이지.',
  },
  en: {
    title:
      'Reviewing passwords, paste, OTP, CAPTCHA, and alternative authentication paths — A11y Lab',
    description:
      'Chapter 11, sixth page: checking paste, password managers, and an alternative authentication path in a model that uses only synthetic values and a test code, and separating the conditions of 3.3.8 and 3.3.9.',
  },
};

export const generateMetadata = async () => metadata[await getServerLocale()];

const Page = async () => <AuthenticationPathsPage locale={await getServerLocale()} />;

export default Page;
