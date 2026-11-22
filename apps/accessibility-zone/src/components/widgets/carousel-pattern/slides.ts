import type { Locale } from '@it-tech-blog/preferences';

import type { Slide } from './Carousel';

/** 12.9의 실습과 최종 과업이 함께 쓰는 가상의 행사 안내. */
export const guides: Record<Locale, Slide[]> = {
  ko: [
    {
      title: '일정',
      text: '토요일과 일요일, 하루 세 회차로 진행합니다.',
      detail: '1회차 10:00, 2회차 13:00, 3회차 15:30입니다. 입장은 시작 30분 전부터입니다.',
    },
    {
      title: '장소',
      text: '본관 2층 A홀과 B홀입니다.',
      detail: '동쪽 입구로 들어와 엘리베이터나 경사로로 2층에 올라옵니다.',
    },
    {
      title: '준비물',
      text: '신청 확인 메일과 신분증을 준비합니다.',
      detail: '확인 메일은 화면으로 보여 줘도 됩니다. 인쇄할 필요는 없습니다.',
    },
    {
      title: '문의',
      text: '안내 데스크는 본관 1층 동쪽 입구 옆입니다.',
      detail: '행사 당일 9시부터 17시까지 운영합니다.',
    },
  ],
  en: [
    {
      title: 'Schedule',
      text: 'Saturday and Sunday, three sessions a day.',
      detail:
        'Session 1 at 10:00, session 2 at 13:00, session 3 at 15:30. Entry opens 30 minutes before.',
    },
    {
      title: 'Venue',
      text: 'Halls A and B on the second floor.',
      detail: 'Enter through the east entrance and go up by elevator or ramp.',
    },
    {
      title: 'What to bring',
      text: 'Bring the confirmation email and an ID.',
      detail: 'Showing the email on a screen is fine. No need to print it.',
    },
    {
      title: 'Help',
      text: 'The help desk is on the first floor, next to the east entrance.',
      detail: 'It is open from 9:00 to 17:00 on the day of the event.',
    },
  ],
};
