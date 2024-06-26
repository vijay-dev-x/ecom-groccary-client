import { CheckCircle, Users, Truck } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen p-4 bg-gray-50">
      <div className="max-w-7xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-green-600 mb-4 text-center animate-fadeInDown">
          About Us
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-gray-700 mb-4 animate-slideInLeft">
              Our Mission
            </h2>
            <p className="text-gray-600 mb-6">
              Our mission is to provide the freshest and highest quality
              groceries to our customers at affordable prices. We strive to make
              grocery shopping a convenient and enjoyable experience for
              everyone.
            </p>
            <h2 className="text-2xl font-bold text-gray-700 mb-4 animate-slideInLeft">
              Why Choose Us
            </h2>
            <ul className="list-disc pl-5 text-gray-600">
              <li className="mb-2 flex items-center">
                <CheckCircle className="text-green-600 mr-2" /> Fresh and
                high-quality products
              </li>
              <li className="mb-2 flex items-center">
                <CheckCircle className="text-green-600 mr-2" /> Convenient
                online shopping
              </li>
              <li className="mb-2 flex items-center">
                <CheckCircle className="text-green-600 mr-2" /> Fast and
                reliable delivery
              </li>
              <li className="mb-2 flex items-center">
                <CheckCircle className="text-green-600 mr-2" /> Excellent
                customer service
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="/about.png "
              alt="About Us"
              className=" max-w-[300px] object-cover rounded-lg shadow-md animate-fadeIn"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
          <div className="flex flex-col items-center text-center animate-fadeIn">
            <Users className="text-green-600 mb-4" size={40} />
            <h3 className="text-xl font-semibold mb-2">Our Team</h3>
            <p className="text-gray-600">
              We have a dedicated team of professionals who are passionate about
              delivering the best shopping experience to our customers.
            </p>
          </div>
          <div className="flex flex-col items-center text-center animate-fadeIn">
            <Truck className="text-green-600 mb-4" size={40} />
            <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
            <p className="text-gray-600">
              Our delivery service is fast and reliable, ensuring that your
              groceries arrive fresh and on time.
            </p>
          </div>
          <div className="flex flex-col items-center text-center animate-fadeIn">
            <CheckCircle className="text-green-600 mb-4" size={40} />
            <h3 className="text-xl font-semibold mb-2">Quality Products</h3>
            <p className="text-gray-600">
              We source the best products to ensure that you receive the highest
              quality groceries.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
