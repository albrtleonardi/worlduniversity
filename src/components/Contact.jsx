import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center p-5 md:pl-12 md:mt-0 mt-12">
      <div className="flex-1 mb-8 md:mb-0 md:mr-8">
        <h2 className="text-4xl font-normal font-poppins mb-4 text-center md:text-left">
          Let's Talk
        </h2>
        <p className="text-base leading-relaxed text-gray-700 w-full md:w-96 font-inter text-center md:text-left">
          We’d love to hear from you! Whether you have questions about features,
          trials, pricing, or if you’re interested in scheduling a demo, or just
          want to learn more about our offerings, our team is here and ready to
          assist. No matter what your inquiry might be, we’re committed to
          providing you with the information you need. Don’t hesitate to reach
          out—we’re eager to answer all your questions and help you make the
          most of our services.
        </p>
      </div>
      <div className="w-full max-w-xl bg-white border border-black rounded-lg p-8 md:p-12 flex flex-col gap-8 font-poppins">
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
