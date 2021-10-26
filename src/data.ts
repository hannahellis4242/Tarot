import { Random } from "random";

export class index {
  constructor(public num: number, public reversed: boolean) {}
}

export let createDeck = (): index[] =>
  new Array(78).fill(0).map((_, i) => new index(i, false));

export let shuffle = (deck: index[], rng: Random): index[] => {
  const pools = rng.int(2, 12);
  return deck
    .map((v: index, _) => {
      return {
        num: v.num,
        reversed: v.reversed != rng.boolean(),
        pool: rng.int(0, pools),
      };
    })
    .sort((a, b) => {
      return a.pool - b.pool;
    });
};
