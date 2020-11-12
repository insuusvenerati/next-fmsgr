import Head from "next/head";

function MyApp({ Component, pageProps }) {
  if (typeof window !== "undefined") {
    const url = location && location.pathname;
    const links = document && document.querySelectorAll("li.nav-item > a");

    links.forEach((link) => {
      if (link.pathname === url) {
        link.parentElement.classList.toggle("custom-active");
      }
    });
  }
  return (
    <>
      <Head>
        <meta
          name="description"
          content="At Family Medicine Specialists we strive to meet your individual and unique healthcare needs. Our team is made up of doctors, physician assistants/nurse practitioners, nurses, medical assistants and administrative personnel who work for you. We embrace the Patient-Centered Medical Home model of care."
        />
        <meta name="author" content="Andrew M McCall" />
        <title>Family Medicine Specialists - Grand Rapids Michigan</title>
        <link rel="author" href="https://andrew-mccall.com" />
        <link rel="prefetch" href="https://cdnjs.cloudflare.com" />
        <link rel="prefetch" href="https://api.mapbox.com" />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
          integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
          crossOrigin="anonymous"
        />
        <link rel="stylesheet" href="./assets/css/inline-styles.css" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
        />
        <link href="https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css" rel="stylesheet" />
        <script
          src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
          integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n"
          crossOrigin="anonymous"
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
          integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
          crossOrigin="anonymous"
        ></script>
        <script
          src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
          integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
          crossOrigin="anonymous"
        ></script>
        <script src="/assets/js/lazyLoad.js"></script>
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
