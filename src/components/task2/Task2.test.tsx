import { describe, expect, it, vi } from 'vitest';
import { render } from '@testing-library/react';
import Task2 from './Task2';

describe('Task2.tsx', () => {
  vi.mock('react-router-dom', () => ({
    useParams: vi.fn().mockReturnValueOnce({}).mockReturnValue({ tag: 'coloured cars' }),
  }));

  vi.mock('@tanstack/react-query', () => ({
    useQuery: vi
      .fn()
      .mockReturnValueOnce({})
      .mockReturnValueOnce({
        isLoading: true,
      })
      .mockReturnValueOnce({
        isLoading: false,
        data: [
          { id: '1', url: 'https://example.com/image1', alt_description: 'A red car' },
          { id: '2', url: 'https://example.com/image2', alt_description: 'A blue car' },
          { id: '3', url: 'https://example.com/image3', alt_description: 'A green car' },
          { id: '4', url: 'https://example.com/image4', alt_description: 'A yellow car' },
          { id: '5', url: 'https://example.com/image5', alt_description: 'A purple car' },
          { id: '6', url: 'https://example.com/image6', alt_description: 'A pink car' },
        ],
      }),
  }));

  it('renders correctly when there is no tag param', () => {
    const result = render(<Task2 />);
    expect(result.container).toMatchSnapshot();
  });

  it('renders correctly when there is a tag param and data is loading', () => {
    const result = render(<Task2 />);
    expect(result.container).toMatchSnapshot();
  });

  it('renders correctly when there is a tag param and data has loaded', () => {
    const result = render(<Task2 />);
    expect(result.container).toMatchSnapshot();
  });
});
