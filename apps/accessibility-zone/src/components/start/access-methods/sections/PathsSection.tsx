import { Fragment } from 'react';

import type { Locale } from '@it-tech-blog/preferences';
import { DocH2 } from '@it-tech-blog/ui';

import { getToc } from '../toc';

const content = {
  ko: {
    intro: (
      <>
        <strong>보조기술</strong>(assistive technology, AT)은 장애가 있는 사람이 기기와 콘텐츠를
        쓰도록 돕는 소프트웨어나 하드웨어입니다. 화면 낭독기·화면 확대기·음성 인식·스위치가 그
        예이고, 키보드 조작처럼 별도 도구 없이 쓰는 전략도 있습니다. 어느 쪽이든 페이지를 쓰는
        경로는 다음 세 축으로 나눠 볼 수 있습니다.
      </>
    ),
    axes: [
      ['입력 방식', '명령을 넣는 방법입니다. 마우스·터치 대신 키, 말, 스위치 한두 개를 씁니다.'],
      [
        '출력 방식',
        '결과를 받는 방법입니다. 화면 전체 대신 음성, 점자, 확대된 일부 영역으로 받습니다.',
      ],
      [
        '탐색 단위',
        '한 번에 이동하는 단위입니다. 픽셀 위치 대신 포커스 가능한 요소, 제목, 랜드마크, 스캔 그룹 단위로 이동합니다.',
      ],
    ],
    outro:
      '세 축이 다르면 같은 화면에서도 막히는 곳이 다릅니다. 마우스로 문제없이 보이는 화면이라도, 키 이동 순서나 요소의 이름, 확대 후의 배치처럼 마우스 사용자에게는 보이지 않는 경로에서 장벽이 생깁니다.',
  },
  en: {
    intro: (
      <>
        <strong>Assistive technology</strong> (AT) is software or hardware that helps disabled
        people use devices and content: screen readers, screen magnifiers, speech recognition,
        switches. Some strategies, like operating by keyboard, need no extra tool. Either way, the
        path through a page can be split along three axes.
      </>
    ),
    axes: [
      [
        'Input',
        'How commands go in. Keys, speech, or one or two switches instead of mouse or touch.',
      ],
      [
        'Output',
        'How results come back. Speech, braille, or an enlarged part of the screen instead of the whole screen.',
      ],
      [
        'Unit of navigation',
        'What one move covers. Focusable elements, headings, landmarks, or scan groups instead of pixel positions.',
      ],
    ],
    outro:
      'When the axes differ, the same screen fails in different places. A screen that looks fine with a mouse can still have barriers on paths a mouse user never sees: key order, element names, layout after zoom.',
  },
};

export const PathsSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.paths.id}>
      <DocH2 {...toc.paths} />
      <p>{c.intro}</p>
      <dl className="my-lg grid gap-x-lg gap-y-sm sm:grid-cols-[8rem_1fr]">
        {c.axes.map(([term, detail]) => (
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
