import Carousel from "./Carousel";
import image1 from "../../img/apropos.jpg"
import image2 from "../../img/home.jpg"

describe('The Carrousel component'), () => {
    it('should render correctly when there are multiple images', () => {
        const { getByAltText, getByText } = render(
            <Carousel 
                images={[{image1}, {image2}]} 
                currentIndex={0} 
                nextSlide={() => {}} 
                prevSlide={() => {}} 
            />
        );

        expect(getByAltText('Slide 1')).toBeInTheDocument();
        expect(getByText('1/2')).toBeInTheDocument();
    });

    it('should render correctly when there is a single image', () => {
        const { getByAltText, getByText } = render(
            <Carousel 
                images={[{image1}]} 
                currentIndex={0} 
                nextSlide={() => {}} 
                prevSlide={() => {}} 
            />
        );

        expect(getByAltText('Slide 1')).toBeInTheDocument();
        expect(getByText('1/1')).not.toBeInTheDocument();
    });

}