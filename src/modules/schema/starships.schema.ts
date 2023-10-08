import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type StarshipsDocument = Starships & Document;

@Schema()
export class Starships {
  @Prop()
  name: string;
  @Prop()
  model: string;
  @Prop()
  manufacturer: string;
  @Prop()
  cost_in_credits: string;
  @Prop()
  length: string;
  @Prop()
  max_atmosphering_speed: string;
  @Prop()
  crew: string;
  @Prop()
  passengers: string;
  @Prop()
  cargo_capacity: string;
  @Prop()
  consumables: string;
  @Prop()
  hyperdrive_rating: string;
  @Prop()
  MGLT: string;
  @Prop()
  starship_class: string;
  @Prop()
  pilots: string[];
  @Prop()
  films: string[];
}

export const StarshipsSchema = SchemaFactory.createForClass(Starships);
