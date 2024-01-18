import { describe, expect, it } from 'vitest';
import nock from 'nock';
import { getTagsBySearchTerm } from '.';

describe('tags/index.ts', () => {
  const tags = ['coloured cars', 'red cars', 'blue cars', 'green cars', 'yellow cars', 'purple cars', 'pink cars'];

  it('returns vehicles', async () => {
    nock('http://localhost:8000').get('/api/tags').query({ tag: 'coloured cars' }).reply(200, tags);

    const res = await getTagsBySearchTerm('coloured cars');

    expect(res).toEqual(tags);
  });
});
