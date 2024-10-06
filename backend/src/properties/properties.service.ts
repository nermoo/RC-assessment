import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Property } from './schema/properties.schema';
import { CreatePropertyDto } from './dto/create-property.dto';
import { PropertyResponseDto } from './dto/property-response.dto';

@Injectable()
export class PropertyService {
  constructor(
    @InjectModel(Property.name) private propertyModel: Model<Property>,
  ) {}

  createProperty(
    createPropertyDto: CreatePropertyDto,
    imagePath: string,
  ): Promise<Property> {
    const newProperty = new this.propertyModel({
      ...createPropertyDto,
      image: imagePath,
    });
    return newProperty.save();
  }

  async getAllProperties(): Promise<PropertyResponseDto[]> {
    const properties = await this.propertyModel.find().exec();
    return properties.map((property) => ({
      id: property._id.toString(),
      title: property.title,
      image: property.image,
      slug: property.slug,
      location: property.location,
      price: property.price,
      propertyType: property.propertyType,
      status: property.status,
      area: property.area,
    }));
  }

  async deleteProperty(id: string): Promise<{ message: string }> {
    const result = await this.propertyModel.findByIdAndDelete(id);
    if (result) {
      return { message: 'Property deleted successfully' };
    } else {
      return { message: 'Property not found' };
    }
  }
}
