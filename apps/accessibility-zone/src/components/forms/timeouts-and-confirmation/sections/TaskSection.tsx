import type { Locale } from '@it-tech-blog/preferences';
import { DocH2 } from '@it-tech-blog/ui';

import { PageLink } from '@/components/shared/PageLink';
import { SourceTag } from '@/components/shared/SourceTag';
import { Steps } from '@/components/shared/Steps';

import { RecoveryRecordDemo } from '../demos/RecoveryRecordDemo';
import { RecoveryTaskDemo } from '../demos/RecoveryTaskDemo';
import { getToc } from '../toc';

const content = {
  ko: {
    intro:
      '이 장을 익명 행사 신청(가상의 자료) 하나를 끝까지 복구하는 과업으로 마칩니다. 로그인과 결제는 실제로 하지 않고, 서버 · 세션 · 재인증은 모두 모형입니다. 폼 · 오류 요약 · 상태 메시지 · 초점은 실제입니다.',
    steps: (locale: Locale) => [
      <>
        이름은 비우고 이메일에 “kim@”, 참가 인원에 “2”를 넣어 보내 두 오류를 냅니다 (
        <PageLink locale={locale} id="error-summary" />
        ).
      </>,
      '요약의 링크로 칸에 가서 이름 “김하늘”, 이메일 “sky@example.com”으로 고쳐 다시 보냅니다.',
      <>
        가상 서버에서 서비스 오류를 응답하고, 실패 전후의 입력값을 비교합니다 (
        <PageLink locale={locale} id="server-errors" />
        ).
      </>,
      '다시 시도한 뒤 이메일을 “moon@example.com”으로 바꿔 한 번 더 보내고, 같은 내용으로 보내기를 한 번 더 누릅니다. 나중 제출에 접수를 먼저, 앞선 제출에 서비스 오류를 나중에 응답합니다.',
      '검토 화면에서 만료 상황을 시작해 연장하지 않고 만료시킨 뒤, 재인증으로 같은 화면에 돌아옵니다.',
      '참가 인원을 수정해 “3”으로 다시 보내 접수받고, 검토 화면에서 한 번 확정합니다.',
    ],
    record:
      '과업을 지나는 동안 세 지점에서 전후 기록을 남깁니다. 기대값을 먼저 쓰고, 관찰값은 실습 화면의 관찰 값에서 읽은 것만 씁니다. 화면 캡처나 낭독을 흉내 낸 글만으로는 기록이 되지 않습니다. 실제 보조기술로 확인하지 않은 것은 미확인 칸에 남깁니다.',
  },
  en: {
    intro:
      'The chapter ends with a task that recovers one anonymous event application (fictional data) to the end. No real sign-in or payment happens; the server, session, and re-authentication are all models. The form, error summary, status message, and focus are real.',
    steps: (locale: Locale) => [
      <>
        Leave the name empty, enter “kim@” as the email and “2” as the number of people, and send to
        cause two errors (<PageLink locale={locale} id="error-summary" />
        ).
      </>,
      'Follow the summary links to fix the name to “Sky Kim” and the email to “sky@example.com”, and send again.',
      <>
        Respond with a service error on the simulated server and compare the input before and after
        the failure (<PageLink locale={locale} id="server-errors" />
        ).
      </>,
      'Retry, then change the email to “moon@example.com” and send once more, and press send again with the same content. Respond accepted to the later submission first and a service error to the earlier one later.',
      'On the review screen, start an expiry, let it expire without extending, then return to the same screen by re-authenticating.',
      'Edit the number of people, send again with “3” and get it accepted, then confirm once on the review screen.',
    ],
    record:
      'Leave before-and-after records at three points of the task. Write expectations first, and record as observations only what you read from the observed values on the exercise screen. A screenshot or text imitating speech alone is not a record. Leave anything not checked with real assistive technology in the unconfirmed field.',
  },
};

export const TaskSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.task.id}>
      <DocH2 {...toc.task} />
      <p className="flex flex-wrap items-center gap-sm">
        <SourceTag locale={locale} id="model" />
      </p>
      <p>{c.intro}</p>
      <Steps items={c.steps(locale)} />
      <RecoveryTaskDemo />
      <p>{c.record}</p>
      <RecoveryRecordDemo />
    </section>
  );
};
