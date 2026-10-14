import Link from 'next/link';

import type { Locale } from '@it-tech-blog/preferences';
import { DocH2 } from '@it-tech-blog/ui';

import { navData } from '@/data';

import { getToc } from '../toc';

const roles: Record<string, { ko: string; en: string }> = {
  intro: { ko: '시스템 지도와 책임', en: 'The system map and responsibilities' },
  'software-differences': { ko: '출력 특성과 검증', en: 'Output characteristics and validation' },
  'ai-concepts': { ko: '용어와 분류 관계', en: 'Terms and classification relations' },
  'when-to-use-llms': { ko: '문제에 맞는 기술 선택', en: 'Choosing technology for the problem' },
  'failure-diagnosis': { ko: '증거를 통한 실패 진단', en: 'Diagnosing failure through evidence' },
  'success-criteria': { ko: '성공 기준과 측정', en: 'Success criteria and measurement' },
  'notebook-to-service': {
    ko: '실험 결과의 계약 이전',
    en: 'Moving experiment results into a contract',
  },
};

const content = {
  ko: {
    intro:
      '01장은 하나의 흐름으로 이어집니다. 시스템의 구성 요소를 나누고(01-01), 출력의 특성을 이해하고(01-02), 용어를 구별하고(01-03), 기술을 고르고(01-04), 실패를 진단하고(01-05), 성공 기준을 정의하고(01-06), 실험 결과를 서비스 계약으로 옮깁니다(01-07).',
    head: '01장의 일곱 페이지',
    closing:
      '일곱 페이지를 관통하는 질문은 하나입니다. 모델이 응답을 낸 것과 사용자의 일이 끝난 것은 다르며, 그 사이를 책임지는 것은 코드, 검증, 기준, 기록입니다.',
  },
  en: {
    intro:
      'Chapter 01 follows one thread. Divide the system’s components (01-01), understand output characteristics (01-02), tell terms apart (01-03), choose technology (01-04), diagnose failures (01-05), define success criteria (01-06), and move experiment results into a service contract (01-07).',
    head: 'The seven pages of chapter 01',
    closing:
      'One question runs through the seven pages. A model giving a response and a user’s task being finished are different, and what is responsible for the space between is code, validation, criteria, and records.',
  },
};

export const WrapupSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);
  const pages = navData[locale].flatMap((group) => group.items);

  return (
    <section aria-labelledby={toc.wrapup.id}>
      <DocH2 {...toc.wrapup} />
      <p>{c.intro}</p>
      <p className="mt-lg font-semiBold text-text-default">{c.head}</p>
      <ol className="mt-sm flex flex-col gap-xs">
        {pages.map((page, i) => (
          <li key={page.id} className="flex gap-md text-xsm">
            <span className="font-mono text-text-light">01-{String(i + 1).padStart(2, '0')}</span>
            <span>
              <Link href={`/${page.id}`}>{page.label}</Link>
              <span className="text-text-light"> — {roles[page.id]?.[locale]}</span>
            </span>
          </li>
        ))}
      </ol>
      <p className="mt-lg">{c.closing}</p>
    </section>
  );
};
