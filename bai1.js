const listCharacters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
function generatorId(length, prefix = "") {
  // Xử lý và return về kết quả
  if (length <= 0 || length >= 100) {
    return "Length khong hop le";
  }
  let result = "";
  for (let i = 0; i < length; i++) {
    result += listCharacters.charAt(Math.floor(Math.random() * listCharacters.length));

  }

  return (prefix + result);
}

console.log(generatorId(8, "user")); // Output: "user5a3Fb2DF"
console.log(generatorId(4, "product - ")); // Output: "product - 3a2f"
console.log(generatorId(10)); // Output: "5a3Fb2DFc1"
console.log(generatorId(-2)); // Output: "5a3Fb2DFc1"
console.log(generatorId(104)); // Output: "5a3Fb2DFc1"