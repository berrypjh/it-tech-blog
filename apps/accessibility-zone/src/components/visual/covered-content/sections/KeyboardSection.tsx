import type { Locale } from '@it-tech-blog/preferences';
import { Callout, DocH2 } from '@it-tech-blog/ui';

import { SourceTag } from '@/components/shared/SourceTag';
import { Steps } from '@/components/shared/Steps';

import { getToc } from '../toc';

const content = {
  ko: {
    intro: (
      <>
        실습의 키보드 스위치는 쓸 수 있는 높이를 줄이는 교육용 그림입니다. 실제 가상 키보드의 크기 ·
        viewport 동작은 운영체제와 브라우저에 따라 다르고, viewport 설정의{' '}
        <code>interactive-widget</code> 같은 값의 지원도 환경마다 확인해야 합니다.
      </>
    ),
    steps: [
      '실제 휴대폰에서 폼을 열고 첫 입력란을 눌러 키보드를 띄웁니다.',
      '입력하는 칸과 입력 글자가 보이는지 확인합니다.',
      '다음 입력란으로 이동하며 칸이 키보드나 고정 영역에 가리지 않는지 봅니다.',
      '키보드를 연 채로, 또는 닫은 뒤 제출 버튼에 닿아 누를 수 있는지 확인합니다.',
      '기기 · 운영체제 · 브라우저 · 버전과 함께 결과를 적습니다.',
    ],
    calloutTitle: '모형 결과를 실제 기기 결과로 적지 않습니다',
    callout: '실제 기기에서 하지 않았다면 판정 기록의 미확인 칸에 남깁니다.',
  },
  en: {
    intro: (
      <>
        The keyboard switch in the exercise is a teaching drawing that reduces the available height.
        Real virtual keyboard size and viewport behavior differ by operating system and browser, and
        support for viewport settings such as <code>interactive-widget</code> must be checked per
        environment.
      </>
    ),
    steps: [
      'Open the form on a real phone and tap the first input to raise the keyboard.',
      'Check that the field and the text being typed are visible.',
      'Move to the next input and see that fields are not hidden by the keyboard or fixed areas.',
      'With the keyboard open, or after closing it, check that you can reach and press the submit button.',
      'Record the result with the device, operating system, browser, and versions.',
    ],
    calloutTitle: 'Do not report model results as device results',
    callout:
      'If you did not test on a real device, leave it as unconfirmed in the judgment record.',
  },
};

export const KeyboardSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.keyboard.id}>
      <DocH2 {...toc.keyboard} />
      <p>{c.intro}</p>
      <p>
        <SourceTag locale={locale} id="observed" />
      </p>
      <Steps items={c.steps} />
      <Callout variant="pitfall" title={c.calloutTitle}>
        {c.callout}
      </Callout>
    </section>
  );
};
