import React from "react";
import Features from "./LandingPage/Features";
import Footer from "./LandingPage/Footer";
import GetStarted from "./LandingPage/GetStarted";
import Header from "./LandingPage/Header";
import Hero from "./LandingPage/Hero";
import ManageAccount from "./LandingPage/ManageAccount";
import Profile from "./LandingPage/Profile";
import TrustedBy from "./LandingPage/TrustedBy";

const HomeScreen = () => {
  return (
    <div style={{ overflow: "hidden" }}>
      <Header />
      <Hero />
      <ManageAccount />
      <TrustedBy />
      <Profile />
      <Features />
      <GetStarted />
      <Footer />
    </div>
  );
};

export default HomeScreen;
