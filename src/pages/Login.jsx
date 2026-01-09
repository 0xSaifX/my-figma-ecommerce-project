import React, { useState } from "react";
import login from "../assets/Login.png";

function LoginForm() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert(`Username: ${formData.username}\nPassword: ${formData.password}`);
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-5xl w-full bg-white rounded-lg shadow-md p-6 md:p-10">

        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold mb-2">Login</h2>
          <p className="text-sm text-gray-600">
            Get access to your Orders, Wishlist and Recommendations.
          </p>
        </div>

        {/* Content */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">

          {/* Form */}
          <div className="w-full max-w-sm">
            <form
              onSubmit={handleSubmit}
              className="border border-gray-200 rounded-md p-6"
            >
              <label className="text-sm font-medium text-gray-700">
                Email Address *
              </label>
              <input
                type="email"
                name="username"
                placeholder="Enter your email address"
                value={formData.username}
                onChange={handleChange}
                className="w-full mt-2 mb-4 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#45a388]"
              />

              <label className="text-sm font-medium text-gray-700">
                Password *
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                className="w-full mt-2 mb-2 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#45a388]"
              />

              <div className="text-right mb-6">
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-[#45a388]"
                >
                  Forgot Password?
                </a>
              </div>

              <div className="flex items-center justify-between">
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-[#45a388]"
                >
                  Create Account
                </a>

                <button
                  type="submit"
                  className="bg-[#45a388] text-white px-5 py-2 rounded-md hover:bg-[#3b8f76] transition"
                >
                  Login
                </button>
              </div>
            </form>
          </div>

          {/* Image */}
          <div className="hidden md:block">
            <img
              src={login}
              alt="Login illustration"
              className="w-72 h-auto rounded-md"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

export default LoginForm;
