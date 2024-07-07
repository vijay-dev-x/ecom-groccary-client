import { useSearchParams } from "react-router-dom";

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const paymentId = searchParams.get("payment_id");

  return (
    <div className="flex items-center justify-center min-h-screen bg-green-100">
      <div className="bg-white p-10 rounded-xl shadow-xl text-center transform transition-transform duration-500 ease-in-out scale-105 hover:scale-110">
        <div className="text-green-600 text-6xl">✓</div>
        <h1 className="text-2xl font-bold mt-4">Payment Successful!</h1>
        <p className="text-gray-600 mt-2">Thank you for your purchase.</p>
        <div className="mt-4">
          <p className="text-gray-500">Your Payment ID:</p>
          <p className="text-gray-800 font-semibold">{paymentId}</p>
        </div>
        <div className="mt-6">
          <a
            href="/"
            className="inline-block bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition duration-300"
          >
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
