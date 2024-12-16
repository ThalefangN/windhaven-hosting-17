import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQSection = () => {
  const faqs = [
    {
      question: "How do I get started with Botsedu Learn?",
      answer: "Simply create an account, browse our course catalog, and enroll in any course that interests you. You can start learning immediately after enrollment.",
    },
    {
      question: "Are the certificates recognized?",
      answer: "Yes, our certificates are industry-recognized and can be added to your professional portfolio and LinkedIn profile.",
    },
    {
      question: "Can I learn at my own pace?",
      answer: "Absolutely! Most of our courses are self-paced, allowing you to learn according to your schedule and comfort level.",
    },
    {
      question: "What support options are available?",
      answer: "We offer 24/7 technical support, instructor assistance, and a community forum where you can interact with other learners.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-24">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-windhaven-primary to-windhaven-secondary bg-clip-text text-transparent">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-windhaven-primary/20 rounded-lg bg-gradient-to-b from-windhaven-dark/50 to-windhaven-dark/30 px-6"
            >
              <AccordionTrigger className="text-white hover:text-windhaven-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-400">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};