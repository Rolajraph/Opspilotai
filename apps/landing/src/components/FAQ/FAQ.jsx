import { useState } from "react";
import { PlusCircle, MinusCircle } from "@phosphor-icons/react";
import "./FAQ.css";

const FAQS = [
  {
    question: "What is OpsPilot AI?",
    answer:
      "OpsPilot AI is an AI-powered operations platform that connects your people, processes, systems, and business data into one intelligent workspace, helping organizations automate workflows, centralize knowledge, and make faster, data-driven decisions.",
  },
  {
    question: "Who is OpsPilot AI designed for?",
    answer:
      "OpsPilot AI is built for organizations of all sizes, including healthcare providers, professional service firms, technology companies, educational institutions, manufacturing businesses, and enterprise organizations looking to streamline operations with AI.",
  },
  {
    question: "What can OpsPilot AI help my organization do?",
    answer:
      "OpsPilot AI helps automate routine tasks, generate AI-powered daily briefings, manage documents, summarize meetings, track tasks, detect operational risks, create executive reports, and provide intelligent insights to improve decision-making.",
  },
  {
    question: "Does OpsPilot AI integrate with our existing tools?",
    answer:
      "Yes. OpsPilot AI integrates with popular business platforms such as Microsoft 365, Google Workspace, Outlook, Microsoft Teams, Slack, and other enterprise tools, allowing you to enhance your existing workflows without replacing them.",
  },
  {
    question: "Is my organization's data secure?",
    answer:
      "Absolutely. OpsPilot AI is built with enterprise-grade security, including encrypted data storage, role-based access controls, audit logs, and secure authentication to help protect your organization's information.",
  },
  {
    question: "How long does implementation take?",
    answer:
      "Most organizations can get started within a few days. Our onboarding process helps you connect your existing systems, upload organizational knowledge, and configure AI workflows quickly for immediate value.",
  },
  {
    question: "Can I request a personalized demo before purchasing?",
    answer:
      "Yes. Our team offers personalized product demonstrations tailored to your organization's needs, allowing you to explore how OpsPilot AI can improve your operations before choosing a plan.",
  },
];
/**
 * FAQ accordion — one question open at a time, PlusCircle when
 * collapsed, MinusCircle when expanded.
 */
export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(-1);

  const toggle = (index) => {
    setOpenIndex((current) => (current === index ? -1 : index));
  };

  return (
    <section className="faq">
      <div className="faq__inner">
        <h2 className="faq__heading">
          Frequently Asked{" "}
          <span className="faq__heading-accent">Questions</span>
        </h2>

        <div className="faq__list">
          {FAQS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div className="faq__card" key={item.question}>
                <button
                  type="button"
                  className="faq__question"
                  aria-expanded={isOpen}
                  onClick={() => toggle(index)}
                >
                  <span>{item.question}</span>
                  {isOpen ? (
                    <span className="faq__icon">
                      <MinusCircle size={24} color="#ffffff" weight="bold" />
                    </span>
                  ) : (
                    <span className="faq__icon">
                      <PlusCircle size={24} color="#ffffff" weight="bold" />
                    </span>
                  )}
                </button>
                {isOpen && <p className="faq__answer">{item.answer}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
