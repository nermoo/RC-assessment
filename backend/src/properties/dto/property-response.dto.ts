import { PropertyType, Status, Location } from '../schema/properties.schema';

export class PropertyResponseDto {
  id: string;
  title: string;
  image: string;
  slug: boolean;
  location: Location;
  price: number;
  propertyType: PropertyType;
  status: Status;
  area: number;
}
