import React from "react";
import { FaQuestionCircle } from "react-icons/fa";

function App() {
  const faqs = [
    {
      question: "What is Wingspan?",
      answer: "Wingspan is a competitive, medium-weight, card-driven, engine-building board game from Stonemaier Games. It's designed by Elizabeth Hargrave and features birds from all around the world.",
    },
    {
      question: "How many people can play Wingspan?",
      answer: "Wingspan can be played by 1-5 players.",
    },
    {
      question: "How long does a game of Wingspan take?",
      answer: "A typical game of Wingspan takes about 40-70 minutes to play.",
    },
    {
      question: "Is there a digital version of Wingspan?",
      answer: "Yes, there is a digital version of Wingspan available on various platforms, including PC and mobile devices.",
    },
    {
      question: "Can children play Wingspan?",
      answer: "Wingspan is recommended for ages 10 and up due to the strategic depth and complexity of the game.",
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-6">
        Wingspan FAQ <FaQuestionCircle className="inline-block" />
      </h1>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="p-4 rounded-lg bg-blue-100 shadow-lg">
            <h2 className="text-2xl font-semibold mb-2">{faq.question}</h2>
            <p className="text-lg">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
