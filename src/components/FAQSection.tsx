import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

// Interface for individual FAQ item data
interface FAQItemData {
  question: string;
  answer: React.ReactNode; // Allow React nodes for answers with formatting
}

// Interface for the props of the individual FAQItem component
interface FAQItemProps extends FAQItemData {}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-gray-900">{question}</span>
        {isOpen ? <ChevronUp className="h-5 w-5 text-primary-500" /> : <ChevronDown className="h-5 w-5 text-gray-400" />}
      </button>
      {isOpen && (
        <div className="mt-3 text-base text-gray-600 space-y-3"> {/* Added space-y-3 for better paragraph spacing */}
          {answer}
        </div>
      )}
    </div>
  );
};

// Interface for the props of the main FAQSection component
interface FAQSectionProps {
  faqs?: FAQItemData[]; // Make faqs optional
}

// Default FAQs (used if no faqs prop is provided)
const defaultFaqs: FAQItemData[] = [
  {
    question: "What is an Exosome?",
    answer: (
      <>
        <p>Exosomes are tiny, naturally occurring extracellular vesicles secreted by cells. They’ve become a revolutionary advancement in skincare and regenerative aesthetics due to their ability to repair and rejuvenate the skin at a cellular level.</p>
        <p>Exosomes act like microscopic messengers, encouraging your skin to regenerate by stimulating the production of collagen and elastin – essential for firmness, elasticity, and a more youthful complexion. They also combat external stressors that contribute to ageing and inflammation, making them one of the most effective ingredients in modern aesthetic treatments.</p>
      </>
    )
  },
  {
    question: "How do exosomes compare to other skin treatments?",
    answer: (
      <>
        <p>Exosomes offer deeper regenerative benefits than many standard skincare treatments. For example, they are now being studied for their effectiveness in treating atopic dermatitis – a chronic inflammatory skin condition affecting 1 in 3 people globally.</p>
        <p>By helping to repair the skin barrier, exosomes reduce inflammation, support hydration, and promote long-term skin health. Their ability to communicate between cells and transfer healing molecules gives them a distinct advantage over many traditional products.</p>
      </>
    )
  },
  {
    question: "What are the benefits of using exosomes on the skin?",
    answer: (
      <>
        <p>At Beyond The Face, we consistently see the following five key benefits:</p>
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li><strong>Cellular Communication</strong> – Exosomes transfer proteins, lipids, and nucleic acids between cells, stimulating rejuvenation.</li>
          <li><strong>Skin Regeneration</strong> – They enhance collagen and elastin production, improving skin tone, texture, and firmness.</li>
          <li><strong>Anti-Inflammatory Effects</strong> – Exosomes reduce skin inflammation, aiding in conditions like eczema and psoriasis.</li>
          <li><strong>Enhanced Skin Barrier Function</strong> – They boost ceramide production, improving hydration and defence against environmental stress.</li>
          <li><strong>Antioxidant Protection</strong> – Exosomes neutralise free radicals, helping to prevent premature ageing caused by UV damage and pollution.</li>
        </ul>
      </>
    )
  },
  {
    question: "What is the 5 Billion EXO Skin Support Treatment?",
    answer: (
      <>
        <p>The 5 Billion EXO Skin Support is an advanced facial treatment available at Beyond The Face, Tunbridge Wells. It combines the Vivace RF microneedling device with 5 billion ASCE+ exosomes applied between each microneedling pass.</p>
        <p>Treatment highlights:</p>
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li>Contours and tightens the chin, jowls, and upper face</li>
          <li>Gentle settings used around the eye area</li>
          <li>Five passes at varying depths for optimal absorption</li>
          <li>Minimal downtime, glowing skin from the first session</li>
          <li>Course of five treatments recommended, every two weeks</li>
        </ul>
      </>
    )
  },
  {
    question: "What is the 20 Billion EXO ExoNature Deep Lift?",
    answer: (
      <>
        <p>Available at Beyond the Face Clinic, this is Maryna’s most intensive exosome-based treatment. It combines the world-leading Vivace RF microneedling technology with an impressive 20 billion exosomes for enhanced skin regeneration.</p>
        <p>Treatment steps:</p>
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li>Full skin consultation and cleanse</li>
          <li>Contouring and tightening of the chin, jowls, upper face, and under-eye area</li>
          <li>Five tailored microneedling passes at varying depths</li>
          <li>Exosome gel applied between each pass</li>
          <li>Minimal downtime with immediate lift and radiance</li>
        </ul>
        <p>💡 For optimal results, five sessions are recommended, spaced two weeks apart.</p>
      </>
    )
  },
  {
    question: "Is microneedling RF with exosomes suitable post-surgery?",
    answer: (
      <>
        <p>Yes – and it’s highly recommended. Consultant Surgeon Mr Darryl Coombes states:</p>
        <blockquote className="border-l-4 border-gray-300 pl-4 italic my-2">
          “I’d say it’s almost essential… Getting further support and fine-tuning of the surgical treatment courtesy of Maryna is beneficial in so many ways.”
        </blockquote>
        <p>This treatment is ideal as a postoperative skin support, enhancing healing and refining results following procedures such as the Apex Facelift®.</p>
      </>
    )
  },
  {
    question: "What is the Apex Facelift®?",
    answer: (
      <>
        <p>Developed by Mr Darryl Coombes, the Apex Facelift® is a subtle, modern facial surgery designed to rejuvenate without the obvious signs of surgery.</p>
        <blockquote className="border-l-4 border-gray-300 pl-4 italic my-2">
          “Things are subtler now – and people don’t want to be in hospital for a night or two. My Apex facelift makes people look refreshed – and not like they’ve actually had any surgical work done!”
        </blockquote>
        <p>Microneedling RF + exosome treatments are the perfect complement, helping maintain and enhance surgical outcomes.</p>
      </>
    )
  },
  {
    question: "Are you the only practitioner using exosomes in Tunbridge Wells?",
    answer: <p>To the best of our knowledge, Maryna is the only aesthetic professional in Tunbridge Wells currently combining Vivace RF microneedling with exosome therapy in this advanced format.</p>
  },
  {
    question: "How many exosome treatments do you recommend?",
    answer: <p>Typically, a series of five treatments provides the best results. However, every treatment plan is personalised following a detailed consultation. Patients who have undergone surgery will benefit from the same protocol, with adaptations based on healing and skin condition.</p>
  },
  {
    question: "Can I see real results from these treatments?",
    answer: <p>Absolutely. Maryna has proudly treated many clients with exceptional outcomes. You can view case studies, before-and-after photos, and feedback on our social media pages. Results are often visible immediately, with improved skin quality, lift, and glow.</p>
  },
  {
    question: "Do you offer a consultation before treatment?",
    answer: (
      <>
        <p>Yes. All patients must attend an initial consultation with Maryna before treatment.</p>
        <p>💷 Consultation fee: £50</p> {/* Keeping this price as it's specific to the consultation */}
        <p>✅ This fee is fully redeemable against the cost of your first treatment.</p>
      </>
    )
  },
];


const FAQSection: React.FC<FAQSectionProps> = ({ faqs = defaultFaqs }) => { // Use provided faqs or default
  // The faqs array is now passed as a prop or defaults to defaultFaqs

  return (
    <div className="bg-gray-50 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-serif font-bold text-gray-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Your questions about Exosome treatments answered.
          </p>
        </div>
        <div className="mt-12 max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;