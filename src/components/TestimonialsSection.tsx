import React from 'react';
import { testimonials } from '../data/testimonials';
import { Star } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-primary-500 font-semibold tracking-wide uppercase">Testimonials</h2>
          <p className="mt-2 text-3xl leading-8 font-serif font-bold text-gray-900 sm:text-4xl bg-gradient-to-r from-secondary-800 to-secondary-600 bg-clip-text text-transparent">
            What Our Clients Say
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Don't just take our word for it. Here's what our clients have to say about their experiences at Beyond The Face.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 transform hover:-translate-y-1">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 italic mb-6">"{testimonial.quote}"</p>
              <div className="flex items-center">
                {testimonial.image && ( // Conditionally render image
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="h-12 w-12 rounded-full object-cover mr-4 border-2 border-primary-200"
                  />
                )}
                <div>
                  <p className="text-gray-900 font-medium">{testimonial.name}</p>
                  <p className="text-gray-500 text-sm">Treatment: {testimonial.treatment}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;