import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import StarRating from "./StarRating";

    it('should double star size when window width is 1024 or greater', () => {

        Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: 1024 });

        const { container } = render(<StarRating rating={3} size={20} />);
        const stars = container.querySelectorAll('.StarRating img');

        stars.forEach(star => {
            expect(parseInt(star.style.width)).toBe(40); 
            expect(parseInt(star.style.height)).toBe(40); 
        });
    });