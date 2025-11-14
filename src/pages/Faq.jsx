import { ChevronDown } from "lucide-react";
import React, { useState } from "react";



function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const faqs = [
  {
    question: "What is the multi vendor services?",
    answer:
      "Multi-vendor service allows different sellers to register and sell their products within one platform. Customers can buy from multiple sellers in a single checkout.",
  },
  {
    question: "How to buy many products at a time?",
    answer:
      "You can add multiple products to your cart by clicking the 'Add to Cart' button on each product. Once finished, proceed to checkout and pay for all items together.",
  },
  {
    question: "Refund policy for customer.",
    answer:
      "Customers can request a refund within 7 days of purchase. Refunds are processed after reviewing the product condition and payment method used.",
  },
  {
    question: "Exchange policy for customer.",
    answer:
      "Customers can exchange products within 7 days if the item is damaged, defective, or not as described. Original packaging must be intact.",
  },
  {
    question: "Give away products available.",
    answer:
      "Giveaway products are limited promotional items offered for free on special occasions, discounts, or loyalty bonuses.",
  },
];


  return (
    <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <div style={{ maxWidth: "1200px", width: "100%", margin: "3rem 4rem" }}>

        <div style={{ textAlign: "center", padding: "2rem 1rem" }}>
          <h2 style={{ fontSize: "2rem", fontWeight: "600", marginBottom: "0.5rem" }}>
            Frequently Asked <span style={{ color: "#45a388" }}>Questions</span>
          </h2>
          <p style={{ color: "#555" }}>Customer service management.</p>
        </div>

        <main
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1.5rem",
            padding: "0 1rem",
          }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            {faqs.map((faq, i) => (
              <FAQBox
                key={i}
                question={faq.question}
                answer={faq.answer}
                index={i}
                openIndex={openIndex}
                toggle={toggle}/>))}
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            {faqs.map((faq, i) => (
              <FAQBox
                key={i + 10}
                question={faq.question}
                answer={faq.answer}
                index={i + 10}
                openIndex={openIndex}
                toggle={toggle}/>))}
          </div>
        </main>
      </div>
    </div>
  );
}

const FAQBox = ({ question, answer, index, openIndex, toggle }) => {
  const isOpen = openIndex === index;

  return (
    <div
      onClick={() => toggle(index)}
      style={{
        background: "#F7F7FB",
        padding: "1rem 1.2rem",
        borderRadius: "8px",
        border: "1px solid #EEE",
        cursor: "pointer",
        fontSize: "15px",
        color: "#333",
        transition: "all 0.3s ease",
      }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span>{question}</span>
        <span style={{ fontSize: "18px", transform: isOpen ? "rotate(180deg)" : "rotate(0)",
             transition: "0.3s" }}>
          <ChevronDown/>
        </span>
      </div>

      {isOpen && (
        <div style={{ marginTop: "0.8rem", color: "#666", lineHeight: "1.5" }}>
          {answer}
        </div>
      )}
    </div>
  );
};

export default FAQ;