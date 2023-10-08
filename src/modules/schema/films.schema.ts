import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type FilmsDocument = Films & Document;

@Schema()
export class Films {
  @Prop()
  title: string;
  @Prop({ unique: true })
  episode_id: number;
  @Prop()
  opening_crawl: string;
  @Prop()
  director: string;
  @Prop()
  producer: string;
  @Prop()
  release_date: Date;
  @Prop()
  created: Date;
  @Prop()
  edited: Date;
  @Prop()
  characters: string[];
  @Prop()
  planets: string[];
  @Prop()
  starships: string[];
  @Prop()
  vehicles: string[];
  @Prop()
  species: string[];
}

export const FilmsSchema = SchemaFactory.createForClass(Films);
