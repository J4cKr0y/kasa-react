import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Carousel from './Carousel';

const images = ['image1.jpg', 'image2.jpg', 'image3.jpg'];

describe('The Carrousel component'), () => {


it('should render Carousel component', () => {
    render(<Carousel images={images} currentIndex={0} nextSlide={() => {}} prevSlide={() => {}} />);
    expect(screen.getByAltText('Slide 1')).toBeInTheDocument();
});

it('should navigate to the next slide', () => {
    const nextSlide = jest.fn();
    render(<Carousel images={images} currentIndex={0} nextSlide={nextSlide} prevSlide={() => {}} />);
    fireEvent.click(screen.getByText('❯'));
    expect(nextSlide).toHaveBeenCalled();
});

it('should navigate to the previous slide', () => {
    const prevSlide = jest.fn();
    render(<Carousel images={images} currentIndex={1} nextSlide={() => {}} prevSlide={prevSlide} />);
    fireEvent.click(screen.getByText('❮'));
    expect(prevSlide).toHaveBeenCalled();
});

it('should display the correct slide counter', () => {
    render(<Carousel images={images} currentIndex={1} nextSlide={() => {}} prevSlide={() => {}} />);
    expect(screen.getByText('2/3')).toBeInTheDocument();
});

it('should not display the counter if resolution is less than 1024px', () => {
    window.innerWidth = 800;
    render(<Carousel images={images} currentIndex={0} nextSlide={() => {}} prevSlide={() => {}} />);
    expect(screen.queryByText('1/3')).not.toBeVisible();
});

it('should not display the counter and navigation buttons if there is only one image', () => {
    render(<Carousel images={['image1.jpg']} currentIndex={0} nextSlide={() => {}} prevSlide={() => {}} />);
    expect(screen.queryByText('1/1')).not.toBeVisible();
    expect(screen.queryByText('❮')).not.toBeVisible();
    expect(screen.queryByText('❯')).not.toBeVisible();
});


}