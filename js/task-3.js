`use strict`
function getElementWidth(content, padding, border) {
  const contentWidth = extractNumericValue(content);
  const paddingWidth = extractNumericValue(padding);
  const borderWidth = extractNumericValue(border);
  const elementWidth = contentWidth + 2 * paddingWidth + 2 * borderWidth;
  return elementWidth;
}
function extractNumericValue(value) {
  const match = value.match(/([0-9.]+)px/);
  if (match) {
    return parseFloat(match[1]);
  } else {
    return NaN;
  }
}
console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200