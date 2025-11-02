import React from 'react';

const Contact = () => {
    return (
        <section 
            id="contact" 
            className="py-16 md:py-24 text-white relative bg-cover bg-center"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1589216532372-1c2a367902d9?q=80&w=2070&auto=format&fit=crop')" }}
        >
            <div className="absolute inset-0 bg-brand-dark opacity-80"></div>
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold font-serif text-white">
                        Entre em Contato
                    </h2>
                    <p className="text-gray-300 max-w-2xl mx-auto mt-4">
                        Tem alguma pergunta ou deseja discutir uma solução para sua empresa? Preencha o formulário abaixo.
                    </p>
                </div>
                <div className="max-w-2xl mx-auto bg-white text-gray-800 rounded-lg shadow-xl p-8">
                    <form action="#" method="POST" className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nome Completo</label>
                            <input type="text" name="name" id="name" autoComplete="name" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-brand-primary focus:border-brand-primary sm:text-sm" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">E-mail</label>
                            <input type="email" name="email" id="email" autoComplete="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-brand-primary focus:border-brand-primary sm:text-sm" />
                        </div>
                         <div>
                            <label htmlFor="company" className="block text-sm font-medium text-gray-700">Empresa</label>
                            <input type="text" name="company" id="company" autoComplete="organization" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-brand-primary focus:border-brand-primary sm:text-sm" />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Mensagem</label>
                            <textarea id="message" name="message" rows={4} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-brand-primary focus:border-brand-primary sm:text-sm"></textarea>
                        </div>
                        <div>
                            <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-brand-primary hover:bg-brand-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary">
                                Enviar Mensagem
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;