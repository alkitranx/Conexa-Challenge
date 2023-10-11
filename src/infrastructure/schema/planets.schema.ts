import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PlanetsDocument = Planets & Document;

@Schema()
export class Planets {
  @Prop({ unique: true, index: true })
  idReference: number;
  @Prop()
  name: string;
  @Prop()
  rotation_period: string;
  @Prop()
  orbital_period: string;
  @Prop()
  diameter: string;
  @Prop()
  climate: string;
  @Prop()
  gravity: string;
  @Prop()
  terrain: string;
  @Prop()
  surface_water: string;
  @Prop()
  population: string;
  @Prop()
  residents: string[];
  @Prop()
  films: string[];
}

export const PlanetsSchema = SchemaFactory.createForClass(Planets);
