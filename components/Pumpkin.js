import { useEffect, useState } from "react";
import Image from "next/image";

export const Pumpkin = () => {
  const [pumpkinData, setPumpkinData] = useState({ text1: "", text2: "", image1: "", image2: "" });

  useEffect(async () => {
    const response = await fetch("https://cms.fmsgr.com/fmsgrs");
    const data = await response.json();
    setPumpkinData({
      text1: data[0].text,
      text2: data[1].text,
      image1: `https://cms.fmsgr.com${data[0].image.url}`,
      image2: `https://cms.fmsgr.com${data[1].image.url}`,
    });
  }, []);

  const PumpkinComponent = ({ image, text }) => {
    if (!image) return <h1>Loading...</h1>;
    return (
      <div className="col-lg-6">
        <figure className="mx-auto text-center">
          <figcaption className="mx-auto mb-4 text-center">
            <h4 id="image1text" className="pt-4">
              {text}
            </h4>
          </figcaption>
          <Image
            className="figure-img img-fluid h-75 mx-auto img-fig"
            layout="fixed"
            height={500}
            width={500}
            src={image}
          />
          <br />
        </figure>
      </div>
    );
  };

  return (
    <div className="row w-100 mx-auto bg-beige">
      <section className="container mt-4">
        <div className="row">
          <PumpkinComponent text={pumpkinData.text1} image={pumpkinData.image1} />
          <PumpkinComponent text={pumpkinData.text2} image={pumpkinData.image2} />
        </div>
      </section>

      <hr style={{ width: "90%" }} />
    </div>
  );
};
