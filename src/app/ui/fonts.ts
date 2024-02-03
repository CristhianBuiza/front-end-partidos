import { Roboto, Montserrat, Inter, Titillium_Web } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });
const roboto = Roboto({ weight: ["400", "700"], subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });
const titillium_web = Titillium_Web({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
});

export const fonts = {
  montserrat,
  roboto,
  inter,
  titillium_web,
};
