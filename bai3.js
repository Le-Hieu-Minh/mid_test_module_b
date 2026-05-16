
const categories = [
  { id: 1, name: "Chuyên mục 1" },
  {
    id: 2,
    name: "Chuyên mục 2",
    children: [
      { id: 4, name: "Chuyên mục 2.1" },
      {
        id: 5,
        name: "Chuyên mục 2.2",
        children: [
          { id: 10, name: "Chuyên mục 2.2.1" },
          { id: 11, name: "Chuyên mục 2.2.2" },
          { id: 12, name: "Chuyên mục 2.2.3" },
        ],
      },
      { id: 6, name: "Chuyên mục 2.3" },
    ],
  },
  {
    id: 3,
    name: "Chuyên mục 3",
    children: [
      { id: 7, name: "Chuyên mục 3.1" },
      { id: 8, name: "Chuyên mục 3.2" },
      { id: 9, name: "Chuyên mục 3.3" },
    ],
  },
];

function createTree(categories, level = 0) {

  let html = ``;

  for (const item of categories) {
    const prefix = Array(level + 1).join("-- ");
    console.log(prefix);

    html += `
      <option value="${item.id}">${prefix}${item.name}</option>
    `;
    if (item.children && item.children.length > 0) {
      html += createTree(item.children, level + 1)
    }
  }
  return html;

}
document.write(` <select>${createTree(categories)}</select>`)
console.log(createTree(categories));
