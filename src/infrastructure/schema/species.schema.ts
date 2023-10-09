import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SpeciesDocument = Species & Document;

@Schema()
export class Species {
  @Prop({ unique: true, index: true })
  idReference: number;
  @Prop()
  name: string;
  @Prop()
  classification: string;
  @Prop()
  designation: string;
  @Prop()
  average_height: string;
  @Prop()
  skin_colors: string;
  @Prop()
  hair_colors: string;
  @Prop()
  eye_colors: string;
  @Prop()
  average_lifespan: string;
  @Prop()
  homeworld: string;
  @Prop()
  language: string;
  @Prop()
  people: string[];
  @Prop()
  films: string[];
}

export const SpeciesSchema = SchemaFactory.createForClass(Species);
