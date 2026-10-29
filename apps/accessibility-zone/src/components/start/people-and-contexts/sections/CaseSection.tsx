import type { Locale } from '@it-tech-blog/preferences';
import { DocH2 } from '@it-tech-blog/ui';

import { Chip, List, ListItem } from '@berrypjh/react-ui';

import { type CaseFields, CaseRecord } from '@/components/shared/CaseRecord';

import { getToc } from '../toc';

const content = {
  ko: {
    intro:
      '병원 예약 변경 과업이 브라우저 확대 400%에서 막히는 경우를 사례 기록으로 옮겨 봅니다. 사용자는 진단명이 아니라 사용 방식으로 적고, 환경은 다른 사람이 같은 조건을 만들 수 있게 아래 항목 중 해당하는 것을 설정값으로 적습니다.',
    factors: [
      '기기 · 화면 크기',
      '입력 장치',
      '브라우저 · OS 설정 (확대, 고대비, 모션 감소)',
      '보조기술과 버전',
      '빛 · 소음',
      '네트워크',
      '시간 압박 · 피로',
    ],
    title: '사례 — 병원 예약 변경, 브라우저 확대 400% (가상의 화면)',
    fields: {
      user: '브라우저 확대를 400%로 쓰는 저시력 사용자. 화면 낭독기는 쓰지 않습니다.',
      task: '예약을 다음 주 수요일로 바꾸고 확정하기',
      context: '노트북, 폭 1280px 브라우저 창, 브라우저 확대 400%, 마우스와 키보드',
      barrier: '고정 헤더와 쿠키 배너가 확대된 화면 대부분을 덮어 확정 버튼이 가려집니다.',
      condition: '확대로 보이는 높이가 줄어든 상태에서 헤더와 배너가 화면에 고정되어 있을 때',
      stage: 'navigate',
      impact: '확정 버튼을 찾지 못해 변경을 포기하거나 전화로 처리해야 합니다.',
      recovery:
        '배너를 닫으면 일부 복구됩니다. 헤더가 계속 고정되어 있으면 남은 영역이 좁아 버튼을 찾기 어렵습니다.',
      observed:
        '데스크톱 브라우저에서 확대를 400%로 올리면 고정 요소가 화면에서 차지하는 비율을 직접 볼 수 있습니다.',
      verify:
        '사용자가 실제로 쓰는 확대 방식(브라우저 확대인지 OS 화면 확대기인지), 휴대폰의 글자 크기 설정에서도 같은 문제가 생기는지.',
    } satisfies CaseFields,
  },
  en: {
    intro:
      'Here the rebooking task blocked at 400% browser zoom is turned into a case record. The user is written as a way of use, not a diagnosis, and the environment as settings, picked from the items below, so someone else can recreate the same conditions.',
    factors: [
      'Device · screen size',
      'Input device',
      'Browser · OS settings (zoom, contrast, reduced motion)',
      'Assistive technology and version',
      'Light · noise',
      'Network',
      'Time pressure · fatigue',
    ],
    title: 'Case — rebooking a clinic appointment at 400% browser zoom (hypothetical screen)',
    fields: {
      user: 'A person with low vision who uses 400% browser zoom. No screen reader.',
      task: 'Move the appointment to next Wednesday and confirm',
      context: 'Laptop, 1280px-wide browser window, 400% browser zoom, mouse and keyboard',
      barrier:
        'A fixed header and cookie banner cover most of the zoomed screen, hiding the confirm button.',
      condition: 'When the header and banner stay fixed while zoom shrinks the visible height',
      stage: 'navigate',
      impact: 'They cannot find the confirm button and give up or have to call.',
      recovery:
        'Closing the banner partly recovers. If the header stays fixed, the remaining area is small and the button is hard to find.',
      observed:
        'Raising zoom to 400% in a desktop browser shows directly how much of the screen the fixed elements take.',
      verify:
        'Which zoom the user actually uses (browser zoom or an OS magnifier), and whether the same problem appears with the phone text size setting.',
    } satisfies CaseFields,
  },
};

export const CaseSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.caseRecord.id}>
      <DocH2 {...toc.caseRecord} />
      <p>{c.intro}</p>
      <div className="my-lg">
        <List className="flex flex-wrap gap-sm">
          {c.factors.map((factor) => (
            <ListItem key={factor}>
              <Chip variant="filled">{factor}</Chip>
            </ListItem>
          ))}
        </List>
      </div>
      <CaseRecord locale={locale} title={c.title} fields={c.fields} />
    </section>
  );
};
