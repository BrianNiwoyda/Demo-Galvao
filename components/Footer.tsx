
import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-gray-400">
            <div className="container mx-auto px-6 py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <p className="text-center text-sm">
                        &copy; {currentYear} Galvão Advogados Associados. Todos os direitos reservados.
                    </p>
                    <div className="flex justify-center space-x-6 mt-4 sm:mt-0">
                        <a href="#" className="hover:text-white">Política de Privacidade</a>
                        <a href="#" className="hover:text-white">Termos de Serviço</a>
                    </div>
                </div>
                 <p className="text-center text-xs mt-4 text-gray-500">
                    Porto Alegre, Rio Grande do Sul, Brasil
                </p>
            </div>
        </footer>
    );
};

export default Footer;