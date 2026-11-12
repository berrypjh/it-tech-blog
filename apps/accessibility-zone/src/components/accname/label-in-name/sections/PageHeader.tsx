import type { Locale } from '@it-tech-blog/preferences';
import { DocPageHeader, type HeaderContent } from '@it-tech-blog/ui';

import { narration } from '../narration';

const content: Record<Locale, HeaderContent> = {
  ko: {
    eyebrow: '06장 · 6 / 6',
    title: 'Label in Name을 확인하고 계산 근거와 브라우저 결과 대조하기',
    lead: (
      <>
        화면에는 &quot;예약 변경&quot;이 보이는데 이름이 &quot;예약 수정하기&quot;라면, 그 글자를
        말해 버튼을 누르는 음성 입력 사용자는 버튼을 찾지 못할 수 있습니다. 이 장의 마지막 페이지는{' '}
        <strong className="text-text-default">WCAG 2.5.3 원문</strong>으로 판정하고, 이름의 출처와
        브라우저 검사값을 04.6의 판정 기록으로 남깁니다.
      </>
    ),
    readingTime: '읽는 시간 약 14분',
    practices: '브라우저 실습 1개',
    learnItems: [
      'WCAG 2.2 SC 2.5.3의 적용 대상과 "포함" 요건, 권장 방식과 규범 요구의 차이',
      '완전 일치 · 설명 합치기처럼 원문에 없는 판정 기준을 쓰지 않기',
      '이름의 출처를 찾고 수정 전후 브라우저 검사값을 비교하기',
      '기준 · 버전 · 대상 · 관찰 근거 · 판정 · 미확인을 04.6 양식으로 기록하기',
    ],
  },
  en: {
    eyebrow: 'Chapter 06 · 6 of 6',
    title: 'Checking Label in Name against the computation and browser results',
    lead: (
      <>
        If &quot;Change booking&quot; is shown on screen but the name is &quot;Edit
        reservation,&quot; a voice input user who says those words to press the button may not find
        it. This last page of the chapter judges it by{' '}
        <strong className="text-text-default">the text of WCAG 2.5.3</strong>, and records the name
        source and browser values in the judgment record from 04.6.
      </>
    ),
    readingTime: 'About 14 min read',
    practices: '1 in-browser exercise',
    learnItems: [
      'The scope and "contains" requirement of WCAG 2.2 SC 2.5.3, and how the best practice differs from the requirement',
      'Not using judgment rules that are not in the text, such as an exact match or adding the description',
      'Finding the source of the name and comparing browser values before and after the fix',
      'Recording standard, version, scope, observed evidence, verdict, and unconfirmed items in the 04.6 format',
    ],
  },
};

export const PageHeader = ({ locale }: { locale: Locale }) => (
  <DocPageHeader locale={locale} content={content[locale]} script={narration} />
);
