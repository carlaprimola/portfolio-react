import Image from "next/image";
import Link from "next/link";
import './pages/home/page.css';
import Navbar from "./components/Navbar/Navbar";
import MobileMockup from "./components/MobileMockup/MobileMockup";
import HomeInfo from "./components/HomeInfo/HomeInfo";



export default function Home() {

  
  return (
    <section>
      <Navbar/>            
      <MobileMockup/>       
      
    </section>
  );
}

