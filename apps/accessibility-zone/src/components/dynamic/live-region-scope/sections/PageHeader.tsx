import type { Locale } from '@it-tech-blog/preferences';
import { DocPageHeader, type HeaderContent } from '@it-tech-blog/ui';

import { narration } from '../narration';

const content: Record<Locale, HeaderContent> = {
  ko: {
    eyebrow: '10장 · 3 / 5',
    title: 'aria-atomic · aria-relevant · aria-busy로 갱신 범위 표현하기',
    lead: (
      <>
        “8석”만 들리면 어느 회차의 좌석인지 알 수 없고, 갱신이 끝나기 전의 중간 값이 들리면 틀린
        정보가 됩니다. 이 페이지는 같은 합성 데이터로{' '}
        <strong className="text-text-default">어디까지 · 어떤 변경을 · 언제</strong> 전할지를 나눠
        관찰합니다.
      </>
    ),
    readingTime: '읽는 시간 약 13분',
    practices: '브라우저 실습 1개',
    learnItems: [
      'aria-atomic으로 바뀐 노드와 영역 전체 중 무엇을 넘길지 정하기',
      'aria-relevant로 추가 · 제거 · 글자 변경 중 알릴 변경 고르기',
      'aria-busy로 묶음 갱신을 표시하고 성공 · 실패 · 취소 뒤에 풀기',
    ],
  },
  en: {
    eyebrow: 'Chapter 10 · 3 of 5',
    title: 'Expressing the scope of updates with aria-atomic, aria-relevant, and aria-busy',
    lead: (
      <>
        Hearing only “8 seats” does not tell which session, and hearing a half-finished value during
        an update is wrong information. This page uses one synthetic data set to observe{' '}
        <strong className="text-text-default">how much, which changes, and when</strong> to convey.
      </>
    ),
    readingTime: 'About 13 min read',
    practices: '1 in-browser exercise',
    learnItems: [
      'Using aria-atomic to choose between the changed node and the whole region',
      'Using aria-relevant to choose which of additions, removals, and text changes to report',
      'Marking a batch update with aria-busy and releasing it after success, failure, or cancel',
    ],
  },
};

export const PageHeader = ({ locale }: { locale: Locale }) => (
  <DocPageHeader locale={locale} content={content[locale]} script={narration} />
);
