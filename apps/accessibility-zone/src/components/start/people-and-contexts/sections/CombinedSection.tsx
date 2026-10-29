import { Fragment } from 'react';

import type { Locale } from '@it-tech-blog/preferences';
import { DocH2 } from '@it-tech-blog/ui';

import { getToc } from '../toc';

const content = {
  ko: {
    intro:
      '실제 사용은 "특성 하나 + 도구 하나"로 끝나지 않습니다. 여러 특성이 함께 있고, 그 위에 기기·장소·네트워크가 더해집니다. 한 요구를 풀면 다른 요구가 생기기도 합니다.',
    cases: [
      [
        '농 + 저시력',
        '자막이 소리 정보를 대신하지만, 글자 크기와 색을 바꿀 수 없으면 자막을 읽지 못합니다. WAI가 여러 장애가 겹친 경우로 드는 예입니다.',
      ],
      [
        '저시력 + 손 떨림',
        '화면을 확대하면 버튼이 커져 누르기 쉬워지지만, 버튼이 화면 밖으로 밀려나 찾으려면 스크롤이 늘어납니다. 확대가 조작은 돕고 탐색은 어렵게 만듭니다.',
      ],
      [
        '농 + 수어가 첫 언어',
        '자막은 글로 쓴 언어라 수어가 첫 언어인 사람에게는 읽기 부담이 클 수 있습니다. 자막이 있어도 길고 전문 용어가 많은 문장은 이해를 막습니다.',
      ],
      [
        '화면 낭독기 + 휴대폰 + 이동 중 + 느린 네트워크',
        '한 손으로 제스처를 쓰고 소음 속에서 듣습니다. 늦게 뜨는 콘텐츠가 읽던 위치를 밀어내면 읽던 곳을 다시 찾아야 합니다.',
      ],
    ],
    outro:
      '환경은 사용자를 설명하는 배경이 아니라 장벽이 생기는 조건입니다. 같은 화면도 확대율, 기기, 시간 제한이 바뀌면 다른 단계에서 막힙니다.',
  },
  en: {
    intro:
      'Real use is never "one trait + one tool". Several traits come together, and device, place, and network are layered on top. Solving one need can create another.',
    cases: [
      [
        'Deaf + low vision',
        'Captions replace the audio, but if their size and color cannot be changed, the captions cannot be read. WAI gives this as an example of multiple disabilities.',
      ],
      [
        'Low vision + tremor',
        'Zooming makes buttons larger and easier to press, but pushes them off screen so more scrolling is needed to find them. Zoom helps operation and makes navigation harder.',
      ],
      [
        'Deaf + sign language as first language',
        'Captions are written language, so for someone whose first language is sign language they can take real effort to read. Even with captions, long sentences full of jargon block understanding.',
      ],
      [
        'Screen reader + phone + on the move + slow network',
        'Gestures with one hand, listening in noise. When late-loading content pushes the reading position away, they have to find their place again.',
      ],
    ],
    outro:
      'Environment is not background that describes the user; it is a condition under which a barrier occurs. The same screen fails at a different stage when zoom, device, or time limits change.',
  },
};

export const CombinedSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.combined.id}>
      <DocH2 {...toc.combined} />
      <p>{c.intro}</p>
      <dl className="my-lg grid gap-x-lg gap-y-md sm:grid-cols-[12rem_1fr]">
        {c.cases.map(([term, detail]) => (
          <Fragment key={term}>
            <dt className="font-semiBold text-text-default">{term}</dt>
            <dd className="text-text-light">{detail}</dd>
          </Fragment>
        ))}
      </dl>
      <p>{c.outro}</p>
    </section>
  );
};
