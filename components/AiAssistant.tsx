import React, { useState, useCallback } from 'react';
import { getComplexAnswer } from '../services/geminiService';
import { BrainIcon } from './icons';

const AiAssistant = () => {
    const [prompt, setPrompt] = useState<string>('');
    const [response, setResponse] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = useCallback(async () => {
        if (!prompt) {
            setError("Por favor, ingrese una consulta.");
            return;
        }

        setIsLoading(true);
        setError(null);
        setResponse('');

        try {
            const result = await getComplexAnswer(prompt);
            setResponse(result);
        } catch (err) {
            setError(err instanceof Error ? err.message : "Ocurrió un error desconocido.");
        } finally {
            setIsLoading(false);
        }
    }, [prompt]);

    return (
        <div className="bg-brand-dark p-8 rounded-2xl shadow-lg border border-gray-700 text-white">
            <div className="flex items-center mb-6">
                 <BrainIcon className="w-8 h-8 text-brand-secondary mr-3" />
                 <h3 className="text-2xl font-bold font-serif text-white">Asistente Jurídico IA (Modo Pensamiento)</h3>
            </div>
            <p className="text-gray-300 mb-6 text-sm">
                Utilice nuestro asistente avanzado para sus consultas más complejas. El "Modo Pensamiento" utiliza un presupuesto de razonamiento ampliado para proporcionar respuestas más profundas y detalladas.
            </p>

            <div className="space-y-4">
                <div>
                    <label htmlFor="complex-query" className="block text-sm font-medium text-gray-300 mb-2">Ingrese su consulta compleja</label>
                    <textarea
                        id="complex-query"
                        rows={4}
                        className="block w-full text-gray-900 shadow-sm sm:text-sm border-gray-300 rounded-md p-3 focus:ring-brand-secondary focus:border-brand-secondary"
                        placeholder="Ej: 'Analizar las implicaciones del LPO en la confidencialidad de datos para empresas de tecnología en Brasil...'"
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                    />
                </div>
                <button
                    onClick={handleSubmit}
                    disabled={isLoading || !prompt}
                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-brand-dark bg-brand-secondary hover:opacity-90 disabled:opacity-60 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-secondary transition-colors"
                >
                    {isLoading ? 'Pensando...' : 'Obtener Respuesta'}
                </button>

                {error && <p className="text-red-400 text-sm text-center">{error}</p>}
            </div>

            <div className="mt-8">
                <h4 className="font-semibold text-gray-300 mb-2">Respuesta del Asistente:</h4>
                <div className="bg-gray-900 rounded-lg p-4 min-h-[150px] text-gray-200 text-sm font-mono overflow-x-auto">
                    {isLoading ? (
                         <div className="flex items-center justify-center h-full">
                            <div className="animate-pulse flex space-x-4">
                               <div className="rounded-full bg-slate-700 h-10 w-10"></div>
                               <div className="flex-1 space-y-6 py-1">
                                 <div className="h-2 bg-slate-700 rounded"></div>
                                 <div className="space-y-3">
                                   <div className="grid grid-cols-3 gap-4">
                                     <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                                     <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                                   </div>
                                   <div className="h-2 bg-slate-700 rounded"></div>
                                 </div>
                               </div>
                             </div>
                         </div>
                    ) : (
                        <pre className="whitespace-pre-wrap">{response || "La respuesta de la IA aparecerá aquí..."}</pre>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AiAssistant;