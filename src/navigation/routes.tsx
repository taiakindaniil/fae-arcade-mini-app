import type { ComponentType, JSX } from 'react';

import { IndexPage } from '@/pages/IndexPage/IndexPage';
import { HubPage } from '@/pages/HubPage/HubPage';
import { LeaderboardPage } from '@/pages/LeaderboardPage/LeaderboardPage';

interface Route {
  path: string;
  Component: ComponentType;
  title?: string;
  icon?: JSX.Element;
}

export const routes: Route[] = [
  { path: '/', Component: IndexPage },
  { path: '/hub', Component: HubPage },
  { path: '/leaderboard', Component: LeaderboardPage },
];
