'use client';

import { useEffect, useId, useRef, useState } from 'react';

import { PracticeFrame } from '@it-tech-blog/ui';
import { useLang } from '@it-tech-blog/utils';

import { Button } from '@berrypjh/react-ui';

import { Field } from '@/components/forms/shared/Field';
import { ObservedPanel } from '@/components/keyboard/shared/ObservedPanel';
import { useActiveElement } from '@/components/keyboard/shared/useActiveElement';

/** 화면에 그대로 보여 주는 합성 값. 실제 계정이나 서비스와 무관하다. */
const SYNTHETIC = { user: 'learner-11', pass: 'Sample-Pass-2026', code: '246810' };

type Stage = 'credentials' | 'code' | 'done';
type Path = 'credentials' | 'alternative';

const content = {
  ko: {
    practice: '실습',
    instructions:
      '합성 값을 복사해 붙여 넣으며 두 단계를 지나고, 처음부터 다시 시작해 대체 경로도 지나 보세요. 실제로 쓰는 비밀번호는 넣지 마세요. 아무것도 전송 · 저장하지 않습니다.',
    synthetic: '시험용 합성 값 (실제 계정 아님)',
    user: '아이디',
    pass: '비밀번호',
    code: '인증 코드',
    form: '모형 인증 (교육 예시)',
    stages: { credentials: '1 / 2단계: 아이디와 비밀번호', code: '2 / 2단계: 인증 코드' },
    passHint: '붙여 넣거나 비밀번호 관리자로 채울 수 있습니다.',
    codeHint: '6자리 숫자입니다. 시험용 코드를 복사해 붙여 넣을 수 있습니다.',
    show: '비밀번호 보기',
    next: '다음',
    verify: '코드 확인',
    alternative: '이메일 링크로 계속 (모형)',
    error: '오류',
    wrongCredentials:
      '아이디 또는 비밀번호가 화면의 합성 값과 다릅니다. 합성 값을 복사해 붙여 넣으세요.',
    wrongCode: '코드가 시험용 코드와 다릅니다. 시험용 코드를 복사해 붙여 넣으세요.',
    doneTitle: '모형 인증을 통과했습니다',
    paths: {
      credentials: '지난 경로: 비밀번호와 인증 코드',
      alternative: '지난 경로: 이메일 링크 (기억이나 전사 없이 계속)',
    },
    doneNote: '실제 메일이나 문자는 보내지 않았고, 값은 전송 · 저장하지 않았습니다.',
    restart: '처음부터 다시',
    observed: '페이지가 읽은 DOM과 이벤트',
    stage: '현재 단계',
    paste: '붙여넣기 이벤트',
    pasteValue: (n: number, blocked: boolean) =>
      `${n}회 · 페이지가 취소한 적 ${blocked ? '있음' : '없음'}`,
    tokens: '칸의 autocomplete 값',
    passType: '비밀번호 칸의 type',
    focus: 'document.activeElement',
    none: '없음',
    done: '완료',
  },
  en: {
    practice: 'Exercise',
    instructions:
      'Copy and paste the synthetic values to pass both steps, then start over and take the alternative path too. Do not enter a password you really use. Nothing is sent or stored.',
    synthetic: 'Synthetic test values (not a real account)',
    user: 'Username',
    pass: 'Password',
    code: 'Verification code',
    form: 'Model authentication (teaching example)',
    stages: {
      credentials: 'Step 1 of 2: Username and password',
      code: 'Step 2 of 2: Verification code',
    },
    passHint: 'You can paste it or fill it with a password manager.',
    codeHint: 'Six digits. You can copy and paste the test code.',
    show: 'Show password',
    next: 'Next',
    verify: 'Verify code',
    alternative: 'Continue with an email link (model)',
    error: 'Error',
    wrongCredentials:
      'The username or password differs from the synthetic values on screen. Copy and paste the synthetic values.',
    wrongCode: 'The code differs from the test code. Copy and paste the test code.',
    doneTitle: 'Model authentication passed',
    paths: {
      credentials: 'Path taken: password and verification code',
      alternative: 'Path taken: email link (continuing without memory or transcription)',
    },
    doneNote: 'No real email or text was sent, and no values were sent or stored.',
    restart: 'Start over',
    observed: 'DOM and events the page read',
    stage: 'Current step',
    paste: 'Paste events',
    pasteValue: (n: number, blocked: boolean) =>
      `${n} · canceled by the page: ${blocked ? 'yes' : 'never'}`,
    tokens: 'autocomplete values of the fields',
    passType: 'type of the password field',
    focus: 'document.activeElement',
    none: 'None',
    done: 'Done',
  },
};

/**
 * 합성 값만 맞는 인증 모형. 붙여넣기 · 자동 채움 · 직접 편집을 막지 않고, 기억과 전사 없이 지나는 대체 경로를 둔다.
 * 값은 메모리에서만 비교하며 전송 · 저장 · 기록하지 않는다. 폼은 post여서 스크립트 없이 제출돼도 값이 주소에 실리지 않는다.
 */
export const AuthPathsDemo = () => {
  const c = useLang(content);
  const id = useId();
  const box = useRef<HTMLDivElement>(null);
  const [active] = useActiveElement();
  const [stage, setStage] = useState<Stage>('credentials');
  const [path, setPath] = useState<Path>('credentials');
  const [values, setValues] = useState({ user: '', pass: '', code: '' });
  const [show, setShow] = useState(false);
  const [error, setError] = useState('');
  const [pastes, setPastes] = useState({ count: 0, blocked: false });
  const [focus, setFocus] = useState<{ key: string; tick: number } | null>(null);
  const [read, setRead] = useState({ tokens: '', passType: '' });

  useEffect(() => {
    if (focus) document.getElementById(`${id}-${focus.key}`)?.focus();
  }, [id, focus]);

  useEffect(() => {
    const inputs = [...(box.current?.querySelectorAll('input') ?? [])];
    setRead({
      tokens: inputs.map((el) => `${el.name}: ${el.getAttribute('autocomplete')}`).join(', '),
      passType: inputs.find((el) => el.name === 'password')?.type ?? '',
    });
  }, [stage, show]);

  const moveFocus = (key: string) =>
    setFocus((previous) => ({ key, tick: (previous?.tick ?? 0) + 1 }));

  const go = (next: Stage, taken: Path = path) => {
    setError('');
    setPath(taken);
    setStage(next);
    moveFocus('step');
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (stage === 'credentials') {
      if (values.user.trim() === SYNTHETIC.user && values.pass === SYNTHETIC.pass)
        return go('code');
      setError(c.wrongCredentials);
      moveFocus('user');
    } else if (values.code.replace(/\s/g, '') === SYNTHETIC.code) go('done', 'credentials');
    else {
      setError(c.wrongCode);
      moveFocus('code');
    }
  };

  const restart = () => {
    setValues({ user: '', pass: '', code: '' });
    setShow(false);
    go('credentials', 'credentials');
  };

  const errorText = error && (
    <>
      {c.error}: {error}
    </>
  );

  return (
    <PracticeFrame label={c.practice} instructions={c.instructions}>
      <div className="rounded-sm border border-stroke-light p-md text-xsm">
        <p className="mb-xs font-semiBold text-text-default">{c.synthetic}</p>
        <dl className="grid gap-x-lg gap-y-2xs sm:grid-cols-[8rem_1fr]">
          {(['user', 'pass', 'code'] as const).map((name) => (
            <div key={name} className="contents">
              <dt className="text-text-light">{c[name]}</dt>
              <dd>
                <code>{SYNTHETIC[name]}</code>
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <div
        ref={box}
        onPaste={(e) =>
          setPastes((previous) => ({
            count: previous.count + 1,
            blocked: previous.blocked || e.defaultPrevented,
          }))
        }
      >
        {stage === 'done' ? (
          <div className="flex flex-col gap-sm text-xsm">
            <h3 id={`${id}-step`} tabIndex={-1} className="font-semiBold text-text-default">
              {c.doneTitle}
            </h3>
            <p>{c.paths[path]}</p>
            <p className="text-text-light">{c.doneNote}</p>
            <div>
              <Button type="button" variant="outlined" size="sm" onClick={restart}>
                {c.restart}
              </Button>
            </div>
          </div>
        ) : (
          <form
            noValidate
            method="post"
            aria-label={c.form}
            className="flex flex-col gap-md"
            onSubmit={submit}
          >
            <h3
              id={`${id}-step`}
              tabIndex={-1}
              className="text-xsm font-semiBold text-text-default"
            >
              {c.stages[stage]}
            </h3>
            {stage === 'credentials' ? (
              <>
                <Field
                  id={`${id}-user`}
                  name="username"
                  autoComplete="username"
                  autoCapitalize="none"
                  spellCheck={false}
                  label={c.user}
                  error={errorText}
                  value={values.user}
                  onChange={(e) => setValues({ ...values, user: e.target.value })}
                />
                <Field
                  id={`${id}-pass`}
                  name="password"
                  type={show ? 'text' : 'password'}
                  autoComplete="current-password"
                  label={c.pass}
                  hint={c.passHint}
                  value={values.pass}
                  onChange={(e) => setValues({ ...values, pass: e.target.value })}
                />
                <div>
                  <Button
                    type="button"
                    variant="text"
                    size="sm"
                    aria-pressed={show}
                    onClick={() => setShow(!show)}
                  >
                    {c.show}
                  </Button>
                </div>
              </>
            ) : (
              <Field
                id={`${id}-code`}
                name="code"
                inputMode="numeric"
                autoComplete="one-time-code"
                label={c.code}
                hint={c.codeHint}
                error={errorText}
                value={values.code}
                onChange={(e) => setValues({ ...values, code: e.target.value })}
              />
            )}
            <div className="flex flex-wrap gap-sm">
              <Button type="submit" size="sm">
                {stage === 'credentials' ? c.next : c.verify}
              </Button>
              <Button
                type="button"
                variant="outlined"
                size="sm"
                onClick={() => go('done', 'alternative')}
              >
                {c.alternative}
              </Button>
            </div>
          </form>
        )}
      </div>

      <ObservedPanel
        title={c.observed}
        rows={[
          [c.stage, stage === 'done' ? c.done : c.stages[stage]],
          [c.paste, c.pasteValue(pastes.count, pastes.blocked)],
          [c.tokens, <code key="t">{read.tokens || c.none}</code>],
          [c.passType, <code key="p">{read.passType || c.none}</code>],
          [c.focus, <code key="f">{active}</code>],
        ]}
      />
    </PracticeFrame>
  );
};
