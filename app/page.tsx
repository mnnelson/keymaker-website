// app/page.tsx
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import ClientLogos from '@/components/ClientLogos';
import Solutions from '@/components/Solutions';
import Reviews from '@/components/Reviews';
import FAQ from '@/components/FAQ'; // New Import
import ContactCTA from '@/components/ContactCTA'; // New Import

export default function Home() {
  return (
    <main>
      <Hero />
      <ClientLogos />
      <Solutions />
      <Reviews />
      <FAQ /> 
      <ContactCTA />
      <Footer />
    </main>
  );
}