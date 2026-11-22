import type { Locale } from '@it-tech-blog/preferences';

/** 11장이 함께 쓰는 익명 행사 신청(가상의 자료). 실제 사람 · 계정 · 결제와 무관하다. */
export type Application = { name: string; email: string; seats: string };
export type FieldName = keyof Application;
export type FieldError = { field: FieldName; message: string; suggestion: string };

export const fieldNames: FieldName[] = ['name', 'email', 'seats'];
export const emptyApplication: Application = { name: '', email: '', seats: '' };

export const sameApplication = (a: Application, b: Application) =>
  fieldNames.every((field) => a[field].trim() === b[field].trim());

export const fieldText: Record<Locale, Record<FieldName, { label: string; hint: string }>> = {
  ko: {
    name: { label: '이름', hint: '신청 확인서에 표시할 이름입니다. 예: 김하늘' },
    email: { label: '이메일', hint: '확인 메일을 받을 주소입니다. 예: name@example.com' },
    seats: { label: '참가 인원', hint: '1부터 4 사이의 숫자입니다. 예: 2' },
  },
  en: {
    name: { label: 'Name', hint: 'The name shown on the confirmation. Example: Sky Kim' },
    email: { label: 'Email', hint: 'Where the confirmation is sent. Example: name@example.com' },
    seats: { label: 'Number of people', hint: 'A number from 1 to 4. Example: 2' },
  },
};

const messages = {
  ko: {
    empty: (label: string) => `${label} 칸이 비어 있습니다.`,
    emailFormat: (value: string) => `이메일 “${value}”은 주소 형식이 아닙니다.`,
    seatsRange: (value: string) => `참가 인원 “${value}”은 받을 수 없는 값입니다.`,
    suggest: {
      name: '확인서에 표시할 이름을 입력하세요.',
      email: '@ 뒤에 도메인까지 입력하세요. 예: name@example.com',
      seats: '1부터 4 사이의 숫자로 바꾸세요.',
    },
    taken: '이 이메일로 접수된 신청이 이미 있습니다.',
    takenSuggest: '다른 주소를 입력하거나 기존 신청을 확인하세요.',
  },
  en: {
    empty: (label: string) => `${label} is empty.`,
    emailFormat: (value: string) => `The email “${value}” is not in address format.`,
    seatsRange: (value: string) => `The number of people “${value}” cannot be accepted.`,
    suggest: {
      name: 'Enter the name to show on the confirmation.',
      email: 'Include the domain after the @. Example: name@example.com',
      seats: 'Change it to a number from 1 to 4.',
    },
    taken: 'An application with this email already exists.',
    takenSuggest: 'Enter another address or check the existing application.',
  },
};

/** 한 칸의 오류. message는 무엇이 틀렸는지(3.3.1), suggestion은 어떻게 고칠지(3.3.3)다. */
export const validateField = (
  locale: Locale,
  field: FieldName,
  values: Application,
): FieldError | null => {
  const m = messages[locale];
  const value = values[field].trim();
  const error = (message: string) => ({ field, message, suggestion: m.suggest[field] });
  if (!value) return error(m.empty(fieldText[locale][field].label));
  if (field === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
    return error(m.emailFormat(value));
  if (field === 'seats' && !/^[1-4]$/.test(value)) return error(m.seatsRange(value));
  return null;
};

export const validateApplication = (locale: Locale, values: Application) =>
  fieldNames.flatMap((field) => validateField(locale, field, values) ?? []);

/** 교육용 서버가 돌려주는 필드 오류. 클라이언트 검사를 통과한 값도 서버는 거절할 수 있다. */
export const serverFieldError = (locale: Locale): FieldError => ({
  field: 'email',
  message: messages[locale].taken,
  suggestion: messages[locale].takenSuggest,
});
