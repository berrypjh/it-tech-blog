import { Fragment } from 'react';

import type { Locale } from '@it-tech-blog/preferences';

import { List, ListItem } from '@berrypjh/react-ui';
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUp, Check, X } from 'lucide-react';

const content = {
  ko: {
    layers: [
      {
        name: '앱',
        identity: '입력 · 권한 · 검증 · 실행을 조정',
        does: ['무엇을 보낼지 정한다', '응답을 믿을지 정한다', '동작과 권한을 정한다'],
        doesNot: ['토큰 계산'],
      },
      {
        name: '추론 API',
        identity: '모델을 호출하는 인터페이스',
        does: ['요청을 받고 응답을 돌려준다', '인증과 사용량을 제한한다'],
        doesNot: ['업무 규칙 판단', '응답의 사실 검증'],
      },
      {
        name: '모델',
        identity: '학습된 계산 구성 요소',
        does: ['입력 토큰에서 출력 토큰을 계산한다'],
        doesNot: ['업무 규칙 조회', '권한 판단', '데이터 저장'],
      },
    ],
    does: '책임',
    doesNot: '책임이 아닌 것',
    links: [
      { down: '요청', up: '응답' },
      { down: '입력 토큰', up: '출력 토큰' },
    ],
  },
  en: {
    layers: [
      {
        name: 'App',
        identity: 'Coordinates input, permission, validation, execution',
        does: [
          'Decides what to send',
          'Decides whether to trust it',
          'Decides actions and permission',
        ],
        doesNot: ['Token computation'],
      },
      {
        name: 'Inference API',
        identity: 'The interface that calls the model',
        does: ['Takes requests, returns responses', 'Limits authentication and usage'],
        doesNot: ['Deciding business rules', 'Verifying facts in a response'],
      },
      {
        name: 'Model',
        identity: 'A trained computational component',
        does: ['Computes output tokens from input tokens'],
        doesNot: ['Looking up business rules', 'Deciding permissions', 'Storing data'],
      },
    ],
    does: 'Responsible for',
    doesNot: 'Not responsible for',
    links: [
      { down: 'Request', up: 'Response' },
      { down: 'Input tokens', up: 'Output tokens' },
    ],
  },
};

/** 앱, 추론 API, 모델의 역할을 요청이 내려가고 응답이 올라오는 층으로 보여 준다. 정적 서버 컴포넌트다. */
/** 앱, 추론 API, 모델의 역할을 가로로 나란히 놓고 요청과 응답의 방향을 보여 준다. 정적 서버 컴포넌트다. */
export const RolesDiagram = ({ locale }: { locale: Locale }) => {
  const c = content[locale];

  return (
    <figure className="my-lg leading-normal">
      <div className="grid grid-cols-1 gap-xs sm:grid-cols-[1fr_4.5rem_1fr_4.5rem_1fr] sm:grid-rows-[auto_auto_auto] sm:gap-x-xs sm:gap-y-0">
        {c.layers.map((layer, i) => (
          <Fragment key={layer.name}>
            <section
              aria-labelledby={`roles-layer-${i}`}
              className="grid grid-cols-1 gap-x-md gap-y-sm rounded-md border border-stroke-light bg-background-surface p-md min-[28rem]:grid-cols-2 sm:row-span-3 sm:grid-cols-1 sm:grid-rows-subgrid sm:gap-y-md"
            >
              <div className="min-[28rem]:col-span-2 sm:col-span-1">
                <h3 id={`roles-layer-${i}`} className="text-xsm font-bold text-text-default">
                  {layer.name}
                </h3>
                <p className="mt-xs text-xxsm text-text-light">{layer.identity}</p>
              </div>

              <div>
                <p className="text-xxsm font-semiBold text-text-success">{c.does}</p>
                <List className="mt-xs flex flex-col gap-xs text-xxsm">
                  {layer.does.map((item) => (
                    <ListItem key={item} className="flex gap-xs">
                      <Check
                        className="mt-2xs h-3 w-3 shrink-0 text-text-success"
                        aria-hidden="true"
                      />
                      {item}
                    </ListItem>
                  ))}
                </List>
              </div>

              <div>
                <p className="text-xxsm font-semiBold text-text-error">{c.doesNot}</p>
                <List className="mt-xs flex flex-col gap-xs text-xxsm">
                  {layer.doesNot.map((item) => (
                    <ListItem key={item} className="flex gap-xs">
                      <X className="mt-2xs h-3 w-3 shrink-0 text-text-error" aria-hidden="true" />
                      {item}
                    </ListItem>
                  ))}
                </List>
              </div>
            </section>

            {i < c.layers.length - 1 && (
              <div className="flex flex-wrap items-center justify-center gap-x-md gap-y-2xs text-center text-xxsm text-text-light sm:row-span-3 sm:flex-col sm:flex-nowrap sm:justify-center sm:gap-sm">
                <span className="flex items-center gap-2xs sm:flex-col">
                  <ArrowDown className="h-3 w-3 sm:hidden" aria-hidden="true" />
                  <ArrowRight className="hidden h-3 w-3 sm:block" aria-hidden="true" />
                  {c.links[i].down}
                </span>
                <span className="flex items-center gap-2xs sm:flex-col">
                  <ArrowUp className="h-3 w-3 sm:hidden" aria-hidden="true" />
                  <ArrowLeft className="hidden h-3 w-3 sm:block" aria-hidden="true" />
                  {c.links[i].up}
                </span>
              </div>
            )}
          </Fragment>
        ))}
      </div>
    </figure>
  );
};
