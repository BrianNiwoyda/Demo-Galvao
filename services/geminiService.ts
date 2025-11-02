
import { GoogleGenAI, Modality } from "@google/genai";

const getGenAI = () => {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
        throw new Error("API_KEY environment variable not set");
    }
    return new GoogleGenAI({ apiKey });
};

export const editImage = async (
    base64Image: string,
    mimeType: string,
    prompt: string
): Promise<string> => {
    try {
        const ai = getGenAI();
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash-image',
            contents: {
                parts: [
                    {
                        inlineData: {
                            data: base64Image,
                            mimeType: mimeType,
                        },
                    },
                    {
                        text: prompt,
                    },
                ],
            },
            config: {
                responseModalities: [Modality.IMAGE],
            },
        });

        for (const part of response.candidates[0].content.parts) {
            if (part.inlineData) {
                return part.inlineData.data;
            }
        }
        throw new Error("No image data found in the response.");
    } catch (error) {
        console.error("Error editing image with Gemini:", error);
        throw new Error("Failed to edit image. Please check the console for details.");
    }
};


export const getComplexAnswer = async (prompt: string): Promise<string> => {
    try {
        const ai = getGenAI();
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-pro',
            contents: prompt,
            config: {
                thinkingConfig: { thinkingBudget: 32768 },
            },
        });

        return response.text;
    } catch (error) {
        console.error("Error getting complex answer from Gemini:", error);
        throw new Error("Failed to get response from AI. Please check the console for details.");
    }
};
