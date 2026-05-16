// Test case:

function highlightKeyword(content, keyword) {
  if (typeof content !== 'string' || typeof keyword !== 'string') {
    return "Invalid.";
  }
  const regex = new RegExp(keyword, 'gi')
  return keyword ? content.replace(regex, `<strong>${keyword}</strong>`) : content;

}


console.log(highlightKeyword(
  "Học JavaScript không khó, Học javascript khó đã có CodeFarm lo,CodeFarm - Học là có việc!", "javascript"
));


console.log(highlightKeyword(
  5, "javascript"
));

console.log(highlightKeyword(
  "Học JavaScript không khó, Học javascript khó đã có CodeFarm lo,CodeFarm - Học là có việc!", ""
));




// Output:
// "Học <strong>JavaScript</strong> không khó, Học <strong>javascript</strong> khó đã có CodeFarm lo, CodeFarm - Học là có việc!"