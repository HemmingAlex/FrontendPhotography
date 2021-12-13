import Head from "next/head";
import { useState, useEffect } from "react";
import Gallery from "../component/ImageDetail";
import styles from "../styles/Home.module.css";

import Toolbar from "../component/Toolbar/Toolbar";
import SideDrawer from "../component/SideDrawer/SideDrawer";
import Backdrop from "../component/Backdrop/Backdrop";

export default function Home({ stuff }) {
  const [photos, setPhotos] = useState(stuff);
  const [search, setSearch] = useState("");
  const [sideOpen, setSideOpen] = useState(false);

  const drawerToggleClickHandler = () => {
    setSideOpen(!sideOpen);
  };

  const backdropClickHandler = () => {
    setSideOpen(false);
  };
  let backdrop;
  useEffect(() => {
    if (sideOpen) {
      backdrop = <Backdrop click={backdropClickHandler} />;
    } else {
      backdrop = <div className="hidden" />;
    }
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Ella Photography</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          id="meta-description"
          name="description"
          content="Pictures and things for sale by Ella Foster"
        />
        <meta
          id="og-title"
          property="og:title"
          content="Ella Foster the photographer "
        />
        <meta id="og-image" property="og:image" content="Logo.png" />
      </Head>
      {sideOpen && (
        <div
          className="h-screen w-screen bg-Purps z-1 fixed opacity-50 top-0"
          onClick={backdropClickHandler}
        />
      )}{" "}
      <Toolbar drawerClickHandler={drawerToggleClickHandler} />
      <SideDrawer show={sideOpen} />
      <main className={styles.main}>
        <img height="100" width="100" src="Logo.png" /> Ella Foster,
        photographer
        <input
          onChange={(e) => setSearch(e.target.value)}
          className={styles.searchInput}
          type="text"
          placeholder="Search for an image"
        ></input>
        <button
          className="button"
          // disabled={search === ""}
          onClick={async () => {
            const results = await fetch(
              `https://ellaphotos.herokuapp.com/galleries`
            );
            const details = await results.json();

            const newDetails = await details.map((e, index) => {
              if (e.name.includes(search.toLocaleLowerCase())) {
                return e;
              } else {
                return {};
              }
            });
            setPhotos(newDetails);
          }}
        >
          Find
        </button>
        <div className={styles.fade}>
          <div className={styles.gridContainer}>
            {photos &&
              photos.map((detail) => {
                if (detail?.name)
                  return (
                    <Gallery
                      key={detail.id}
                      thumbnailUrl={`${detail.Image[0].formats.small.url}`}
                      title={detail.name}
                      id={detail.id}
                    />
                  );
              })}
          </div>
        </div>
      </main>
    </div>
  );
}
export async function getStaticProps() {
  const results = await fetch("https://ellaphotos.herokuapp.com/galleries");
  const stuff = await results.json();

  return {
    props: { stuff },
  };
}
