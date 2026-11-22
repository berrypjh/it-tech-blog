import type { Locale } from '@it-tech-blog/preferences';
import { DocPageHeader, type HeaderContent } from '@it-tech-blog/ui';

import { narration } from '../narration';

const content: Record<Locale, HeaderContent> = {
  ko: {
    eyebrow: '12장 · 1 / 9',
    title: 'Checkbox · Radio · Switch · Toggle Button의 상태 계약 구분하기',
    lead: (
      <>
        네모 칸, 동그란 칸, 밀어서 켜는 손잡이, 눌린 버튼은 모양만 다른 것이 아닙니다. 고를 수 있는
        개수, 누른 뒤 일어나는 일, 되돌리는 방법이 서로 다릅니다. 이 페이지는 알림 설정 하나에서{' '}
        <strong className="text-text-default">
          독립 선택 · 상호 배타 · 즉시 켜짐과 꺼짐 · 명령 눌림
        </strong>
        을 구분합니다.
      </>
    ),
    readingTime: '읽는 시간 약 12분',
    practices: '브라우저 실습 1개',
    learnItems: [
      '과업에 맞는 컨트롤을 고르고 그 상태 계약을 말하기',
      'checkbox · radio는 네이티브 요소와 fieldset · legend로 만들기',
      '선택 취소 · 그룹의 마지막 항목 · 비활성 · 혼합 상태를 키로 비교하기',
    ],
  },
  en: {
    eyebrow: 'Chapter 12 · 1 of 9',
    title: 'Telling apart the state contracts of checkbox, radio, switch, and toggle button',
    lead: (
      <>
        A square box, a round box, a sliding handle, and a pressed button differ in more than shape.
        How many can be chosen, what happens after pressing, and how to undo it all differ. This
        page separates{' '}
        <strong className="text-text-default">
          independent choice, mutual exclusion, immediate on and off, and a pressed command
        </strong>{' '}
        in one notification settings screen.
      </>
    ),
    readingTime: 'About 12 min read',
    practices: '1 in-browser exercise',
    learnItems: [
      'Choosing the control that fits the task and stating its state contract',
      'Building checkboxes and radios from native elements with fieldset and legend',
      'Comparing deselection, the last item of a group, disabled, and mixed states by keyboard',
    ],
  },
};

export const PageHeader = ({ locale }: { locale: Locale }) => (
  <DocPageHeader locale={locale} content={content[locale]} script={narration} />
);
