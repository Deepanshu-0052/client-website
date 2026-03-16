import React from "react";
import hero from "../assets/hero.jpg";
import { Link } from "react-router-dom";

function Home() {
  return (

    <div>

      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-2 gap-10 items-center">

          <div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Build Modern Websites Easily
            </h1>

            <p className="text-gray-600 text-lg">
              Our platform helps developers create fast, responsive,
              and modern websites using the latest technologies
              like React, Tailwind CSS, and Node.js.
            </p>

            <Link
              to="/explore"
              className="inline-block mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
            >
              Explore More
            </Link>

          </div>

          <img
            src={hero}
            alt="hero"
            className="rounded-lg shadow-lg"
          />

        </div>

      </section>


      {/* FEATURES SECTION */}
      <section className="bg-gray-100 py-16">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-12">
            Our Features
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-3">
                Fast Performance
              </h3>
              <p className="text-gray-600">
                Our website is optimized for speed and smooth user experience.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-3">
                Responsive Design
              </h3>
              <p className="text-gray-600">
                Fully responsive layouts that work perfectly on all devices.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-3">
                Modern Technology
              </h3>
              <p className="text-gray-600">
                Built using modern technologies like React, Node.js and Tailwind.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* SERVICES SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-16">

        <h2 className="text-3xl font-bold text-center mb-12">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="border p-6 rounded-lg text-center hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">
              Web Development
            </h3>
            <p className="text-gray-600">
              We create modern and scalable web applications.
            </p>
          </div>

          <div className="border p-6 rounded-lg text-center hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">
              UI/UX Design
            </h3>
            <p className="text-gray-600">
              Beautiful and user-friendly designs for better experience.
            </p>
          </div>

          <div className="border p-6 rounded-lg text-center hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">
              Full Stack Solutions
            </h3>
            <p className="text-gray-600">
              Complete solutions using React, Node.js and MongoDB.
            </p>
          </div>

        </div>

      </section>


      {/* CALL TO ACTION */}
      <section className="bg-blue-600 text-white py-16">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold mb-4">
            Ready to Build Your Website?
          </h2>

          <p className="mb-6">
            Contact us today and start building modern applications.
          </p>

          <Link
            to="/contact"
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold"
          >
            Contact Us
          </Link>

        </div>

      </section>

    </div>

  );
}

export default Home;