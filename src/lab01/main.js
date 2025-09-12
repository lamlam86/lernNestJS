let fullName = "Nguyen Minh Lam";
let birthYear = 2004;
let isStudent = true;
const today = new Date();
let currentYear = today.getFullYear();
let age = currentYear - birthYear;
let intro = `Tên : ${fullName}
Tuổi : ${age}
Sinh Viên : ${isStudent}`
console.log(intro);