import React from "react";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div>
      <div className="min-h-screen flex flex-col justify-between p-5">
        <div>
          <div className="mb-5">
            <h1 className="text-2xl font-extralight text-center font-poppins">
              About
            </h1>
            <hr className="border-t-2 border-black mt-2" />
          </div>
          <div className="flex gap-5 md:mt-24 mt-12 flex-1">
            <div className="text-lg leading-relaxed w-full md:w-[70%]">
              <p className="text-3xl font-light">
                WorldUniversity is your ultimate resource for exploring the rich
                diversity of nations around the globe, providing in-depth
                insights into the geography, culture, economy, and history of
                every country. Our mission is to create an accessible platform
                that empowers individuals to understand the world's cultural and
                economic diversity, fostering global awareness and connection.
                Founded as a modest project, we have evolved into a
                comprehensive educational hub offering detailed country
                profiles, interactive tools, and multimedia content that go
                beyond surface-level information. With regular updates to
                reflect the latest global developments, our platform caters to
                students, educators, travelers, and global citizens alike. As we
                continue to expand, we remain committed to our vision of making
                knowledge accessible to all, contributing to a more informed and
                interconnected world. Join us on this journey of exploration and
                let WorldUniversity be your gateway to discovering the wonders
                of our shared global community.
              </p>
            </div>
          </div>
        </div>
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default About;
