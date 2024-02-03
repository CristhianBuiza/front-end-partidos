import React from "react";
import CardHome from "./_children/CardHome";
import { Calendar } from "./helpers/types";
import { API_URL } from "@/app/config";

type FilterType = "live" | "will-play" | "played";
interface CarouselProps {
  filter: FilterType;
  matches: Calendar;
}

const Carousel: React.FC<CarouselProps> = async ({ filter, matches }) => {
  let filterP;

  const filterMatches = (match: {
    attributes: { datetime: string | number | Date };
  }) => {
    const matchDate = new Date(match.attributes.datetime);
    const currentDate = new Date();

    if (filter === "will-play") {
      filterP = "will-play";
      return matchDate > currentDate;
    } else if (filter === "live") {
      filterP = "live";
      const matchEndDate = new Date(matchDate.getTime() + 2 * 60 * 60 * 1000);
      return matchDate <= currentDate && matchEndDate > currentDate;
    } else if (filter === "played") {
      filterP = "played";
      return matchDate < currentDate;
    }
  };
  const filteredMatches = matches?.data?.filter(filterMatches);

  return (
    <>
      {filter === "will-play" && filteredMatches?.length > 0 && (
        <>
          <div className="border-b-4 border-blue-700 pb-3 mb-5">
            <h2 className="text-3xl font-bold ">Partidos por jugarse</h2>
          </div>
        </>
      )}
      {filter === "live" && filteredMatches?.length > 0 && (
        <>
          <div className="border-b-4 border-red-500 pb-3 mb-5 flex justify-between">
            <h2 className="text-3xl font-bold ">Partidos en vivo</h2>
            <button
              className="bg-red-500 text-white font-bold py-2 px-4 rounded"
              disabled // Esto hace que el botón sea no clicleable
            >
              En Vivo
            </button>
          </div>
        </>
      )}
      <div className="flex justify-between flex-wrap ">
        {filteredMatches?.map((match) => (
          <CardHome
            key={match.id}
            title={match.attributes.partido}
            local={`${API_URL}${match?.attributes?.equipo_a?.data?.attributes?.url}`}
            visit={`${API_URL}${match?.attributes?.equipo_b?.data?.attributes?.url}`}
            fullImage={`${
              match?.attributes?.imagen_equipos?.data?.attributes?.url
                ? `${API_URL}${match?.attributes?.imagen_equipos?.data?.attributes?.url}`
                : ""
            }`}
            datetime={match?.attributes?.datetime}
            link={match?.attributes?.opciones_video?.video[0]?.url}
            redirect={match?.attributes?.opciones_video?.id_video}
          />
        ))}
      </div>
    </>
  );
};

export default Carousel;
