import { getServerLocale } from '@it-tech-blog/preferences/server';

import { ObservationSourcesPage } from '@/components/browser-at/observation-sources/ObservationSourcesPage';

const metadata = {
  ko: {
    title: '교육용 모델 · 브라우저 검사값 · 실제 보조기술 결과 구별하기 — A11y Lab',
    description:
      '네 가지 관찰 출처를 구별하고, 컨트롤 하나를 DOM · 개발자 도구 · 실제 보조기술에서 관찰해 관찰 위치를 적는 기록을 쓰는 03장 마지막 페이지.',
  },
  en: {
    title:
      'Telling teaching models, browser inspection values, and real AT results apart — A11y Lab',
    description:
      'The last page of chapter 03: telling four sources of observation apart, observing one control in the DOM, developer tools, and real assistive technology, and writing a record that notes where each observation came from.',
  },
};

export const generateMetadata = async () => metadata[await getServerLocale()];

const Page = async () => <ObservationSourcesPage locale={await getServerLocale()} />;

export default Page;
