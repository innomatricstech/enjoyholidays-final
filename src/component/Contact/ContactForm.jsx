import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const emailRef = useRef();
  const nameRef = useRef();
  const messageRef = useRef();
  const phoneRef = useRef();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    emailjs.init("RXrsmV1YAShx8Y4_K");
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const serviceId = "service_5culi7g";
    const templateId = "template_zfcjvhu";
    try {
      setLoading(true);
      await emailjs.send(serviceId, templateId, {
        name: nameRef.current.value,
        recipient: emailRef.current.value,
        message: messageRef.current.value,
        phone: phoneRef.current.value, // Include phone number in the email template
        email: emailRef.current.value // Include phone number in the email template
      });
      alert("Email successfully sent. Please check your inbox.\n\nName: " + nameRef.current.value + "\nEmail: " + emailRef.current.value + "\nMessage: " + messageRef.current.value + "\nPhone: " + phoneRef.current.value); // Display name, email, message, and phone number in the success message
    } catch (error) {
      console.error("Error sending email:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="ContactForm flex-1 bg-gray-900 p-8  shadow-lg">
      <h2 className="text-2xl md:text-2xl font-semibold text-white mb-6">CONTACT FORM</h2>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-left text-white">
            Name
          </label>
          <input
            type="text"
            id="name"
            ref={nameRef}
            className="mt-1 block w-full px-4 py-2 text-white border border-transparent rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Your Name"
          />
        </div>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1">
            <label htmlFor="email" className="block text-sm font-medium text-white">
              Email
            </label>
            <input
              type="email"
              id="email"
              ref={emailRef}
              className="mt-1 block w-full px-4 py-2 text-white border border-transparent rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Your Email"
            />
          </div>
          <div className="flex-1">
            <label htmlFor="phone" className="block text-sm font-medium text-white">
              Phone
            </label>
            <input
              type="number"
              id="phone"
              ref={phoneRef}
              className="mt-1 block w-full px-4 py-2 text-black border border-transparent rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Your Phone"
            />
          </div>
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-white text-left">
            Comments 
          </label>
          <textarea
            id="message"
            rows="4"
            ref={messageRef}
            className="mt-1 block w-full px-4 py-2 text-black border border-transparent rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Your Message"
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className="w-[160px] h-[60px] py-3 px-4 bg-amber-500 text-white font-medium rounded-md hover:bg-zinc-950 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-300 ease-in-out"
          >
            Contact Us
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
