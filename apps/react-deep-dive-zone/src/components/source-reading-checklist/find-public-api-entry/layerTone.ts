import type { LayerKey } from './content';

/** layer 별 일관된 톤 매핑. 색상 시맨틱: user=sky, public=blue, dispatcher=cyan, internal=violet */
export const layerToneKey: Record<LayerKey, 'sky' | 'blue' | 'cyan' | 'violet'> = {
  user: 'sky',
  public: 'blue',
  dispatcher: 'cyan',
  internal: 'violet',
};
