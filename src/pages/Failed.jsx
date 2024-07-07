const Failed = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-red-100">
      <div className="bg-white p-10 rounded-xl shadow-xl text-center transform transition-transform duration-500 ease-in-out scale-105 hover:scale-110">
        <div className="text-red-600 text-6xl animate-pulse">✗</div>
        <h1 className="text-2xl font-bold mt-4">Payment Failed!</h1>
        <p className="text-gray-600 mt-2">
          We encountered an issue with your payment.
        </p>

        <div className="mt-6">
          <a
            href="/"
            className="inline-block bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition duration-300"
          >
            Go to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default Failed;
