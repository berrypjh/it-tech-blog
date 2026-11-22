import type { Locale } from '@it-tech-blog/preferences';
import { Callout, DocH2 } from '@it-tech-blog/ui';

import { SourceTag } from '@/components/shared/SourceTag';

import { AuthPathsDemo } from '../demos/AuthPathsDemo';
import { getToc } from '../toc';

const content = {
  ko: {
    intro:
      '인증을 흉내 낸 모형입니다. 실제 계정 · 문자 메시지 · 외부 인증은 없고, 화면에 적힌 합성 값과 시험용 코드만 맞는 값입니다. 값은 이 페이지의 메모리에서만 비교하고 전송 · 저장 · 기록하지 않습니다. 실제로 쓰는 비밀번호는 넣지 마세요.',
    limitTitle: '이 실습이 확인하지 않는 것',
    limit:
      '비밀번호 관리자가 실제로 칸을 채우는지, 문자 메시지의 코드가 자동으로 제안되는지, 다른 기기에서 복사한 값을 붙여 넣을 수 있는지는 쓰는 브라우저와 기기에서 직접 확인해야 합니다. 이 페이지가 읽는 것은 속성과 이벤트뿐입니다.',
  },
  en: {
    intro:
      'This is a model that imitates authentication. There is no real account, text message, or external authentication; only the synthetic values and test code written on the screen are correct. Values are compared in this page’s memory only and are not sent, stored, or logged. Do not enter a password you really use.',
    limitTitle: 'What this exercise does not verify',
    limit:
      'Whether a password manager actually fills the fields, whether a code from a text message is suggested automatically, and whether a value copied on another device can be pasted must be checked on the browser and device in use. This page reads only attributes and events.',
  },
};

export const PracticeSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.practice.id}>
      <DocH2 {...toc.practice} />
      <p className="flex flex-wrap items-center gap-sm">
        <SourceTag locale={locale} id="model" />
      </p>
      <p>{c.intro}</p>
      <AuthPathsDemo />
      <Callout variant="pitfall" title={c.limitTitle}>
        {c.limit}
      </Callout>
    </section>
  );
};
