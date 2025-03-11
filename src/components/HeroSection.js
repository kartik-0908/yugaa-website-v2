import React, { useState, useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";

function HeroSection() {

  const images = ["/images/Chat-bot2.gif",];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ "namespace": "30min" });
      cal("ui", { "styles": { "branding": { "brandColor": "#000000" } }, "hideEventTypeDetails": false, "layout": "month_view" });
    })();
  }, [])

  return (
    <section className="hero-section">
      <div>
        <h1 className="hero-heading">
          "Human-Like AI Interactions for Voice & Chat—Engage, Support, and Convert"
        </h1>
        <p className="hero-paragraph">
          "Rex AI offers lifelike AI voice and chat agents to enhance customer engagement, streamline support, and boost sales. Experience real-time conversations tailored to each user."

        </p>
        <div className="hero-buttons">
          <button 
          data-cal-namespace="30min" data-cal-link="Rex-ai-demo/30min" data-cal-config='{"layout":"month_view"}' className="hero-button-primary"
            >
            <i className="fas fa-arrow-right" style={{ marginRight: "8px" }}></i>
            Get Started with Rex AI
          </button>
          {/* <button className="hero-button-secondary">
            <i className="fas fa-calendar-alt" style={{ marginRight: "8px" }}></i>
            Request a Demo
          </button> */}
        </div>
      </div>
      <div className="hero-image">
        <img
          src={images[currentImageIndex]}
          alt="Slideshow"
          className="sliding-image"
        />
      </div>
    </section>
  );
}

export default HeroSection;
