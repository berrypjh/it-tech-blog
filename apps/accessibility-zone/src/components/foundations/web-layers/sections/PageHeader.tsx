import type { Locale } from '@it-tech-blog/preferences';
import { DocPageHeader, type HeaderContent } from '@it-tech-blog/ui';

import { narration } from '../narration';

const content: Record<Locale, HeaderContent> = {
  ko: {
    eyebrow: '02장 · 1 / 7',
    title: 'HTML·DOM·CSS·JavaScript가 맡는 책임 구분하기',
    lead: (
      <>
        버튼 하나가 동작하지 않을 때 원인은 마크업에도, 스타일에도, 스크립트에도 있을 수 있습니다.
        이 페이지는 웹 페이지를 이루는 네 층이{' '}
        <strong className="text-text-default">각각 무엇을 책임지는지</strong> 나누고, 같은 과업에서
        층마다 어떤 결함이 생기는지 봅니다.
      </>
    ),
    readingTime: '읽는 시간 약 10분',
    practices: '브라우저 실습 1개',
    learnItems: [
      'HTML 소스와 브라우저가 만든 DOM 구분하기',
      'CSS가 맡는 표현과 JavaScript가 맡는 상태 · 이벤트 처리 나누기',
      '같은 과업에서 층마다 다른 결함을 구분하고 고칠 층 정하기',
    ],
  },
  en: {
    eyebrow: 'Chapter 02 · 1 of 7',
    title: 'What HTML, the DOM, CSS, and JavaScript are each responsible for',
    lead: (
      <>
        When a button does not work, the cause can be in the markup, the styles, or the script. This
        page separates{' '}
        <strong className="text-text-default">
          what each of the four layers is responsible for
        </strong>{' '}
        and looks at the different defect each layer can cause in the same task.
      </>
    ),
    readingTime: 'About 10 min read',
    practices: '1 in-browser exercise',
    learnItems: [
      'How HTML source differs from the DOM the browser builds',
      'Presentation belongs to CSS; state and event handling belong to JavaScript',
      'How to tell the layers’ defects apart in one task and pick the layer to fix',
    ],
  },
};

export const PageHeader = ({ locale }: { locale: Locale }) => (
  <DocPageHeader locale={locale} content={content[locale]} script={narration} />
);
