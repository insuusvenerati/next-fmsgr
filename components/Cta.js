import Image from "next/image";

export const Cta = () => (
  <>
    <div className="row w-100 mx-auto bg-beige">
      <header className="container text-center">
        <h2>Patient Centered-Medical Healthcare</h2>
      </header>
    </div>
    <div className="row w-100 mx-auto text-center bg-beige ruler">
      <div className="col mx-auto my-4 text-center">
        <div className="col-lg">
          <article className="text-left mx-auto pb-5">
            <section className="my-5">
              <p className="max-characters">
                At Family Medicine Specialists we strive to meet your individual and unique
                healthcare needs. Our team is made up of doctors, physician assistants/nurse
                practitioners, nurses, medical assistants and administrative personnel who work for
                you. We embrace the Patient-Centered Medical Home model of care. By this, we see our
                medical practice as a place where health needs are met primarily and in a way that
                patients are well-known, providing care from different sources and at different
                levels. Recognizing that there are times when more specialized health care is
                needed, we pride ourselves on working closely with and referring to the best
                specialty care available. Here at FMS we value the principals of communication,
                service and availability as pillars in the care that we provide. Thank you for
                letting us provide the primary medical care for you and your family.
              </p>
              <p style={{ color: "#0000ff", fontSize: "1.5em", textAlign: "center" }}>
                For more on the Patient-Centered Medical Home, <br />
                click the image below.
              </p>
            </section>
            <footer className="mx-auto text-center">
              <a href="#">
                <Image
                  height={250}
                  width={250}
                  layout="fixed"
                  src="/assets/images/patient-centered-medical-home.png"
                />
              </a>
            </footer>
          </article>
        </div>
      </div>
    </div>
  </>
);
