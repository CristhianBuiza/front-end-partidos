import Head from "next/head";
import { NextPage } from "next";
import { redirect } from "next/navigation";
import { API_URL } from "@/app/config";
import { Embed } from "@/app/ui/components/Carousel/helpers/embed";
import Reproductor from "@/app/ui/components/Video/Reproductor";

interface EmbedPageProps {
  params: {
    id: string;
  };
}

async function getMatchDetail({ id }: { id: string }) {
  const response = await fetch(
    `${API_URL}/api/calendarios?filters[opciones_video][id_video][$eq]=${id}&populate[opciones_video][populate][video][populate]=canal`
  );
  const data = await response.json();
  return data;
}

async function getADS() {
  const response = await fetch(`${API_URL}/api/publicidad`);
  const data = await response.json();
  return data;
}

const EmbedPage: NextPage<EmbedPageProps> = async ({ params }) => {
  const { id } = params;
  const match: Embed = await getMatchDetail({ id });
  const ads = await getADS();
  if (!match || match?.data?.length === 0) {
    redirect("/404");
  }
  return (
    <div>
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
      <div
        className="mt-5 md:mt-0  mx-4 block md:hidden"
        dangerouslySetInnerHTML={{
          __html: ads?.data?.attributes?.publicidad_arriba_mobile,
        }}
      />
      <Reproductor match={match} ads={ads} />
      <div
        className="  block md:hidden mx-4"
        dangerouslySetInnerHTML={{
          __html: ads?.data?.attributes?.publicidad_arriba_mobile,
        }}
      />
    </div>
  );
};

export default EmbedPage;
