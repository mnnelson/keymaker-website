// components/ContactCTA.tsx

const ContactCTA = () => {
  return (
    <section id="contact" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="bg-gray-50 p-8 md:p-12 rounded-xl shadow-lg flex flex-col lg:flex-row gap-12">
          
          {/* Left Side: Call to Action and List */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-extrabold text-key-text mb-6">
              Ready to Transform Your Business?
            </h2>
            
            <ol className="space-y-4 text-gray-700 list-none">
              <li className="flex items-start">
                <span className="flex-shrink-0 mr-3 mt-1 font-bold text-key-primary">1.</span>
                <div>
                  <strong className="text-key-text">Build exactly what you need.</strong> We develop bespoke software from scratch, tailored to your unique requirements.
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 mr-3 mt-1 font-bold text-key-primary">2.</span>
                <div>
                  <strong className="text-key-text">Seamless integration.</strong> We ensure new systems work perfectly with your existing technology stack.
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 mr-3 mt-1 font-bold text-key-primary">3.</span>
                <div>
                  <strong className="text-key-text">Future-proof results.</strong> Our solutions are designed for scalability and long-term performance.
                </div>
              </li>
            </ol>
          </div>
          
          {/* Right Side: Contact Form */}
          <div className="lg:w-1/2 bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-xl font-bold text-key-text mb-6">Get Started Today</h3>
            <form className="space-y-4">
              <input 
                type="text" 
                placeholder="Name" 
                className="w-full p-3 border border-gray-300 rounded-lg focus:border-key-primary focus:ring focus:ring-key-primary/20 transition"
                required 
              />
              <input 
                type="email" 
                placeholder="Email" 
                className="w-full p-3 border border-gray-300 rounded-lg focus:border-key-primary focus:ring focus:ring-key-primary/20 transition"
                required 
              />
              <input 
                type="text" 
                placeholder="Company Name" 
                className="w-full p-3 border border-gray-300 rounded-lg focus:border-key-primary focus:ring focus:ring-key-primary/20 transition"
                required 
              />
              <button 
                type="submit" 
                className="w-full bg-key-primary text-white font-bold py-3 rounded-lg hover:bg-opacity-90 transition duration-300 shadow-lg shadow-key-primary/50"
              >
                Send Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;