import { afterEach, describe, expect, it, vi } from 'vitest';

import { getComputerArchitectureOrigin, parseZoneOrigin } from '../zone-env.mjs';

const ORIGIN = 'https://ca.example';

afterEach(() => vi.restoreAllMocks());

describe('getComputerArchitectureOrigin', () => {
  it.each([
    ['no domain, no ENABLED_ZONES', {}, null],
    ['no domain, zone listed', { ENABLED_ZONES: 'computer-architecture' }, null],
    ['domain, no ENABLED_ZONES', { COMPUTER_ARCHITECTURE_DOMAIN: ORIGIN }, ORIGIN],
    [
      'domain, zone listed',
      { COMPUTER_ARCHITECTURE_DOMAIN: ORIGIN, ENABLED_ZONES: 'react, computer-architecture' },
      ORIGIN,
    ],
    [
      'domain, zone not listed',
      { COMPUTER_ARCHITECTURE_DOMAIN: ORIGIN, ENABLED_ZONES: 'react,accessibility' },
      null,
    ],
    ['blank domain', { COMPUTER_ARCHITECTURE_DOMAIN: '  ' }, null],
  ])('%s', (_, env, expected) => {
    expect(getComputerArchitectureOrigin(env)).toBe(expected);
  });

  it('disables the zone on an invalid origin and warns without the value', () => {
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => undefined);
    const secret = 'http://internal-host.example/private';

    expect(getComputerArchitectureOrigin({ COMPUTER_ARCHITECTURE_DOMAIN: secret })).toBeNull();
    expect(warn).toHaveBeenCalledOnce();
    expect(String(warn.mock.calls[0])).not.toContain('internal-host');
  });
});

describe('parseZoneOrigin', () => {
  it.each([
    ['https://ca.example', 'https://ca.example'],
    ['https://ca.example/', 'https://ca.example'],
    ['http://localhost:4004', 'http://localhost:4004'],
    ['http://127.0.0.1:4004', 'http://127.0.0.1:4004'],
  ])('accepts %s', (value, expected) => {
    expect(parseZoneOrigin(value)).toBe(expected);
  });

  it.each([
    'not a url',
    'http://ca.example',
    'ftp://ca.example',
    'https://ca.example/computer-architecture',
    'https://ca.example?upstream=x',
    'https://user:pass@ca.example',
    'localhost:4004',
    'http://[::1]:4004',
    'https://*.example',
    'https://ca\texample',
    'https:ca.example',
  ])('rejects %s', (value) => {
    expect(parseZoneOrigin(value)).toBeNull();
  });
});
