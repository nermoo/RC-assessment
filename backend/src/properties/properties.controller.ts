import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { PropertyService } from './properties.service';
import { Property } from './schema/properties.schema';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { CreatePropertyDto } from './dto/create-property.dto';
import { extname } from 'path';
import { PropertyResponseDto } from './dto/property-response.dto';

@Controller('property')
export class PropertyController {
  constructor(private propertyService: PropertyService) {}

  @Post()
  @UseInterceptors(
    FileInterceptor('propertyImg', {
      storage: diskStorage({
        destination: './images',
        filename: (_, file, cb) => {
          const uniqueSuffix =
            Date.now() + '-' + Math.round(Math.random() * 1e9);
          cb(null, `${uniqueSuffix}${extname(file.originalname)}`);
        },
      }),
    }),
  )
  async createProperty(
    @UploadedFile() file: Express.Multer.File,
    @Body() createPropertyDto: CreatePropertyDto,
  ): Promise<Property> {
    const imagePath = `./${file.filename}`;
    return this.propertyService.createProperty(createPropertyDto, imagePath);
  }

  @Get()
  getAllProperties(): Promise<PropertyResponseDto[]> {
    return this.propertyService.getAllProperties();
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  deleteProperty(@Param('id') id: string): Promise<{ message: string }> {
    console.log(id);
    return this.propertyService.deleteProperty(id);
  }
}
