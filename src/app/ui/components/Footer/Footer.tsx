"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaSquareXTwitter,
  FaFacebook,
  FaFacebookMessenger,
  FaWhatsapp,
} from "react-icons/fa6";
import { useRouter } from "next/router";

const Footer = () => {
  const asPath = usePathname();
  const currentUrl = `${window.location.origin}${asPath}`;

  const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
    currentUrl
  )}`;
  const messengerShareUrl = `fb-messenger://share?link=${encodeURIComponent(
    currentUrl
  )}`;
  const whatsappShareUrl = `https://wa.me/?text=${encodeURIComponent(
    currentUrl
  )}`;
  const twitterShareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
    currentUrl
  )}`;
  return (
    <footer className="flex justify-evenly bg-black p-4 flex-col md:flex-row gap-3 text-center md:text-left">
      {/* Botones de compartir */}
      <div className="flex flex-col md:flex-row gap-3">
        {/* Botón compartir en Facebook */}
        <a
          href={facebookShareUrl}
          target="_blank"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center"
        >
          <FaFacebook />
          <p className="pl-2">Compartir</p>
        </a>

        {/* Botón compartir en Messenger */}
        <a
          href={messengerShareUrl}
          target="_blank"
          className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded inline-flex items-center"
        >
          <FaFacebookMessenger />
          <p className="pl-2">Compartir</p>
        </a>

        {/* Botón compartir en WhatsApp */}
        <a
          href={whatsappShareUrl}
          target="_blank"
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded inline-flex items-center"
        >
          <FaWhatsapp />
          <p className="pl-2">Compartir</p>
        </a>

        {/* Botón compartir en Twitter */}
        <a
          href={twitterShareUrl}
          target="_blank"
          className="bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded inline-flex items-center"
        >
          <FaSquareXTwitter />
          <p className="pl-2">Twittear</p>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
