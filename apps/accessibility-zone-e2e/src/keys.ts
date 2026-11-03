/** macOS WebKit은 Safari처럼 Tab이 버튼 · 링크를 건너뛴다. 그곳까지 가는 키보드 사용자는 Option+Tab을 쓴다. */
export const tabKey = (browserName: string) =>
  browserName === 'webkit' && process.platform === 'darwin' ? 'Alt+Tab' : 'Tab';
