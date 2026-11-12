import type { Locale } from '@it-tech-blog/preferences';
import { DocPageHeader, type HeaderContent } from '@it-tech-blog/ui';

import { narration } from '../narration';

const content: Record<Locale, HeaderContent> = {
  ko: {
    eyebrow: '05장 · 6 / 6',
    title: '이름 · 상태 · 키보드 동작이 서로 모순되는 컨트롤 고치기',
    lead: (
      <>
        화면에서는 잘 열리고 닫히는 &quot;상세 보기&quot;도, 의미 · 이름 · 상태 · 키보드 동작이 서로
        다른 말을 할 수 있습니다. 이 장의 마지막 페이지는 수정 전 코드에서 불일치를 찾고,{' '}
        <strong className="text-text-default">네이티브 버튼과 한 상태</strong>로 고친 뒤 근거를
        기록합니다.
      </>
    ),
    readingTime: '읽는 시간 약 14분',
    practices: '브라우저 실습 1개',
    learnItems: [
      '수정 전 코드에서 의미 · 이름 · 상태 · 관계의 불일치 찾기',
      '네이티브 button으로 활성화를 지키고 펼침 여부와 aria-expanded를 한 상태에서 만들기',
      'aria-controls의 대상 ID를 확인하기',
      'DOM으로 관찰한 사실과 실제 보조기술에서 확인할 항목을 나눠 기록하기',
    ],
  },
  en: {
    eyebrow: 'Chapter 05 · 6 of 6',
    title: 'Fixing a control whose name, state, and keyboard behavior contradict each other',
    lead: (
      <>
        A &quot;Show details&quot; that opens and closes nicely on screen can still have meaning,
        name, state, and keyboard behavior that say different things. This last page of the chapter
        finds the mismatches in the before code, fixes them with{' '}
        <strong className="text-text-default">a native button and one state</strong>, and records
        the basis.
      </>
    ),
    readingTime: 'About 14 min read',
    practices: '1 in-browser exercise',
    learnItems: [
      'Finding mismatches in meaning, name, state, and relation in the before code',
      'Keeping activation with a native button and deriving expansion and aria-expanded from one state',
      'Checking the target ID of aria-controls',
      'Recording facts observed in the DOM separately from items to check with real assistive technology',
    ],
  },
};

export const PageHeader = ({ locale }: { locale: Locale }) => (
  <DocPageHeader locale={locale} content={content[locale]} script={narration} />
);
