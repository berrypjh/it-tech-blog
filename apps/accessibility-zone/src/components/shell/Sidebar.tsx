'use client';

import { DocSidebar } from '@it-tech-blog/ui';

import {
  Accessibility,
  Briefcase,
  CircleCheck,
  ClipboardList,
  CodeXml,
  Focus,
  Keyboard,
  Layers,
  Palette,
  Rocket,
  Volume2,
} from 'lucide-react';

import { navData, sidebarStrings } from '@/data';

const sectionIcons = [
  Rocket,
  CodeXml,
  Keyboard,
  Volume2,
  ClipboardList,
  Layers,
  Focus,
  Palette,
  CircleCheck,
  Briefcase,
];

export const Sidebar = () => (
  <DocSidebar
    brandIcon={Accessibility}
    homeHref="/intro"
    navData={navData}
    strings={sidebarStrings}
    sectionIcons={sectionIcons}
  />
);
