import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-5xl mx-auto bg-white p-2 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-green-600 mb-4 text-center animate-fadeInDown">
          Contact Us
        </h1>
        <p className="text-gray-700 mb-6 text-center">
          We'd love to hear from you! Whether you have a question about our
          products, pricing, or anything else, our team is ready to answer all
          your questions.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="flex flex-col items-center">
            <Mail className="text-green-600 mb-2 animate-bounce" size={40} />
            <h2 className="text-xl font-semibold mb-2">Email Us</h2>
            <p className="text-gray-600">support@grocery.com</p>
          </div>
          <div className="flex flex-col items-center">
            <Phone className="text-green-600 mb-2 animate-bounce" size={40} />
            <h2 className="text-xl font-semibold mb-2">Call Us</h2>
            <p className="text-gray-600">+1 (234) 567-890</p>
          </div>
          <div className="flex flex-col items-center">
            <MapPin className="text-green-600 mb-2 animate-bounce" size={40} />
            <h2 className="text-xl font-semibold mb-2">Visit Us</h2>
            <p className="text-gray-600">123 Grocery St, Food City, FC 12345</p>
          </div>
          <div className="flex flex-col items-center">
            <form className="w-full max-w-sm">
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder="Your name"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Your email"
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="message"
                  placeholder="Your message"
                  rows="3"
                ></textarea>
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
