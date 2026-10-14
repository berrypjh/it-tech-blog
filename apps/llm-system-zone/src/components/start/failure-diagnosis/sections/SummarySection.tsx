import type { Locale } from '@it-tech-blog/preferences';
import { DocH2 } from '@it-tech-blog/ui';

import { List, ListItem } from '@berrypjh/react-ui';

import { getToc } from '../toc';

const points = {
  ko: [
    '증상에서 열 가지 범주의 가설을 세우고, 가설마다 맞다면 보일 증거와 반증 질문을 적습니다.',
    'Retrieval은 미검색, 낡은 문서, 권한 필터, context 누락으로, Tool은 선택 실패와 실행 실패로 가릅니다.',
    'trace에서는 요청 ID, 입력 상태, 문서 ID와 버전, context 요약, 응답, 검증 결과, 도구 결과, 단계별 시간을 읽고, 알 수 없는 것도 구분합니다.',
    '성공 기준이 비어 있으면 실패가 무엇인지도 정할 수 없습니다. 다음 장에서 이 공백을 메웁니다.',
  ],
  en: [
    'Build hypotheses in ten categories from the symptom, and write for each the evidence it would show and a refuting question.',
    'Split Retrieval into not retrieved, stale document, permission filter, and context drop, and Tool into selection failure and execution failure.',
    'In a trace read the request ID, input state, document IDs and versions, context summary, response, validation result, tool result, and per-step times, and also separate what you cannot tell.',
    'If the success criteria are empty, you cannot even say what a failure is. The next chapter fills that gap.',
  ],
};

export const SummarySection = ({ locale }: { locale: Locale }) => {
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.summary.id}>
      <DocH2 {...toc.summary} />
      <List ordered className="flex flex-col gap-sm">
        {points[locale].map((point, i) => (
          <ListItem key={point} className="flex gap-md">
            <span className="font-mono text-xsm text-text-light">
              {String(i + 1).padStart(2, '0')}
            </span>
            <span className="break-keep">{point}</span>
          </ListItem>
        ))}
      </List>
    </section>
  );
};
