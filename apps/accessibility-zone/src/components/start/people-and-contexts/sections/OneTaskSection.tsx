import type { Locale } from '@it-tech-blog/preferences';
import { Callout, DocH2, DocTable } from '@it-tech-blog/ui';

import type { FailureStageId } from '@/components/shared/failureStages';
import { StageLabel } from '@/components/shared/StageLabel';
import { ThemedFigure } from '@/components/shared/ThemedFigure';

import zoomCoverDark from '../images/zoom-cover-dark.webp';
import zoomCoverLight from '../images/zoom-cover-light.webp';
import { getToc } from '../toc';

type Row = [string, string, FailureStageId, string, string];

const content = {
  ko: {
    intro:
      '가상의 예약 변경 화면입니다. 과업은 "병원 진료 예약 변경"입니다. 예약을 조회하고, 새 날짜를 고르고, 변경을 확정합니다. 같은 화면이 네 가지 맥락에서 서로 다른 단계에서 막힙니다. 실패 단계는 맥락마다 처음 막힌 단계 하나를 고른 것입니다.',
    tableCaption: '같은 예약 변경 과업이 맥락별로 막히는 조건, 단계, 영향, 복구 경로',
    tableHead: ['사용 맥락', '막히는 조건', '실패 단계', '영향', '복구 경로'],
    rows: [
      [
        '화면 낭독기 + 데스크톱',
        '고른 날짜를 색으로만 표시해 화면 낭독기가 선택 상태를 읽어 주지 않습니다',
        'perceive',
        '어떤 날짜가 선택됐는지 확인하지 못하고 잘못된 날짜로 예약합니다',
        '선택한 날짜를 글자로도 보여주거나 날짜를 직접 입력하는 칸이 있으면 복구할 수 있습니다',
      ],
      [
        '브라우저 확대 400% + 노트북',
        '고정 헤더와 쿠키 배너가 확대된 화면 대부분을 덮습니다',
        'navigate',
        '확정 버튼을 찾지 못해 포기하거나 전화로 처리합니다',
        '배너를 닫을 수 있고 헤더가 고정되지 않으면 복구할 수 있습니다',
      ],
      [
        '손 떨림 + 휴대폰',
        '날짜 칸이 작고 서로 붙어 있어 옆 날짜가 눌립니다',
        'operate',
        '잘못 눌린 것을 알아채지 못하면 다른 날짜로 예약됩니다',
        '확정 전에 요약을 보여주고 되돌릴 수 있으면 복구할 수 있습니다',
      ],
      [
        '기억 · 주의 특성 + 10분 세션 제한',
        '세션 만료가 다가와도 알리지 않고, 만료되면 앞 단계 입력이 사라집니다',
        'state',
        '입력한 내용을 잃고 처음부터 반복하다 포기합니다',
        '만료 전 시간 연장 안내와 입력 보존이 있으면 복구할 수 있습니다',
      ],
    ] satisfies Row[],
    figure: {
      alt: '같은 웹 페이지를 띄운 브라우저 창 두 개가 화살표로 이어져 있습니다. 왼쪽 보통 크기에서는 얇은 헤더와 쿠키 배너 사이로 콘텐츠와 확정 버튼이 잘 보입니다. 오른쪽 확대한 창에서는 헤더와 쿠키 배너가 화면 대부분을 차지하고, 확정 버튼은 배너 뒤에 가려 윗부분만 보입니다.',
      caption:
        '보통 크기에서 얇던 고정 헤더와 쿠키 배너가 400%로 확대하면 화면 대부분을 차지해, 확정 버튼이 배너 뒤로 가려집니다. 학습용으로 단순화한 그림입니다.',
    },
    noteTitle: '복구 경로는 화면을 만드는 쪽이 정합니다',
    note: '표의 복구 경로 열은 모두 설계 결정입니다. 날짜를 글자로도 보여줄지, 고정 요소를 얼마나 크게 둘지, 확정 전에 확인 단계를 둘지, 시간 제한을 연장할 수 있게 할지를 정하는 것은 사용자가 아니라 화면을 만드는 쪽입니다.',
  },
  en: {
    intro:
      'The task is "change a clinic appointment": look up the booking, pick a new date, and confirm the change. The same screen fails at different stages in four contexts. (A hypothetical screen.)',
    tableCaption:
      'Conditions, stages, impact, and recovery paths for the same rebooking task in different contexts',
    tableHead: ['Context', 'Blocking condition', 'Failure stage', 'Impact', 'Recovery path'],
    rows: [
      [
        'Screen reader + desktop',
        'The chosen date is shown by color only, so the screen reader does not announce the selection',
        'perceive',
        'They cannot confirm which date is selected and book the wrong one',
        'Recoverable if the selected date is also shown as text or can be typed into a field',
      ],
      [
        'Browser zoom 400% + laptop',
        'A fixed header and cookie banner cover most of the zoomed screen',
        'navigate',
        'They cannot find the confirm button and give up or call instead',
        'Recoverable if the banner can be closed and the header is not fixed',
      ],
      [
        'Tremor + phone',
        'Date cells are tiny and packed, so the neighboring date gets pressed',
        'operate',
        'If they do not notice the wrong press, the booking moves to another date',
        'Recoverable if a summary appears before confirming and can be undone',
      ],
      [
        'Memory or attention differences + 10-minute session',
        'The session expires with no warning, and earlier input disappears when it does',
        'state',
        'They lose their input, repeat from the start, and give up',
        'Recoverable with a warning to extend time and preserved input',
      ],
    ] satisfies Row[],
    figure: {
      alt: 'Two browser windows showing the same web page, joined by an arrow. At normal size on the left, the content and the confirm button are clearly visible between a thin header and a cookie banner. In the zoomed window on the right, the header and cookie banner take most of the screen, and only the top edge of the confirm button shows above the banner.',
      caption:
        'A fixed header and cookie banner that are thin at normal size take most of the screen at 400% zoom, hiding the confirm button behind the banner. A simplified teaching picture.',
    },
    noteTitle: 'Recovery paths are decided by the people who build the screen',
    note: 'Everything in the recovery path column is a design decision. Whether the date is also shown as text, how large fixed elements are, whether there is a confirmation step, and whether time limits can be extended are decided by the people building the screen, not by the user.',
  },
};

export const OneTaskSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);
  const rows = c.rows.map(([context, condition, stage, impact, recovery]) => [
    context,
    condition,
    <StageLabel key="stage" locale={locale} id={stage} />,
    impact,
    recovery,
  ]);

  return (
    <section aria-labelledby={toc.oneTask.id}>
      <DocH2 {...toc.oneTask} />
      <p>{c.intro}</p>
      <DocTable caption={c.tableCaption} head={c.tableHead} rows={rows} />
      <ThemedFigure light={zoomCoverLight} dark={zoomCoverDark} {...c.figure} />
      <Callout variant="note" title={c.noteTitle}>
        <p>{c.note}</p>
      </Callout>
    </section>
  );
};
