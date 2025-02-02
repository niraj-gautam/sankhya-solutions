import React from 'react';
import { Quote } from 'lucide-react';
import { content } from '../data/content';

export function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Client Testimonials</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            What our clients say about us
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {content.testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-lg shadow-sm p-8 relative"
            >
              <Quote className="h-8 w-8 text-blue-600 mb-4" />
              <blockquote className="mt-4">
                <p className="text-lg text-gray-600">{testimonial.quote}</p>
                <footer className="mt-4">
                  <p className="text-base font-medium text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">
                    {testimonial.position}, {testimonial.company}
                  </p>
                </footer>
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
