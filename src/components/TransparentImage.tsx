import React, { useRef, useEffect, useState } from 'react';

interface TransparentImageProps {
    src: string;
    alt: string;
    className?: string;
    targetColor?: 'white' | 'green';
    tolerance?: number;
}

const TransparentImage: React.FC<TransparentImageProps> = ({
    src,
    alt,
    className,
    targetColor = 'white',
    tolerance = 200 // Default high for white (0-255), low for green difference
}) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const image = new Image();
        image.src = src;
        image.crossOrigin = "Anonymous";

        image.onload = () => {
            const canvas = canvasRef.current;
            if (!canvas) return;

            const ctx = canvas.getContext('2d');
            if (!ctx) return;

            // Set canvas size to match image
            canvas.width = image.width;
            canvas.height = image.height;

            // Draw image
            ctx.drawImage(image, 0, 0);

            // Get image data
            const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            const data = imageData.data;

            // Loop through pixels
            for (let i = 0; i < data.length; i += 4) {
                const r = data[i];
                const g = data[i + 1];
                const b = data[i + 2];

                if (targetColor === 'white') {
                    // Soft Alpha Removal for White
                    // Calculate brightness
                    const brightness = (r + g + b) / 3;

                    if (brightness > tolerance) {
                        // Fade out pixels that are lighter than tolerance
                        // brightness 255 -> alpha 0
                        // brightness tolerance -> alpha 255
                        const alpha = 255 * (1 - (brightness - tolerance) / (255 - tolerance));
                        data[i + 3] = Math.max(0, Math.min(255, alpha));
                    }
                } else if (targetColor === 'green') {
                    // Remove Green: Green channel is significantly higher than others
                    // tolerance acts as difference threshold
                    const greenTolerance = tolerance < 150 ? tolerance : 100; // Adjust default if passed roughly
                    if (g > r + greenTolerance && g > b + greenTolerance) {
                        data[i + 3] = 0;
                    }
                }
            }

            // Put image data back
            ctx.putImageData(imageData, 0, 0);
            setIsLoaded(true);
        };
    }, [src, targetColor, tolerance]);

    return (
        <canvas
            ref={canvasRef}
            className={`${className} transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
            title={alt}
        />
    );
};

export default TransparentImage;
