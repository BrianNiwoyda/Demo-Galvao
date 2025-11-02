import React from 'react';

const About = () => {
    return (
        <section id="about" className="py-16 md:py-24 bg-brand-light">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <span className="text-brand-secondary font-bold">Nossa Trajetória</span>
                        <h2 className="text-3xl md:text-4xl font-bold font-serif text-brand-primary mt-2 mb-4">
                            Mais de 30 Anos de Excelência Jurídica
                        </h2>
                        <p className="text-gray-600 mb-4">
                            Galvão Advogados Associados é um escritório de advocacia com mais de três décadas de sólida experiência no mercado. Somos especializados em Legal Process Outsourcing (LPO), oferecendo uma abordagem inovadora para a gestão de processos legais.
                        </p>
                        <p className="text-gray-600">
                            Nossa missão é fornecer soluções jurídicas estratégicas e personalizadas que otimizem a eficiência e reduzam os custos para as empresas em Porto Alegre e em todo o Rio Grande do Sul, combinando tradição com tecnologia de ponta.
                        </p>
                    </div>
                    <div className="flex justify-center items-center">
                       <img 
                            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop" 
                            alt="Escritório de advocacia moderno" 
                            className="rounded-lg shadow-xl w-full h-auto object-cover"
                            style={{ maxHeight: '400px' }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;