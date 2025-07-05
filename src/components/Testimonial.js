import React from "react";

function TestimonialSection() {
  return (
    <section className="testimonial-section" style={{ background: "#f9fafb", padding: "3rem 0" }}>
      <div className="testimonial-container" style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
        <h2 style={{ fontWeight: 700, fontSize: "2rem", marginBottom: "2rem", color: "#1a202c" }}>
          What our customers say
        </h2>
        <img
          src="/dilip.jpeg"
          alt="Dilip Jain"
          style={{
            width: 80,
            height: 80,
            borderRadius: "50%",
            objectFit: "cover",
            marginBottom: "1.5rem",
            border: "3px solid #eab308"
          }}
        />
        <div className="testimonial-quote" style={{ fontStyle: "italic", fontSize: "1.15rem", marginBottom: "1.5rem", color: "#333" }}>
          <span style={{ fontSize: "2rem", verticalAlign: "top", color: "#eab308" }}>“</span>
          We’ve had a great experience working with the Yugaa AI team.<br /><br />
          Their customer support bot has been a game-changer — it now handles 60% of all new queries, significantly easing the load on our support agents and ensuring customers get prompt responses.<br /><br />
          The onboarding process was simple and seamless, and the Yugaa team has been incredibly supportive throughout.<br /><br />
          What we appreciate the most is the flexibility to run quick experiments and iterate fast on our support workflows — something that’s been possible only because of Yugaa.<br /><br />
          If you’re a fintech looking to enhance your customer support with AI, I’d highly recommend Yugaa.
          <span style={{ fontSize: "2rem", verticalAlign: "bottom", color: "#eab308" }}>”</span>
        </div>
        <div className="testimonial-author" style={{ fontWeight: 600, color: "#222" }}>
          Dilip Jain <span style={{ fontWeight: 400, color: "#666" }}>— Co-founder, Gullak (YC S22)</span>
        </div>
      </div>
    </section>
  );
}

export default TestimonialSection;