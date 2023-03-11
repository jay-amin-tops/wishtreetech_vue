export const periods = ["Today", "This Week", "This Month"] as const;
export const userids = ["1", "2", "3"] as const;

export type Period = typeof periods[number];
export type Userid = typeof userids[number];

