import { Carousel } from "../components/Carousel";
import { Cta } from "../components/Cta";
import { Covid } from "../components/DailyCovidUpdates";
import { Misc } from "../components/Misc";
import { Nav } from "../components/Nav";
import { Pumpkin } from "../components/Pumpkin";

export default function Home() {
  return (
    <>
      <Nav />
      <div className="row hide-on-large">
        <img
          data-src="assets/images/home-pic-main.jpg"
          className="lazy img-fluid"
          alt="family medicine specialists office building"
        />
      </div>
      <Carousel />
      <Covid />
      <Cta />
      <Pumpkin />
      <Misc />
    </>
  );
}
