import React, { useState, useEffect } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { content } from "../data/content";
import emailjs from "@emailjs/browser";

export function Contact() {
    const { contact } = content;
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });
    const [errors, setErrors] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [submitError, setSubmitError] = useState("");

    useEffect(() => {
        let timer: number;
        if (submitSuccess) {
            timer = setTimeout(() => {
                setSubmitSuccess(false);
            }, 10000);
        }
        return () => clearTimeout(timer);
    }, [submitSuccess]);

    emailjs.init("ev0rNYcZrNW4EHGcI");

    const validateForm = () => {
        let isValid = true;
        const newErrors = {
            name: "",
            email: "",
            phone: "",
            message: "",
        };

        if (!formData.name.trim()) {
            newErrors.name = "Name is required";
            isValid = false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email) {
            newErrors.email = "Email is required";
            isValid = false;
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = "Invalid email format";
            isValid = false;
        }

        const phoneRegex = /^\+?[1-9]\d{1,14}$/;
        if (formData.phone && !phoneRegex.test(formData.phone)) {
            newErrors.phone = "Invalid phone number format";
            isValid = false;
        }

        if (!formData.message.trim()) {
            newErrors.message = "Message is required";
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validateForm()) return;

        setIsSubmitting(true);
        setSubmitError("");
        setSubmitSuccess(false);

        try {
            await emailjs.send("service_5yqh5gv", "template_rk3ryv7", {
                name: formData.name,
                message: formData.message,
                phone: formData.phone,
                user_email: formData.email,
            });
            setFormData({ name: "", email: "", phone: "", message: "" });
            setSubmitSuccess(true);
        } catch (error) {
            console.error("Failed to send message:", error);
            setSubmitError("Failed to send message. Please try again later.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        if (errors[name as keyof typeof errors]) {
            setErrors((prev) => ({ ...prev, [name]: "" }));
        }
    };

    return (
        <section id="contact" className="relative bg-white py-20 lg:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 lg:mb-20">
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 ">
                        {contact.title}
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg lg:text-xl text-gray-600">
                        {contact.subtitle}
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-10 xl:gap-16 max-w-6xl mx-auto">
                    {/* Contact Form */}
                    <div className="space-y-8">
                        <form className="space-y-8" onSubmit={handleSubmit}>
                            <div className="space-y-6">
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                    >
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        className={`w-full px-4 py-4 border rounded-lg focus:ring-2 ${
                                            errors.name
                                                ? "border-red-500 focus:ring-red-500"
                                                : "border-gray-300 focus:border-orange-500 focus:ring-orange-500 outline-none"
                                        }`}
                                        placeholder="Your Name"
                                    />
                                    {errors.name && (
                                        <p className="mt-2 text-sm text-red-600">
                                            {errors.name}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className={`w-full px-4 py-4 border rounded-lg focus:ring-2 ${
                                            errors.email
                                                ? "border-red-500 focus:ring-red-500"
                                                : "border-gray-300 focus:border-orange-500 focus:ring-orange-500 outline-none"
                                        }`}
                                        placeholder="mail@example.com"
                                    />
                                    {errors.email && (
                                        <p className="mt-2 text-sm text-red-600">
                                            {errors.email}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <label
                                        htmlFor="phone"
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                    >
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        id="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        className={`w-full px-4 py-4 border rounded-lg focus:ring-2 ${
                                            errors.phone
                                                ? "border-red-500 focus:ring-red-500"
                                                : "border-gray-300 focus:border-orange-500 focus:ring-orange-500 outline-none"
                                        }`}
                                        placeholder="9812345678"
                                    />
                                    {errors.phone && (
                                        <p className="mt-2 text-sm text-red-600">
                                            {errors.phone}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <label
                                        htmlFor="message"
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                    >
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        className={`w-full md:h-44 px-4 py-4 border rounded-lg focus:ring-2 resize-none ${
                                            errors.message
                                                ? "border-red-500 focus:ring-red-500"
                                                : "border-gray-300 focus:border-orange-500 focus:ring-orange-500 outline-none"
                                        }`}
                                        placeholder="Share your inquiry..."
                                    />
                                    {errors.message && (
                                        <p className="mt-2 text-sm text-red-600">
                                            {errors.message}
                                        </p>
                                    )}
                                </div>
                            </div>

                            <div className="space-y-4">
                                {submitError && (
                                    <div className="p-4 bg-red-50 text-red-800 rounded-lg border border-red-100">
                                        {submitError}
                                    </div>
                                )}

                                {submitSuccess && (
                                    <div className="p-4 bg-green-50 text-green-800 rounded-lg border border-green-100">
                                        Message sent successfully! We'll respond
                                        as soon as possible.
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full py-3 px-6 bg-orange-600 hover:bg-orange-700 text-white font-medium rounded-lg transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? (
                                        <span className="flex items-center justify-center">
                                            <svg
                                                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                            >
                                                <circle
                                                    className="opacity-25"
                                                    cx="12"
                                                    cy="12"
                                                    r="10"
                                                    stroke="currentColor"
                                                    strokeWidth="4"
                                                ></circle>
                                                <path
                                                    className="opacity-75"
                                                    fill="currentColor"
                                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                ></path>
                                            </svg>
                                            Sending...
                                        </span>
                                    ) : (
                                        "Send Message"
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Contact Information */}
                    <div className="space-y-8">
                        <div className="bg-gray-50 rounded-xl p-6 lg:p-8 space-y-6 border border-gray-100">
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0">
                                    <Mail className="w-6 h-6 text-orange-500 mt-1" />
                                </div>
                                <div>
                                    <p className="mt-1 text-gray-900 ">
                                        {contact.email.value}
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0">
                                    <Phone className="w-6 h-6 text-orange-500 mt-1" />
                                </div>
                                <div>
                                    <p className="mt-1 text-gray-900">
                                        {contact.phone.value}
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0">
                                    <MapPin className="w-6 h-6 text-orange-500 mt-1" />
                                </div>
                                <div>
                                    <p className="mt-1 text-gray-900 space-y-1">
                                        {contact.office.address.map(
                                            (line, index) => (
                                                <span
                                                    key={index}
                                                    className="block"
                                                >
                                                    {line}
                                                </span>
                                            )
                                        )}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-xl overflow-hidden shadow-lg border border-gray-400">
                            <iframe
                                src={contact.mapUrl}
                                width="100%"
                                height="390"
                                className="border-0"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
