import type { Locale } from '@it-tech-blog/preferences';
import { DocPageHeader, type HeaderContent } from '@it-tech-blog/ui';

import { narration } from '../narration';

const content: Record<Locale, HeaderContent> = {
  ko: {
    eyebrow: '12장 · 5 / 9',
    title: '사이트 내비게이션과 Menu · Menubar · Toolbar의 조작 구분하기',
    lead: (
      <>
        “메뉴”라고 부른다고 모두 같은 것이 아닙니다. 페이지로 가는 링크 묶음과, 명령을 실행하는
        메뉴와, 서식 버튼이 늘어선 도구 모음은 키가 다릅니다. 이 페이지는{' '}
        <strong className="text-text-default">메뉴 버튼의 열기 · 이동 · 실행 · 취소</strong>와{' '}
        <strong className="text-text-default">도구 모음의 진입 · 이동 · 이탈</strong>을 직접
        비교합니다.
      </>
    ),
    readingTime: '읽는 시간 약 14분',
    practices: '브라우저 실습 2개',
    learnItems: [
      '사이트 링크 묶음에 menu 역할을 쓰지 않는 이유 말하기',
      '메뉴 버튼에서 초점이 가는 곳과 Escape 뒤 돌아오는 곳 확인하기',
      '도구 모음에서 한 번의 Tab과 축에 맞는 화살표만 쓰고 편집 키를 건드리지 않기',
    ],
  },
  en: {
    eyebrow: 'Chapter 12 · 5 of 9',
    title: 'Telling site navigation apart from menu, menubar, and toolbar interaction',
    lead: (
      <>
        Not everything called a “menu” is the same. A set of links to pages, a menu that runs
        commands, and a toolbar of formatting buttons use different keys. This page compares{' '}
        <strong className="text-text-default">open, move, run, and cancel in a menu button</strong>{' '}
        with{' '}
        <strong className="text-text-default">entering, moving in, and leaving a toolbar</strong>.
      </>
    ),
    readingTime: 'About 14 min read',
    practices: '2 in-browser exercises',
    learnItems: [
      'Explaining why a set of site links does not use the menu role',
      'Checking where focus goes in a menu button and where it returns after Escape',
      'Using one Tab stop and arrows along the axis in a toolbar without touching editing keys',
    ],
  },
};

export const PageHeader = ({ locale }: { locale: Locale }) => (
  <DocPageHeader locale={locale} content={content[locale]} script={narration} />
);
