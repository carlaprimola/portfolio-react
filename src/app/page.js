import Image from "next/image";
import Link from "next/link";
import './pages/home/page.css';
import Navbar from "./components/Navbar/Navbar";
import MobileMockup from "./components/MobileMockup/MobileMockup";



export default function Home() {

  
  return (
    <section>
      <Navbar/>
      
      <main>
        <MobileMockup/>
        
      </main>
    </section>
  );
}

