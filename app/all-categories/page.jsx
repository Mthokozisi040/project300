"use client";
import Navbar from "@/components/Navbar";
import HeroSlideshow from "@/components/Heroslideshow";
import HeroSection from "@/components/HeroSection";
import FeaturedActivities from "@/components/FearturedActivities";
import ActivitiesSection from "@/components/ActivitiesSection";
import Filter from "@/components/SideBarFilter";
import SidebarFilter from "@/components/SideBarFilter";
import CatalogPage from "@/components/CatalogPage";
import Footer from "@/components/Footer";





export default function Home() {
  return (
    <>
      
      <Navbar/>
      <HeroSlideshow/>
      <FeaturedActivities/>
      {/*<ActivitiesSection/>*/}
      
      <CatalogPage/>
      <Footer/>

    </>
    
  );
}
