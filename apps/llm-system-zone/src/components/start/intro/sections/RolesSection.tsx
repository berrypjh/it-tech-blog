import type { Locale } from '@it-tech-blog/preferences';
import { DocH2 } from '@it-tech-blog/ui';

import { RolesDiagram } from '../diagrams/RolesDiagram';
import { getToc } from '../toc';

const content = {
  ko: {
    intro:
      '"LLM을 쓴다"는 말은 세 가지를 뭉뚱그립니다. 각각이 무엇이고 무엇을 책임지는지 나누면 문제가 생겼을 때 어디를 볼지 정해집니다.',
    local: (
      <>
        모델을 원격 API로만 쓰는 것은 아닙니다. 모델 가중치를 직접 구동하는{' '}
        <strong>로컬 추론</strong>도 가능합니다. 이때 앱은 API 대신 로컬 런타임을 호출하지만, 앱이
        입력을 만들고 출력을 검증하고 동작을 실행한다는 역할 구분은 같습니다.
      </>
    ),
  },
  en: {
    intro:
      '"Using an LLM" lumps three things together. Separating what each is and what it is responsible for tells you where to look when something goes wrong.',
    local: (
      <>
        A model is not only used through a remote API. <strong>Local inference</strong>, running the
        model weights directly, is also possible. The app then calls a local runtime instead of an
        API, but the split of roles stays the same: the app builds the input, validates the output,
        and runs the action.
      </>
    ),
  },
};

export const RolesSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.roles.id}>
      <DocH2 {...toc.roles} />
      <p>{c.intro}</p>
      <RolesDiagram locale={locale} />
      <p>{c.local}</p>
    </section>
  );
};
