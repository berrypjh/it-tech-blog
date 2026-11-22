import type { Locale } from '@it-tech-blog/preferences';
import { Callout, DocH2, DocTable } from '@it-tech-blog/ui';

import { PageLink } from '@/components/shared/PageLink';

import { getToc } from '../toc';

const content = {
  ko: {
    intro: (locale: Locale) => (
      <>
        CAPTCHA는 사람인지 확인하는 시험입니다. 인증 과정의 한 단계로 쓰이면 3.3.8의 검토 대상이
        되고, 그와 별개로 그림이나 소리로 된 시험은 비텍스트 콘텐츠이므로{' '}
        <PageLink locale={locale} id="image-alternatives" />의 1.1.1에도 걸립니다. 두 기준은 묻는
        것이 달라서 하나를 충족해도 다른 하나가 남습니다.
      </>
    ),
    caption: 'CAPTCHA를 검토하는 두 기준',
    head: ['기준', '묻는 것', '확인할 것'],
    rows: [
      [
        '1.1.1 Non-text Content (A)의 CAPTCHA 조항',
        '시험의 목적을 글로 알리고, 다른 감각을 쓰는 형태를 함께 제공하는가',
        '목적을 설명하는 대체 텍스트, 시각 이외의 형태',
      ],
      [
        '3.3.8 Accessible Authentication (AA)',
        '인증 단계에서 인지 기능 시험을 요구할 때 조건 가운데 하나가 있는가',
        '대체 방법 · 보조 메커니즘 · 객체 인식 · 개인 콘텐츠',
      ],
      [
        '3.3.9 Accessible Authentication (AAA)',
        '객체 인식과 개인 콘텐츠 없이도 조건이 남는가',
        '대체 방법 · 보조 메커니즘',
      ],
    ],
    noteTitle: '자동으로 위반이나 통과로 단정하지 않습니다',
    note: (
      <>
        뒤틀린 글자를 옮겨 적는 시험은 인지 기능 시험이고, 소리로 들려준 글자를 받아 적게 하는 것도
        전사이므로 대체 방법이 되지 못합니다. 반면 사물을 고르는 시험은 AA에서 허용되는 조건입니다.
        같은 CAPTCHA라도 인증 단계인지, 다른 경로가 있는지에 따라 판단이 달라지므로 화면만 보고
        결론을 내리지 않습니다.
      </>
    ),
  },
  en: {
    intro: (locale: Locale) => (
      <>
        A CAPTCHA is a test of being human. Used as a step of authentication, it falls under 3.3.8;
        separately, a test made of images or audio is non-text content, so 1.1.1 on{' '}
        <PageLink locale={locale} id="image-alternatives" /> applies too. The two criteria ask
        different things, so meeting one leaves the other.
      </>
    ),
    caption: 'Two criteria for reviewing a CAPTCHA',
    head: ['Criterion', 'What it asks', 'What to check'],
    rows: [
      [
        'The CAPTCHA clause of 1.1.1 Non-text Content (A)',
        'Is the purpose of the test described in text, with forms for other senses?',
        'A text alternative describing the purpose; a non-visual form',
      ],
      [
        '3.3.8 Accessible Authentication (AA)',
        'When an authentication step requires a cognitive function test, is one condition present?',
        'Alternative, mechanism, object recognition, personal content',
      ],
      [
        '3.3.9 Accessible Authentication (AAA)',
        'Does a condition remain without object recognition and personal content?',
        'Alternative, mechanism',
      ],
    ],
    noteTitle: 'Do not conclude automatic failure or pass',
    note: (
      <>
        Transcribing distorted characters is a cognitive function test, and writing down characters
        played as audio is transcription too, so it is not an alternative. Picking objects, on the
        other hand, is a condition allowed at AA. The judgment for the same CAPTCHA changes with
        whether it is an authentication step and whether another path exists, so do not conclude
        from the screen alone.
      </>
    ),
  },
};

export const CaptchaSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.captcha.id}>
      <DocH2 {...toc.captcha} />
      <p>{c.intro(locale)}</p>
      <DocTable caption={c.caption} head={c.head} rows={c.rows} />
      <Callout variant="pitfall" title={c.noteTitle}>
        {c.note}
      </Callout>
    </section>
  );
};
