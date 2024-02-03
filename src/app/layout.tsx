import type { Metadata } from "next";
import "./globals.css";
import { fonts } from "./ui/fonts";
import Link from "next/link";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { API_URL } from "./config";
import { RootObject, SEO } from "./ui/components/Carousel/helpers/seo";
import Footer from "./ui/components/Footer/Footer";

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
  const url = `${API_URL}/api/inicio-configuracion?populate=*`;

  const { data }: RootObject = await fetch(url).then((res) => res.json());

  return {
    title: data?.attributes?.SEO?.metaTitle,
    description: data?.attributes?.SEO?.metaDescription,
    keywords: data?.attributes?.SEO?.keywords,
    robots: data?.attributes?.SEO?.metaRobots,
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body
        className={`${fonts.titillium_web.className} antialiased bg-secondary-color text-white  `}
      >
        <header className="bg-fourth-color shadow-xl shadow-gray-950 h-16 flex md:justify-evenly items-center flex-col md:flex-row  text-center md:text-left">
          <Link
            href="/"
            className={`${fonts.montserrat.className}  font-bold  !italic container  px-4 py-2 font-bold text-2xl`}
          >
            MR GAMING STREAM
          </Link>
          {/* !important: href para redireccionar a otras paginas Link para la pagina  */}
          <div>
            <a href="/" className={` ${fonts.roboto.className} text-xl`}>
              OTRA PAGINA
            </a>
          </div>
        </header>
        {children}
        <Footer />
      </body>
    </html>
  );
}
