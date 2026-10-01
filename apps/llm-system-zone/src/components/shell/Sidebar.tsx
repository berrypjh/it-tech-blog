'use client';

import { DocSidebar } from '@it-tech-blog/ui';

import { BrainCircuit, Rocket } from 'lucide-react';

import { navData, sidebarStrings } from '@/data';

const sectionIcons = [Rocket];

export const Sidebar = () => (
  <DocSidebar
    brandIcon={BrainCircuit}
    homeHref="/intro"
    navData={navData}
    strings={sidebarStrings}
    sectionIcons={sectionIcons}
  />
);
