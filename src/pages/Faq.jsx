import { useState } from "react";
import { ChevronDown } from "lucide-react";

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
    <section className="w-full flex justify-center px-4">
      <div className="w-full max-w-7xl py-12">

        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Frequently Asked{" "}
            <span className="text-[#45a388]">Questions</span>
          </h2>
          <p className="text-gray-500 mt-2">
            Customer service management.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <FAQBox
                key={i}
                index={i}
                openIndex={openIndex}
                toggle={toggle}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <FAQBox
                key={i + 10}
                index={i + 10}
                openIndex={openIndex}
                toggle={toggle}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const FAQBox = ({ question, answer, index, openIndex, toggle }) => {
  const isOpen = openIndex === index;

  return (
    <div
      onClick={() => toggle(index)}
      className="bg-[#F7F7FB] border border-gray-200 rounded-lg px-5 py-4 cursor-pointer transition hover:shadow-sm"
    >
      <div className="flex justify-between items-center">
        <p className="text-sm md:text-base font-medium text-gray-800">
          {question}
        </p>
        <ChevronDown
          className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-40 mt-3" : "max-h-0"
        }`}
      >
        <p className="text-sm text-gray-600 leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
};

export default FAQ;
