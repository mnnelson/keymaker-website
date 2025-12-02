// app/page.tsx
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import ClientLogos from '@/components/ClientLogos';
import Solutions from '@/components/Solutions';
import Reviews from '@/components/Reviews';

export default function Home() {
  return (
    <main>
      <Hero />
      <ClientLogos />
      <Solutions />
      <Reviews />
      
      {/* Remaining sections will go here: FAQs and Contact Form */}
      {/* <section id="faqs">...</section> */}
      {/* <section id="contact">...</section> */}

      <Footer />
    </main>
  );
}