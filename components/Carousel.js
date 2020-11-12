export const Carousel = () => (
  <div id="carouselContainer" className="row w-100 mx-auto">
    <div className="mx-auto">
      <div
        id="carouselExampleInterval"
        className="carousel slide carousel-fade"
        data-ride="carousel"
      >
        <div className="carousel-inner text-center">
          <div className="carousel-item active" data-interval="3000">
            <img
              src="assets/images/home-pic-main.jpg"
              className="img-fluid"
              alt="family medicine specialists office building"
            />
          </div>
          <div className="carousel-item" data-interval="3000">
            <img src="./assets/images/slide1.png" className="img-fluid" alt="nurse" />
          </div>
          <div className="carousel-item" data-interval="3000">
            <img src="./assets/images/slide3.png" className="img-fluid" alt="receptionist" />
          </div>
          <div className="carousel-item" data-interal="3000">
            <img src="./assets/images/slide4.png" className="img-fluid" alt="slide" />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleInterval"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleInterval"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  </div>
);
