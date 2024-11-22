// components/StarsRating.tsx
import React from 'react';

interface StarsRatingProps {
    rating: number;
    maxStars?: number;
}

const StarsRating: React.FC<StarsRatingProps> = ({ rating, maxStars = 5 }) => {
    const filledStars = Math.round((rating / 10) * maxStars);
    const emptyStars = maxStars - filledStars;

    return (
        <div style={{ display: 'flex', gap: '4px' }}>
            {/* Заповнені зірки */}
            {[...Array(filledStars)].map((_, index) => (
                <span key={index} style={{ color: 'gold', fontSize: '1.5rem' }}>★</span>
            ))}
            {/* Порожні зірки */}
            {[...Array(emptyStars)].map((_, index) => (
                <span key={index} style={{ color: 'gray', fontSize: '1.5rem' }}>☆</span>
            ))}
        </div>
    );
};

export default StarsRating;
