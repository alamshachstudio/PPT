import HeroSection from '@/components/sections/HeroSection';
import LatarBelakang from '@/components/sections/LatarBelakang';
import RumusanMasalah from '@/components/sections/RumusanMasalah';
import BatasanMasalah from '@/components/sections/BatasanMasalah';
import TujuanManfaat from '@/components/sections/TujuanManfaat';
import AnalisisKebutuhan from '@/components/sections/AnalisisKebutuhan';
import FiturSistem from '@/components/sections/FiturSistem';
import Implementasi from '@/components/sections/Implementasi';
import HasilImplementasi from '@/components/sections/HasilImplementasi';
import Pengujian from '@/components/sections/Pengujian';
import Kesimpulan from '@/components/sections/Kesimpulan';
import DownloadQR from '@/components/sections/DownloadQR';

export default function Home() {
  return (
    <>
      <HeroSection />
      
      {/* Section divider */}
      <div className="section-divider" />
      
      <LatarBelakang />
      
      <RumusanMasalah />
      
      <BatasanMasalah />
      
      <TujuanManfaat />
      
      <AnalisisKebutuhan />
      
      <FiturSistem />
      
      <Implementasi />
      
      <HasilImplementasi />
      
      <Pengujian />
      
      <Kesimpulan />
      
      <DownloadQR />
    </>
  );
}
