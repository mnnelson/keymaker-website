// components/Reviews.tsx

import { Quote } from 'lucide-react';

const reviewsData = [
  {
    text: "Keymaker built a platform that dramatically streamlined our operations and expanded our reach. Their team was professional, detail-oriented, and experts in their field. Highly recommend!",
    author: 'Marissa P.',
  },
  {
    text: "The team was incredible—always responsive, anticipating our needs, and delivering high-quality code ahead of schedule. Overall, they delivered beyond our expectations on the new portal.",
    author: 'Colin C.',
  },
  {
    text: "This was truly a partnership. They took our complex vision and turned it into a simple, powerful application that is easy for our team to use every day.",
    author: 'Jason B.',
  },
];

const Reviews = () => {
  return (
    <section id="reviews" className="py-20 md:py-28 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-key-text mb-2">
            Raving Reviews
          </h2>
          <p className="text-md text-gray-500">
            What our clients are saying about us.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {reviewsData.map((review, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md border-t-4 border-key-primary/50">
              <Quote className="h-6 w-6 text-key-primary mb-4 opacity-70" />
              <p className="text-gray-700 italic mb-4">
                "{review.text}"
              </p>
              <div className="text-sm font-semibold text-key-text">
                — {review.author}
              </div>
              {/* Blue 'View Case Study' button placeholder */}
              <button className="text-key-primary text-xs font-bold mt-2 hover:underline">
                View Case Study →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;