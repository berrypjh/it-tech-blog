import type { Locale } from '@it-tech-blog/preferences';

import { PracticeFrame } from './PracticeFrame';

const content = {
  ko: {
    practice: '실습',
    instructions: (
      <>
        두 칸에 이메일을 입력해 보세요. 입력한 뒤에도 무엇을 적는 칸인지 알 수 있나요? 오른쪽은{' '}
        <strong>라벨 글자</strong>를 클릭해 보세요.
      </>
    ),
    placeholderOnly: 'placeholder만',
    email: '이메일',
  },
  en: {
    practice: 'Exercise',
    instructions: (
      <>
        Type an email into both fields. After typing, can you still tell what each field is for? On
        the right, click the <strong>label text</strong>.
      </>
    ),
    placeholderOnly: 'placeholder only',
    email: 'Email',
  },
};

const inputClass =
  'w-full rounded-sm border border-stroke-light bg-background-surface px-md py-sm text-xsm';

/** placeholder만 있는 입력과 label이 연결된 입력을 비교하는 실습. */
export const LabelDemo = ({ locale }: { locale: Locale }) => {
  const c = content[locale];

  return (
    <PracticeFrame label={c.practice} instructions={c.instructions}>
      <div className="grid gap-md sm:grid-cols-2">
        <div className="rounded-sm border border-stroke-light p-md">
          <p className="mb-sm font-mono text-xxsm text-text-error">{c.placeholderOnly}</p>
          <input type="email" placeholder={c.email} className={inputClass} />
        </div>
        <div className="rounded-sm border border-stroke-light p-md">
          <p className="mb-sm font-mono text-xxsm text-text-success">label + input</p>
          <label htmlFor="intro-demo-email" className="mb-xs block cursor-pointer text-xsm">
            {c.email}
          </label>
          <input id="intro-demo-email" type="email" className={inputClass} />
        </div>
      </div>
    </PracticeFrame>
  );
};
