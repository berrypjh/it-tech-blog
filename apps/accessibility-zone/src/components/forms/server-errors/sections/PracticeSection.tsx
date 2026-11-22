import type { Locale } from '@it-tech-blog/preferences';
import { Callout, DocH2 } from '@it-tech-blog/ui';

import { SourceTag } from '@/components/shared/SourceTag';
import { Steps } from '@/components/shared/Steps';

import { ServerErrorDemo } from '../demos/ServerErrorDemo';
import { getToc } from '../toc';

const content = {
  ko: {
    intro:
      '시뮬레이션하는 것은 서버와 응답의 종류 · 순서뿐이고, 폼 · 오류 요약 · 상태 메시지 · 초점은 실제입니다. 응답은 가상 서버의 버튼으로 직접 보냅니다. 응답을 보내지 않고 두면 지연입니다.',
    steps: [
      'A를 보냅니다: 이름 “김하늘”, 이메일 “sky@example.com”, 참가 인원 “2”.',
      '이메일을 “moon@example.com”으로 바꿔 B를 보냅니다.',
      '가상 서버에서 A에 서비스 오류를 먼저, B에 접수를 나중에 응답합니다.',
      '폼의 값과 접수 결과가 B 그대로인지 관찰 값에서 확인합니다.',
      '다시 보내고 필드 오류 응답을 골라, 값이 남은 채 오류 요약으로 가는지 봅니다.',
      '서비스 오류 뒤 다시 시도, 같은 내용 거듭 보내기, 같은 응답 두 번 보내기도 해 봅니다.',
    ],
    limitTitle: '이 실습이 확인하지 않는 것',
    limit:
      '실제 네트워크 요청은 없습니다. 서버의 검증 규칙, 응답 시간, 연결 끊김, 서버에서의 중복 접수 방지는 이 실습으로 확인한 것이 아닙니다. 상태 메시지가 실제로 낭독되는지와 그 횟수도 보조기술로 따로 확인합니다.',
  },
  en: {
    intro:
      'Only the server and the kind and order of responses are simulated; the form, error summary, status message, and focus are real. You send responses with the buttons of the simulated server. Leaving a submission unanswered is a delay.',
    steps: [
      'Send A: name “Sky Kim”, email “sky@example.com”, number of people “2”.',
      'Change the email to “moon@example.com” and send B.',
      'On the simulated server, respond to A with a service error first and to B with accepted later.',
      'Check in the observed values that the form values and the accepted result are still B’s.',
      'Send again and choose the field error response to see focus go to the error summary with values kept.',
      'Also try retry after a service error, sending the same content repeatedly, and sending the same response twice.',
    ],
    limitTitle: 'What this exercise does not verify',
    limit:
      'There is no real network request. The server’s validation rules, response time, lost connections, and server-side duplicate prevention are not verified here. Whether and how many times the status message is actually spoken must be checked separately with assistive technology.',
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
      <Steps items={c.steps} />
      <ServerErrorDemo />
      <Callout variant="pitfall" title={c.limitTitle}>
        {c.limit}
      </Callout>
    </section>
  );
};
