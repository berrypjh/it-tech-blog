/**
 * 호스트 build 환경변수에서 존 활성화를 판정한다. `next.config.js`만 읽는다.
 * Private 존의 origin은 이 모듈과 rewrite 밖으로 나가지 않는다.
 */

export const COMPUTER_ARCHITECTURE_ZONE = 'computer-architecture';

const LOOPBACK_HOSTS = new Set(['localhost', '127.0.0.1']);

/** Next rewrite destination이 받아들이는 host. IPv6 · 와일드카드는 런타임 경로 파서가 깨뜨린다. */
const PLAIN_HOST = /^[a-z0-9.-]+$/;

/**
 * ENABLED_ZONES 값을 존 식별자 목록으로 파싱한다.
 * @param {string | undefined} value
 * @returns {string[]}
 */
export const parseEnabledZones = (value) =>
  value
    ?.split(',')
    .map((zone) => zone.trim())
    .filter(Boolean) ?? [];

/**
 * 존 도메인 값을 origin으로 정규화한다. 운영은 https, http는 loopback(로컬 개발)만 허용한다.
 * 값이 origin 그대로(끝 `/` 하나 허용)가 아니면 거부한다 — 경로 · query · 인증 정보 · 파서가 고쳐 쓴 값.
 * @param {string} value
 * @returns {string | null}
 */
export const parseZoneOrigin = (value) => {
  const url = URL.parse(value);
  if (!url || !PLAIN_HOST.test(url.hostname)) return null;
  if (value.replace(/\/$/, '').toLowerCase() !== url.origin) return null;
  const secure = url.protocol === 'https:';
  const local = url.protocol === 'http:' && LOOPBACK_HOSTS.has(url.hostname);
  return secure || local ? url.origin : null;
};

/**
 * computer-architecture(Private) 존의 upstream origin. fail-closed다.
 * 도메인이 있고 ENABLED_ZONES가 비었거나 이 존을 포함할 때만 값을 돌려준다.
 * 기본 localhost로 떨어지지 않는다. 잘못된 값은 값 없이 경고하고 null이다.
 * @param {Record<string, string | undefined>} env
 * @returns {string | null}
 */
export const getComputerArchitectureOrigin = (env) => {
  const domain = env.COMPUTER_ARCHITECTURE_DOMAIN?.trim();
  const zones = parseEnabledZones(env.ENABLED_ZONES);
  if (!domain || (zones.length && !zones.includes(COMPUTER_ARCHITECTURE_ZONE))) return null;

  const origin = parseZoneOrigin(domain);
  if (!origin) {
    console.warn(
      '[main-web] COMPUTER_ARCHITECTURE_DOMAIN is not a valid origin ' +
        '(https, or http for localhost). The computer-architecture zone is disabled.',
    );
  }
  return origin;
};
