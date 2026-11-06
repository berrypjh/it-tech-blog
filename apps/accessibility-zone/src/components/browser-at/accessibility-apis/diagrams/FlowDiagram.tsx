import type { Locale } from '@it-tech-blog/preferences';

import { ArrowRight, FileCode, Globe, Headphones, MonitorCog } from 'lucide-react';

const steps = {
  ko: [
    { icon: FileCode, title: 'HTML 의미', detail: '요소 · 속성 · ARIA', who: '작성자' },
    { icon: Globe, title: '브라우저 정보', detail: '접근성 트리의 객체', who: '브라우저' },
    { icon: MonitorCog, title: '플랫폼 API', detail: '운영체제의 접근성 API', who: '운영체제' },
    { icon: Headphones, title: '보조기술 해석', detail: '읽기 · 탐색 · 조작', who: '보조기술' },
  ],
  en: [
    { icon: FileCode, title: 'HTML meaning', detail: 'Elements, attributes, ARIA', who: 'Author' },
    {
      icon: Globe,
      title: 'Browser information',
      detail: 'Objects in the accessibility tree',
      who: 'Browser',
    },
    { icon: MonitorCog, title: 'Platform API', detail: 'The OS accessibility API', who: 'OS' },
    {
      icon: Headphones,
      title: 'AT interpretation',
      detail: 'Reading, navigating, operating',
      who: 'AT',
    },
  ],
};

const caption = {
  ko: '작성자가 쓴 HTML 의미를 브라우저가 접근성 객체로 만들고, 운영체제의 접근성 API로 내보내면, 보조기술이 그 정보를 해석합니다. 학습용으로 단순화한 도식입니다.',
  en: 'The browser turns the HTML meaning an author wrote into accessible objects and exposes them through the OS accessibility API, and assistive technology interprets that information. A simplified teaching diagram.',
};

/** 네 단계 흐름 도식. 순서가 뜻이므로 번호 목록으로 두고, 화살표는 장식이다. */
export const FlowDiagram = ({ locale }: { locale: Locale }) => (
  <figure className="my-xl">
    <ol className="flex flex-col gap-sm md:flex-row md:items-stretch">
      {steps[locale].map((step, i) => (
        <li key={step.title} className="flex flex-1 items-center gap-sm">
          {i > 0 && (
            <ArrowRight
              className="hidden h-5 w-5 shrink-0 text-text-light md:block"
              aria-hidden="true"
            />
          )}
          <div className="flex h-full flex-1 flex-col gap-xs rounded-md border border-stroke-light bg-background-default p-md">
            <span className="flex items-center gap-sm text-xsm font-bold text-text-default">
              <step.icon className="h-4 w-4 shrink-0 text-text-primary" aria-hidden="true" />
              {i + 1}. {step.title}
            </span>
            <span className="text-xxsm text-text-light">{step.detail}</span>
            <span className="text-xxsm font-semiBold text-text-primary">{step.who}</span>
          </div>
        </li>
      ))}
    </ol>
    <figcaption className="mt-sm text-xxsm text-text-light">{caption[locale]}</figcaption>
  </figure>
);
