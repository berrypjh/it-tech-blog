'use client';

import { useState } from 'react';

import { PracticeFrame } from '@it-tech-blog/ui';
import { useLang } from '@it-tech-blog/utils';

import { Button } from '@berrypjh/react-ui';

type Heading = { level: number; text: string };
type Landmark = { tag: string; role: string; name: string };
type Structure = { title: string; lang: string; headings: Heading[]; landmarks: Landmark[] };

const content = {
  ko: {
    practice: '실습',
    instructions: '버튼을 누르면 지금 열려 있는 이 페이지의 DOM에서 구조를 읽습니다.',
    read: '이 페이지 구조 읽기',
    empty: '아직 읽지 않았습니다.',
    title: '페이지 제목',
    lang: 'html의 lang',
    none: '(없음)',
    headings: (n: number) => `제목 ${n}개`,
    landmarks: (n: number) => `랜드마크 ${n}개`,
    unnamed: '이름 없음',
    status: (n: number, h: number, l: number) =>
      `${n}번째 읽기: 제목 ${h}개, 랜드마크 ${l}개를 읽었습니다.`,
    note: '랜드마크는 표의 조건을 단순화해 계산한 교육용 결과입니다. 실제 접근성 트리와 이름은 개발자 도구의 Accessibility 탭에서 확인하세요.',
  },
  en: {
    practice: 'Exercise',
    instructions: 'Press the button to read the structure from the DOM of this page as it is now.',
    read: 'Read this page’s structure',
    empty: 'Not read yet.',
    title: 'Page title',
    lang: 'lang on html',
    none: '(none)',
    headings: (n: number) => `${n} headings`,
    landmarks: (n: number) => `${n} landmarks`,
    unnamed: 'no name',
    status: (n: number, h: number, l: number) => `Read #${n}: ${h} headings and ${l} landmarks.`,
    note: 'Landmarks are a teaching approximation computed from the simplified conditions in the table. Check the real accessibility tree and names in the accessibility panel of developer tools.',
  },
};

const SCOPING = 'article, aside, main, nav, section';

/** aria-labelledby가 가리키는 글자나 aria-label. 이름 계산 전체가 아니라 이 실습에 필요한 만큼만 본다. */
const nameOf = (el: Element) => {
  const ids = el.getAttribute('aria-labelledby');
  if (ids) {
    return ids
      .split(/\s+/)
      .map((id) => document.getElementById(id)?.textContent?.trim() ?? '')
      .join(' ');
  }
  return el.getAttribute('aria-label') ?? '';
};

/** 표에 정리한 조건으로 요소의 랜드마크 역할을 정한다. 랜드마크가 아니면 null. */
const landmarkRole = (el: Element): string | null => {
  const explicit = el.getAttribute('role');
  // region · form 역할은 이름이 있어야 랜드마크가 된다.
  if (explicit) return ['region', 'form'].includes(explicit) && !nameOf(el) ? null : explicit;
  const scoped = el.parentElement?.closest(SCOPING);
  switch (el.tagName) {
    case 'HEADER':
      return scoped ? null : 'banner';
    case 'FOOTER':
      return scoped ? null : 'contentinfo';
    case 'NAV':
      return 'navigation';
    case 'MAIN':
      return 'main';
    case 'ASIDE':
      return !scoped || scoped.tagName === 'MAIN' || nameOf(el) ? 'complementary' : null;
    case 'SECTION':
      return nameOf(el) ? 'region' : null;
    case 'FORM':
      return nameOf(el) ? 'form' : null;
    case 'SEARCH':
      return 'search';
    default:
      return null;
  }
};

const LANDMARK_ROLES = [
  'banner',
  'navigation',
  'main',
  'contentinfo',
  'complementary',
  'region',
  'form',
  'search',
];

/** display: none 등으로 그려지지 않는 요소는 접근성 트리에서도 빠지므로 목록에서 뺀다. */
const rendered = (el: Element) => el.checkVisibility();

/** heading 단계만큼 들여쓴다. */
const indent = ['', 'ps-lg', 'ps-2xl', 'ps-3xl', 'ps-4xl', 'ps-5xl'];

const readStructure = (): Structure => ({
  title: document.title,
  lang: document.documentElement.getAttribute('lang') ?? '',
  headings: [...document.querySelectorAll('h1, h2, h3, h4, h5, h6')].filter(rendered).map((el) => ({
    level: Number(el.tagName[1]),
    text: el.textContent?.trim() ?? '',
  })),
  landmarks: [
    ...document.querySelectorAll('header, footer, nav, main, aside, section, form, search, [role]'),
  ]
    .filter(rendered)
    .map((el) => ({ el, role: landmarkRole(el) }))
    .filter((item): item is { el: Element; role: string } =>
      LANDMARK_ROLES.includes(item.role ?? ''),
    )
    .map(({ el, role }) => ({ tag: el.tagName.toLowerCase(), role, name: nameOf(el) })),
});

/** 지금 열린 페이지의 제목 · 언어 · heading · 랜드마크를 DOM에서 읽어 보여주는 실습. */
export const StructureDemo = () => {
  const c = useLang(content);
  const [structure, setStructure] = useState<Structure | null>(null);
  const [status, setStatus] = useState('');
  const [reads, setReads] = useState(0);

  const read = () => {
    const next = readStructure();
    setStructure(next);
    setReads(reads + 1);
    setStatus(c.status(reads + 1, next.headings.length, next.landmarks.length));
  };

  return (
    <PracticeFrame label={c.practice} instructions={c.instructions}>
      <div>
        <Button type="button" variant="outlined" size="sm" onClick={read}>
          {c.read}
        </Button>
      </div>

      {structure ? (
        <div className="flex flex-col gap-lg text-xsm">
          <dl className="grid gap-x-lg gap-y-xs sm:grid-cols-[8rem_1fr]">
            <dt className="font-semiBold text-text-default">{c.title}</dt>
            <dd className="text-text-light">{structure.title || c.none}</dd>
            <dt className="font-semiBold text-text-default">{c.lang}</dt>
            <dd className="font-mono text-text-light">{structure.lang || c.none}</dd>
          </dl>

          <div>
            <p className="mb-xs font-semiBold text-text-default">
              {c.headings(structure.headings.length)}
            </p>
            <ul className="flex flex-col gap-2xs">
              {structure.headings.map((h, i) => (
                <li key={i} className={`text-text-light ${indent[h.level - 1]}`}>
                  <span className="font-mono text-text-primary">h{h.level}</span> {h.text}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-xs font-semiBold text-text-default">
              {c.landmarks(structure.landmarks.length)}
            </p>
            <ul className="flex flex-col gap-2xs">
              {structure.landmarks.map((l, i) => (
                <li key={i} className="text-text-light">
                  <span className="font-mono text-text-primary">{l.role}</span> &lt;{l.tag}&gt; —{' '}
                  {l.name || c.unnamed}
                </li>
              ))}
            </ul>
          </div>
          <p className="text-xxsm text-text-light">{c.note}</p>
        </div>
      ) : (
        <p className="text-xsm text-text-light">{c.empty}</p>
      )}

      <p role="status" className="sr-only">
        {status}
      </p>
    </PracticeFrame>
  );
};
