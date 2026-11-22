import type { Locale } from '@it-tech-blog/preferences';
import { DocPageHeader, type HeaderContent } from '@it-tech-blog/ui';

import { narration } from '../narration';

const content: Record<Locale, HeaderContent> = {
  ko: {
    eyebrow: '12장 · 6 / 9',
    title: 'Slider에 값 · 범위 · 키보드 · 터치 대안 제공하기',
    lead: (
      <>
        손잡이를 끌어 값을 맞추는 컨트롤은 끌 수 있는 사람에게만 편합니다. 손이 떨리거나, 한
        손가락으로 누르기만 하거나, 화면을 보지 않는 사용자도 같은 값에 닿아야 합니다. 이 페이지는
        알림 소리 크기 하나를{' '}
        <strong className="text-text-default">손잡이 · 키보드 · 버튼과 직접 선택</strong> 세 가지
        길로 맞춥니다.
      </>
    ),
    readingTime: '읽는 시간 약 10분',
    practices: '브라우저 실습 1개',
    learnItems: [
      'input type=range에 이름 · 최솟값 · 최댓값 · 단계 · 현재 값과 단위 주기',
      '키보드 조작과 끌지 않는 단일 포인터 조작을 나눠 제공하기',
      '가장 작은 값과 큰 값에서 값과 화면이 어긋나지 않는지 확인하기',
    ],
  },
  en: {
    eyebrow: 'Chapter 12 · 6 of 9',
    title: 'Giving a slider its value, range, keyboard, and touch alternatives',
    lead: (
      <>
        A control set by dragging a handle is convenient only for those who can drag. Users whose
        hands shake, who only tap with one finger, or who do not look at the screen must reach the
        same value. This page sets one notification volume{' '}
        <strong className="text-text-default">
          three ways: the handle, the keyboard, and buttons with direct choices
        </strong>
        .
      </>
    ),
    readingTime: 'About 10 min read',
    practices: '1 in-browser exercise',
    learnItems: [
      'Giving input type=range a name, minimum, maximum, step, and a current value with its unit',
      'Providing keyboard operation and single-pointer operation without dragging as separate things',
      'Checking that the value and the screen agree at the smallest and largest values',
    ],
  },
};

export const PageHeader = ({ locale }: { locale: Locale }) => (
  <DocPageHeader locale={locale} content={content[locale]} script={narration} />
);
