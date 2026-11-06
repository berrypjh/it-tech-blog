import type { Locale } from '@it-tech-blog/preferences';

/** 두 경로가 같은 순서로 쓰는 일곱 과업. */
export const tasks: Record<Locale, string[]> = {
  ko: [
    '1. 켜기',
    '2. 제목 "예제: 배송 메모"로 가기',
    '3. 이름 있는 영역(랜드마크)으로 가기',
    '4. 링크 "배송 정책 보기" 찾기',
    '5. "배송 메모" 입력란에 글자 쓰기',
    '6. 체크박스 상태 확인하고 바꾸기',
    '7. 끄기',
  ],
  en: [
    '1. Turn on',
    '2. Go to the heading "Example: Delivery note"',
    '3. Go to the named region (landmark)',
    '4. Find the link "View delivery policy"',
    '5. Type in the "Delivery note" field',
    '6. Check the checkbox’s state and change it',
    '7. Turn off',
  ],
};
