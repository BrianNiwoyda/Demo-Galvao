import React from 'react';

const Hero = () => {
    return (
        <section 
            id="hero" 
            className="text-white relative bg-cover bg-center"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=2128&auto=format&fit=crop')" }}
        >
            <div className="absolute inset-0 bg-brand-dark opacity-70"></div> {/* Dark overlay */}
            <div className="container mx-auto px-6 py-24 md:py-32 text-center relative z-10">
                <h1 className="text-4xl md:text-6xl font-extrabold font-serif leading-tight mb-4 text-brand-secondary">
                    Soluções Jurídicas Estratégicas em LPO
                </h1>
                <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-200">
                    Combinando mais de 30 anos de experiência com inovação para oferecer soluções jurídicas personalizadas e eficientes para sua empresa em Porto Alegre/RS.
                </p>
                <a
                    href="#contact"
                    className="mt-8 inline-block bg-brand-secondary text-brand-dark font-bold py-3 px-8 rounded-lg hover:opacity-90 transition-all duration-300 transform hover:scale-105"
                    onClick={(e) => {
                        e.preventDefault();
                        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                >
                    Consulte um Especialista
                </a>
            </div>
        </section>
    );
};

export default Hero;