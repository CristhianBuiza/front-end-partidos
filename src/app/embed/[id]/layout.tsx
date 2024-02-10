import type { Metadata } from "next";
import "@/app/globals.css";
import { fonts } from "@/app/ui/fonts";
import Link from "next/link";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { API_URL } from "@/app/config";
import { RootObject } from "@/app/ui/components/Carousel/helpers/seo";
import Footer from "@/app/ui/components/Footer/Footer";

/**
 * The function `generateMetadata` fetches data from an API and returns metadata for a webpage.
 * @param  - - `params`: An object containing the parameters for generating metadata.
 * @returns an object with the following properties:
 */
export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  return {
    robots: {
      index: false,
      follow: false,
    },
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
