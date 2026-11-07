/**
 * packages/* 를 외부 배포용 tarball로 만든다.
 *
 * 원본 package.json은 private 워크스페이스용 그대로 두고, staging 폴더에 배포용 manifest를 만든다.
 * - 이름: @it-tech-blog/<x> → @berrypjh/it-tech-blog-<x>
 * - 내부 의존 workspace:* → npm:@berrypjh/it-tech-blog-<x>@<정확한 버전> (import 이름은 그대로)
 * - src는 spec · stories를 빼고 TS 소스 그대로 싣는다 ('use client' 지시문 보존)
 *
 * 배포 manifest에 workspace: · alias 아닌 @it-tech-blog/* 의존이 남으면 실패한다.
 * --expect-version=<x.y.z>를 주면 세 패키지 버전이 모두 그 값인지도 확인한다(릴리스 태그 검사).
 *
 * 사용: node tools/pack-shared-packages.mjs [--expect-version=x.y.z]  → dist/shared-packages/*.tgz
 */
import { execFileSync } from 'node:child_process';
import { cpSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';

const ROOT = resolve(import.meta.dirname, '..');
const OUT = join(ROOT, 'dist/shared-packages');
const PACKAGES = ['utils', 'preferences', 'ui'];
const SOURCE_SCOPE = '@it-tech-blog/';
const REGISTRY = 'https://npm.pkg.github.com';

const readManifest = (dir) =>
  JSON.parse(readFileSync(join(ROOT, 'packages', dir, 'package.json'), 'utf8'));

const publishName = (name) => `@berrypjh/it-tech-blog-${name.slice(SOURCE_SCOPE.length)}`;

const versions = Object.fromEntries(
  PACKAGES.map((dir) => {
    const { name, version } = readManifest(dir);
    return [name, version];
  }),
);

/** workspace:* 내부 의존을 배포 이름의 npm alias 정확한 버전으로 바꾼다. */
const resolveDependencies = (dependencies = {}) =>
  Object.fromEntries(
    Object.entries(dependencies).map(([name, range]) => {
      if (!range.startsWith('workspace:')) return [name, range];
      if (!versions[name]) throw new Error(`unknown workspace dependency: ${name}`);
      return [name, `npm:${publishName(name)}@${versions[name]}`];
    }),
  );

const toPublishManifest = (source) => ({
  name: publishName(source.name),
  version: source.version,
  description: `${source.name} from it-tech-blog, distributed as TypeScript source.`,
  license: 'MIT',
  repository: {
    type: 'git',
    url: 'git+https://github.com/berrypjh/it-tech-blog.git',
    directory: `packages/${source.name.slice(SOURCE_SCOPE.length)}`,
  },
  sideEffects: ['**/*.css'],
  exports: source.exports,
  files: ['src'],
  dependencies: resolveDependencies(source.dependencies),
  peerDependencies: source.peerDependencies,
  publishConfig: { registry: REGISTRY },
});

/** 소비자가 registry에서 잘못된 패키지를 받지 않도록 배포 manifest를 검사한다. */
const assertPublishable = ({ name, dependencies }) => {
  Object.entries(dependencies).forEach(([dep, range]) => {
    const leaks = range.startsWith('workspace:');
    const unaliased = dep.startsWith(SOURCE_SCOPE) && !range.startsWith('npm:@berrypjh/');
    if (leaks || unaliased) throw new Error(`${name}: unpublishable dependency ${dep}@${range}`);
  });
};

const assertExpectedVersion = () => {
  const expected = process.argv.find((arg) => arg.startsWith('--expect-version='))?.split('=')[1];
  if (!expected) return;
  const mismatched = Object.entries(versions).filter(([, version]) => version !== expected);
  if (mismatched.length > 0) {
    throw new Error(`expected ${expected}, got ${JSON.stringify(Object.fromEntries(mismatched))}`);
  }
};

const isShippedSource = (path) => !/\.(spec|stories)\.tsx?$/.test(path);

const packOne = (dir) => {
  const source = readManifest(dir);
  const staging = join(OUT, 'staging', dir);
  rmSync(staging, { recursive: true, force: true });
  mkdirSync(staging, { recursive: true });
  cpSync(join(ROOT, 'packages', dir, 'src'), join(staging, 'src'), {
    recursive: true,
    filter: isShippedSource,
  });
  cpSync(join(ROOT, 'LICENSE'), join(staging, 'LICENSE'));
  const manifest = toPublishManifest(source);
  assertPublishable(manifest);
  writeFileSync(join(staging, 'package.json'), `${JSON.stringify(manifest, null, 2)}\n`);
  execFileSync('pnpm', ['pack', '--pack-destination', OUT], { cwd: staging, stdio: 'inherit' });
};

assertExpectedVersion();
rmSync(OUT, { recursive: true, force: true });
PACKAGES.forEach(packOne);
