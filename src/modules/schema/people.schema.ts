import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PeopleDocument = People & Document;

@Schema()
export class People {
  @Prop()
  idReference: number;
  @Prop()
  name: string;
  @Prop()
  height: string;
  @Prop()
  mass: string;
  @Prop()
  hair_color: string;
  @Prop()
  skin_color: string;
  @Prop()
  eye_color: string;
  @Prop()
  birth_year: string;
  @Prop()
  gender: string;
  @Prop()
  films: string[];
  @Prop()
  species: string[];
  @Prop()
  vehicles: string[];
  @Prop()
  starships: string[];
}

export const PeopleSchema = SchemaFactory.createForClass(People);
