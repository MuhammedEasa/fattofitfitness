import React from "react";
import TeamSection from "../components/OurTeam";
import Navbar from "../components/Navbar";
import LocationSection from "../components/LocationSection";

const page = () => {
  return (
    <>
      <main className="bg-black">
        <Navbar />
        <TeamSection />
        <LocationSection />
      </main>
    </>
  );
};

export default page;
