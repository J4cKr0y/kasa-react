import Collapse from "./Collapse";

describe('The Collapse component'), () => {
    it('should render with title and text content when provided', () => {
          const { getByText } = render(<Collapse title="Test Title" txt="Test Content" />);
          expect(getByText('Test Title')).toBeInTheDocument();
          expect(getByText('Test Content')).toBeInTheDocument();
    });
    it('should render without crashing when title is an empty string', () => {
          const { container } = render(<Collapse title="" txt="Test Content" />);
          expect(container).toBeInTheDocument();
    });
}