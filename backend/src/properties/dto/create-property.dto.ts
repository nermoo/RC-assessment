import { Location, PropertyType, Status } from '../schema/properties.schema';

export class CreatePropertyDto {
  title: string;
  slug: boolean;
  location: Location;
  description: string;
  price: number;
  propertyType: PropertyType;
  status: Status;
  area: number;
}
