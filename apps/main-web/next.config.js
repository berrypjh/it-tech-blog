//@ts-check

const { composePlugins, withNx } = require('@nx/next');

const { getComputerArchitectureOrigin, parseEnabledZones } = require('./zone-env.mjs');

// ENABLED_ZONES가 비어 있으면(개발) 모든 Public 존을, 값이 있으면 해당 존만 활성화한다.
const enabledZones = parseEnabledZones(process.env.ENABLED_ZONES);
/** @param {string} zone */
const isZoneEnabled = (zone) => !enabledZones.length || enabledZones.includes(zone);

// Private 존은 도메인 env가 있을 때만 켜진다(fail-closed). 토픽 노출도 이 값 하나를 쓴다.
const COMPUTER_ARCHITECTURE = getComputerArchitectureOrigin(process.env);

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  transpilePackages: ['@it-tech-blog/preferences'],
  // production rewrite는 build 때 routes-manifest에 고정된다. 토픽 노출도 같은 시점 값으로 굽는다.
  env: { COMPUTER_ARCHITECTURE_ACTIVE: COMPUTER_ARCHITECTURE ? 'true' : 'false' },
  async rewrites() {
    const ACCESSIBILITY = process.env.ACCESSIBILITY_DOMAIN ?? 'http://localhost:4001';
    const REACT_DEEP_DIVE = process.env.REACT_DEEP_DIVE_DOMAIN ?? 'http://localhost:4002';
    const LLM_SYSTEM = process.env.LLM_SYSTEM_DOMAIN ?? 'http://localhost:4003';

    const rules = [];

    if (isZoneEnabled('accessibility')) {
      rules.push(
        { source: '/accessibility', destination: `${ACCESSIBILITY}/accessibility` },
        { source: '/accessibility/:path*', destination: `${ACCESSIBILITY}/accessibility/:path*` },
        {
          source: '/accessibility-static/:path*',
          destination: `${ACCESSIBILITY}/accessibility-static/:path*`,
        },
      );
    }

    if (isZoneEnabled('react')) {
      rules.push(
        { source: '/react', destination: `${REACT_DEEP_DIVE}/react` },
        { source: '/react/:path*', destination: `${REACT_DEEP_DIVE}/react/:path*` },
        {
          source: '/react-static/:path*',
          destination: `${REACT_DEEP_DIVE}/react-static/:path*`,
        },
      );
    }

    if (isZoneEnabled('llm')) {
      rules.push(
        { source: '/llm', destination: `${LLM_SYSTEM}/llm` },
        { source: '/llm/:path*', destination: `${LLM_SYSTEM}/llm/:path*` },
        { source: '/llm-static/:path*', destination: `${LLM_SYSTEM}/llm-static/:path*` },
      );
    }

    if (COMPUTER_ARCHITECTURE) {
      rules.push(
        {
          source: '/computer-architecture',
          destination: `${COMPUTER_ARCHITECTURE}/computer-architecture`,
        },
        {
          source: '/computer-architecture/:path*',
          destination: `${COMPUTER_ARCHITECTURE}/computer-architecture/:path*`,
        },
        {
          source: '/computer-architecture-static/:path*',
          destination: `${COMPUTER_ARCHITECTURE}/computer-architecture-static/:path*`,
        },
      );
    }

    return rules;
  },
};

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx,
];

module.exports = composePlugins(...plugins)(nextConfig);
