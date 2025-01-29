import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { content } from "../data/content"; // Adjust the import path as needed

export function Contact() {
    const { contact } = content;

    return (
        <section id="contact" className="relative bg-white py-14">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        {contact.title}
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                        {contact.subtitle}
                    </p>
                </div>

                {/* Form Section */}
                <div className="max-w-xl mx-auto mb-20">
                    <form className="space-y-6">
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                className="mt-1 block w-full px-4 py-2 bg-white border border-gray-200 rounded-md text-gray-900 shadow-sm focus:border-[#303392] focus:ring-2 focus:ring-[#303392] focus:ring-opacity-20 transition-colors"
                                placeholder="John Doe"
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                className="mt-1 block w-full px-4 py-2 bg-white border border-gray-200 rounded-md text-gray-900 shadow-sm focus:border-[#303392] focus:ring-2 focus:ring-[#303392] focus:ring-opacity-20 transition-colors"
                                placeholder="john@example.com"
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="phone"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Phone Number
                            </label>
                            <input
                                type="tel"
                                name="phone"
                                id="phone"
                                className="mt-1 block w-full px-4 py-2 bg-white border border-gray-200 rounded-md text-gray-900 shadow-sm focus:border-[#303392] focus:ring-2 focus:ring-[#303392] focus:ring-opacity-20 transition-colors"
                                placeholder="+1 (555) 123-4567"
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="message"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                className="mt-1 block w-full px-4 py-2 bg-white border border-gray-200 rounded-md text-gray-900 shadow-sm focus:border-[#303392] focus:ring-2 focus:ring-[#303392] focus:ring-opacity-20 transition-colors resize-none"
                                placeholder="How can we help you?"
                            />
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#303392] hover:bg-[#252a75] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#303392] transition-colors"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>

                {/* Info and Map Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start max-w-6xl mx-auto">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div className="flex items-start">
                            <Mail className="h-6 w-6 text-[#303392] mt-1" />
                            <div className="ml-4">
                                <h3 className="text-lg font-medium text-gray-900">
                                    {contact.email.label}
                                </h3>
                                <p className="mt-1 text-gray-500">
                                    {contact.email.value}
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <Phone className="h-6 w-6 text-[#303392] mt-1" />
                            <div className="ml-4">
                                <h3 className="text-lg font-medium text-gray-900">
                                    {contact.phone.label}
                                </h3>
                                <p className="mt-1 text-gray-500">
                                    {contact.phone.value}
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <MapPin className="h-6 w-6 text-[#303392] mt-1" />
                            <div className="ml-4">
                                <h3 className="text-lg font-medium text-gray-900">
                                    {contact.office.label}
                                </h3>
                                <p className="mt-1 text-gray-500">
                                    {contact.office.address.map(
                                        (line, index) => (
                                            <React.Fragment key={index}>
                                                {line}
                                                <br />
                                            </React.Fragment>
                                        )
                                    )}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Map */}
                    <div className="h-[300px] rounded-lg overflow-hidden shadow-md">
                        <iframe
                            src={contact.mapUrl}
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
}
