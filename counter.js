export function setUpPages(elem) {
  const count = Math.floor(Math.random() * (300 - 1) + 1);
  const pageSize = 25;
  const maxLengthOfPaginator = 5;
  const numberOfPages = Math.ceil(count / pageSize);
  const activePage = Math.floor(Math.random() * (numberOfPages - 1) + 1);
  let visiblePageRange = [],
    str = '<b>Pages:</b> ',
    str2 = '';

  for (let i = 1; i <= numberOfPages; i++) {
    visiblePageRange.push(i);
    if (i === numberOfPages) {
      str += `${i}`;
      str2 += `${i} - Showing ${
        i * pageSize - (pageSize - 1)
      } thru ${count} of ${count}<br />`;
    } else {
      str += `${i}, `;
      str2 += `${i} - Showing ${i * pageSize - (pageSize - 1)} thru ${
        i * pageSize
      } of ${count}<br />`;
    }
  }

  if (visiblePageRange.length > maxLengthOfPaginator) {
    visiblePageRange.length = 0;
    visiblePageRange = generateArray(
      activePage,
      maxLengthOfPaginator,
      numberOfPages
    );
  }

  str += `<br /><b>Count</b>: ${count}`;
  str += `<br /><b>Page Count</b>: ${numberOfPages}`;
  str += `<br /><b>Active Page</b>: ${activePage}`;
  str += `<br /><b>Visible Pages</b>: ${
    visiblePageRange ? visiblePageRange : 'None'
  }`;
  str += `<br /><br />${str2}`;

  elem.innerHTML = str;
}

function generateArray(number, maxLength, maxValue) {
  const halfLength = Math.floor(maxLength / 2);
  let startValue = number - halfLength;

  // Adjust startValue if it's less than 1
  if (startValue < 1) {
    startValue = 1;
  }

  // Calculate the actual array size based on startValue and maxValue
  const actualLength = Math.min(maxLength, maxValue - startValue + 1);

  // Create an empty array
  const resultArray = [];

  // Fill the array with consecutive numbers
  for (let i = 0; i < actualLength; i++) {
    resultArray.push(startValue + i);
  }

  return resultArray;
}
