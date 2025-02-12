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
            }, 10000); // 10 seconds
        }
        return () => clearTimeout(timer); // Cleanup on unmount
    }, [submitSuccess]);

    // Initialize EmailJS with your Public Key
    emailjs.init("ev0rNYcZrNW4EHGcI"); // Replace with your EmailJS public key

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
            await emailjs.send(
                "service_kpzdwx4", // Replace with your EmailJS service ID
                "template_zf8rldr", // Replace with your EmailJS template ID
                formData
            );

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
        <section id="contact" className="relative bg-white py-14">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                        {contact.title}
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                        {contact.subtitle}
                    </p>
                </div>

                {/* Form Section */}
                <div className="max-w-xl mx-auto mb-20">
                    <form className="space-y-6" onSubmit={handleSubmit}>
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
                                value={formData.name}
                                onChange={handleInputChange}
                                className={`mt-1 block w-full px-4 py-2 border rounded-md shadow-sm transition-colors ${
                                    errors.name
                                        ? "border-red-500 focus:ring-red-500"
                                        : "border-gray-200 focus:border-[#303392] focus:ring-[#303392]"
                                }`}
                                placeholder="Your Name"
                            />
                            {errors.name && (
                                <p className="mt-1 text-sm text-red-600">
                                    {errors.name}
                                </p>
                            )}
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
                                value={formData.email}
                                onChange={handleInputChange}
                                className={`mt-1 block w-full px-4 py-2 border rounded-md shadow-sm transition-colors ${
                                    errors.email
                                        ? "border-red-500 focus:ring-red-500"
                                        : "border-gray-200 focus:border-[#303392] focus:ring-[#303392]"
                                }`}
                                placeholder="name@example.com"
                            />
                            {errors.email && (
                                <p className="mt-1 text-sm text-red-600">
                                    {errors.email}
                                </p>
                            )}
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
                                value={formData.phone}
                                onChange={handleInputChange}
                                className={`mt-1 block w-full px-4 py-2 border rounded-md shadow-sm transition-colors ${
                                    errors.phone
                                        ? "border-red-500 focus:ring-red-500"
                                        : "border-gray-200 focus:border-[#303392] focus:ring-[#303392]"
                                }`}
                                placeholder="+977-9812345678"
                            />
                            {errors.phone && (
                                <p className="mt-1 text-sm text-red-600">
                                    {errors.phone}
                                </p>
                            )}
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
                                value={formData.message}
                                onChange={handleInputChange}
                                className={`mt-1 block w-full px-4 py-2 border rounded-md shadow-sm transition-colors resize-none ${
                                    errors.message
                                        ? "border-red-500 focus:ring-red-500"
                                        : "border-gray-200 focus:border-[#303392] focus:ring-[#303392]"
                                }`}
                                placeholder="How can we help you?"
                            />
                            {errors.message && (
                                <p className="mt-1 text-sm text-red-600">
                                    {errors.message}
                                </p>
                            )}
                        </div>

                        {submitError && (
                            <div className="p-4 bg-red-100 text-red-800 rounded-md">
                                {submitError}
                            </div>
                        )}

                        {submitSuccess && (
                            <div className="p-4 bg-green-100 text-green-800 rounded-md">
                                Message sent successfully!
                            </div>
                        )}

                        <div>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-sm font-medium text-white bg-orange-700 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? "Sending..." : "Send Message"}
                            </button>
                        </div>
                    </form>
                </div>

                {/* Info and Map Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start max-w-6xl mx-auto">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div className="flex items-start">
                            <Mail className="h-6 w-6 text-orange-600 mt-1" />
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
                            <Phone className="h-6 w-6 text-orange-600 mt-1" />
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
                            <MapPin className="h-6 w-6 text-orange-600 mt-1" />
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
