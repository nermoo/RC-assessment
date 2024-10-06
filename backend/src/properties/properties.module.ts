import { Module } from '@nestjs/common';
import { PropertyController } from './properties.controller';
import { PropertyService } from './properties.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Property, PropertySchema } from './schema/properties.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Property.name, schema: PropertySchema },
    ]),
  ],
  controllers: [PropertyController],
  providers: [PropertyService],
})
export class PropertyModule {}
