import React from 'react';
import { Award, Users, Shield } from 'lucide-react';
import aboutImage from '../assets/images/BTF_About2.jpg'; // Import the about image
import clinicExteriorImage from '../assets/images/External Clinic.jpg'; // Import the clinic exterior image

const AboutSection: React.FC = () => {
  return (
    <section className="py-20 bg-section-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-primary-500 font-semibold tracking-wide uppercase">About Us</h2>
          <p className="mt-2 text-3xl leading-8 font-serif font-bold text-gray-900 sm:text-4xl bg-gradient-to-r from-secondary-800 to-secondary-600 bg-clip-text text-transparent">
            Advanced Aesthetics With A Personal Touch
          </p>
          <p className="mt-4 max-w-3xl text-lg text-gray-600 lg:mx-auto">
            Founded by Regenerative Skin Specialist Maryna Cole, Beyond the Face is Tunbridge Wells’ only clinic dedicated to advanced exosome treatments. We specialise in skin, body and hair regeneration to boost confidence and restore natural vitality.
          </p>
          <p className="mt-4 max-w-3xl text-lg text-gray-600 lg:mx-auto">
            From anti-ageing and body contouring to post-surgery support for the Apex Facelift®, we offer science-backed solutions that truly deliver—especially for those noticing the first signs of ageing.
          </p>
          <p className="mt-4 max-w-3xl text-lg text-gray-600 lg:mx-auto">
            Located on Vale Street, our modern clinic combines leading technology with luxury care in a private, welcoming setting.
          </p>
        </div>

        {/* Founder Image */}
        <div className="mt-12 mb-16">
          <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md mx-auto max-w-4xl">
            <div className="h-96 relative">
              <img
                src={aboutImage} // Use the imported about image
                alt="Maryna Cole, Founder of Beyond The Face"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-secondary-800/20"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
                <p className="text-white font-serif text-xl">Beyond The Face Founder Maryna Cole</p>
              </div>
            </div>
          </div>
        </div>

        {/* Clinic Exterior Image */}
        <div className="mt-12 mb-16">
          <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md mx-auto max-w-4xl">
            <div className="h-96 relative">
              <img
                src={clinicExteriorImage}
                alt="Beyond The Face clinic exterior"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-secondary-800/10"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
                <p className="text-white font-serif text-xl">Our welcoming clinic exterior</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 border border-primary-100 transform hover:-translate-y-1">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-br from-primary-400 to-primary-600 text-white mb-5">
                <Award className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-medium text-gray-900">Expert Practitioners</h3>
              <p className="mt-2 text-base text-gray-500">
                Our team consists of fully qualified medical professionals with years of experience in aesthetic medicine,
                ensuring you receive the highest standard of care.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 border border-primary-100 transform hover:-translate-y-1">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-br from-primary-400 to-primary-600 text-white mb-5">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-medium text-gray-900">Personalised Approach</h3>
              <p className="mt-2 text-base text-gray-500">
                We believe that every face is unique. That's why we take the time to understand your goals and create
                bespoke treatment plans designed specifically for you.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 border border-primary-100 transform hover:-translate-y-1">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-br from-primary-400 to-primary-600 text-white mb-5">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-medium text-gray-900">Safe & Effective</h3>
              <p className="mt-2 text-base text-gray-500">
                We use only the highest quality products and the latest techniques to ensure safe treatments with
                natural-looking, long-lasting results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;