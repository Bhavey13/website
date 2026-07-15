import React, { useState, useEffect } from 'react';
import logoImg from '../assets/logo.png';

interface LogoProps {
  className?: string; // Tailwind height/style class for alignment
  iconOnly?: boolean;
  lightText?: boolean;
}

// Global cache to avoid re-processing the image on every component mount
const logoCache: Record<string, string> = {};

export default function Logo({ className = 'h-10', iconOnly = false, lightText = false }: LogoProps) {
  const [processedSrc, setProcessedSrc] = useState<string>('');

  useEffect(() => {
    const cacheKey = `${lightText ? 'light' : 'dark'}`;
    if (logoCache[cacheKey]) {
      setProcessedSrc(logoCache[cacheKey]);
      return;
    }

    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = logoImg;
    
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      if (!ctx) {
        setProcessedSrc(logoImg);
        return;
      }

      ctx.drawImage(img, 0, 0);
      const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imgData.data;

      for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];

        // 1. Detect white background pixels and make them transparent
        // Using the minimum of RGB to calculate "whiteness"
        const whiteness = Math.min(r, g, b);
        if (whiteness > 215) {
          // Smooth anti-aliasing feathering for edge pixels
          const alphaFactor = (255 - whiteness) / (255 - 215);
          data[i + 3] = Math.round(data[i + 3] * alphaFactor);
        } else if (lightText) {
          // 2. For dark backgrounds (lightText=true), adapt the dark navy symbol to light-slate/white
          // The dark navy pixels have low Red values (typically < 100)
          if (r < 100) {
            data[i] = 241;     // Red (slate-100)
            data[i + 1] = 245; // Green
            data[i + 2] = 249; // Blue
          }
        }
      }

      ctx.putImageData(imgData, 0, 0);
      const dataUrl = canvas.toDataURL('image/png');
      logoCache[cacheKey] = dataUrl;
      setProcessedSrc(dataUrl);
    };

    img.onerror = () => {
      setProcessedSrc(logoImg);
    };
  }, [lightText]);

  // Fallback behavior:
  // - If lightText is true, we must hide the original image to avoid displaying the white background on dark backgrounds.
  // - If lightText is false, we can safely display the original image immediately with CSS mixBlendMode: multiply.
  const displaySrc = processedSrc || logoImg;
  const isReady = !!processedSrc;
  const showImage = !lightText || isReady;

  return (
    <div className={`flex items-center select-none ${className}`}>
      <img
        src={displaySrc}
        alt="Nvaraa Logo"
        referrerPolicy="no-referrer"
        className={`h-full w-auto object-contain transition-opacity duration-300 ${showImage ? 'opacity-100' : 'opacity-0'}`}
        style={{
          // Use mixBlendMode: multiply as an instant, perfect CSS fallback for light backgrounds
          mixBlendMode: !isReady && !lightText ? 'multiply' : 'normal'
        }}
      />
    </div>
  );
}
