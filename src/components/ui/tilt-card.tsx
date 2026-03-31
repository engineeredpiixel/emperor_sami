"use client";
import React, { useRef } from 'react';

export default function TiltCard({ 
    children, 
    className = "", 
    style,
    maxTilt = 5,
    scaleAmount = 1.01
}: { 
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    maxTilt?: number;
    scaleAmount?: number;
}) {
    const cardRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const card = cardRef.current;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        // Normalize coordinates to percentage bounds and multiply by maxTilt
        const rotateX = ((y - centerY) / centerY) * maxTilt;
        const rotateY = ((centerX - x) / centerX) * maxTilt;

        card.style.setProperty('--bg-x', `${(x / rect.width) * 100}%`);
        card.style.setProperty('--bg-y', `${(y / rect.height) * 100}%`);
        card.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scaleAmount}, ${scaleAmount}, ${scaleAmount})`;
    };

    const handleMouseLeave = () => {
        if (!cardRef.current) return;
        const card = cardRef.current;
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
        card.style.setProperty('--bg-x', '50%');
        card.style.setProperty('--bg-y', '50%');
    };

    return (
        <div 
            className={`relative overflow-hidden cursor-pointer ${className}`}
            style={{
                transformStyle: 'preserve-3d',
                transition: 'transform 0.1s ease',
                ...style 
            }}
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <div className="relative z-[2] w-full h-full pointer-events-none">
                {children}
            </div>
            {/* The holographic glow layer */}
            <div 
                className="absolute inset-0 z-[10] pointer-events-none" 
                style={{
                    background: `radial-gradient(circle at var(--bg-x, 50%) var(--bg-y, 50%), rgba(255,255,255,0.2) 0%, transparent 60%)`
                }} 
            />
        </div>
    );
}
