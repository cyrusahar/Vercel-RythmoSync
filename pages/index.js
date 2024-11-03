// pages/index.js
import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Commands from '../components/Commands';
import Testimonials from '../components/Testimonials';
import Metrics from '../components/Metrics';
import FAQ from '../components/FAQ';
import Changelog from '../components/Changelog';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <Commands />
      <Testimonials />
      <Metrics />
      <FAQ />
      <Changelog />
      <Footer />
    </>
  );
}
