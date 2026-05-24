import type { React19HooksContent } from '../content';

import { ApiDetailSection } from './_shared/ApiDetailSection';

type Props = { content: React19HooksContent };

export const UseEffectEventSection = ({ content }: Props) => (
  <ApiDetailSection detail={content.apiDetails.useEffectEvent} labels={content.apiLabels} />
);
