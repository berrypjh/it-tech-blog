import type { Locale } from '@it-tech-blog/preferences';
import { Callout, DocH2 } from '@it-tech-blog/ui';

import { ThemedFigure } from '@/components/shared/ThemedFigure';

import { ContactFormDemo } from '../demos/ContactFormDemo';
import formAnatomyDark from '../images/form-anatomy-dark.webp';
import formAnatomyLight from '../images/form-anatomy-light.webp';
import { getToc } from '../toc';

const content = {
  ko: {
    figure: {
      alt: '라벨 막대에서 나온 선이 아래 입력 칸 테두리에 닿고, 테두리 위에 제목이 앉은 라디오 버튼 묶음에서는 첫 번째만 선택되어 있습니다. 입력 칸과 선택된 라디오에서 나온 점선 화살표 두 개가 오른쪽의 값 목록 두 줄로 이어집니다.',
      caption:
        'label은 입력 칸에, legend는 묶음에 이름을 줍니다. 제출되는 값은 입력 칸의 값과 선택된 라디오 하나의 값입니다.',
    },
    intro: (
      <>
        앞의 세 가지를 모두 적용한 문의 폼입니다. 라벨은 <code>for</code> · <code>id</code>와
        감싸기를 모두 쓰고, 문의 종류는 <code>fieldset</code>으로 묶었습니다. 검사는 브라우저 기본
        검사를 그대로 씁니다.
      </>
    ),
    demoLead:
      '직접 빈 채로 문의 보내기를 눌러 보면 브라우저 기본 검사가 어떻게 동작하는지 보입니다. 모두 채워 다시 보내도 실제로 전송되지는 않습니다.',
    observe: (
      <>
        빈 채로 보내면 브라우저가 첫 번째 빈 칸에 포커스를 옮기고 안내를 보여 줍니다. 이 안내의 문구
        · 위치 · 보조기술이 읽는 방식은 브라우저마다 다릅니다. &quot;입력 칸의 연결 보기&quot;를
        누르면 칸마다 브라우저가 계산한 <code>input.labels</code>의 라벨과, 가장 가까운 fieldset의
        legend 글자가 나오는데, id는 <code>useId</code>가 만든 값입니다.
      </>
    ),
    limitsTitle: '기본 폼만으로는 오류와 제출 결과를 충분히 알리지 못합니다',
    limits: (
      <>
        이 문의 폼은 기본 폼까지만 다룹니다. 오류를 칸 옆 글자로 알리고 고칠 방법을 안내하는 일,
        제출 결과를 알리는 일은 브라우저 기본 검사만으로는 충분하지 않아 별도의 설계가 필요하며, 뒤
        장에서 다룹니다.
      </>
    ),
  },
  en: {
    figure: {
      alt: 'A line from a label bar touches the border of the input below. In a radio group whose title sits on its border, only the first option is selected. Two dotted arrows lead from the input and the selected radio to two rows of values on the right.',
      caption:
        'label names the input and legend names the group. What gets submitted is the input value and the value of the one selected radio.',
    },
    intro: (
      <>
        A contact form applying all three. Labels use both <code>for</code>/<code>id</code> and
        wrapping, and the topic options are grouped with <code>fieldset</code>. Validation uses the
        browser&apos;s built-in check as is.
      </>
    ),
    demoLead:
      'Press Send inquiry with the form empty and you see how the browser’s built-in check behaves. Fill it in and send again; nothing is actually sent.',
    observe: (
      <>
        If you send it empty, the browser moves focus to the first empty field and shows a message.
        That message&apos;s wording, position, and how assistive technology reads it differ by
        browser. &quot;Show each field&apos;s associations&quot; lists, for each field, the label
        the browser computed in <code>input.labels</code> and the legend text of the nearest
        fieldset; the ids are values made by <code>useId</code>.
      </>
    ),
    limitsTitle: 'A basic form alone cannot fully report errors and submission results',
    limits: (
      <>
        This contact form covers a basic form only. Showing errors as text next to the field with
        how to fix them, and announcing the result of a submission, need their own design because
        the browser&apos;s built-in check is not enough; they continue in a later chapter on forms.
      </>
    ),
  },
};

export const ContactFormSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.contactForm.id}>
      <DocH2 {...toc.contactForm} />
      <p>{c.intro}</p>
      <ThemedFigure light={formAnatomyLight} dark={formAnatomyDark} {...c.figure} />
      <p>{c.demoLead}</p>
      <ContactFormDemo />
      <p>{c.observe}</p>
      <Callout variant="note" title={c.limitsTitle}>
        <p>{c.limits}</p>
      </Callout>
    </section>
  );
};
