import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const faqs = [
  {
    question: "Q. What is your company about?",
    answer:
      "Our company specializes in providing top-notch tech solutions, including software development, data analysis, and project management.",
  },
  {
    question: "Q. How can I apply for a job?",
    answer:
      "You can apply for a job by visiting our Careers page, finding a job that suits your skills, and clicking on the 'More Details' button to apply.",
  },
  {
    question: "Q. What are the working hours?",
    answer:
      "Our standard working hours are from 9 AM to 6 PM, Monday to Friday. However, flexible working hours are available based on the role.",
  },
  {
    question: "Q. Do you offer remote work options?",
    answer:
      "Yes, we offer remote work options for many of our positions. Please check the job description for more details.",
  },
  {
    question: "Q. What benefits do you offer?",
    answer:
      "We offer a comprehensive benefits package, including health insurance, retirement plans, and professional development opportunities.",
  },
];

const FAQPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-black text-white p-10 flex flex-col items-center">
        <div className="max-w-5xl w-full">
          <div className="text-4xl mt-30px mb-60px text-center">FAQs</div>
          <h1 className="text-3xl font-bold mb-10 mt-8 text-center">
            <span className="text-blue-500">
              Frequently Asked Questions
            </span>
          </h1>

          <div className="faq-list-container p-4">
            <div className="faqs grid grid-cols-1 gap-6">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="faq p-6 bg-gray-900 shadow-lg rounded-lg border border-gray-700 transition-transform transform hover:scale-105"
                >
                  <div
                    className="flex justify-between items-center cursor-pointer "
                    onClick={() => toggleFAQ(index)}
                  >
                    <h3 className="question text-xl font-semibold text-white">
                      {faq.question}
                    </h3>
                    <span className="text-blue-500">
                      {activeIndex === index ? "-" : "+"}
                    </span>
                  </div>
                  {activeIndex === index && (
                    <div className="answer mt-4 text-gray-300">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FAQPage;
