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
    <div className="mx-auto max-w-7xl px-4 py-12 text-center">

  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
    <div className="flex gap-4">
      <img
        src={abt}
        alt=""
        className="w-3/5 rounded-md object-cover"
      />
      <div className="flex flex-col gap-4 w-2/5">
        <img
          src={abt2}
          alt=""
          className="h-1/2 rounded-md object-cover"
        />
        <img
          src={abt3}
          alt=""
          className="h-1/2 rounded-md object-cover"
        />
      </div>
    </div>

    <div className="text-left">
      <h3 className="text-xl font-semibold mt-6 lg:mt-0">
        Who We <span className="text-[#45a388]">Are?</span>
      </h3>

      <p className="mt-4 text-sm font-bold leading-relaxed">
        WE'RE HERE TO SERVE ONLY THE BEST PRODUCTS FOR YOU. ENRICHING YOUR
        HOMES WITH THE BEST ESSENTIALS.
      </p>

      <p className="mt-4 text-sm text-gray-600 leading-relaxed">
        Lorem ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry standard dummy text since
        the 1500s.
      </p>

      <p className="mt-4 text-sm text-gray-600 leading-relaxed">
        Lorem Ipsum has survived not only five centuries, but also the leap
        into electronic typesetting.
      </p>

      <p className="mt-4 text-sm text-gray-600 leading-relaxed">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
    </div>
  </div>

  <div className="mt-16 max-w-xl mx-auto">
    <h2 className="text-2xl font-semibold">
      Our <span className="text-[#45a388]">Services</span>
    </h2>
    <p className="mt-2 text-gray-600">
      Customer service should not be a department. It should be the entire company.
    </p>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
    {[
      {
        icon: <FaTruckMoving className="text-[#45a388] text-2xl" />,
        title: "Free Shipping",
        text: "Free shipping on all US orders or orders above $200",
      },
      {
        icon: <FaHandHoldingMedical className="text-[#45a388] text-2xl" />,
        title: "24X7 Support",
        text: "Contact us 24 hours a day, 7 days a week",
      },
      {
        icon: <BadgePercent className="text-[#45a388] text-2xl" />,
        title: "30 Days Return",
        text: "Simply return it within 30 days for an exchange",
      },
      {
        icon: <BadgeDollarSignIcon className="text-[#45a388] text-2xl" />,
        title: "Payment Secure",
        text: "Secure and safe payment system",
      },
    ].map((service, i) => (
      <div
        key={i}
        className="border rounded-md p-6 shadow-sm bg-white text-center"
      >
        <div className="flex justify-center mb-3">{service.icon}</div>
        <h4 className="font-semibold">{service.title}</h4>
        <p className="text-sm text-gray-600 mt-2">{service.text}</p>
      </div>
    ))}
  </div>

  <div className="mt-20 bg-gray-100 rounded-md py-10 px-6 flex justify-center">
    <div className="max-w-md text-center">
      <img
        src={mariya}
        alt=""
        className="w-16 h-16 rounded-full mx-auto"
      />
      <p className="text-sm text-gray-600 mt-4">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </p>
      <h3 className="mt-3 font-semibold text-[#45a388]">Mariya Klinton</h3>
      <p className="text-sm">CEO</p>
      <div className="flex justify-center gap-1 text-orange-400 mt-2">
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} />
        ))}
      </div>
    </div>
  </div>

  <div className="mt-20 text-center">
    <h2 className="text-2xl font-semibold">
      Our <span className="text-[#45a388]">Team</span>
    </h2>
    <p className="text-gray-600 mt-2">Meet our expert team members.</p>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-10">
    {[team1, team2, team3, team4, team2].map((img, i) => (
      <div key={i} className="bg-white rounded-md p-4 text-center">
        <img
          src={img}
          alt=""
          className="w-full h-56 object-cover rounded-md"
        />
        <h4 className="mt-3 font-semibold">
          {["William Dalin", "Emma Welson", "Benjamin Martin", "Amelia Martin", "Emma Welson"][i]}
        </h4>
        <p className="text-sm text-gray-600">
          {["Co-Founder", "Manager", "Leader", "Leader", "Manager"][i]}
        </p>
      </div>
    ))}
  </div>
</div>
  );
}

export default About;
