import React, { useState, useCallback } from 'react';
import { editImage } from '../services/geminiService';
import { toBase64 } from '../utils/fileUtils';
import { UploadIcon, SparklesIcon } from './icons';

const ImageEditor = () => {
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [originalImage, setOriginalImage] = useState<string | null>(null);
    const [prompt, setPrompt] = useState<string>('');
    const [editedImage, setEditedImage] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            setImageFile(file);
            setOriginalImage(URL.createObjectURL(file));
            setEditedImage(null);
            setError(null);
        }
    };

    const handleGenerate = useCallback(async () => {
        if (!imageFile || !prompt) {
            setError("Por favor, cargue una imagen e ingrese una instrucción.");
            return;
        }

        setIsLoading(true);
        setError(null);
        setEditedImage(null);

        try {
            const base64Image = await toBase64(imageFile);
            const newBase64Image = await editImage(base64Image, imageFile.type, prompt);
            setEditedImage(`data:image/png;base64,${newBase64Image}`);
        } catch (err) {
            setError(err instanceof Error ? err.message : "Ocurrió un error desconocido.");
        } finally {
            setIsLoading(false);
        }
    }, [imageFile, prompt]);
    
    return (
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <div className="flex items-center mb-6">
                 <SparklesIcon className="w-8 h-8 text-brand-secondary mr-3" />
                 <h3 className="text-2xl font-bold font-serif text-brand-primary">Editor de Imágenes con IA</h3>
            </div>
           
            <div className="space-y-6">
                 <div>
                    <label htmlFor="image-upload" className="block text-sm font-medium text-gray-700 mb-2">1. Cargue su imagen</label>
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                        <div className="space-y-1 text-center">
                            <UploadIcon className="mx-auto h-12 w-12 text-gray-400" />
                            <div className="flex text-sm text-gray-600">
                                <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-brand-primary hover:text-brand-dark focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-brand-primary">
                                    <span>Subir un archivo</span>
                                    <input id="file-upload" name="file-upload" type="file" className="sr-only" accept="image/*" onChange={handleFileChange} />
                                </label>
                                <p className="pl-1">o arrastrar y soltar</p>
                            </div>
                            <p className="text-xs text-gray-500">PNG, JPG, GIF hasta 10MB</p>
                        </div>
                    </div>
                </div>

                <div>
                    <label htmlFor="prompt" className="block text-sm font-medium text-gray-700">2. Describa la edición</label>
                    <div className="mt-1">
                        <input
                            type="text"
                            name="prompt"
                            id="prompt"
                            className="shadow-sm focus:ring-brand-primary focus:border-brand-primary block w-full sm:text-sm border-gray-300 rounded-md p-3"
                            placeholder='Ej: "Añadir un filtro retro" o "Quitar el fondo"'
                            value={prompt}
                            onChange={(e) => setPrompt(e.target.value)}
                        />
                    </div>
                </div>

                <button
                    onClick={handleGenerate}
                    disabled={isLoading || !imageFile || !prompt}
                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-brand-primary hover:bg-brand-dark disabled:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary transition-colors"
                >
                    {isLoading ? 'Generando...' : 'Aplicar Edición'}
                </button>
                
                {error && <p className="text-red-600 text-sm text-center">{error}</p>}
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <h4 className="font-semibold text-center text-gray-600 mb-2">Original</h4>
                    <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
                        {originalImage ? <img src={originalImage} alt="Original" className="max-h-full max-w-full rounded-lg object-contain" /> : <span className="text-gray-400">Vista previa</span>}
                    </div>
                </div>
                <div>
                    <h4 className="font-semibold text-center text-gray-600 mb-2">Editada</h4>
                    <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
                       {isLoading && <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-primary"></div>}
                       {editedImage && !isLoading && <img src={editedImage} alt="Edited" className="max-h-full max-w-full rounded-lg object-contain" />}
                       {!editedImage && !isLoading && <span className="text-gray-400">Resultado</span>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImageEditor;