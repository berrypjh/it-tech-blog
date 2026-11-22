'use client';

import { useLocale } from '@it-tech-blog/preferences';

import { type Application, serverFieldError, validateApplication } from './application';
import type { useApplicationForm } from './ApplicationForm';
import type { ResponseKind } from './submissions';
import { useSubmissions } from './useSubmissions';

/**
 * 신청서와 가상 서버를 잇는다. 클라이언트 검사를 통과한 값만 보내고,
 * 현재 제출이 필드 오류로 돌아왔을 때만 그 오류를 신청서에 표시한다. 값은 어느 경우에도 지우지 않는다.
 */
export const useRecoverableSubmit = (form: ReturnType<typeof useApplicationForm>) => {
  const { locale } = useLocale();
  const sim = useSubmissions();

  const submit = (values: Application) => {
    const errors = validateApplication(locale, values);
    form.showErrors(errors);
    if (!errors.length) sim.submit(values);
  };

  const respond = (id: number, kind: ResponseKind) => {
    const applied = sim.respond(id, kind);
    if (applied && kind === 'field-error') form.showErrors([serverFieldError(locale)]);
    return applied;
  };

  /** 다시 시도 버튼은 누르면 사라지므로 초점을 보내기 버튼으로 옮긴다. */
  const retry = () => {
    submit(form.values);
    form.moveFocus('submit');
  };

  return { ...sim, submit, respond, retry, busy: sim.state.activeId !== null };
};
