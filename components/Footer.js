export const Footer = () => (
  <>
    <footer className="container-fluid footer-light">
      <div className="container text-center mx-auto pt-4 footer-light">
        <div className="row w-100 mx-auto">
          <div className="col-lg-6 text-left text-white">
            <h3 className="pb-3">Proudly Serving Grand Rapids, Michigan!</h3>
            <p>
              At Family Medicine Specialists we strive to meet your individual and unique healthcare
              needs. Our team is made up of doctors, physician assistants/nurse practitioners,
              nurses, medical assistants and administrative personnel who work for you.
            </p>
            <p>
              Here at FMS we value the principals of communication, service and availability as
              pillars in the care that we provide. Thank you for letting us provide the primary
              medical care for you and your family.
            </p>
          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-5 text-left">
            <div className="row w-100 mx-auto pb-5">
              <div className="d-block footer-lg-contact">
                <span className="text-left"> SERVICE AREA: </span>
                <span className="d-block text-white">Grand Rapids, Michigan</span>
              </div>
            </div>
            <div className="row w-100 mx-auto text-left">
              <div className="footer-lg-contact">
                <span className="d-block text-left"> CONTACT: </span>
                <div className="row w-100 text-left">
                  <div className="col-lg-3">
                    <span className="d-block text-white"> Phone: </span>
                  </div>
                  <div className="col-9">
                    <span className="d-block text-white">
                      <a href="tel:+16166473770" className="white text-decoration-none">
                        (616) 647-3770
                      </a>
                    </span>
                  </div>
                </div>

                <div className="row w-100 text-left">
                  <div className="col-lg-3">
                    <span className="d-block text-white"> Fax: </span>
                  </div>
                  <div className="col-9">
                    <span className="d-block text-white">
                      <a href="#" className="white text-decoration-none">
                        (616) 647-3776
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="row w-100 mx-auto pb-5">
              <div className="d-block footer-lg-contact text-left">
                <span className="text-left"> ADDRESS: </span>
                <span className="d-block text-white">721 3 Mile Rd NW #200</span>
                <span className="d-block text-white">Grand Rapids, Michigan 49544</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <div className="row w-100 mx-auto py-4 footer-dark">
      <div className="container text-white text-center">
        Copyright © <span id="year"></span>
        <script async defer>
          document.getElementById("year").textContent = new Date().getFullYear();
        </script>
        | Website developed & hosted by
        <a href="https://schrader.co" className="text-danger text-decoration-none" target="blank">
          Schrader Web Solutions
        </a>
      </div>
    </div>
  </>
);
