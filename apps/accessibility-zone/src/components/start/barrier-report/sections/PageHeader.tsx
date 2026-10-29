import type { Locale } from '@it-tech-blog/preferences';
import { ListenButton } from '@it-tech-blog/ui';

import { List, ListItem } from '@berrypjh/react-ui';
import { Check, Clock, FlaskConical } from 'lucide-react';

const content = {
  ko: {
    eyebrow: '01장 · 5 / 5',
    title: '준비된 화면에서 장벽을 찾고 재현 절차로 기록하기',
    lead: (
      <>
        01장에서 본 사용자 · 과업 · 환경 · 실패 단계를 한 장의 기록으로 모읍니다. 연습용 예약 변경
        화면에서 직접 장벽을 찾고,{' '}
        <strong className="text-text-default">
          다른 사람이 같은 조건에서 같은 실패를 볼 수 있는 재현 기록
        </strong>
        을 작성합니다.
      </>
    ),
    readingTime: '읽고 실습하는 시간 약 25분',
    practices: '브라우저 실습 2개',
    learnHeading: '이 페이지에서 배우는 것',
    learnItems: [
      '재현 기록의 열한 항목에 각각 무엇을 적는지 알기',
      '준비된 화면을 키보드와 마우스로 써 보며 장벽을 직접 찾기',
      '예시 기록에서 처음 막힌 실패 단계를 고르는 방법 보기',
      '양식으로 자기 기록을 쓰고 복사하기',
      '점검 질문으로 약한 기록을 고치기',
    ],
  },
  en: {
    eyebrow: 'Chapter 01 · 5 of 5',
    title: 'Finding barriers on a prepared screen and recording reproduction steps',
    lead: (
      <>
        This page gathers the user, task, environment, and failure stage from chapter 01 into one
        record. You find barriers yourself on a practice rebooking screen and write{' '}
        <strong className="text-text-default">
          a reproduction record that lets someone else see the same failure under the same
          conditions
        </strong>
        .
      </>
    ),
    readingTime: 'About 25 min to read and practice',
    practices: '2 in-browser exercises',
    learnHeading: 'What you will learn',
    learnItems: [
      'Know what goes in each of the eleven record fields',
      'Find barriers yourself by using the prepared screen with keyboard and mouse',
      'See how an example record picks the first failure stage',
      'Write your own record with the form and copy it',
      'Fix weak records with review questions',
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
        <span className="flex items-center gap-xs">
          <FlaskConical className="h-3.5 w-3.5" aria-hidden="true" />
          {c.practices}
        </span>
        <ListenButton />
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
