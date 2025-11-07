const CompanyLogos = () => {
  const companies = [
    { name: "Meta", color: "#0081FB" },
    { name: "Microsoft", color: "#00A4EF" },
    { name: "Amazon", color: "#FF9900" },
    { name: "Google", color: "#4285F4" },
    { name: "Siemens", color: "#009999" },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-foreground/70 text-lg mb-8 font-medium">
            Step into a world of opportunities with world-class companies
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            {companies.map((company) => (
              <div key={company.name} className="text-3xl md:text-4xl font-bold opacity-70 hover:opacity-100 transition-opacity">
                {company.name === "Meta" && <span style={{ color: company.color, fontFamily: 'system-ui' }}>Meta</span>}
                {company.name === "Microsoft" && (
                  <div className="flex items-center space-x-2">
                    <div className="grid grid-cols-2 gap-0.5 w-6 h-6">
                      <div className="bg-[#F25022]"></div>
                      <div className="bg-[#7FBA00]"></div>
                      <div className="bg-[#00A4EF]"></div>
                      <div className="bg-[#FFB900]"></div>
                    </div>
                    <span style={{ color: '#5E5E5E' }}>Microsoft</span>
                  </div>
                )}
                {company.name === "Amazon" && (
                  <span className="font-bold" style={{ color: '#232F3E' }}>
                    amazon
                    <svg className="inline w-8 h-3 ml-1" viewBox="0 0 100 30" fill="currentColor">
                      <path d="M70 20c-10 8-25 12-37 12-17 0-33-6-45-17-1-1 0-2 1-1 14 8 32 13 50 13 12 0 26-3 38-8 2-1 3 1 1 2z" fill="#FF9900"/>
                      <path d="M73 16c-1-2-8-1-11-1-1 0-1 0-1-1 0-5 8-7 9-6 1 0 0 4-1 6 0 1 0 1 1 1 3 0 8-5 9-7 0-1-1-1-2 0z" fill="#FF9900"/>
                    </svg>
                  </span>
                )}
                {company.name === "Google" && (
                  <span>
                    <span style={{ color: '#4285F4' }}>G</span>
                    <span style={{ color: '#EA4335' }}>o</span>
                    <span style={{ color: '#FBBC05' }}>o</span>
                    <span style={{ color: '#4285F4' }}>g</span>
                    <span style={{ color: '#34A853' }}>l</span>
                    <span style={{ color: '#EA4335' }}>e</span>
                  </span>
                )}
                {company.name === "Siemens" && (
                  <span className="uppercase tracking-tight" style={{ color: company.color }}>SIEMENS</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyLogos;
