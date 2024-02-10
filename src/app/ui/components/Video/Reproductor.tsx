"use client";
import React, { useState } from "react";
import { Embed } from "../Carousel/helpers/embed";

interface ReproductorProps {
  match: Embed;
  ads: {
    data: {
      attributes: {
        publicidad_derecha: string;
      };
    };
  };
}

const Reproductor: React.FC<ReproductorProps> = ({ match, ads }) => {
  // Estado para almacenar el src actual del iframe y un contador para recargas
  const [iframeSrc, setIframeSrc] = useState(
    match?.data[0]?.attributes?.opciones_video?.video[0]?.url ||
      match?.data[0].attributes.opciones_video.video[0].canal?.data?.attributes
        ?.url
  );
  const [reloadCounter, setReloadCounter] = useState(0);

  // Función para cambiar el src del iframe basado en la opción seleccionada
  const changeVideoSource = (newSrc: string) => {
    setIframeSrc(newSrc);
  };

  // Función para recargar el iframe
  const reloadIframe = () => {
    // Añade un contador o timestamp al URL para forzar la recarga
    setIframeSrc(iframeSrc + "&reload=" + reloadCounter);
    setReloadCounter(reloadCounter + 1);
  };

  return (
    <div className="flex flex-col md:grid  grid-cols-[repeat(5,_minmax(0,_1fr))_minmax(0,_1.5fr)] grid-rows-6  grid-rows-[repeat(5,_minmax(0,_1fr))_minmax(0,_0.6fr)] gap-1 mx-4 md:mx-16 xl:mx-24  mt-5 bg-black text-white rounded-lg ">
      <div className="col-span-5 row-span-5">
        <iframe
          className="w-full h-[200px] md:h-[60vh] xl:h-[77vh] rounded-lg"
          width="560"
          height="410"
          src={iframeSrc}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      </div>
      <div className="col-span-5 col-start-1 row-start-6 ">
        <div className="flex ml-0 md:ml-5 py-3 justify-between ">
          <div>
            {match?.data[0].attributes.opciones_video.video.map((video, i) => (
              <button
                key={video.id}
                onClick={() =>
                  changeVideoSource(
                    video?.url || video?.canal?.data?.attributes?.url
                  )
                }
                className="font-bold py-2 px-4 rounded bg-slate-900 hover:bg-slate-800 mr-2"
              >
                Opción {i + 1}
              </button>
            ))}
          </div>
          <button
            onClick={reloadIframe}
            className="font-bold py-2 px-4 rounded bg-slate-900 hover:bg-slate-800"
          >
            Recargar
          </button>
        </div>
      </div>

      <div className="lateral row-span-6 col-start-6s row-start-1">
        {/* ads innerHtml */}
        <div
          className=" max-w-[280px] hidden md:block"
          style={{ marginLeft: "auto", marginRight: "auto" }}
          dangerouslySetInnerHTML={{
            __html: ads?.data?.attributes?.publicidad_derecha,
          }}
        />
      </div>
    </div>
  );
};

export default Reproductor;
