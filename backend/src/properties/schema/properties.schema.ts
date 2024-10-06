import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type PropertyDocument = HydratedDocument<Property>;

export enum Location {
  COLOMBO = 'Colombo',
  KANDY = 'Kandy',
  GALLE = 'Galle',
}

export enum PropertyType {
  SINGLE = 'Single Family',
  VILLA = 'Villa',
}

export enum Status {
  SALE = 'For Sale',
  RENT = 'For Rent',
}

@Schema()
export class Property {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  image: string;

  @Prop({ required: true })
  slug: boolean;

  @Prop({ required: true })
  location: Location;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  price: number;

  @Prop({ required: true })
  propertyType: PropertyType;

  @Prop({ required: true })
  status: Status;

  @Prop({ required: true })
  area: number;
}

export const PropertySchema = SchemaFactory.createForClass(Property);
