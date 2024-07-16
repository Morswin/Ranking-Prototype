export interface IPlayer {
  name: string;
  organisation: string;
  country: string;
  score: number;
}

export class Player implements IPlayer {
  name: string;
  organisation: string;
  country: string;
  score: number;

  constructor() {
    this.name = "John Mahjong";
    this.organisation = "USMA";
    this.country = "Poland";
    this.score = 0;
  }
}

export interface IRanking {
  list_of_participants: Array<IPlayer>;
}

export class Ranking implements IRanking {
  list_of_participants: Array<IPlayer>;

  constructor() {
    this.list_of_participants = new Array<IPlayer>();
  }
}

export interface IOptions {
  dark_mode: boolean;
  high_contrast_mode: boolean;
}

export class Opriont implements IOptions {
  dark_mode: boolean;
  high_contrast_mode: boolean;

  constructor() {
    this.dark_mode = false;
    this.high_contrast_mode = false;
  }
}
