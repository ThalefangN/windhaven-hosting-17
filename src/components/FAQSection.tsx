import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQSection = () => {
  const faqs = [
    {
      question: "How fast can I get my server running?",
      answer: "Your server can be up and running in less than 60 seconds after purchase. Our automated deployment system ensures quick and hassle-free setup.",
    },
    {
      question: "What kind of support do you offer?",
      answer: "We provide 24/7 technical support through Discord and email. Our team of experienced gaming enthusiasts is always ready to help.",
    },
    {
      question: "Do you offer DDoS protection?",
      answer: "Yes, all our servers come with enterprise-grade DDoS protection at no additional cost to ensure your games run smoothly.",
    },
    {
      question: "Can I modify server settings?",
      answer: "Absolutely! You have full control over your server settings through our intuitive control panel.",
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