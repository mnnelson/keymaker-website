// components/FAQ.tsx
'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqData = [
  {
    question: "How do I start a new project?",
    answer: "The best way to start is by filling out our contact form below. We'll schedule an initial discovery call to understand your needs and provide a tailored proposal.",
  },
  {
    question: "What is your pricing model?",
    answer: "We primarily work on a fixed-bid project basis for clearly defined scopes, or on a retainer for ongoing development and support. We'll discuss the best model for your needs during our consultation.",
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary widely based on scope and complexity. Simple MVPs may take 4-8 weeks, while complex platforms can take 3-6 months. We provide detailed timelines in the proposal phase.",
  },
  {
    question: "Who will I be working with on the project?",
    answer: "You will be assigned a dedicated Project Manager who serves as your single point of contact, along with a team of experienced designers and developers specific to your project's needs.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-key-text mb-2">
            Frequently Asked Questions (FAQs)
          </h2>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqData.map((item, index) => (
            <div key={index} className="border-b border-gray-200 py-4">
              <button
                className="flex justify-between items-center w-full text-left font-semibold text-lg text-key-text hover:text-key-primary transition-colors duration-200"
                onClick={() => toggleAccordion(index)}
              >
                {item.question}
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-key-primary" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="mt-3 pr-8 text-gray-600">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;