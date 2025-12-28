import React from 'react';
import { Header } from "./components/marketplace/Header";
import { Hero } from "./components/marketplace/Hero";
import { CategoriesSection } from "./components/marketplace/CategoriesSection";
import { FeaturedSection } from "./components/marketplace/FeaturedSection";
import { HowItWorks } from "./components/marketplace/HowItWorks";
import { Reviews } from "./components/marketplace/Reviews";
import { Footer } from "./components/marketplace/Footer";

export default function App() {
  return (
    <div className="bg-[#f5f5f0] relative min-h-screen w-full flex justify-center overflow-x-hidden">
      <div className="content-stretch flex flex-col items-center justify-center p-[10px] relative w-full max-w-[1518px]">
        <div className="content-stretch flex flex-col gap-[28px] items-center relative shrink-0 w-full">
          <div className="w-full max-w-[1192px] px-4 lg:px-0">
            <Header />
          </div>
          <Hero />
          <CategoriesSection />
          <FeaturedSection />
          <HowItWorks />
          <Reviews />
          <Footer />
        </div>
      </div>
    </div>
  );
}
