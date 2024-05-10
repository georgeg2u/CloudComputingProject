import React from "react";

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-8">Welcome to my Todo App</h1>
      <p className="text-lg text-gray-700 mb-12">
        The best way to manage your todos!
      </p>
      <img src="/unnamed.png" alt="Todo Image" className="w-64" />
    </div>
  );
};

export default LandingPage;
