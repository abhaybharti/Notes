//define interface
interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  gooldId?: string;
  startTrail: () => string;
  endTrail(): string; //another way to declaring function
  getCoupon(couponName: String): number;
}

const ab: User = {
  dbId: 22,
  email: "h@h.com",
  userId: 2211,
  startTrail: () => {
    return "trail started";
  },
  endTrail: () => {
    return "trail started";
  },
  getCoupon: (name: "hitesh") => {
    return 10;
  },
};
ab.email = "a@a.com";
//ab.dbId = 1123;
