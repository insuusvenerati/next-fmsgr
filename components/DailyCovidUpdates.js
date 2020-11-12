import Image from "next/image";

export const Covid = () => (
  <div className="row w-100 mx-auto bg-beige ruler">
    <div className="container">
      <div className="row w-100-mx-auto-bg-white">
        <div className="col-lg">
          <header className="text-center my-4">
            <h2>COVID-19 is a rapidly evolving situation.</h2>
            <span>
              Please refer to the Kent County Health Department for the most up to date information
              at
              <a
                href="https://www.accesskent.com/Health/coronavirus.htm"
                target="_blank"
                rel="noreferrer"
              >
                www.accesskent.com/coronavirus
              </a>
              <br />
              (And yes, you can trust this source!)
            </span>
          </header>
        </div>
      </div>
      <div className="row w-100 mx-auto bg-beige">
        <div className="container">
          <article className="text-left mx-auto pb-5">
            <section>
              <header className="text-center my-4">
                <h3>Update as of 11/3/2020:</h3>
              </header>
              <p>
                Cases in Kent County are increasing rapidly. We must act now to reduce the spread of
                this virus. Here are some things that you can do to keep yourself safe and to help
                stop the spread of COVID-19:
              </p>
              <ul className="list-group pl-2">
                <li className="">
                  Wear a face mask any time you are outside your home (over your mouth AND nose!)
                </li>
                <li className="">
                  Physically distance yourself at least 6 feet from other persons outside your home
                </li>
                <li className="">
                  Wash your hands frequently with soap and water for 20 seconds or use alcohol-based
                  hand sanitizer
                </li>
                <li className="">
                  Try to avoid touching your face – especially your eyes, nose, and mouth
                </li>
                <li className="">
                  Disinfect “high touch” areas in your home and car regularly with a disinfectant
                  wipe or cleaning solution
                </li>
                <li className="">
                  Get plenty of rest, eat well, and generally take care of yourself!!
                </li>
                <li className="">
                  Avoid gatherings with people outside of your immediate household members,
                  especially indoors and especially with large groups. Wear a mask if you do need to
                  attend.
                </li>
              </ul>
            </section>
            <section>
              <header className="text-center my-4">
                <h4>Testing</h4>
              </header>
              <p>
                COVID-19 testing is widely available and anyone who wants a test can have a test.
                Unfortunately, with the rapid increase in cases, you may have to wait in line to be
                tested. Plan ahead. Time to get results varies, but is generally 24-72 hours.
              </p>
              <p>How to find a testing site:</p>
              <ul className="list-group pl-5">
                <li>
                  Mercy Health Saint Mary’s Southwest Campus has a drive thru testing site that does
                  NOT need a doctors order – first come, first serve.
                  <ul className="list-group pl-2">
                    <li>
                      Current hours are 7am-7pm M-F and 7am-3pm on Saturday. These are subject to
                      change and they may close early due to high demand.
                    </li>
                    <li>Address is 2373 64th St SW, Byron Center, MI 49315</li>
                  </ul>
                </li>
                <li>
                  During regular business hours, you can contact our office for an order to be
                  tested through Saint Mary’s or Spectrum Health by appointment.
                </li>
                <li>
                  <a
                    href="www.accesskent.com/Health/covid-19-testing.htm"
                    target="_blank"
                    rel="noreferrer"
                  >
                    www.accesskent.com/Health/covid-19-testing.htm
                  </a>
                  <ul>
                    <li>
                      Listing of all testing sites in the greater Grand Rapids area, including
                      hospitals, pharmacies, urgent care, and other sites
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="https://www.michigan.gov/cornavirus" target="_blank" rel="noreferrer">
                    www.michigan.gov/cornavirus
                  </a>
                  Click on “find a test site”
                  <ul>
                    <li>
                      Listing of all testing sites in the state, including hospitals, pharmacies,
                      urgent care, and other testing sites
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="https://www.spectrumhealth.org/covid19" target="_blank" rel="noreferrer">
                    www.spectrumhealth.org/covid19
                  </a>
                  You can schedule yourself a test at Spectrum Health through their COVID19
                  screeners by using Spectrum MyChart
                </li>
              </ul>
            </section>
            <section>
              <header className="text-center my-4">
                <h4>Quarantine:</h4>
              </header>
              <p>
                Persons who have had direct (“first degree”) exposure to a person positive for
                COVID19 should quarantine for 14 days after the last known exposure.
              </p>
              <ul className="list-group pl-2">
                <li>
                  The incubation period for COVID19 is anywhere between 2 and 14 days. This means
                  symptoms could show up anywhere between 2 and 14 days from when you are exposed.
                </li>
                <li>
                  While we do highly recommend testing for exposed persons, you need to be careful
                  to not get tested too early and get a “false negative”.
                </li>
                <li>
                  <strong>
                    Please wait at least 5 days after the exposure to get tested for COVID19.
                  </strong>
                </li>
                <li>
                  If you do start getting symptoms at any point during the quarantine period, get
                  testing immediately. There is no need to wait further.
                </li>
                <li>
                  Remember that even with a negative test, you are not “safe” and need to quarantine
                  until the 14 days has passed.
                </li>
                <li>
                  For more information please feel free to call our office, or see the following
                  websites:
                  <ul>
                    <li>
                      <a href="https://www.accesskent.com/Health/covid-19-faq.htm" targert="_blank">
                        https://www.accesskent.com/Health/covid-19-faq.htm
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.cdc.gov/coronavirus/2019-ncov/if-you-are-sick/quarantine.html "
                        target="_blank"
                        rel="noreferrer"
                      >
                        https://www.cdc.gov/coronavirus/2019-ncov/if-you-are-sick/quarantine.html
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </section>

            <br />
            <br />

            <div className="row w-100 mx-auto bg-beige">
              <figure className="mx-auto text-center">
                <Image
                  className="img-fluid mx-auto"
                  width={640}
                  height={480}
                  src="/wp-content/uploads/2020/04/staying-strong-640x480.png"
                />
                <figcaption className="my-2">
                  {"We Are Staying Strong During The Covid-19 Pandemic!"}
                </figcaption>
              </figure>
            </div>

            <section>
              <header className="text-center my-4">
                <h4>If You Are Sick:</h4>
              </header>
              <p>
                If you are sick and suspect you may have COVID19 it is very important to get tested.
                Please call our office and talk to our nurses regarding your symptoms.
              </p>
              <p>
                <strong>
                  We do offer Telehealth appointments so you do not need to leave your home to be
                  seen.
                </strong>
              </p>
              <p>
                If you are very short of breath or have other life-threatening symptoms please call
                911 or go to the nearest Emergency Department. COVID19 can get worse rapidly, so
                don’t wait to seek care.
              </p>
              <ul className="list-group pl-2">
                <li>
                  Persons sick with COVID19 or suspected COVID19 need to self-isolate in their homes
                  until:
                  <ul>
                    <li>10 days since onset of symptoms AND</li>
                    <li>at least 24 hours with no fever (without medication) AND</li>
                    <li>
                      improvement in other symptoms (such as cough, congestion, shortness of breath)
                    </li>
                  </ul>
                </li>
                <li>
                  Note that loss of taste/smell can linger for weeks, you do not need to continue to
                  isolate for these symptoms as long as the other criteria are met
                </li>
                <li>
                  What does self-isolation mean?
                  <ul>
                    <li>
                      Stay in a separate room in your home from other family members. Sleep in a
                      separate bedroom and use a different bathroom, if possible ◦ If you must be
                      around other members of your household, wear a face mask at all times
                    </li>
                    <li>Avoid direct contact with pets, if possible</li>
                    <li>Do not share items such as eating utensils, drinking glasses, or towels</li>
                    <li>Disinfect commonly touched surfaces (such as doorknobs) frequently</li>
                    <li>
                      Wash your hands frequently, especially after coughing/sneezing or touching
                      your face
                    </li>
                  </ul>
                </li>
                <li>
                  <a
                    href="https://www.cdc.gov/coronavirus/2019-ncov/if-you-are-sick/steps-when-sick.html"
                    target="_blank"
                    rel="noreferrer"
                  >
                    https://www.cdc.gov/coronavirus/2019-ncov/if-you-are-sick/steps-when-sick.html
                  </a>
                </li>
              </ul>
              <p>
                COVID-19 has proven to be a different experience for everyone, but common symptoms
                include:
              </p>
              <ul className="list-group pl-2">
                <li>Fever ({">"}100.4) or chills</li>
                <li>Body aches, headache</li>
                <li>Sore throat, congestion, runny nose</li>
                <li>Loss or change in sense of taste or smell</li>
                <li>Nausea, vomiting, or diarrhea</li>
              </ul>
              <footer>
                <p>If you have any of these symptoms, please get testing.</p>
              </footer>
            </section>
            <section>
              <header className="text-center my-4">
                <h4>ASYMPTOMATIC PERSONS TESTING POSITIVE FOR COVID-19</h4>
              </header>
              <p>
                If you don’t have any symptoms but tested positive, you must self-isolate for 10
                days from your positive test. Just because you don’t have symptoms does NOT mean you
                can’t spread the virus.
              </p>
            </section>
            <section>
              <header className="text-center my-4">
                <h4>Resources For FAQs:</h4>
              </header>
              <ul>
                <li>
                  <a
                    href="http://www.accesskent.com/Health/coronavirus.htm"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Kent County Health Dept
                  </a>
                </li>
                <li>
                  <a
                    href="http://www.cdc.gov/coronavirus/2019-nCoV/index.html"
                    target="_blank"
                    rel="noreferrer"
                  >
                    CDC
                  </a>
                </li>
                <li>
                  <a href="http://www.michigan.gov/coranvirus" target="_blank" rel="noreferrer">
                    State Of Michigan
                  </a>
                </li>
                <li>
                  <a href="http://www.spectrumhealth.org/covid19" target="_blank" rel="noreferrer">
                    Spectrum Health
                  </a>
                </li>
                <li>
                  <a
                    href="http://www.mercyhealth.com/health-and-wellness/covid-19/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Mercy Health Saint Marys
                  </a>
                </li>
                <li>
                  <a
                    href="http://metrohealth.net/covid-19-updates/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Metro Health Grand Rapids
                  </a>
                </li>
              </ul>
              <p>
                Information provided by the Michgian Dept of Health and Human Services COVID19
                Response Team regarding additional resources:
              </p>
              <ul className="list-group pl-2">
                <li>
                  If you are feeling anxious or looking for mental health and wellness resources,
                  visit
                  <a href="https://www.Michigan.gov/StayWell" target="_blank" rel="noreferrer">
                    www.Michigan.gov/StayWell{" "}
                  </a>
                  for hotlines, texting resources, and mindfulness tools.
                </li>
                <li>
                  To find resources in your community and sign up for assistance programs, go to
                  <a href="https://www.Michigan.gov/MIBridges" target="_blank" rel="noreferrer">
                    www.Michigan.gov/MIBridges
                  </a>
                  .
                </li>
                <li>
                  For additional help locating food, housing, childcare, and other community
                  services, call 2-1-1 at (844) 587-2485 or visit
                  <a href="" target="_blank" rel="noreferrer">
                    www.mi211.org
                  </a>
                  .
                </li>
                <li>
                  You can also call the
                  <strong>
                    Michigan Department of Health and Human Services COVID-19 public hotline at
                    888-535-6136.
                  </strong>
                  The hotline is open Monday to Friday from 8 a.m. to 5 p.m.
                </li>
              </ul>
            </section>
          </article>
        </div>
      </div>
    </div>
  </div>
);
