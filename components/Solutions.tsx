
import React from 'react';
import { BriefcaseIcon, UsersIcon, ChartBarIcon, CogIcon } from './icons';

interface ServiceCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
    return (
        <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2">
            <div className="text-brand-secondary mb-4">{icon}</div>
            <h3 className="text-xl font-bold font-serif text-brand-primary mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </div>
    );
};


const Solutions = () => {
    const services = [
        {
            icon: <BriefcaseIcon className="w-12 h-12" />,
            title: "Terceirização de Processos Legais (LPO)",
            description: "Delegue seus processos legais para focar em seu negócio principal, garantindo eficiência e expertise."
        },
        {
            icon: <UsersIcon className="w-12 h-12" />,
            title: "Soluções Jurídicas Estratégicas",
            description: "Desenvolvemos estratégias legais sob medida que se alinham com os objetivos comerciais da sua empresa."
        },
        {
            icon: <ChartBarIcon className="w-12 h-12" />,
            title: "Assessoria Corporativa Personalizada",
            description: "Oferecemos orientação jurídica e corporativa adaptada às necessidades específicas da sua organização."
        },
        {
            icon: <CogIcon className="w-12 h-12" />,
            title: "Gestão Eficiente de Processos Legais",
            description: "Implementamos metodologias e tecnologias para uma gestão de processos legais mais ágil e eficaz."
        }
    ];

    return (
        <section id="solutions" className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                     <span className="text-brand-secondary font-bold">Nossos Serviços</span>
                    <h2 className="text-3xl md:text-4xl font-bold font-serif text-brand-primary mt-2">
                        Nossas Soluções Especializadas
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto mt-4">
                        Oferecemos um conjunto completo de serviços projetados para otimizar o departamento jurídico da sua empresa.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <ServiceCard key={index} icon={service.icon} title={service.title} description={service.description} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Solutions;