import type { Locale } from '@it-tech-blog/preferences';
import { DocH2 } from '@it-tech-blog/ui';

import { List, ListItem } from '@berrypjh/react-ui';

import { getToc } from '../toc';

const points = {
  ko: [
    '시각·청각·운동·인지 특성은 진단명이 아니라 지각·조작·이해에 필요한 것, 즉 기능적 필요로 설명합니다. 필요는 날과 상태에 따라 바뀝니다.',
    '장애 유형과 보조기술은 1:1로 대응하지 않습니다. 한 사람이 여러 방법을 쓰고, 같은 방법을 여러 사람이 씁니다.',
    '실제 사용은 여러 특성과 기기·장소·네트워크가 겹친 상황이고, 한 요구를 풀면 다른 요구가 생기기도 합니다.',
    '같은 과업도 맥락마다 다른 단계에서 막힙니다. 기록에는 사용 방식과 발생 조건을 재현 가능한 값으로 적습니다.',
    '복구 경로는 사용자가 아니라 화면을 만드는 쪽이 정하는 설계 결정입니다.',
    '장애 체험은 재현되는 장벽을 찾는 데는 쓸모가 있지만, 당사자의 경험을 대표하지 않습니다.',
  ],
  en: [
    'Describe visual, auditory, motor, and cognitive traits as functional needs, what people need to perceive, operate, and understand, not as diagnoses. Needs change from day to day and with condition.',
    'Disability types and assistive technologies do not map one-to-one. One person uses several methods, and many people use the same method.',
    'Real use combines several traits with device, place, and network, and solving one need can create another.',
    'The same task fails at different stages in different contexts. Record the way of use and the conditions as reproducible values.',
    'Recovery paths are design decisions made by the people who build the screen, not by the user.',
    'Disability simulation helps find reproducible barriers, but it does not represent disabled people’s experience.',
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
            <span>{point}</span>
          </ListItem>
        ))}
      </List>
    </section>
  );
};
