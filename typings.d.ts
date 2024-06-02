import { Image } from "sanity";

type SanityBase = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
};

interface Event extends SanityBase {
  _type: "event";
  title: string;
  date: string;
  image: Image;
  tags: string[];
  location: string;
  description: string;
}
