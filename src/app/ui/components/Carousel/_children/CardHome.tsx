"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

interface CardHomeProps {
  local?: string;
  title?: string;
  visit?: string;
  datetime?: Date;
  link?: string;
  redirect?: string;
  fullImage?: string;
}

const CardHome = (props: CardHomeProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const { title, local, visit, datetime, link, redirect, fullImage } = props;
  const convertTime = (time: Date) => {
    const date = new Date(time);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const day = date.getDate();

    return `${day} a las ${hours}:${minutes < 10 ? `0${minutes}` : minutes}`;
  };
  return (
    <Link href={`/embed/${redirect}`}>
      <div
        className="w-[92vw] justify-center md:w-[380px] overflow-hidden rounded-md shadow-2xl bg-secondary-color transition-transform duration-300 ease-in-out transform hover:scale-105 text-white mb-5 shadow-2xl shadow-gray-900 hover:shadow-gray-950"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className={`relative ${
            isHovered ? "h-[200px]" : "h-[300px] md:h-[200px]"
          }`}
        >
          {isHovered ? (
            <iframe
              title="Video title"
              src={link}
              frameBorder="0"
              allow="autoplay; encrypted-media"
              className="w-full h-full pointer-events-none"
            />
          ) : (
            <>
              {fullImage == "" ? (
                <>
                  <Image
                    src="/static/images/backgroundimgperu.jpeg" // Asegúrate de que la ruta a la imagen sea correcta
                    alt="Jugadores de fútbol"
                    layout="fill" // Esto hará que la imagen llene el div
                    objectFit="cover" // Esto asegura que la imagen cubra todo el espacio sin distorsionarse
                  />
                  {local && (
                    <Image
                      style={{
                        zIndex: 2,
                        position: "absolute",
                        top: "35%",
                        right: "68% ",
                      }}
                      width={70}
                      height={70}
                      src={local}
                      alt={"local image"}
                    ></Image>
                  )}
                  <img
                    style={{
                      zIndex: 2,
                      position: "absolute",
                      top: "35%",
                      left: "68% ",
                    }}
                    width={70}
                    height={70}
                    src={visit}
                  ></img>
                </>
              ) : (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={fullImage}
                  alt="Picture of the author"
                  style={{ objectFit: "cover" }}
                />
              )}
            </>
          )}
        </div>
        <div className="p-4">
          <p className=" text-xl font-bold ">
            {title || "Sport Boys vs. Cusco"}
          </p>
          <p>
            Fecha:
            <time className=""> Día {datetime && convertTime(datetime)}</time>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CardHome;
