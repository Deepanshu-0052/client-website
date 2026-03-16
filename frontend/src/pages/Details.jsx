import React from "react";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";

function Details() {

  return (

    <div className="max-w-7xl mx-auto px-6 py-16">

      {/* Page Title */}
      <h2 className="text-4xl font-bold text-center mb-12">
        Website Details
      </h2>


      {/* About Section */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <p className="text-gray-600 text-lg">
          Our website is designed to help developers and businesses
          build modern, scalable, and responsive web applications.
          Using powerful technologies and clean UI design,
          we deliver fast and efficient digital solutions.
        </p>
      </div>


      {/* Image Content Section */}
      <div className="grid md:grid-cols-2 gap-10 mb-16">

        <div>
          <img
            src={img1}
            alt="development"
            className="rounded-lg shadow-lg"
          />

          <h3 className="text-xl font-semibold mt-4">
            Modern Development
          </h3>

          <p className="mt-2 text-gray-600">
            Our platform helps developers build fast and scalable
            applications using modern frameworks and best practices.
          </p>
        </div>

        <div>
          <img
            src={img2}
            alt="technology"
            className="rounded-lg shadow-lg"
          />

          <h3 className="text-xl font-semibold mt-4">
            Advanced Technology
          </h3>

          <p className="mt-2 text-gray-600">
            Built using powerful technologies like React, Tailwind CSS,
            Node.js and MongoDB to ensure high performance and scalability.
          </p>
        </div>

      </div>


      {/* Features Section */}
      <div className="mb-16">

        <h3 className="text-3xl font-bold text-center mb-10">
          Key Features
        </h3>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="border p-6 rounded-lg text-center hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-3">
              Responsive Design
            </h4>
            <p className="text-gray-600">
              Works perfectly on mobile, tablet, and desktop devices.
            </p>
          </div>

          <div className="border p-6 rounded-lg text-center hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-3">
              Fast Performance
            </h4>
            <p className="text-gray-600">
              Optimized architecture for speed and smooth user experience.
            </p>
          </div>

          <div className="border p-6 rounded-lg text-center hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-3">
              Secure Backend
            </h4>
            <p className="text-gray-600">
              Secure data handling with Node.js and MongoDB integration.
            </p>
          </div>

        </div>

      </div>


      {/* Technology Section */}
      <div className="bg-gray-100 p-10 rounded-lg">

        <h3 className="text-3xl font-bold text-center mb-8">
          Technologies Used
        </h3>

        <div className="grid md:grid-cols-4 gap-6 text-center">

          <div className="bg-white p-4 rounded shadow">
            React
          </div>

          <div className="bg-white p-4 rounded shadow">
            Tailwind CSS
          </div>

          <div className="bg-white p-4 rounded shadow">
            Node.js
          </div>

          <div className="bg-white p-4 rounded shadow">
            MongoDB
          </div>

        </div>

      </div>


      {/* Statistics Section */}
      <div className="grid md:grid-cols-4 gap-8 text-center mt-16">

        <div>
          <h4 className="text-3xl font-bold text-blue-600">
            100+
          </h4>
          <p className="text-gray-600">Projects Completed</p>
        </div>

        <div>
          <h4 className="text-3xl font-bold text-blue-600">
            50+
          </h4>
          <p className="text-gray-600">Happy Clients</p>
        </div>

        <div>
          <h4 className="text-3xl font-bold text-blue-600">
            10+
          </h4>
          <p className="text-gray-600">Expert Developers</p>
        </div>

        <div>
          <h4 className="text-3xl font-bold text-blue-600">
            24/7
          </h4>
          <p className="text-gray-600">Support</p>
        </div>

      </div>

    </div>

  );
}

export default Details;