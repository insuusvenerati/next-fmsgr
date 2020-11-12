import Image from "next/image";

export const Misc = () => (
  <>
    <div className="row w-100 mx-auto text-center bg-beige">
      <header className="container text-center">
        <br />
        <br />
        <h3 className="resource-header">Community Resource Agencies</h3>
      </header>
    </div>
    <div className="row w-100 mx-auto bg-beige ruler">
      <div className="container">
        <div className="col-lg-6 mx-auto">
          <p style={{ fontSize: "1.5em", textAlign: "center" }}>
            Search for free or reduced cost services like medical care, food, job training, and
            more.
          </p>

          <p>
            <a href="https://findhelp.org/" className="text-decoration-none red">
              Findhelp.org (formally aunt bertha)
            </a>
          </p>
          <br />

          <p>
            <a href="tel:+211" className="red">
              {" "}
              Or Call 2-1-1
            </a>
          </p>
        </div>
      </div>
    </div>

    <div className="row w-100 mx-auto text-center bg-beige">
      <header className="container text-center">
        <h2>Patient Portal</h2>
      </header>
    </div>
    <div className="row w-100 mx-auto text-center bg-beige">
      <section className="container mx-auto text-center">
        <div className="card text-center my-4 border-0">
          <div className="card-body bg-beige">
            <p className="card-text">Click To Access Our Patient Portal</p>
            <a href="https://14507.portal.athenahealth.com/" className="btn scale">
              <Image
                className="lazy img-fluid"
                layout="fixed"
                width={300}
                height={300}
                src="/wp-content/uploads/2014/02/patient-portal-4-300x236.png"
              />
            </a>
          </div>
          <div className="card-footer text-muted d-none"></div>
        </div>
      </section>
    </div>

    <div className="row w-100 mx-auto align-items-center bg-beige">
      <div className="col-sm-3 mx-auto my-5">
        <div className="card bg-beige border-0">
          <div className="card-body text-center">
            <h5 className="card-title">Providers</h5>
            <div className="container mx-auto text-center">
              <a href="/providers" className="btn mx-auto">
                <i className="fas fa-user-friends fa-7x"></i>
              </a>
              <p className="card-text mt-3">Learn More About Our Providers</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-3 mx-auto my-5">
        <div className="card bg-beige border-0">
          <div className="card-body text-center">
            <h5 className="card-title">Health Hub</h5>
            <div className="container mx-auto text-center">
              <a href="/category/the-health-hub/" className="btn mx-auto">
                <i className="fas fa-heart fa-7x"></i>
              </a>
            </div>
            <p className="card-text mt-3">Read Tips On Our Health Hub</p>
          </div>
        </div>
      </div>
      <div className="col-sm-3 mx-auto my-5">
        <div className="card bg-beige border-0">
          <div className="card-body text-center">
            <h5 className="card-title">Our Latest News</h5>
            <div className="container mx-auto text-center">
              <a href="/news" className="btn">
                <i className="far fa-newspaper fa-7x"></i>
              </a>
            </div>
            <p className="card-text mt-3">Read All About Our Latest Updates And News</p>
          </div>
        </div>
      </div>
    </div>
    <div className="row w-100 mx-auto desktop-spacer d-flex bg-white justify-content-center align-items-center">
      <div className="container">
        <section className="mx-auto text-center">
          <header>
            <h2>Proudly Serving The Grand Rapids, Michigan Area!</h2>
          </header>
        </section>
      </div>
    </div>
    <div className="row w-100 mx-auto bg-white text-center map-container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2917.2652960950663!2d-85.68949588426409!3d43.01480280149315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8819aeab1e46206b%3A0x173857b8283cb76f!2sFamily%20Medicine%20Specialists%20PC!5e0!3m2!1sen!2sus!4v1604599686225!5m2!1sen!2sus"
        width="100%"
        height="600"
        frameBorder="0"
        style={{ border: 0 }}
        allowFullScreen=""
        aria-hidden="false"
        tabIndex="0"
      ></iframe>
    </div>
  </>
);
