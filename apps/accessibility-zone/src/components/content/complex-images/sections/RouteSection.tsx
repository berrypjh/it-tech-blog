import type { Locale } from '@it-tech-blog/preferences';
import { Callout, DocH2, DocH3 } from '@it-tech-blog/ui';

import { SourceTag } from '@/components/shared/SourceTag';
import { Steps } from '@/components/shared/Steps';

import { RouteMap } from '../diagrams/RouteMap';
import { getToc } from '../toc';

const content = {
  ko: {
    intro: (
      <>
        지도의 대안은 과업에 따라 달라집니다. “행사장이 어디인가”가 과업이면 주소나 목적지 한 줄로
        충분합니다. “어떻게 가는가”가 과업이면 목적지만 적은 글로는 길을 찾을 수 없습니다. 출발점,
        도착점, 그리고 어디서 어느 쪽으로 도는지가 필요합니다.
      </>
    ),
    mapLabel: '본관 주변 지도. 경로는 아래 글에 있습니다.',
    caption: '그림 2. 중앙역에서 본관 동쪽 입구까지 (교육 예시)',
    destinationHeading: '목적지만 적은 글',
    destination: '행사장: 본관 동쪽 입구 (중앙역 근처)',
    routeHeading: '경로를 적은 글',
    steps: [
      '출발: 중앙역 3번 출구로 나와 오른쪽(동쪽)으로 150m 걷습니다. 왼쪽에 본관이 보입니다.',
      '본관을 지나 약국이 있는 교차로에서 왼쪽(북쪽)으로 돕니다.',
      '도착: 50m 걸으면 왼쪽에 동쪽 입구가 있습니다. 경사로는 입구 바로 옆입니다.',
      '본관 북쪽의 정문은 공사로 닫혀 있으니 돌아가지 않습니다.',
    ],
    calloutTitle: '그림의 모든 선을 읽지 않습니다',
    callout: (
      <>
        경로 글에는 길의 굵기나 점선 같은 그린 방식을 쓰지 않습니다. 과업에 필요한 출발 · 회전 ·
        도착 조건과 닫힌 정문 같은 예외만 적습니다. 실제 지도 서비스라면 길찾기 기능 자체를 텍스트
        경로로 제공하는 편이 낫습니다.
      </>
    ),
  },
  en: {
    intro: (
      <>
        A map’s alternative depends on the task. If the task is “where is the venue,” an address or
        one line naming the destination is enough. If the task is “how do I get there,” text that
        names only the destination does not get you there. You need the start, the end, and where to
        turn which way.
      </>
    ),
    mapLabel: 'Map around the Main Building. The route is in the text below.',
    caption: 'Figure 2. From Central Station to the east entrance (teaching example)',
    destinationHeading: 'Text that names only the destination',
    destination: 'Venue: east entrance of the Main Building (near Central Station)',
    routeHeading: 'Text that gives the route',
    steps: [
      'Start: leave Central Station by Exit 3 and walk 150 m to the right (east). The Main Building is on your left.',
      'Pass the building and turn left (north) at the intersection with the pharmacy.',
      'End: after 50 m, the east entrance is on your left. The ramp is right next to it.',
      'The main gate on the north side is closed for construction, so do not go around.',
    ],
    calloutTitle: 'Do not read every line of the picture',
    callout: (
      <>
        Route text does not mention how the map is drawn, such as line widths or dashes. It gives
        only what the task needs: start, turns, end, and exceptions like the closed gate. A real map
        service does better by offering directions themselves as a text route.
      </>
    ),
  },
};

export const RouteSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.route.id}>
      <DocH2 {...toc.route} />
      <p>{c.intro}</p>
      <p>
        <SourceTag locale={locale} id="example" />
      </p>
      <figure className="my-xl flex flex-col gap-sm rounded-md border border-stroke-light p-lg">
        <RouteMap locale={locale} label={c.mapLabel} />
        <figcaption className="text-xxsm text-text-light">{c.caption}</figcaption>
      </figure>
      <DocH3>{c.destinationHeading}</DocH3>
      <p>{c.destination}</p>
      <DocH3>{c.routeHeading}</DocH3>
      <Steps items={c.steps} />
      <Callout variant="note" title={c.calloutTitle}>
        <p>{c.callout}</p>
      </Callout>
    </section>
  );
};
