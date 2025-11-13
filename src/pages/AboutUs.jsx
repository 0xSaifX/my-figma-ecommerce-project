import React from "react";
import abt from "../assets/Abt1.png";
import abt2 from "../assets/Abtup.png";
import abt3 from "../assets/Abtdown.png";
import mariya from "../assets/mariya.jpg";
import { BadgeDollarSignIcon, BadgePercent } from "lucide-react";
import { FaHandHoldingMedical, FaStar, FaTruckMoving } from "react-icons/fa";
import team1 from "../assets/team1.jpg";
import team2 from "../assets/team2.jpg";
import team3 from "../assets/team3.jpg";
import team4 from "../assets/team4.jpg";

function About() {
  return (
    <div
      style={{
        margin: "3rem 3rem",
        maxWidth: "1200px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "2rem",
          width: "100%",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "1rem",
            width: "100%",
            alignItems: "stretch",
          }}
        >
          <img
            src={abt}
            alt=""
            style={{
              borderRadius: "5px",
              width: "60%",
              objectFit: "cover",
              height: "100%",
            }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              width: "40%",
            }}
          >
            <img
              src={abt2}
              alt=""
              style={{
                borderRadius: "5px",
                width: "100%",
                height: "49%",
                objectFit: "cover",
              }}
            />
            <img
              src={abt3}
              alt=""
              style={{
                borderRadius: "5px",
                width: "100%",
                height: "49%",
                objectFit: "cover",
              }}
            />
          </div>
        </div>

        <div style={{ textAlign: "left" }}>
          <h3 style={{ marginTop: "2rem" }}>
            Who We <span className="green">Are?</span>
          </h3>
          <p style={{ marginTop: "1rem", fontSize: "12px", lineHeight: "1.7" }}>
            <b>
              WE'RE HERE TO SERVE ONLY THE BEST PRODUCTS FOR YOU. ENRICHING YOUR
              HOMES WITH THE BEST ESSENTIALS.
            </b>
          </p>
          <p style={{ marginTop: "1rem", fontSize: "13px", lineHeight: "1.7" }}>
            Lorem ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text
            since the 1500s. It has survived not only five centuries, but also
            the leap into electronic typesetting, remaining essentially
            unchanged.
          </p>
          <p style={{ marginTop: "1rem", fontSize: "13px", lineHeight: "1.7" }}>
            Lorem Ipsum has survived not only five centuries, but also the leap
            into electronic typesetting, remaining essentially unchanged.
          </p>
          <p style={{ marginTop: "1rem", fontSize: "13px", lineHeight: "1.7" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text
            since the 1500s, type and scrambled it to make a type specimen book.
          </p>
        </div>
      </div>

      <div style={{ marginTop: "4rem", width: "35%", textAlign: "center" }}>
        <h2>
          Our <span className="green">Services</span>
        </h2>
        <p style={{ fontSize: "16px" }}>
          Customer service should not be a department. It should be the entire
          company.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "1rem",
          width: "100%",
          justifyItems: "center",
          padding: "2rem 0",
          marginTop: "1rem",
        }}
      >
        {[
          {
            icon: <FaTruckMoving color="#45a388" size={32} />,
            title: "Free Shipping",
            text: "Free shipping on all US orders or orders above $200",
          },
          {
            icon: <FaHandHoldingMedical color="#45a388" size={32} />,
            title: "24X7 Support",
            text: "Contact us 24 hours a day, 7 days a week",
          },
          {
            icon: <BadgePercent color="#45a388" size={32} />,
            title: "30 Days Return",
            text: "Simply return it within 30 days for an exchange",
          },
          {
            icon: <BadgeDollarSignIcon color="#45a388" size={32} />,
            title: "Payment Secure",
            text: "Contact us 24 hours a day, 7 days a week",
          },
        ].map((service, i) => (
          <div
            key={i}
            style={{
              border: "1px solid #e5e7eb",
              borderRadius: "5px",
              padding: "1rem",
              textAlign: "center",
              width: "260px",
              height: "10rem",
              boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
            }}
          >
            {service.icon}
            <h4>{service.title}</h4>
            <p style={{ fontSize: "0.8rem" }}>{service.text}</p>
          </div>
        ))}
      </div>

      <div
        style={{
          width: "100%",
          background: "#eee",
          borderRadius: "5px",
          marginTop: "4rem",
          display: "flex",
          justifyContent: "center",
          padding: "2rem 0",
        }}
      >
        <div style={{ maxWidth: "600px", textAlign: "center" }}>
          <img
            src={mariya}
            alt=""
            style={{ width: "70px", height: "70px", borderRadius: "50%" }}
          />
          <p style={{ lineHeight: "1.5", fontSize: "14px", padding: "10px" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text.
          </p>
          <h3>
            <span className="green">Mariya Klinton</span>
          </h3>
          <h4>CEO</h4>
          <p style={{ color: "orange" }}>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </p>
        </div>
      </div>

      <div style={{ marginTop: "4rem", textAlign: "center" }}>
        <h2>
          Our <span className="green">Team</span>
        </h2>
        <p style={{ fontSize: "16px", marginTop: "0.5rem" }}>
          Meet our expert team members.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "1.5rem",
          width: "100%",
          justifyItems: "center",
          padding: "2rem 0",
        }}
      >
        {[team1, team2, team3, team4, team2].map((img, i) => (
          <div
            key={i}
            style={{
              borderRadius: "5px",
              padding: "1rem",
              width: "220px",
              textAlign: "center",
              background: "#fff",
            }}
          >
            <img
              src={img}
              alt=""
              style={{
                width: "100%",
                height: "220px",
                borderRadius: "5px",
                objectFit: "cover",
              }}
            />
            <h4 style={{ marginTop: "0.5rem" }}>
              {["William Dalin", "Emma Welson", "Benjamin Martin", "Amelia Martin", "Emma Welson"][i]}
            </h4>
            <p style={{ fontSize: "0.8rem" }}>
              {["Co-Founder", "Manager", "Leader", "Leader", "Manager"][i]}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
