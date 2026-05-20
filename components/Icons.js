'use client';

import {
  Brain,
  Database,
  Settings,
  Palette,
  BarChart3,
  Box,
  Briefcase,
  Cpu,
  Folder,
  Wrench,
} from 'lucide-react';

export const getIcon = (iconName) => {
  const iconSize = 32;
  const strokeWidth = 2;

  const icons = {
    brain: <Brain size={iconSize} strokeWidth={strokeWidth} />,
    database: <Database size={iconSize} strokeWidth={strokeWidth} />,
    cog: <Settings size={iconSize} strokeWidth={strokeWidth} />,
    palette: <Palette size={iconSize} strokeWidth={strokeWidth} />,
    chart: <BarChart3 size={iconSize} strokeWidth={strokeWidth} />,
    container: <Box size={iconSize} strokeWidth={strokeWidth} />,
    briefcase: <Briefcase size={iconSize} strokeWidth={strokeWidth} />,
    cpu: <Cpu size={iconSize} strokeWidth={strokeWidth} />,
    folder: <Folder size={iconSize} strokeWidth={strokeWidth} />,
    tools: <Wrench size={iconSize} strokeWidth={strokeWidth} />,
  };

  return icons[iconName] || icons.cog;
};
