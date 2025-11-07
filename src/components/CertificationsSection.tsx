const CertificationsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
            At MEC, your passion finds its purpose. Whether you're inspired by innovation, discovery, or creativity, 
            we offer programs that ignite your potential. Experience a transformative education driven by cutting-edge 
            technology and research.
          </p>
          
          <button className="mb-16 px-8 py-3 border-2 border-foreground text-foreground rounded-full font-semibold hover:bg-foreground hover:text-white transition-colors">
            Speak to an Expert
          </button>

          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            Get Certified by the Best While You Study
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            <div className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-2xl shadow-md flex items-center justify-center p-4 hover:shadow-xl transition-shadow">
              <div className="text-center">
                <div className="text-[#3776AB] text-2xl md:text-3xl font-bold mb-1">py</div>
                <div className="text-xs text-muted-foreground">thon</div>
              </div>
            </div>

            <div className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-2xl shadow-md flex items-center justify-center p-4 hover:shadow-xl transition-shadow">
              <div className="text-[#FF9900] text-xl md:text-2xl font-bold">AWS</div>
            </div>

            <div className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-2xl shadow-md flex items-center justify-center p-4 hover:shadow-xl transition-shadow">
              <div className="text-[#E25A1C] text-xl md:text-2xl font-bold">Spark</div>
            </div>

            <div className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-2xl shadow-md flex items-center justify-center p-4 hover:shadow-xl transition-shadow">
              <div className="text-center">
                <div className="text-[#D22128] text-base md:text-lg font-bold">APACHE</div>
              </div>
            </div>

            <div className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-2xl shadow-md flex items-center justify-center p-4 hover:shadow-xl transition-shadow">
              <div className="text-[#A8B9CC] text-4xl md:text-5xl font-bold">C</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
