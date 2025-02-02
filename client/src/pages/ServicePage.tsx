import React from 'react';
import { useParams } from 'react-router-dom';
import { content } from '../data/content';
import { Header } from '../components/Header';
import { Contact } from '../components/Contact';

export function ServicePage() {
  const { id } = useParams();
  const service = content.services.find(s => s.id.toString() === id);

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
              {service.title}
            </h1>
            <p className="mt-4 text-xl text-gray-500">
              {service.description}
            </p>
          </div>

          {/* Service Content and Image */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="prose prose-lg mx-auto">
              <h2>What We Offer</h2>
              <p>Our {service.title.toLowerCase()} services are designed to help your organization succeed through data-driven insights and strategic planning.</p>

              <h2>Our Approach</h2>
              <p>We combine industry expertise with cutting-edge methodologies to deliver results that matter.</p>

              <h2>Why Choose Us</h2>
              <ul>
                <li>Expert team with years of experience</li>
                <li>Customized solutions for your specific needs</li>
                <li>Data-driven insights and recommendations</li>
                <li>Proven track record of success</li>
              </ul>

              <div className="mt-12">
                <a
                  href="#contact"
                  className="inline-block bg-[#303392] text-white px-8 py-3 rounded-md font-medium hover:bg-[#252a75] transition-colors no-underline"
                >
                  Get Started
                </a>
              </div>
            </div>

            {/* Image */}
            <div className="lg:justify-self-end">
              <img
                src={service.image}
                alt={service.title}
                className="rounded-lg shadow-lg object-cover w-full h-auto"
              />
            </div>
          </div>
        </div>

        <div className="mt-20">
          <Contact />
        </div>
      </div>
    </div>
  );
}
