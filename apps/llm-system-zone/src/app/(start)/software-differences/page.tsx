import { getServerLocale } from '@it-tech-blog/preferences/server';

import { SoftwareDifferencesPage } from '@/components/start/software-differences/SoftwareDifferencesPage';

const metadata = {
  ko: {
    title: 'LLM 애플리케이션의 특성: 확률적 출력과 결정적인 소프트웨어 계약 — LLM System',
    description:
      'IT 문의의 라우팅 JSON을 형식 · 사실과 근거 · 업무 규칙 · 실행 권한의 네 경계로 나누고, 신뢰된 입력으로 쓰기 허용 여부를 결정적으로 판정하는 01장 세 번째 페이지.',
  },
  en: {
    title:
      'Traits of LLM applications: probabilistic output and a deterministic software contract — LLM System',
    description:
      'Chapter 01, page 3: splitting the routing JSON of an IT request into four boundaries (format, fact and evidence, business rule, execution permission) and judging deterministically from trusted inputs whether a write is allowed.',
  },
};

export const generateMetadata = async () => metadata[await getServerLocale()];

const Page = async () => <SoftwareDifferencesPage locale={await getServerLocale()} />;

export default Page;
