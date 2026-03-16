import React from "react";

function ExploreMore() {

  return (

    <div className="max-w-7xl mx-auto px-6 py-16">

      {/* Title */}
      <h1 className="text-4xl font-bold text-center mb-10">
        Explore More
      </h1>

      {/* Intro */}
      <p className="text-gray-600 text-center max-w-3xl mx-auto mb-16">
        Discover more about our platform and the powerful features
        that help developers build modern, scalable, and responsive
        web applications using the latest technologies.
      </p>


      {/* Feature Section */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">

        <div className="border p-6 rounded-lg hover:shadow-lg transition text-center">
          <h3 className="text-xl font-semibold mb-3">
            Easy Development
          </h3>
          <p className="text-gray-600">
            Build applications quickly with simple and efficient tools.
          </p>
        </div>

        <div className="border p-6 rounded-lg hover:shadow-lg transition text-center">
          <h3 className="text-xl font-semibold mb-3">
            Scalable Architecture
          </h3>
          <p className="text-gray-600">
            Our solutions are designed to grow with your business.
          </p>
        </div>

        <div className="border p-6 rounded-lg hover:shadow-lg transition text-center">
          <h3 className="text-xl font-semibold mb-3">
            Secure Systems
          </h3>
          <p className="text-gray-600">
            Data security and reliability are our top priorities.
          </p>
        </div>

      </div>


      {/* Technology Section */}
      <div className="bg-gray-100 p-10 rounded-lg mb-16">

        <h2 className="text-3xl font-bold text-center mb-10">
          Technologies We Use
        </h2>

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


      {/* Benefits Section */}
      <div className="grid md:grid-cols-2 gap-10 mb-16">

        <div>

          <h2 className="text-3xl font-bold mb-4">
            Why Choose Our Platform?
          </h2>

          <ul className="space-y-3 text-gray-600">

            <li>✔ Modern UI and responsive design</li>
            <li>✔ Fast and optimized performance</li>
            <li>✔ Secure backend architecture</li>
            <li>✔ Easy integration with APIs</li>
            <li>✔ Scalable full-stack solutions</li>

          </ul>

        </div>

        <div className="bg-blue-600 text-white p-8 rounded-lg flex items-center justify-center text-center">

          <p className="text-lg">
            Our mission is to help developers build better
            applications with modern tools and technologies.
          </p>

        </div>

      </div>


      {/* Call to Action */}
      <div className="bg-blue-600 text-white text-center py-12 rounded-lg">

        <h2 className="text-3xl font-bold mb-4">
          Ready to Start Your Project?
        </h2>

        <p className="mb-6">
          Contact us today and build your next modern website.
        </p>

        <a
          href="/contact"
          className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold"
        >
          Contact Us
        </a>

      </div>

    </div>

  );

}

export default ExploreMore;