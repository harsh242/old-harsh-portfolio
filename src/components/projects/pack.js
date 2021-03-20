import React from "react";
import feelgood from "../../assets/img/projects/feelgood.jpg";

import pack from "../../assets/img/pack/hero.jpg";

import pack03 from "../../assets/img/pack/pack (3).jpg";
import pack04 from "../../assets/img/pack/pack (4).jpg";
import pack05 from "../../assets/img/pack/pack (5).jpg";
import pack06 from "../../assets/img/pack/pack (6).jpg";

import sb1 from "../../assets/img/pack/sb-smartphone.jpg";
import sb2 from "../../assets/img/pack/sb-keypad.jpg";
import sb3 from "../../assets/img/pack/sb-shopkeeper.jpg";

import p2 from "../../assets/img/pack/2.jpg";
import p3 from "../../assets/img/pack/3.jpg";
import p4 from "../../assets/img/pack/4.jpg";
import p5 from "../../assets/img/pack/5.jpg";
import p6 from "../../assets/img/pack/6.jpg";
import p7 from "../../assets/img/pack/7.jpg";
import p8 from "../../assets/img/pack/8.jpg";
import p9 from "../../assets/img/pack/9.jpg";
import p10 from "../../assets/img/pack/10.jpg";
import p11 from "../../assets/img/pack/11.jpg";
import p12 from "../../assets/img/pack/12.jpg";
import p13 from "../../assets/img/pack/13.jpg";

class Pack extends React.Component {
  render() {
    return (
      <div id="pack" className="fade-in">
        <section className="text-gray-700 body-font overflow-hidden">
          <div className="container px-5 pb-10 mx-auto">
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
              <h1 className="text-gray-900 text-5xl title-font font-medium mt-5 mb-2">
                Pack
              </h1>
              <img
                alt="pack hero"
                className=" w-full lg:h-auto  object-scale-down object-center rounded"
                src={pack}
              />
              <div className="case-study mb-5">
                <div className="container pb-5  pt-12 mx-auto">
                  <div className="flex flex-wrap -mx-4 -my-8">
                    <div className=" lg:w-1/3">
                      <div className="h-full flex items-start">
                        <div className="flex-wrap pl-4">
                          <h1 className="title-font text-2xl font-medium text-gray-900 mb-3">
                            Project Type and Role
                          </h1>
                          <p className="leading-relaxed mb-5">
                            Hackathon Project, Product Designer
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className=" lg:w-1/3">
                      <div className="h-full flex items-start">
                        <div className="flex-wrap pl-4">
                          <h1 className="title-font text-2xl font-medium text-gray-900 mb-3">
                            Project Timeline
                          </h1>
                          <p className="leading-relaxed mb-5">
                            Aug 10 - Aug 15 2020 (5 Days)
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className=" lg:w-1/3">
                      <div className="h-full flex items-start">
                        <div className="flex-wrap pl-4">
                          <h1 className="title-font text-2xl font-medium text-gray-900 mb-3">
                            Teammate
                          </h1>
                          <p className="leading-relaxed mb-5">
                            <span className="text-indigo-500 underline font-medium">
                              <a
                                href="https://manindersidhu.co.in/"
                                rel="noopener noreferrer"
                                target="_blank"
                              >
                                Maninderjeet Singh Sidhu
                              </a>
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <section className="text-gray-700 body-font">
                  <div className="container  pt-12 mx-auto">
                    <div className="flex flex-wrap w-full mb-20">
                      <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                        <h1 className="sm:text-2xl text-2xl font-medium title-font mb-2 text-gray-900">
                          About the Project
                        </h1>
                        <div className="h-1 w-20 bg-indigo-500 rounded"></div>
                      </div>
                      <p className="lg:w-1/2 w-full leading-relaxed text-lg">
                        This is a project I did for D'source Corona Design
                        Challenge hosted by <strong>IDC IIT Bombay</strong> and
                        we were one of the <strong>winners</strong> in
                        Interaction Design Domain.
                        <br />
                        <br />
                        <span className="text-indigo-500 underline font-medium">
                          <a
                            href="https://dsourcechallenge.org/results.html#dcdc9r3"
                            rel="noopener noreferrer"
                            target="_blank"
                          >
                            Link to the Challenge Results
                          </a>
                        </span>
                      </p>
                    </div>

                    <div className="flex flex-wrap w-full mb-20">
                      <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                        <h1 className="sm:text-2xl text-2xl font-medium title-font mb-2 text-gray-900">
                          Overview
                        </h1>
                        <div className="h-1 w-20 bg-indigo-500 rounded"></div>
                      </div>
                      <p className="lg:w-1/2 w-full leading-relaxed text-lg">
                        Pack is designed to minimize the crowd at small
                        shops/stores. It facilitates the customers to send the
                        list of items to the shopkeeper and schedule their time
                        for pickup or get it delivered to their home if
                        available. It also has an AR feature which can help one
                        to maintain social distancing.
                      </p>
                    </div>

                    <div className="flex flex-wrap w-full mb-5">
                      <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                        <h1 className="sm:text-2xl text-2xl font-medium title-font mb-2 text-gray-900">
                          Promo Video
                        </h1>
                        <div className="h-1 w-20 bg-indigo-500 rounded"></div>
                      </div>
                      <p className="lg:w-1/2 w-full leading-relaxed text-lg">
                        This is a cinematic promo video I made for the project
                        to get the gist of PACK in under one minute and also to
                        flex my motion design skills.
                      </p>
                    </div>
                  </div>
                </section>
              </div>
              <iframe
                width="1280"
                height="630"
                src="https://www.youtube.com/embed/og0396gUtYc"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                title="Pack Promo Video"
              ></iframe>

              <section className="text-gray-700 body-font">
                <div className="container  pt-24 mx-auto">
                  <div className="flex flex-wrap w-full mb-20">
                    <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                      <h1 className="sm:text-2xl text-2xl font-medium title-font mb-2 text-gray-900">
                        Problem Statement
                      </h1>
                      <div className="h-1 w-20 bg-indigo-500 rounded"></div>
                    </div>
                    <p className="lg:w-1/2 w-full leading-relaxed text-lg">
                      Design a Covid-19 System to manage crowds in public spaces
                      which is to be deployed wherever a group of people need to
                      access services.
                    </p>
                  </div>
                  <div className="flex flex-wrap w-full mb-20">
                    <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                      <h1 className="sm:text-2xl text-2xl font-medium title-font mb-2 text-gray-900">
                        User Segment
                      </h1>
                      <div className="h-1 w-20 bg-indigo-500 rounded"></div>
                    </div>
                    <p className="lg:w-1/2 w-full leading-relaxed text-lg">
                      Small shops/stores <br />
                      - Consumers (Smartphone and Keypad Users) <br />-
                      Shopkeepers
                    </p>
                  </div>
                  <h1 className="text-gray-900 text-4xl title-font font-medium my-5">
                    RESEARCH
                  </h1>
                  <div className="flex flex-wrap w-full mb-20">
                    <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                      <h1 className="sm:text-2xl text-2xl font-medium title-font mb-2 text-gray-900">
                        Discovery
                      </h1>
                      <div className="h-1 w-20 bg-indigo-500 rounded"></div>
                    </div>
                    <p className="lg:w-1/2 w-full leading-relaxed text-lg">
                      To discover what could be a valuable solution for
                      consumers & shopkeepers, we started by trying to
                      understand users in the context of the problem. We used
                      the Value Proposition Canvas strategy.
                    </p>
                  </div>

                  <div className="flex flex-wrap w-full mb-20">
                    <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                      <h1 className="sm:text-2xl text-2xl font-medium title-font mb-2 text-gray-900">
                        Value Proposition Canvas
                      </h1>
                      <div className="h-1 w-20 bg-indigo-500 rounded"></div>
                    </div>
                    <p className="lg:w-1/2 w-full leading-relaxed text-lg">
                      The Value Proposition Canvas is an excellent tool for
                      understanding how customers make decisions, and therefore
                      helps us create offers that they will find appealing.
                    </p>
                    <img
                      alt="pack 3"
                      className=" w-full lg:h-auto  object-scale-down object-center rounded"
                      src={pack03}
                    />
                    <img
                      alt="pack 4"
                      className=" w-full lg:h-auto  object-scale-down object-center rounded"
                      src={pack04}
                    />
                    <img
                      alt="pack 5"
                      className=" w-full lg:h-auto  object-scale-down object-center rounded"
                      src={pack05}
                    />
                    <img
                      alt="pack 6"
                      className=" w-full lg:h-auto  object-scale-down object-center rounded"
                      src={pack06}
                    />
                  </div>
                  <div className="flex flex-wrap w-full mb-20">
                    <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                      <h1 className="sm:text-2xl text-2xl font-medium title-font mb-2 text-gray-900">
                        Story Board
                      </h1>
                      <div className="h-1 w-20 bg-indigo-500 rounded"></div>
                    </div>
                    <p className="lg:w-1/2 w-full leading-relaxed text-lg">
                      After understanding the problem and the customers, we made
                      story boards to understand the journey of a user to buy
                      groceries and how users would interact with this problem
                      in real life.
                    </p>
                    <img
                      alt="pack 4"
                      className=" w-full lg:h-auto  object-scale-down object-center rounded"
                      src={sb1}
                    />
                    <img
                      alt="pack 4"
                      className=" w-full lg:h-auto  object-scale-down object-center rounded"
                      src={sb2}
                    />
                    <img
                      alt="pack 4"
                      className=" w-full lg:h-auto  object-scale-down object-center rounded"
                      src={sb3}
                    />
                    <p className="lg:w-full font-medium w-full leading-relaxed text-lg pt-24">
                      {" "}
                      The story board gave us the insights of journey of a user
                      to buy groceries. And so, after that we created a user
                      flow to accomplish tasks inside of the app. After
                      finalising the flow we went ahead and sketched some of the
                      ideas and then designed the the high fidelity screens.
                    </p>
                  </div>
                  <div className="visual mt-5 mb-5">
                    <h1 className="text-gray-900 text-4xl title-font font-medium my-5">
                      VISUAL DESIGN
                    </h1>
                  </div>
                  <div className="flex flex-wrap w-full mb-5">
                    <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                      <h1 className="sm:text-2xl text-2xl font-medium title-font mb-2 text-gray-900">
                        Solution
                      </h1>
                      <div className="h-1 w-20 bg-indigo-500 rounded"></div>
                    </div>
                    <p className="lg:w-1/2 w-full leading-relaxed text-lg">
                      The application is designed to minimise the crowd at small
                      shops/stores. It facilitate the customers to send the list
                      of items to the shopkeeper and schedule their time for
                      pickup. It also allows them to getting delivered the items
                      at home if available. <br /> <br />
                      The shopkeeper will provide them online billing beforehand
                      so that they could pay digitally or can take that amount
                      of money so no change required. It shows them the safe
                      distance with others using AR technology.
                    </p>
                  </div>
                  <div className="flex flex-wrap w-full mb-5">
                    <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                      <h1 className="sm:text-2xl text-2xl font-medium title-font mb-2 text-gray-900">
                        High Fidelity Screens
                      </h1>
                      <div className="h-1 w-20 bg-indigo-500 rounded"></div>
                    </div>
                    <p className="lg:w-1/2 w-full leading-relaxed text-lg"></p>
                    <img
                      alt="pack 4"
                      className=" w-full lg:h-auto  object-scale-down object-center rounded"
                      src={p2}
                    />
                    <img
                      alt="pack 4"
                      className=" w-full lg:h-auto  object-scale-down object-center rounded"
                      src={p3}
                    />
                    <img
                      alt="pack 4"
                      className=" w-full lg:h-auto  object-scale-down object-center rounded"
                      src={p4}
                    />
                    <img
                      alt="pack 4"
                      className=" w-full lg:h-auto  object-scale-down object-center rounded"
                      src={p5}
                    />
                    <img
                      alt="pack 4"
                      className=" w-full lg:h-auto  object-scale-down object-center rounded"
                      src={p6}
                    />
                    <img
                      alt="pack 4"
                      className=" w-full lg:h-auto  object-scale-down object-center rounded"
                      src={p7}
                    />
                    <img
                      alt="pack 4"
                      className=" w-full lg:h-auto  object-scale-down object-center rounded"
                      src={p8}
                    />
                    <img
                      alt="pack 4"
                      className=" w-full lg:h-auto  object-scale-down object-center rounded"
                      src={p9}
                    />
                    <img
                      alt="pack 4"
                      className=" w-full lg:h-auto  object-scale-down object-center rounded"
                      src={p10}
                    />
                    <img
                      alt="pack 4"
                      className=" w-full lg:h-auto  object-scale-down object-center rounded"
                      src={p11}
                    />
                    <img
                      alt="pack 4"
                      className=" w-full lg:h-auto  object-scale-down object-center rounded"
                      src={p12}
                    />
                    <img
                      alt="pack 4"
                      className=" w-full lg:h-auto  object-scale-down object-center rounded"
                      src={p13}
                    />
                  </div>
                  <div className="flex flex-wrap w-full mb-20 pt-5">
                    <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                      <h1 className="sm:text-2xl text-2xl font-medium title-font mb-2 text-gray-900">
                        Prototype
                      </h1>
                      <div className="h-1 w-20 bg-indigo-500 rounded"></div>
                    </div>
                    <p className="lg:w-1/2 w-full leading-relaxed text-lg">
                      <span className="text-indigo-500 underline font-medium">
                        <a
                          href="https://www.figma.com/proto/ARzbs0PJWHSHjfBkzfztm5/IIT-B-Design-Contest?node-id=59%3A3&viewport=492%2C232%2C0.12451719492673874&scaling=scale-down"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          Click here to open the prototype 📱
                        </a>
                      </span>
                    </p>
                  </div>

                  <div className="flex flex-wrap w-full mb-20 pt-5">
                    <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                      <h1 className="sm:text-2xl text-2xl font-medium title-font mb-2 text-gray-900">
                        Closing Notes 📝
                      </h1>
                      <div className="h-1 w-20 bg-indigo-500 rounded"></div>
                    </div>
                    <p className="lg:w-1/2 w-full leading-relaxed text-lg">
                      - Since we completed everything in just 5 days, the design
                      is not optimal it could have been improved in various
                      aspects.
                      <br /> <br />- Having a good teammate with continous
                      synchronisation can turn out to be really good. We did the
                      project remotely while{" "}
                      <span className="text-indigo-500 underline font-medium">
                        <a
                          href="https://manindersidhu.co.in/"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          Maninder
                        </a>
                      </span>{" "}
                      was at Rajasthan and{" "}
                      <span className="text-indigo-500 underline font-medium">
                        <a
                          href="https://harshbadhai.me/"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          me
                        </a>
                      </span>{" "}
                      in Chhattisgarh at home due to COVID and we were able to
                      complete this project as well as were announced as one of
                      the winners of the Challenge🚀.
                    </p>
                  </div>
                </div>
              </section>

              {/* <h1 className="text-gray-900 text-5xl title-font font-medium mt-5">
                Next
              </h1>
              <Card
                category="UI/UX Design"
                name="Feel Good : Let's get through this together"
                image={feelgood}
                description="A Solution designed to help Millennials & Gen-Z to talk their feelings out and use features that can help them improve their mental health."
                url="https://uxplanet.org/feelgood-ui-ux-case-study-4b10e5cc77f9"
                button="Read Case Study"
              /> */}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Pack;
