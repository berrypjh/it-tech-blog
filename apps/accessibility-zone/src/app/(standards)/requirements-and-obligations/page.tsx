import { getServerLocale } from '@it-tech-blog/preferences/server';

import { RequirementsAndObligationsPage } from '@/components/standards/requirements-and-obligations/RequirementsAndObligationsPage';

const metadata = {
  ko: {
    title: '표준 · 초안 · 구현 지원과 법령 · 계약 · 인증 요구를 구분하기 — A11y Lab',
    description:
      '발행 상태 · 지원 증거 · 계약과 인증 · 법령 의무를 다른 판단 축으로 나누고, 통과 · 실패 · 해당 없음 · 미확인을 근거와 함께 남기는 판정 기록을 한 서비스 사례로 쓰는 04장 마지막 페이지.',
  },
  en: {
    title:
      'Telling standards, drafts, and implementation support apart from legal, contract, and certification requirements — A11y Lab',
    description:
      'The last page of chapter 04: separating publication status, support evidence, contracts and certification, and legal obligations as different axes, and writing a judgment record for one service that keeps pass, fail, not applicable, and unconfirmed apart with their bases.',
  },
};

export const generateMetadata = async () => metadata[await getServerLocale()];

const Page = async () => <RequirementsAndObligationsPage locale={await getServerLocale()} />;

export default Page;
