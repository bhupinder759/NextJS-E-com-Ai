import { type SchemaTypeDefinition } from "sanity";

import { categoryType } from "@/sanity/schemaTypes/categoryType";
import { customerType } from "@/sanity/schemaTypes/customerType";
import { orderType } from "@/sanity/schemaTypes/orderType";
import { productType } from "@/sanity/schemaTypes/productType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [categoryType, customerType, orderType, productType],
};
