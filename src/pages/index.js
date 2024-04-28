import Image from "next/image";
import { wrapper } from "../store/store";
import { getCategoryData } from "../store/slices/category";
import Head from "next/head";
import Link from "next/link";
import Hero from "../components/hero/Hero";
import InfoBox from "../components/infoBox/InfoBox";
import InfoBoxes from "../components/infoBox/InfoBoxes";
import HomeProperty from "../components/homeProperties/HomeProperty";
export default  function Home({ data }) {
  return (
    <div>
      <Head>
        <title>Anasayfa</title>
        <meta description="deneme" />
        <meta keyword="ahmet " />
      </Head>
      <Hero />
      <InfoBoxes />
      <HomeProperty />
      {/* <p className="text-3xl">homepage</p>
      <Link href="/properties">Show Proporties</Link>  */}
      {/* <ol className="mt-5 content-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[30px]">
        {data?.map((item, index) => (
          <p key={index}>{item.title}</p>
        )
        )}
      </ol> */}
    </div>
  );
}

// export const getServerSideProps = wrapper.getServerSideProps(
//   (store) => async (context) => {
//     let { pid } = context.params ?? {};
//     // console.log("context", context)


//     if (!pid || Array.isArray(pid)) {
//       pid = "";
//     }

//     const { data } = await store.dispatch(getCategoryData.initiate(pid));

//     return {
//       props: {data},
//     };
//   },
// );

