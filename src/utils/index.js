export const currencyFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
  minimumFractionDigits: 2,
  maximumFractionDigits: 3
});

export const sortData = (sortType, arrToSort) => {
  if (!sortType) return arrToSort;

  switch (sortType) {
    case 'alpha':
      return [...arrToSort].sort((a, b) => a.name.localeCompare(b.name));

    case 'reverseAlpha':
      return [...arrToSort].sort((a, b) => b.name.localeCompare(a.name));

    case 'ascRevenue':
      return [...arrToSort].sort((a, b) => a.revenue - b.revenue);

    case 'descRevenue':
      return [...arrToSort].sort((a, b) => b.revenue - a.revenue);
  }
};
