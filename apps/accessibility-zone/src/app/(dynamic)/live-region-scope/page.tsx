import { getServerLocale } from '@it-tech-blog/preferences/server';

import { LiveRegionScopePage } from '@/components/dynamic/live-region-scope/LiveRegionScopePage';

const metadata = {
  ko: {
    title: 'aria-atomic · aria-relevant · aria-busy로 갱신 범위 표현하기 — A11y Lab',
    description:
      '같은 합성 데이터로 바뀐 부분과 전체 문맥, 추가 · 제거, 묶음 갱신 중임을 나눠 관찰하고 busy를 성공 · 실패 · 취소 뒤에 푸는 10장 세 번째 페이지.',
  },
  en: {
    title:
      'Expressing the scope of updates with aria-atomic, aria-relevant, and aria-busy — A11y Lab',
    description:
      'Chapter 10, page 3: observing the changed part versus the whole context, additions and removals, and batch updates on one synthetic data set, releasing busy after success, failure, or cancel.',
  },
};

export const generateMetadata = async () => metadata[await getServerLocale()];

const Page = async () => <LiveRegionScopePage locale={await getServerLocale()} />;

export default Page;
