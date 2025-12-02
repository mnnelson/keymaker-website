// components/Hero.tsx
// Tailwind classes reflect the large, blue background section from the design

const Hero = () => (
  <section className="bg-key-primary py-24 md:py-32 text-white">
    <div className="container mx-auto text-center px-4 max-w-7xl">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4">
        Software that <span className="underline decoration-wavy decoration-white/50">pays for itself</span>
      </h1>
      <p className="text-lg md:text-xl font-light max-w-3xl mx-auto opacity-90">
        We help teams manage internal processes, create seamless customer experiences, and build tools that drive revenue.
      </p>
    </div>
  </section>
);

export default Hero;