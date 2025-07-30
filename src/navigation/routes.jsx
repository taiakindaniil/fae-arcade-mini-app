import { IndexPage } from '@/pages/IndexPage/IndexPage';
import { LeaderboardPage } from '@/pages/LeaderboardPage/LeaderboardPage';

export const routes = [
  { path: '/', Component: IndexPage },
  { path: '/leaderboard', Component: LeaderboardPage }
//   { path: '', Component: , title: '' },
];
