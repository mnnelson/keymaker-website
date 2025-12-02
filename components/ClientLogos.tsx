// components/ClientLogos.tsx

const Logos = [
  'NONAME', 
  'QUASWE', 
  'ULTIMA', 
  'COPYWISE', 
  '@copywise', 
  'RALLI'
];

const ClientLogos = () => {
  return (
    <section id="logos" className="bg-key-primary py-12 md:py-16 text-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-center text-sm md:text-base uppercase tracking-widest opacity-80 mb-8">
          Trusted by teams around the world
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-6 opacity-70">
          {Logos.map((logo, index) => (
            <div key={index} className="text-2xl font-semibold px-4 py-2 hover:opacity-100 transition duration-300 cursor-pointer">
              {/* Replace the text with your actual <Image /> or <svg> components */}
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;