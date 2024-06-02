import { type SchemaTypeDefinition } from "sanity";
import events from "./schemas/events";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [events],
};
