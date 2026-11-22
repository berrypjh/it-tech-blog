import type { Locale } from '@it-tech-blog/preferences';
import { DocH2 } from '@it-tech-blog/ui';

import { Steps } from '@/components/shared/Steps';

import { ErrorSummaryDemo } from '../demos/ErrorSummaryDemo';
import { getToc } from '../toc';

const content = {
  ko: {
    intro: '익명 행사 신청서(가상의 자료)로 경로 전체를 직접 지나갑니다.',
    steps: [
      '이름은 비워 두고, 이메일에 “kim@”, 참가 인원에 “2”를 넣어 보냅니다.',
      '초점이 오류 요약의 제목에 있는지 관찰 값에서 확인합니다.',
      '요약의 이메일 링크를 눌러 그 칸으로 가서 값을 고칩니다.',
      '이름도 채우고 다시 보내 오류 요약이 사라지는지 봅니다.',
    ],
  },
  en: {
    intro: 'Walk the whole path yourself with an anonymous event application (fictional data).',
    steps: [
      'Leave the name empty, enter “kim@” as the email and “2” as the number of people, and send.',
      'Check in the observed values that focus is on the heading of the error summary.',
      'Activate the email link in the summary to go to that field and fix the value.',
      'Fill in the name too and send again to see the error summary disappear.',
    ],
  },
};

export const PracticeSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.practice.id}>
      <DocH2 {...toc.practice} />
      <p>{c.intro}</p>
      <Steps items={c.steps} />
      <ErrorSummaryDemo />
    </section>
  );
};
