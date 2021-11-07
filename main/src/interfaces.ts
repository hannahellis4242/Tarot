export interface RequestBody {
  seed: string;
}

interface index {
  num: number;
  reversed: boolean;
}

interface ResponseBodySuccess {
  seed: string;
  time: number;
  deck: index[];
}

interface ResponseBodyError {
  time: number;
  err: string;
}

export type ResponseBody = ResponseBodySuccess | ResponseBodyError;
