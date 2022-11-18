import { sortData } from '../../utils';

const unSortedArr = [
  { name: 'Carlos', revenue: 3 },
  { name: 'Beatriz', revenue: 2 },
  { name: 'Alberto', revenue: 4 },
  { name: 'Daniela', revenue: 1 }
];

const alphaSortedArr = [
  { name: 'Alberto', revenue: 4 },
  { name: 'Beatriz', revenue: 2 },
  { name: 'Carlos', revenue: 3 },
  { name: 'Daniela', revenue: 1 }
];

const reverseAlphaSortedArr = [...alphaSortedArr].reverse();

const ascRevenueSortedArr = [
  { name: 'Daniela', revenue: 1 },
  { name: 'Beatriz', revenue: 2 },
  { name: 'Carlos', revenue: 3 },
  { name: 'Alberto', revenue: 4 }
];

const descRevenueSortedArr = [...ascRevenueSortedArr].reverse();

describe('[sortData] tests', () => {
  it('should sort in alphabetical order', () => {
    expect(alphaSortedArr).toStrictEqual(sortData('alpha', unSortedArr));
  });

  it('should sort in reverse alphabetical order', () => {
    expect(reverseAlphaSortedArr).toStrictEqual(sortData('reverseAlpha', unSortedArr));
  });

  it('should sort in ascending order', () => {
    expect(ascRevenueSortedArr).toStrictEqual(sortData('ascRevenue', unSortedArr));
  });

  it('should sort in descending order', () => {
    expect(descRevenueSortedArr).toStrictEqual(sortData('descRevenue', unSortedArr));
  });
});
