export class CardModel {
  constructor(
    public num: number,
    public reversed: boolean,
    public pip: string,
    public suit?: string
  ) {}
}

export default class ResultModel {
  constructor(
    public seed: string,
    public time: string,
    public deck: CardModel[]
  ) {}
}
