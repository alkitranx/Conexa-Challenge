import { FilmsDocument } from '../../../schema/films.schema';

export class FindAllFilmsOutput {
  _id: string;
  title: string;
  episode_id: number;
  constructor(data: FilmsDocument) {
    this._id = data._id;
    this.title = data.title;
    this.episode_id = data.episode_id;
  }
}
