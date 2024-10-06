import AppApi from "@/lib/AppApi";
import { Location, PropertyStatus, PropertyType } from "@/constants/Enums";

export interface Property {
  id: string;
  title: string;
  image: string;
  slug: boolean;
  location: Location;
  price: number;
  propertyType: PropertyType;
  status: PropertyStatus;
  area: number;
}

export const PropertyApi = AppApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProperties: builder.query<Property[],void>({
      query: () => ({
        url: "/property",
        method: "GET",
      }),
      providesTags: ['property'],
    }),
    createProperty: builder.mutation<Property, FormData>({
      query: (newProperty) => ({
        url: "/property",
        method: "POST",
        body: newProperty,
      }),
      invalidatesTags: ['property'],
    }),
    deleteProperty: builder.mutation<{ message: string }, string>({
      query: (id) => ({
        url: `/property/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ['property'],
    }),
  }),
  overrideExisting: false,
});

export const { useGetAllPropertiesQuery, useCreatePropertyMutation, useDeletePropertyMutation } = PropertyApi;
