import type { Locale } from '@it-tech-blog/preferences';
import { ListenButton } from '@it-tech-blog/ui';

import { List, ListItem } from '@berrypjh/react-ui';
import { Check, Clock } from 'lucide-react';

import { narration } from '../narration';

const content = {
  ko: {
    eyebrow: '01장 · 3 / 5',
    title: '키보드·화면 낭독기·확대·음성 입력·스위치의 사용 방식 비교하기',
    lead: (
      <>
        같은 페이지라도 누군가는 Tab으로 이동하고, 누군가는 제목 목록으로 건너뛰며 듣고, 누군가는
        화면의 일부만 크게 보고, 누군가는 버튼 이름을 말하고, 누군가는 하이라이트가 지나가기를
        기다렸다가 선택합니다. 이 페이지는{' '}
        <strong className="text-text-default">각 방식이 페이지의 무엇에 의존하는지</strong>를
        비교하고, 실제 환경에서 무엇을 확인해야 하는지 안내합니다.
      </>
    ),
    readingTime: '읽는 시간 약 16분',
    learnHeading: '이 페이지에서 배우는 것',
    learnItems: [
      '입력 · 출력 · 탐색 단위라는 세 축으로 사용 방식 구분하기',
      '다섯 가지 방식이 페이지에 기대하는 것과 흔한 장벽 비교하기',
      '한 과업이 방식마다 다른 단계에서 막히는 과정 따라가기',
      '코드로 예상한 결과와 실제 보조기술로 확인한 결과 구분하기',
      '자기 기기에서 방식별로 확인하고 환경 기록하기',
      '보이는 글자와 다른 이름이 음성 입력을 막는 사례 살펴보기',
    ],
  },
  en: {
    eyebrow: 'Chapter 01 · 3 of 5',
    title: 'Comparing keyboard, screen reader, magnification, speech input, and switch use',
    lead: (
      <>
        On the same page, one person moves with Tab, another listens and jumps through a list of
        headings, another sees part of the screen enlarged, another speaks a button&apos;s name, and
        another waits for a highlight to reach an item before selecting. This page compares{' '}
        <strong className="text-text-default">what each method depends on in the page</strong> and
        explains what to check in a real setup.
      </>
    ),
    readingTime: 'About 16 min read',
    learnHeading: 'What you will learn',
    learnItems: [
      'Tell ways of use apart along three axes: input, output, and unit of navigation',
      'Compare what each of the five methods expects of a page and its common barriers',
      'Follow one task as it fails at different stages for different methods',
      'Separate results predicted from code from results checked with real assistive technology',
      'Check each method on your own device and record the environment',
      'Look at a case where a name that differs from the visible text blocks speech input',
    ],
  },
};

/** 페이지 제목, 핵심 명제, 학습 목표를 보여주는 머리말. */
export const PageHeader = ({ locale }: { locale: Locale }) => {
  const c = content[locale];

  return (
    <header>
      <p className="mb-sm text-xsm font-semiBold text-text-primary">{c.eyebrow}</p>
      <h1 className="text-3xl leading-3xl font-bold tracking-sm text-text-default">{c.title}</h1>
      <p className="mt-lg text-md leading-md text-text-light">{c.lead}</p>

      <div className="mt-lg flex flex-wrap gap-x-xl gap-y-xs text-xxsm text-text-light">
        <span className="flex items-center gap-xs">
          <Clock className="h-3.5 w-3.5" aria-hidden="true" />
          {c.readingTime}
        </span>
        <ListenButton script={narration} />
      </div>

      <section
        aria-labelledby="learn-heading"
        className="mt-2xl rounded-md border border-stroke-light bg-background-default p-xl"
      >
        <h2 id="learn-heading" className="mb-md text-xsm font-bold text-text-default">
          {c.learnHeading}
        </h2>
        <List className="flex flex-col gap-sm text-xsm">
          {c.learnItems.map((item) => (
            <ListItem key={item} className="flex gap-sm">
              <Check className="mt-xs h-4 w-4 shrink-0 text-text-success" aria-hidden="true" />
              {item}
            </ListItem>
          ))}
        </List>
      </section>
    </header>
  );
};
