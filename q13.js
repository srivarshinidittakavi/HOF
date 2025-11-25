function processCategories(categories) {
  const counts = categories.reduce((acc, category) => {
    acc[category] = (acc[category] || 0) + 1;
    return acc;
  }, {});

  return counts;
}

// Extra Challenge
function processCategoriesSorted(categories) {
  const counts = categories.reduce((acc, category) => {
    acc[category] = (acc[category] || 0) + 1;
    return acc;
  }, {});

  const sorted = Object.entries(counts)
    .sort((a, b) => b[1] - a[1])
    .map(entry => entry[0]);

  return sorted;
}

const categories = ["electronics", "clothing", "electronics", "toys", "clothing", "toys", "toys"];

console.log(processCategories(categories)); 
// { electronics: 2, clothing: 2, toys: 3 }

console.log(processCategoriesSorted(categories)); 
// ["toys", "electronics", "clothing"]
