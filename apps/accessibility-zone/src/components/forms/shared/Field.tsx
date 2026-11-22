import { CircleAlert } from 'lucide-react';

export const fieldClass =
  'w-full rounded-sm border border-stroke-light bg-background-surface px-md py-sm text-xsm aria-[invalid=true]:border-stroke-error';

type Props = Omit<React.ComponentProps<'input'>, 'id' | 'className'> & {
  id: string;
  label: string;
  /** 라벨 옆에 글자로 보이는 필수 표시. required 속성과 함께 준다. */
  requiredText?: string;
  hint?: React.ReactNode;
  error?: React.ReactNode;
};

/**
 * 보이는 label · 도움말 · 오류를 한 입력 칸에 연결한다. 도움말은 입력 전후에 그대로 보이고,
 * 오류가 있을 때만 aria-invalid와 오류 글의 참조를 더한다.
 */
export const Field = ({ id, label, requiredText, hint, error, ...input }: Props) => {
  const describedBy = [hint && `${id}-hint`, error && `${id}-error`].filter(Boolean).join(' ');

  return (
    <div className="flex flex-col gap-xs text-xsm">
      <label htmlFor={id}>
        {label}
        {requiredText && <span className="text-text-light"> ({requiredText})</span>}
      </label>
      <input
        id={id}
        className={fieldClass}
        aria-describedby={describedBy || undefined}
        aria-invalid={error ? 'true' : undefined}
        {...input}
      />
      {hint && (
        <p id={`${id}-hint`} className="text-xxsm text-text-light">
          {hint}
        </p>
      )}
      {error && (
        <p id={`${id}-error`} className="flex items-start gap-xs text-xxsm text-text-error">
          <CircleAlert className="mt-2xs h-3.5 w-3.5 shrink-0" aria-hidden="true" />
          <span>{error}</span>
        </p>
      )}
    </div>
  );
};
