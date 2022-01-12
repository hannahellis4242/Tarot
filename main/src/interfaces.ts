export interface DeckRequestBody {
  seed: string;
}

interface index {
  num: number;
  reversed: boolean;
}

interface DeckResponseBodySuccess {
  seed: string;
  time: number;
  deck: index[];
}

interface DeckResponseBodyError {
  time: number;
  err: string;
}

export type DeckResponseBody = DeckResponseBodySuccess | DeckResponseBodyError;

export interface WordRequestBody {
  num: number;
}
