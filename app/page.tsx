import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { Event } from "@/typings";
import { groq } from "next-sanity";

const query = groq`
  *[_type == "event"]
`;

export const revalidate = 60;

const Home = async () => {
  const events: Event[] = await client.fetch(query);

  return (
    <div>
      <h1>Events</h1>
      <ul>
        {events.map((event) => (
          <li key={event._id}>
            <h2>{event.title}</h2>
            <p>{event.date}</p>
            <img src={urlForImage(event?.image)} alt={event.title} />
            <p>{event.location}</p>
            <p>{event.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
