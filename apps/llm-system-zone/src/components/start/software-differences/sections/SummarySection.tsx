import type { Locale } from '@it-tech-blog/preferences';
import { DocH2 } from '@it-tech-blog/ui';

import { List, ListItem } from '@berrypjh/react-ui';

import { getToc } from '../toc';

const points = {
  ko: [
    '일반 함수는 입력, 상태, 환경이 같으면 결과가 정해지고 모델은 분포에서 선택한 출력을 냅니다. 다만 두 쪽 모두 비결정성의 원인이 있고, 출력 변동은 샘플링과 모델 · 컨텍스트 · 환경 변경으로 나눠 봅니다.',
    '코드 정확성, JSON 구문, 스키마, 도메인 제약, 의미적 품질, Task Success는 서로 다른 질문이며 앞 층의 통과가 뒤 층을 보장하지 않습니다.',
    'TypeScript 타입은 컴파일 시점의 도구이고 런타임 검증이 아닙니다. 모델 출력은 신뢰 경계 밖 데이터이므로 파싱, 검증, 권한 확인 뒤에 쓰고 HTML이나 명령으로 그대로 삽입하지 않습니다.',
    'Validation은 명시 제약 확인, Evaluation은 기준과 데이터에 따른 품질 평가, Monitoring은 운영 관찰입니다. 서로 겹칠 수 있습니다.',
  ],
  en: [
    'A regular function is fixed by its input, state, and environment, while a model produces output chosen from a distribution. Both have sources of nondeterminism, and output variation splits into sampling versus model, context, and environment changes.',
    'Code correctness, JSON syntax, schema, domain constraints, semantic quality, and task success are different questions, and passing an earlier layer does not guarantee a later one.',
    'TypeScript types are a compile-time tool, not runtime validation. Model output is data outside the trust boundary, so use it after parsing, validation, and permission checks, and never insert it as HTML or a command as is.',
    'Validation checks stated constraints, Evaluation assesses quality against criteria and data, and Monitoring observes operation. They can overlap.',
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
