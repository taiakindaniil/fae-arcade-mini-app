import { IndexPage } from '@/pages/IndexPage/IndexPage';
import { HubPage } from '@/pages/HubPage/HubPage';
import { LeaderboardPage } from '@/pages/LeaderboardPage/LeaderboardPage';

export const routes = [
  { path: '/', Component: IndexPage },
  { path: '/hub', Component: HubPage },
  { path: '/leaderboard', Component: LeaderboardPage },
//   { path: '', Component: , title: '' },
];
