import type { Locale } from '@it-tech-blog/preferences';
import { DocH2, DocTable } from '@it-tech-blog/ui';

import { KWCAG_CITE, KWCAG_REGISTRY } from '@/components/shared/kwcag';
import { NormativeQuote } from '@/components/shared/NormativeQuote';
import { wcag22 } from '@/components/shared/wcag';

import { getToc } from '../toc';

const content = {
  ko: {
    intro: (
      <>두 문서 모두 4.5 대 1을 기본값으로 둡니다. 차이는 낮출 수 있는 조건과 예외에 있습니다.</>
    ),
    wcagCite: 'WCAG 2.2 (W3C Recommendation, 2024-12-12) — 1.4.3',
    caption: '명도 대비 항목의 비교',
    head: ['구분', 'KWCAG 2.2 — 5.4.3', 'WCAG 2.2 — 1.4.3 (AA)'],
    rows: [
      ['기본', '텍스트 콘텐츠와 배경 4.5 대 1 이상', '텍스트와 텍스트 이미지 4.5:1 이상'],
      [
        '큰 글자',
        '18pt 이상 또는 14pt 이상 굵은 글자는 3 대 1까지',
        '큰 글자(large-scale)는 3:1 이상. 크기는 용어 정의를 따름',
      ],
      ['화면 확대', '화면 확대가 가능하도록 구현한 텍스트 콘텐츠는 3 대 1까지', '해당 조건 없음'],
      [
        '예외',
        '로고, 장식 목적, 초점을 받으면 대비가 커지는 콘텐츠',
        '비활성 컴포넌트 · 순수 장식 · 보이지 않음 · 다른 시각 요소가 많은 그림의 일부, 로고',
      ],
      [
        '확인 증거',
        '글자와 배경의 대비값, 글자 크기 · 굵기, 확대 가능 여부',
        '글자와 배경의 대비값, 글자 크기 · 굵기, 예외 해당 여부',
      ],
    ],
    after: (
      <>
        같은 화면에서 &quot;확대 가능한 콘텐츠라 3 대 1이면 된다&quot;는 판단은 KWCAG 5.4.3의 조건을
        근거로 할 수 있지만, WCAG 1.4.3에는 그 조건이 없습니다. 어느 문서로 판정하는지 먼저 정해야
        하는 이유입니다.
      </>
    ),
  },
  en: {
    intro: (
      <>
        Both documents use 4.5 to 1 as the default. The differences are in the conditions for
        lowering it and the exceptions.
      </>
    ),
    wcagCite: 'WCAG 2.2 (W3C Recommendation, 2024-12-12) — 1.4.3',
    caption: 'Comparing the contrast items',
    head: ['Aspect', 'KWCAG 2.2 — 5.4.3', 'WCAG 2.2 — 1.4.3 (AA)'],
    rows: [
      [
        'Default',
        'Text content against background at least 4.5 to 1',
        'Text and images of text at least 4.5:1',
      ],
      [
        'Large text',
        'Text 18pt or more, or bold 14pt or more, may go down to 3 to 1',
        'Large-scale text at least 3:1; size follows the term’s definition',
      ],
      [
        'Zoom',
        'Text content implemented so the screen can be zoomed may go down to 3 to 1',
        'No such condition',
      ],
      [
        'Exceptions',
        'Logos, decorative content, content whose contrast increases on focus',
        'Inactive components, pure decoration, not visible, part of a picture with significant other visual content; logotypes',
      ],
      [
        'Evidence',
        'Contrast value of text and background, text size and weight, whether zoom is possible',
        'Contrast value of text and background, text size and weight, whether an exception applies',
      ],
    ],
    after: (
      <>
        On the same screen, judging &quot;3 to 1 is enough because the content can be zoomed&quot;
        can rest on a condition in KWCAG 5.4.3, but WCAG 1.4.3 has no such condition. This is why
        you decide first which document you are judging against.
      </>
    ),
  },
};

export const ContrastSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.contrast.id}>
      <DocH2 {...toc.contrast} />
      <p>{c.intro}</p>
      <NormativeQuote locale={locale} href={KWCAG_REGISTRY} cite={KWCAG_CITE[locale]} lang="ko">
        <p>
          <strong>5.4.3. (텍스트 콘텐츠의 명도 대비)</strong> 텍스트 콘텐츠와 배경 간의 명도 대비는
          4.5 대 1 이상이어야 한다.
        </p>
        <p className="mt-xs">
          웹 페이지에서 보이는 텍스트 콘텐츠(텍스트 및 텍스트 이미지)와 배경 간의 충분한 대비를
          제공하여, 저시력장애인, 색각장애인, 고령자 등도 콘텐츠를 인식할 수 있도록 제공해야 한다.
          다만, 로고, 장식 목적의 콘텐츠, 마우스나 키보드를 활용하여 초점을 받았을 때 명도 대비가
          커지는 콘텐츠 등은 예외로 한다.
        </p>
        <p className="mt-xs">
          콘텐츠의 명도 대비: 웹 페이지가 제공하는 텍스트 콘텐츠(텍스트 및 텍스트 이미지)와 배경
          간의 명도 대비는 4.5 대 1 이상이어야 한다.
        </p>
        <p className="mt-xs">
          폰트 크기에 따른 명도 대비: 텍스트 콘텐츠를 구성하고 있는 텍스트 폰트를 18pt 이상 또는
          14pt 이상의 굵은 폰트를 사용하는 경우, 명도 대비를 3 대 1까지 낮출 수 있다.
        </p>
        <p className="mt-xs">
          화면 확대가 가능한 콘텐츠: 화면 확대가 가능하도록 구현한 텍스트 콘텐츠(텍스트 및 텍스트
          이미지)의 명도 대비는 3 대 1까지 낮출 수 있다.
        </p>
      </NormativeQuote>
      <NormativeQuote locale={locale} href={wcag22('contrast-minimum')} cite={c.wcagCite}>
        <p>
          <strong>Success Criterion 1.4.3 Contrast (Minimum)</strong> (Level AA)
        </p>
        <p>
          The visual presentation of text and images of text has a contrast ratio of at least 4.5:1,
          except for the following: Large Text …; Incidental …; Logotypes …
        </p>
      </NormativeQuote>
      <DocTable caption={c.caption} head={c.head} rows={c.rows} />
      <p>{c.after}</p>
    </section>
  );
};
