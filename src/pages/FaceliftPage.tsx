import React, { useState } from 'react'; // Added useState for inline FAQ logic
import { Link } from 'react-router-dom';
// Removed FAQSection import as we are inlining the logic
import { Clock, RefreshCw, Award, Shield, CheckCircle, ChevronDown, ChevronUp, Star } from 'lucide-react'; // Added Star for testimonials
import faceliftImage from '../assets/images/BTF_Facelift.avif';
import planImage from '../assets/images/BTF_Facelift_Plan.avif';
import exosomesImage from '../assets/images/BTF_Facelift_Exosomes.avif';
import apexFaceliftImage from '../assets/images/Apex Facelift.jpg'; // TODO: Rename image file to match Apex Facelift®
import SEO from '../components/SEO';

// Interface for individual FAQ item data (needed for inline logic)
interface FAQItemData {
  question: string;
  answer: React.ReactNode;
}

// Interface for the props of the individual FAQItem component (needed for inline logic)
interface FAQItemProps extends FAQItemData {}

// Inline FAQItem component logic
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
        <div className="mt-3 text-base text-gray-600 space-y-3">
          {answer}
        </div>
      )}
    </div>
  );
};


const FaceliftPage: React.FC = () => {
  // Define structured data for facelift procedures
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": "Apex Facelift® at Beyond The Face",
    "description": "Learn about our advanced Apex Facelift® procedure, a refined, less invasive alternative to traditional facelift surgery designed by Mr Coombes.",
    "about": {
      "@type": "MedicalProcedure",
      "name": "Apex Facelift®",
      "description": "A refined, less invasive alternative to traditional facelift surgery, targeting the early signs of ageing in the lower face and neck.",
      "procedureType": "https://schema.org/SurgicalProcedure",
      "howPerformed": "Performed under local anaesthetic, resulting in less downtime, minimal bruising, and discreet scarring hidden within the hairline and natural folds of the face.",
      "preparation": "A consultation with Mr Coombes will confirm your suitability for the procedure.",
      "followup": "Most clients are back to work within a week. The procedure can be combined with exosome treatments for enhanced results."
    }
  };
  // Benefits remain the same for now, but could be updated if needed
  const benefits = [
    "Natural, subtle results that enhance—not change—your features",
    "Lifts sagging skin and smooths jowls",
    "Improves facial contours and jawline definition",
    "Faster recovery with minimal bruising and swelling",
    "Performed under local anaesthetic—no general anaesthetic required",
    "Long-lasting results with minimal scarring"
  ];

  // Updated FAQs specific to Apex Facelift®
  const faqs: FAQItemData[] = [
    {
      question: "What is the recovery time for the Apex Facelift®?",
      answer: "Most patients experience minimal swelling and bruising, with many returning to work within 7 days. Full recovery depends on individual healing, but downtime is significantly shorter than with traditional facelifts."
    },
    {
      question: "How long do the results last?",
      answer: "The Apex Facelift® delivers long-lasting results—typically 7–10 years—by repositioning deeper facial structures, not just tightening the skin. While it won’t stop ageing, it effectively resets the clock."
    },
    {
      question: "Am I a good candidate for the Apex Facelift®?",
      answer: "If you’re noticing sagging around the lower face or neck and want a more youthful look without general anaesthetic, the Apex Facelift® procedure could be ideal. A consultation with Mr Coombes will confirm your suitability."
    },
    {
      question: "Will the results look natural?",
      answer: "Yes. The Apex Facelift® is designed to enhance your natural features, not alter them. You’ll look fresher and more youthful—like yourself, just well-rested and revitalised."
    }
  ];

  return (
    <div id="top" className="pt-20 bg-gray-50">
      <SEO
        title="Apex Facelift®"
        description="Learn about our advanced Apex Facelift® procedure, a refined, less invasive alternative to traditional facelift surgery designed by Mr Coombes."
        canonicalUrl="/facelifts"
        structuredData={structuredData}
      />
      {/* Hero section */}
      <div className="bg-gradient-to-r from-primary-500 to-secondary-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-serif font-bold sm:text-4xl">Advanced Facelift Procedures</h1>
          <p className="mt-4 text-xl">
            Rejuvenate your appearance with our bespoke facelift procedures, designed to restore natural youthfulness and confidence.
          </p>
        </div>
      </div>

      {/* Overview section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-primary-400 font-semibold tracking-wide uppercase">Procedure Overview</h2>
            <p className="mt-2 text-3xl leading-8 font-serif font-bold text-gray-900 sm:text-4xl">
              Redefine Your Natural Beauty
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Our facelift procedures are tailored to each individual, addressing specific concerns while maintaining a natural appearance.
            </p>
          </div>

          {/* Facelift Images */}
          <div className="mt-12 mb-8">
            <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md mx-auto max-w-4xl">
              <img src={faceliftImage} alt="Facelift procedure example" className="w-full h-auto object-cover"/>
            </div>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">The Beyond the Face Approach</h3>
                <p className="text-gray-600 mb-6">
                  At Beyond the Face, we specialise in the Apex Facelift®—a refined, less invasive alternative to traditional facelift surgery. Designed by Mr Coombes, this advanced technique targets the early signs of ageing in the lower face and neck, lifting and restoring your natural contours without the need for general anaesthetic.
                </p>
                <p className="text-gray-600 mb-6">
                  Unlike traditional facelifts, the Apex Facelift® is performed under local anaesthetic, resulting in less downtime, minimal bruising, and discreet scarring hidden within the hairline and natural folds of the face. It can also be combined with eyelid surgery for complete facial rejuvenation.
                </p>
                <p className="text-gray-600">
                  Every treatment begins with a personalised consultation to understand your goals and tailor a plan that enhances your unique features. The aim is always the same—natural, refreshed results that make you look like you, only younger.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Benefits</h3>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                     <li key={index} className="flex items-start">
                       <CheckCircle className="h-5 w-5 text-primary-400 mr-2 mt-1 flex-shrink-0" />
                       <span className="text-gray-600">{benefit}</span>
                     </li>
                   ))}
                 </ul>

                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="flex items-center border border-gray-200 rounded-lg p-4">
                    <Clock className="h-5 w-5 text-primary-400 mr-3" />
                    <div>
                      <p className="text-sm text-gray-500">Procedure Time</p>
                      <p className="font-medium">90–120 minutes</p>
                    </div>
                  </div>

                  <div className="flex items-center border border-gray-200 rounded-lg p-4">
                    <RefreshCw className="h-5 w-5 text-primary-400 mr-3" />
                    <div>
                      <p className="text-sm text-gray-500">Recovery Time</p>
                      <p className="font-medium">Most patients return to work within 7 days</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Apex Facelift® Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-primary-400 font-semibold tracking-wide uppercase">Apex Facelift®</h2>
            <p className="mt-2 text-3xl leading-8 font-serif font-bold text-gray-900 sm:text-4xl">
              A Less Invasive Approach to Rejuvenation
            </p>
          </div>
          {/* Placeholder Image */}
          <div className="mt-12 mb-8">
            <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md mx-auto max-w-4xl">
              <div className="h-96 relative">
                <img
                  src={apexFaceliftImage}
                  alt="Apex Facelift® procedure"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-secondary-800/10"></div>
              </div>
            </div>
            <p className="text-center text-sm text-gray-500 mt-2">The innovative Apex Facelift® procedure</p>
          </div>
          {/* End Placeholder Image */}
          <div className="mt-12 max-w-4xl mx-auto text-lg text-gray-600 space-y-6">
            <p>
              If you find yourself pulling your skin back in the mirror, it might be time to consider a facelift. The Apex Facelift®, developed by Mr Coombes, is a less invasive alternative to traditional facelifts—performed under local anaesthetic with minimal downtime.
            </p>
            <p>
              This innovative procedure targets sagging in the lower face and neck, smoothing the skin, firming muscle tone, and restoring natural contours—all with barely visible scars and a quicker recovery. It can also be combined with eyelid surgery for full facial rejuvenation.
            </p>
            <p>
              Performed in just 90–120 minutes, most clients are back to work within a week. The Apex Facelift® is designed to help you look like you—just fresher, younger and more confident.
            </p>
          </div>
        </div>
      </section>

      {/* Post-Operative Care Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-primary-400 font-semibold tracking-wide uppercase">Aftercare & Planning</h2>
            <p className="mt-2 text-3xl leading-8 font-serif font-bold text-gray-900 sm:text-4xl">
              Supporting Your Surgical Journey
            </p>
          </div>
          {/* Inserted Image Block */}
          <div className="mt-12 mb-8">
            <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md mx-auto max-w-4xl">
              <img src={planImage} alt="Facelift planning illustration" className="w-full h-auto object-cover"/>
            </div>
            <p className="text-center text-sm text-gray-500 mt-2">Personalised Facelift Planning</p>
          </div>
          {/* End Inserted Image Block */}
          <div className="mt-12 max-w-4xl mx-auto text-lg text-gray-600 space-y-6">
            <p>
              Assisting renowned Surgeon Mr. Darryl Coombes with his unique Apex Facelift® procedure, Maryna Cole offers a broad range of skin care treatments for both pre-operative and post-operative treatment. Maryna utilises ASCE+ Exosomes, which offer an ideal maintenance regime, following surgery.
            </p>
            <p>
              Maryna will craft a six-month to one-year plan, offering a structured approach to your treatment aftercare, which is particularly crucial after facelifts or other surgical procedures to safeguard the investment made in surgery. Maryna’s tailored treatment plan is created to meet your post-surgery needs, ensuring that your skin remains healthy, vibrant, and in harmony with your surgical results.
            </p>
          </div>
        </div>
      </section>

      {/* Exosomes Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-primary-400 font-semibold tracking-wide uppercase">Exosome Therapy</h2>
            <p className="mt-2 text-3xl leading-8 font-serif font-bold text-gray-900 sm:text-4xl">
              Understanding The Role Exosomes Play In Post-Surgery Care
            </p>
          </div>
          {/* Added Paragraph */}
          <div className="mt-8 max-w-4xl mx-auto text-lg text-gray-600 space-y-6">
            <p>
              Exosomes play a vital role in post-surgery maintenance, particularly after facelifts and other facial aesthetic plastic surgical procedures. Maryna works very closely with renowned surgeon Mr. Darryl Coombes, particularly in conjunction with his Apex Facelift® procedure. Offering pre- and post-operative care, Maryna ensures the very finest results for his patients.
            </p>
            <p>
              The Exosome Regenerative Complex serves as an essential component in enhancing and prolonging the results of these surgeries by rejuvenating the skin of the face and neck. Exosomes stimulate skin cells to produce up to 600% more collagen and 300% more elastin, resulting in a significant increase in dermal thickness. This enhanced collagen and elastin production leads to improved skin elasticity and an overall firming effect.
            </p>
          </div>
          {/* End Added Paragraph */}
          {/* Moved Image Block */}
          <div className="mt-12 mb-8">
            <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md mx-auto max-w-4xl">
              <img src={exosomesImage} alt="Facelift combined with Exosomes treatment" className="w-full h-auto object-cover"/>
            </div>
            <p className="text-center text-sm text-gray-500 mt-2">Enhancing Facelift Results with Exosomes</p>
          </div>
          {/* End Moved Image Block */}
        </div>
      </section>

      {/* Types of facelifts */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-primary-400 font-semibold tracking-wide uppercase">Our Services</h2>
            <p className="mt-2 text-3xl leading-8 font-serif font-bold text-gray-900 sm:text-4xl">
              Comprehensive Facelift Options
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              We offer a range of facelift procedures to address different concerns and achieve your desired results
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-400 text-white mb-5">
                  <span className="text-lg font-bold">1</span>
                </div>
                <h3 className="text-xl font-medium text-gray-900">Apex Facelift®</h3>
                <p className="mt-2 text-base text-gray-500">
                  Targeted rejuvenation for the lower face and neck, ideal for those noticing early to moderate signs of ageing. A less invasive alternative with natural, refreshed results.
                </p>
                {/* Price removed */}
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-400 text-white mb-5">
                  <span className="text-lg font-bold">2</span>
                </div>
                <h3 className="text-xl font-medium text-gray-900">Neck Lift</h3>
                <p className="mt-2 text-base text-gray-500">
                  Targeted procedure to address sagging neck skin, excess fat, and muscle banding for a more defined profile.
                </p>
                {/* Price removed */}
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-400 text-white mb-5">
                  <span className="text-lg font-bold">3</span>
                </div>
                <h3 className="text-xl font-medium text-gray-900">Brow Lift</h3>
                <p className="mt-2 text-base text-gray-500">
                  Elevates drooping brows and reduces forehead lines for a more refreshed, alert appearance.
                </p>
                {/* Price removed */}
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-400 text-white mb-5">
                  <span className="text-lg font-bold">4</span>
                </div>
                <h3 className="text-xl font-medium text-gray-900">Combination Procedures</h3>
                <p className="mt-2 text-base text-gray-500">
                  Customised treatment plans combining different procedures for comprehensive facial rejuvenation.
                </p>
                <p className="mt-4 text-primary-400 font-medium">Consultation required</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-primary-500 font-semibold tracking-wide uppercase">Testimonials</h2>
            <p className="mt-2 text-3xl leading-8 font-serif font-bold text-gray-900 sm:text-4xl bg-gradient-to-r from-secondary-800 to-secondary-600 bg-clip-text text-transparent">
              What Our Patients Say
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Read about the experiences of our patients who have undergone the Apex Facelift® procedure
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Emma Testimonial */}
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 transform hover:-translate-y-1">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 italic mb-6">"I couldn't be happier with the results of my lower facelift – all thanks to Mr Coombes. His expertise made the entire experience so positive, and I'm truly grateful."</p>
              <div className="flex items-center">
                <div>
                  <p className="text-gray-900 font-medium">Emma</p>
                  <p className="text-gray-500 text-sm">Treatment: Apex Facelift®</p>
                </div>
              </div>
            </div>

            {/* Hari Testimonial */}
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 transform hover:-translate-y-1">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 italic mb-6">"Mr Coombes and the entire team were absolutely wonderful. I felt completely cared for and confident in their hands. I had the Apex Facelift® in early December and I'm thrilled with the results. I would definitely recommend it."</p>
              <div className="flex items-center">
                <div>
                  <p className="text-gray-900 font-medium">Hari</p>
                  <p className="text-gray-500 text-sm">Treatment: Apex Facelift®</p>
                </div>
              </div>
            </div>

            {/* Yvonne Testimonial */}
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 transform hover:-translate-y-1">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 italic mb-6">"From my first consultation with Mr Coombes, I felt I could trust him completely. He has such a calm, reassuring manner. I had my lower facelift on 1st November and I'm over the moon with the outcome. I experienced no pain, and the improvement to my neck and lower face is remarkable. I couldn't have asked for a better surgeon – I would happily return for future treatments. Thank you, Darryl, and your lovely nurses."</p>
              <div className="flex items-center">
                <div>
                  <p className="text-gray-900 font-medium">Yvonne</p>
                  <p className="text-gray-500 text-sm">Treatment: Apex Facelift®</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inlined FAQ Section with updated title, description, and questions */}
      <div className="bg-gray-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-bold text-gray-900 sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Your questions about the Apex Facelift® answered.
            </p>
          </div>
          <div className="mt-12 max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-16 bg-primary-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold text-white sm:text-4xl">
            Ready to Discover Your Transformation?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-white">
            Book a consultation with our expert team to explore the best facelift options for your unique needs
          </p>
          <div className="mt-10">
            <Link
              to="/contact#booking"
              className="inline-block bg-white text-primary-500 hover:bg-gray-100 px-6 py-3 rounded-md text-base font-medium shadow-md transition-colors duration-200"
            >
              Book Your Consultation
            </Link>
          </div>
          <div className="mt-8 flex justify-center space-x-8">
            <div className="flex items-center">
              <Award className="h-5 w-5 text-white mr-2" />
              <span className="text-white">Expert surgeons</span>
            </div>
            <div className="flex items-center">
              <Shield className="h-5 w-5 text-white mr-2" />
              <span className="text-white">CQC-approved clinic</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FaceliftPage;