import React from "react";
import Contact from "../components/Contact";

const About = () => {
  return (
    <div className="p-5">
      <div className="mb-5">
        <h1 className="text-2xl font-extralight text-center font-poppins">
          About
        </h1>
        <hr className="border-t-2 border-black mt-2" />
      </div>
      <div className="flex gap-5 md:mt-24 mt-12">
        <div className="flex-7 text-lg leading-relaxed">
          <p className="text-3xl font-light w-[70%]">
            WorldUniversity is your ultimate resource for exploring the rich
            diversity of nations around the globe, providing in-depth insights
            into the geography, culture, economy, and history of every country.
            Our mission is to create an accessible platform that empowers
            individuals to understand the world's cultural and economic
            diversity, fostering global awareness and connection. Founded as a
            modest project, we have evolved into a comprehensive educational hub
            offering detailed country profiles, interactive tools, and
            multimedia content that go beyond surface-level information. With
            regular updates to reflect the latest global developments, our
            platform caters to students, educators, travelers, and global
            citizens alike. As we continue to expand, we remain committed to our
            vision of making knowledge accessible to all, contributing to a more
            informed and interconnected world. Join us on this journey of
            exploration and let WorldUniversity be your gateway to discovering
            the wonders of our shared global community.
          </p>
        </div>
      </div>
      {/* Integrate the Contact Component here */}
      <Contact />
    </div>
  );
};

export default About;
