import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-5">
      <div className="flex-1">
        <h2 className="text-4xl font-bold mb-4">Let's Talk</h2>
        <p className="text-lg leading-relaxed text-gray-700">
          We’d love to hear from you! Whether you have a question about
          features, trials, pricing, need a demo, or anything else, our team is
          ready to answer all your questions.
        </p>
      </div>
      <div className="w-full max-w-xl bg-white border border-black rounded-lg p-8 md:p-12 flex flex-col md:flex-row gap-8">
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  className="block text-lg font-medium text-gray-700"
                  htmlFor="name"
                >
                  Your Name
                </label>
                <input
                  className="mt-1 p-3 w-full border border-gray-300 rounded-lg shadow-sm focus:ring-black focus:border-black"
                  type="text"
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div>
                <label
                  className="block text-lg font-medium text-gray-700"
                  htmlFor="email"
                >
                  Your Email
                </label>
                <input
                  className="mt-1 p-3 w-full border border-gray-300 rounded-lg shadow-sm focus:ring-black focus:border-black"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="you@example.com"
                  required
                />
              </div>
            </div>
            <div>
              <label
                className="block text-lg font-medium text-gray-700"
                htmlFor="message"
              >
                Your Message
              </label>
              <textarea
                className="mt-1 p-3 w-full border border-gray-300 rounded-lg shadow-sm focus:ring-black focus:border-black"
                id="message"
                name="message"
                rows="6"
                placeholder="Write your message here..."
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="inline-block px-6 py-3 text-lg font-medium text-white bg-black rounded-lg shadow-md hover:bg-gray-800 transition duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
