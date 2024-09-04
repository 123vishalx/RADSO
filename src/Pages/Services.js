import React from "react";
import Navbar from "../components/Navbar";
import "../styles/services.css";
import dotBg from "../assets/dot-bg.png";
import chooseImg from "../assets/choose.jpeg";
import offer1Img from "../assets/offer-1.jpg";
import offer2Img from "../assets/offer-2.avif";
import offer3Img from "../assets/offer-3.avif";
import offer4Img from "../assets/offer-4.avif";
import offer5Img from "../assets/offer-5.jpg";
import offer6Img from "../assets/offer-6.jpg";
import offer7Img from "../assets/offer-7.avif";
import modern1Img from "../assets/modern-1.jpg";
import modern2Img from "../assets/modern-2.avif";
import modern3Img from "../assets/modern-3.jpg";
import "@fortawesome/fontawesome-free/css/all.min.css"; 
import Footer from "../components/Footer";

function Services() {
  return (
    <div>
      <Navbar />
      <section className="section__container choose__container" id="choose">
        <img className="choose__bg" src={dotBg} alt="bg" />
        <div className="choose__content">
          <h2 className="section__header">Our Services</h2>
          <p className="section__subheader">
            Discover Our Comprehensive Range of Services Designed to Elevate
            Your Business
          </p>
          <div className="choose__grid">
            <div className="choose__card">
              <span>
                <i className="fas fa-shipping-fast"></i>
              </span>
              <h4>Automation Solutions</h4>
              <p>
                Implement state-of-the-art automation systems to streamline your
                operations and increase productivity.
              </p>
            </div>
            <div className="choose__card">
              <span>
                <i className="fas fa-tasks"></i>
              </span>
              <h4>System Integration</h4>
              <p>
                Seamlessly integrate our solutions with your existing systems
                for optimal performance and minimal disruption.
              </p>
            </div>
            <div className="choose__card">
              <span>
                <i className="fas fa-headset"></i>
              </span>
              <h4>24/7 Technical Support</h4>
              <p>
                Receive round-the-clock support from our dedicated team to
                ensure your systems run smoothly.
              </p>
            </div>
            <div className="choose__card">
              <span>
                <i className="fas fa-sync-alt"></i>
              </span>
              <h4>Maintenance & Upgrades</h4>
              <p>
                Keep your systems up-to-date with our regular maintenance and
                upgrade services, ensuring long-term efficiency.
              </p>
            </div>
          </div>
        </div>
        <div className="choose__image">
          <img src={chooseImg} alt="choose" />
        </div>
      </section>

      <section className="offer__container" id="offer">
        <div className="offer__grid__top">
          <img src={offer1Img} alt="offer" />
          <img src={offer2Img} alt="offer" />
          <img src={offer3Img} alt="offer" />
          <div className="offer__content">
            <h2 className="section__header">Core Offerings</h2>
            <p className="section__subheader">
              Unlock Special Deals on Advanced Automation Solutions
            </p>
          </div>
        </div>
        <div className="offer__grid__bottom">
          <img src={offer4Img} alt="offer" />
          <img src={offer5Img} alt="offer" />
          <img src={offer6Img} alt="offer" />
          <img src={offer7Img} alt="offer" />
        </div>
      </section>

      <section className="section__container modern__container" id="modern">
        <div className="modern__image">
          <img src={dotBg} alt="bg" className="modern__bg" />
          <img src={modern1Img} alt="modern" className="modern__img-1" />
          <img src={modern2Img} alt="modern" className="modern__img-2" />
          <img src={modern3Img} alt="modern" className="modern__img-3" />
        </div>
        <div className="modern__content mt-12 md:mt-24">
          <h2 className="section__header">Advanced Automation Solutions</h2>
          <p className="section__subheader">
            Empower Your Business with Our Cutting-Edge Automation Technologies.
            We Help You Stay Ahead in the Industry with Modern Solutions.
          </p>
          <div className="modern__grid">
            <div className="modern__card">
              <span>
                <i className="fas fa-cogs"></i>
              </span>
              <p>
                Our team specializes in creating customized automation systems
                tailored to your business needs.
              </p>
            </div>
            <div className="modern__card">
              <span>
                <i className="fas fa-lightbulb"></i>
              </span>
              <p>
                We stay at the forefront of technological advancements, ensuring
                your business remains competitive.
              </p>
            </div>
            <div className="modern__card">
              <span>
                <i className="fas fa-chart-line"></i>
              </span>
              <p>
                Our solutions focus on both efficiency and scalability, adapting
                to your growing business demands.
              </p>
            </div>
            <div className="modern__card">
              <span>
                <i className="fas fa-project-diagram"></i>
              </span>
              <p>
                We handle every aspect of the project, from initial design to
                final implementation and support.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Services;
