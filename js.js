//nhập vào một chuỗi là 5 chữ số nguyên, tìm số lớn nhất và duy nhất trong 5 số đó
let numberArr = 0;
const arr = [2, 4, 6, 8, 1];
if (arr.length > 5) {
  alert("ko hop le");
} else {
  numberArr = Math.max(...arr);
}
console.log(`số lớn nhất là:${numberArr}`);
//  Nhập vào một chuỗi chữ số nguyên. Tính tổng các số nguyên tố có trong chuỗi
function isPrime(number) {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

const n = [9, 3, 2, 7, 1];
let result = 0;

for (let i = 0; i < n.length; i++) {
  if (isPrime(n[i])) {
    result += n[i];
  }
}

console.log(`Tổng các số nguyên tố:${result}`);
/////////////////////////////////////////////////////////
//Tạo hình trái tim rỗng bằng JavaScript

//////////////////////////////////////////////////////////
// Viết chương trình nhập vào một chuỗi ký tự, xóa ký tự số trong đó
function removeNumber(inputStrings) {
  const stringRemove = inputStrings.replace(/\d/g, "");
  return stringRemove;
}
const inputStrings = prompt("Nhập chuỗi ký tự:");
const results = removeNumber(inputStrings);
console.log("Chuỗi sau khi xóa ký tự số:", results);
///////////////////////////////////////////////////////////
// Nhập vào một chuỗi và trả về là các thành phần trong chuỗi đảo ngược. Tất cả khoảng trắng
// trong chuỗi phải được giữ lại
function keepStringWithSpace(inputString) {
  const parts = inputString.split(/(\s+)/);
  console.log(parts);
  const reversedParts = parts.map((part) => {
    if (/\s/.test(part)) {
      return part;
    } else {
      return part.split("").reverse().join("");
    }
  });

  return reversedParts.join("");
}

const inputString = prompt("Nhập chuỗi đảo ngược:");
const reversedResult = keepStringWithSpace(inputString);
console.log("Chuỗi sau khi đảo ngược các từ:", reversedResult);
