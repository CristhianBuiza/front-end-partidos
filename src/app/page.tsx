import { API_URL } from "./config.js";
import Carousel from "@/app/ui/components/Carousel/Carousel";
import { Calendar } from "./ui/components/Carousel/helpers/types.js";

async function getMatches(): Promise<Calendar> {
  const response = await fetch(
    `${API_URL}/api/calendarios?populate[opciones_video][populate]=video&populate[equipo_a]=*&populate[equipo_b]=*&populate[imagen_equipos]=*`
  );
  const data = await response.json();
  return data;
}
export default async function Home() {
  // today function
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0");
  const yyyy = today.getFullYear();
  const todayDate = dd + "/" + mm + "/" + yyyy;
  const matches = await getMatches();

  return (
    <main className="flex min-h-screen flex-col px-5 md:px-44 pt-10 ">
      <h1 className="text-2xl font-bold mb-10 uppercase">
        Calendario de Partidos de hoy - {todayDate}
      </h1>
      <div>
        <Carousel matches={matches} filter="live" />
        <Carousel matches={matches} filter="will-play" />
      </div>
    </main>
  );
}
