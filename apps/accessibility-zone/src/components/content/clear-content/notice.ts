import type { Locale } from '@it-tech-blog/preferences';

/** 참가 신청 안내의 수정 전 · 후 글과, 글에서 찾을 수 있는 답(교육 예시). 화면과 실습이 함께 쓴다. */
export const notice = {
  ko: {
    before:
      '참가를 원하시는 분께서는 소정의 절차에 따라 기한 내에 신청을 완료하여 주시기 바라며, 행사 당일에는 혼잡이 예상되오니 이용에 유의하여 주시기 바랍니다.',
    after: [
      ['무엇을', '참가 신청서를 냅니다.'],
      ['언제까지', '12월 3일 목요일 18:00까지'],
      ['어디에서', '이 페이지 아래의 ‘참가 신청’ 버튼'],
      ['당일', '정문 공사로 동쪽 입구로 들어옵니다.'],
    ],
  },
  en: {
    before:
      'Those wishing to participate are kindly requested to complete their application by the deadline in accordance with the prescribed procedure, and are advised to exercise caution as congestion is anticipated on the day of the event.',
    after: [
      ['What', 'Submit the registration form.'],
      ['By when', 'By 18:00, Thursday, December 3'],
      ['Where', 'The “Register” button below on this page'],
      ['On the day', 'Enter by the east entrance; the main gate is under construction.'],
    ],
  },
} satisfies Record<Locale, unknown>;
