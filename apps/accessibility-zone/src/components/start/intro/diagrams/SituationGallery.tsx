import Image, { type StaticImageData } from 'next/image';

import type { Locale } from '@it-tech-blog/preferences';

import { List, ListItem } from '@berrypjh/react-ui';

import noAudioDark from '../images/situation-no-audio-dark.webp';
import noAudioLight from '../images/situation-no-audio-light.webp';
import onTheMoveDark from '../images/situation-on-the-move-dark.webp';
import onTheMoveLight from '../images/situation-on-the-move-light.webp';
import oneHandDark from '../images/situation-one-hand-dark.webp';
import oneHandLight from '../images/situation-one-hand-light.webp';
import sunlightDark from '../images/situation-sunlight-dark.webp';
import sunlightLight from '../images/situation-sunlight-light.webp';

type Text = { tag: string; caption: string; alt: string };

const images: { light: StaticImageData; dark: StaticImageData }[] = [
  { light: sunlightLight, dark: sunlightDark },
  { light: oneHandLight, dark: oneHandDark },
  { light: noAudioLight, dark: noAudioDark },
  { light: onTheMoveLight, dark: onTheMoveDark },
];

const content: Record<Locale, Text[]> = {
  ko: [
    {
      tag: '상황적 제약',
      caption: '햇빛에 화면이 바래 보입니다.',
      alt: '밝은 햇빛 아래에서 손으로 휴대폰 화면을 가리고 보는 사람',
    },
    {
      tag: '일시적 제약',
      caption: '팔을 다쳐 한 손으로만 씁니다.',
      alt: '한쪽 팔에 깁스를 하고 다른 손으로만 휴대폰을 쓰는 사람',
    },
    {
      tag: '상황적 제약',
      caption: '소리 대신 자막에 기댑니다.',
      alt: '지하철에서 소리를 끈 채 자막으로 영상을 보는 사람의 어깨 너머 장면',
    },
    {
      tag: '상황적 제약',
      caption: '짐을 들고 걸으며 잠깐씩 봅니다.',
      alt: '장바구니를 든 채 걸으며 휴대폰을 보는 사람',
    },
  ],
  en: [
    {
      tag: 'Situational',
      caption: 'Sunlight washes out the screen.',
      alt: 'A person shading a phone screen with one hand in bright sunlight',
    },
    {
      tag: 'Temporary',
      caption: 'An injured arm leaves one hand.',
      alt: 'A person with one arm in a cast using a phone with the other hand',
    },
    {
      tag: 'Situational',
      caption: 'Captions stand in for sound.',
      alt: 'Over-the-shoulder view of a person on a train watching a muted video with captions',
    },
    {
      tag: 'Situational',
      caption: 'Glancing while walking with a bag.',
      alt: 'A person walking with a shopping bag while glancing at a phone',
    },
  ],
};

/**
 * 일시적·상황적 제약의 예를 보여주는 그림 4장. 테마마다 따로 그린 그림을 html의 dark 클래스로 바꾼다.
 * 그림은 표시 크기에 맞춰 미리 변환한 800px WebP라 최적화 서버를 거치지 않는다(unoptimized).
 */
export const SituationGallery = ({ locale }: { locale: Locale }) => (
  <List className="my-xl grid grid-cols-2 gap-md md:grid-cols-4">
    {content[locale].map((item, i) => (
      <ListItem key={item.caption}>
        <figure className="flex flex-col gap-xs">
          <div className="overflow-hidden rounded-md border border-stroke-light">
            <Image
              src={images[i].light}
              alt={item.alt}
              unoptimized
              className="h-auto w-full dark:hidden"
            />
            <Image
              src={images[i].dark}
              alt={item.alt}
              unoptimized
              className="hidden h-auto w-full dark:block"
            />
          </div>
          <figcaption className="flex flex-col gap-2xs">
            <span className="text-xxsm font-semiBold text-text-primary">{item.tag}</span>
            <span className="text-xxsm leading-xxsm text-text-light">{item.caption}</span>
          </figcaption>
        </figure>
      </ListItem>
    ))}
  </List>
);
