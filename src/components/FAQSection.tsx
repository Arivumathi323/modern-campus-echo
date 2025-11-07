import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Are there scholarships available?",
    answer: "Yes! We offer merit-based scholarships up to 100% for eligible students. Scholarships are awarded based on academic performance, entrance exam scores, and other criteria. Contact our admissions team for detailed information about scholarship opportunities.",
  },
  {
    question: "Is the hostel safe and comfortable?",
    answer: "Absolutely. Our hostels feature 24/7 security, CCTV surveillance, air-conditioned rooms, Wi-Fi connectivity, mess facilities, and recreational areas. We ensure a safe, comfortable living environment for all students with separate facilities for boys and girls.",
  },
  {
    question: "Does the college have a dedicated placement cell?",
    answer: "Yes! Our dedicated placement cell works year-round to bring top companies to campus. We provide 100% placement assistance, including resume building, interview preparation, soft skills training, and industry networking opportunities. Our students consistently receive excellent placement offers.",
  },
  {
    question: "What kind of labs and equipment do you have?",
    answer: "We have state-of-the-art smart labs equipped with the latest technology and software tools. Our facilities include AI/ML labs, cybersecurity labs, data science labs, robotics labs, and more. All labs are regularly updated to match industry standards and provide hands-on learning experiences.",
  },
  {
    question: "Are internships part of the curriculum?",
    answer: "Yes! Paid internships are integrated into our curriculum. We have partnerships with leading companies that offer summer internships, industry projects, and co-op programs. These opportunities help students gain real-world experience and often lead to full-time job offers.",
  },
  {
    question: "What support is available for students?",
    answer: "We provide comprehensive support including academic mentoring, career counseling, personal development workshops, mental health support, and industry mentorship programs. Our faculty and staff are committed to ensuring every student succeeds academically and personally.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Find answers to common questions about our programs and facilities
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white border-2 border-border rounded-lg px-6 hover:border-primary/20 transition-colors"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary text-base md:text-lg py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
