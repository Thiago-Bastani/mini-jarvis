import { Choices } from './choices';

export class APIResponse {
  id!: string;
  object!: string;
  response!: Array<Choices>;
}
