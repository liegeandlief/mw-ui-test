import { describe, expect, it } from 'vitest';
import nock from 'nock';
import { getCarsByTag } from '.';

describe('cars/index.ts', () => {
  const cars = [
    { id: '1', url: 'https://example.com/image1', alt_description: 'A red car' },
    { id: '2', url: 'https://example.com/image2', alt_description: 'A blue car' },
    { id: '3', url: 'https://example.com/image3', alt_description: 'A green car' },
    { id: '4', url: 'https://example.com/image4', alt_description: 'A yellow car' },
    { id: '5', url: 'https://example.com/image5', alt_description: 'A purple car' },
    { id: '6', url: 'https://example.com/image6', alt_description: 'A pink car' },
  ];

  it('returns vehicles', async () => {
    nock('http://localhost:8000').get('/api/cars').query({ tag: 'coloured cars' }).reply(200, cars);

    const res = await getCarsByTag('coloured cars');

    expect(res).toEqual(cars);
  });
});
