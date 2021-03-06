import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import ErrorPage from "../../component/ErrorPage";
import BuyButton from "../../component/BuyButton";

export default function Photo({ photo, location, name, date, single, price }) {
  const router = useRouter();
  if (!router.isFallback && !photo) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <div>
      <div className="Imagecontainer">
        <Link className="homeButton" href="/">
          <a className="homeButton">
            <button className="button"> Home </button>
          </a>
        </Link>
      </div>
      <div className="Imagecontainer">
        {router.isFallback ? (
          <div>Loading…</div>
        ) : (
          <>
            <img src={photo} />
          </>
        )}
      </div>
      <div className="Imagecontainer">Name : {name}</div>
      <div className="Imagecontainer">Location {location}</div>
      <div className="Imagecontainer">Date: {date}</div>
      {price && (
        <div className="m-auto justify-center">
          <div className="Imagecontainer">Price: {price}</div>
          <div className="flex justify-center">
            {single && <BuyButton gallery={single} />}
          </div>
        </div>
      )}
      <div className="Imagecontainer">
        <Link className="homeButton" href="/">
          <a className="homeButton">
            <button className="button"> Back </button>
          </a>
        </Link>
      </div>
    </div>
  );
}
export async function getStaticProps({ params }) {
  const photoid = params.id;
  const results = await fetch(
    `https://ellaphotos.herokuapp.com/galleries?id=${photoid}`
  );
  const previews = await results.json();
  const photo = await previews[0].Image[0].formats.small.url;
  const name = await previews[0].name;
  const location = await previews[0].location;
  const store = await previews[0].date;
  const price = await previews[0].price;
  const date = store ? store.toString() : "";
  const single = await previews[0];

  return {
    props: { photo, name, location, date, single, price },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 3000, // In seconds
  };
}
export async function getStaticPaths() {
  const results = await fetch("https://ellaphotos.herokuapp.com/galleries");
  const previews = await results.json();
  return {
    paths:
      previews?.map((pic) => ({
        params: { id: pic.id.toString() },
      })) || [],
    fallback: true,
  };
}
