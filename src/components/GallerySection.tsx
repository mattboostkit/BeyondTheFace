import React from 'react';
import before1Image from '../assets/images/Before_1.jpg';
import after1Image from '../assets/images/After_1.jpg';
import before2Image from '../assets/images/Before_2.jpg';
import after2Image from '../assets/images/After_2.jpg';
import before3Image from '../assets/images/Before_3.jpg';
import after3Image from '../assets/images/After_3.jpg';
import before4Image from '../assets/images/Before_4.jpg';
import after4Image from '../assets/images/After_4.jpg';

const GallerySection: React.FC = () => {
  // Gallery items with actual images for all four pairs
  const galleryItems = [
    { id: 1, before: before1Image, after: after1Image, description: "" },
    { id: 2, before: before2Image, after: after2Image, description: "" },
    { id: 3, before: before3Image, after: after3Image, description: "" },
    { id: 4, before: before4Image, after: after4Image, description: "" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-primary-400 font-semibold tracking-wide uppercase">Results</h2>
          <p className="mt-2 text-3xl leading-8 font-serif font-bold text-gray-900 sm:text-4xl">
            Before & After Gallery
          </p>
          <p className="mt-4 max-w-3xl text-lg text-gray-600 lg:mx-auto"> {/* Adjusted max-width and text size */}
            {/* Content removed as requested */}
          </p>
        </div>

        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {galleryItems.map((item) => (
              <div key={item.id} className="bg-gray-50 rounded-lg overflow-hidden shadow-sm">
                <div className="p-2">
                  <div className="flex flex-col gap-4">
                    <div>
                      <p className="text-center text-sm font-medium text-gray-500 mb-2">Before</p>
                      <div className="bg-gray-200 h-[300px] w-[500px] max-w-full mx-auto rounded-md flex items-center justify-center">
                        {item.before ? (
                          <img src={item.before} alt={`Before - Item ${item.id}`} className="object-cover h-full w-full" />
                        ) : (
                          <p className="text-gray-500 text-sm">Before Image</p>
                        )}
                      </div>
                    </div>
                    <div>
                      <p className="text-center text-sm font-medium text-gray-500 mb-2">After</p>
                      <div className="bg-gray-200 h-[300px] w-[500px] max-w-full mx-auto rounded-md flex items-center justify-center">
                        {item.after ? (
                          <img src={item.after} alt={`After - Item ${item.id}`} className="object-cover h-full w-full" />
                        ) : (
                          <p className="text-gray-500 text-sm">After Image</p>
                        )}
                      </div>
                    </div>
                  </div>
                  {item.description && (
                    <div className="mt-4 p-2">
                      <p className="text-center text-sm text-gray-500">{item.description}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;