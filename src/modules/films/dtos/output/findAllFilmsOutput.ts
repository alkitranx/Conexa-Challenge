

export class FindAllFilmsOutput {
  _id: string;
  title: string;
  episode_id: number;

  constructor(data: any) {
    this._id = data._id;
    this.title = data.title;
    this.episode_id = data.episode_id;
  }
}
