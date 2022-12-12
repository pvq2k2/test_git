// let subNav = document.getElementById('li_sub');

// console.log(subLab);
// dropdown.onclick = function() {
// dropdown.classList.toggle("active")
// }
// subNav.addEventListener("click", function(e) {
//     console.log(1);
//     subNav.classList.toggle("active");
// })


//   function showSubNav() {
//     document.getElementById("sub_nav").classList.toggle("show");
//   }

//   window.onclick = function (event) {
//     if (!event.target.matches("li_sub")) {
//       var dropdowns = document.getElementsByClassName("dropdown-content");
//       var i;
//       for (i = 0; i < dropdowns.length; i++) {
//         var openDropdown = dropdowns[i];
//         if (openDropdown.classList.contains("show")) {
//           openDropdown.classList.remove("show");
//         }
//       }
//     }
//   };

const menuMobileElement = document.querySelector('.menu_mobile');
const iconBar = document.querySelector('.icon_bar');

iconBar.addEventListener('click', () => {
    menuMobileElement.classList.toggle("active");
})


const liSubElement = document.querySelector('#li_sub');
const subNavElement = document.querySelector('.sub_nav');

liSubElement.addEventListener('click', () => {
    console.log(1);
    liSubElement.classList.toggle("active");
})






// const arr1 = Array.from(
//   { length: 30 },
//   () => Math.floor(Math.random() * 30) + 1
// );

// Cho một mảng n số nguyên. Tìm số xuất hiện nhiều nhất trong mảng.
// const numbersToTimes = {}
//     for (let i = 0; i < arr.length; i++) {
//       if (numbersToTimes[arr[i]] === undefined) {
//         numbersToTimes[arr[i]] = 0
//       }

//       numbersToTimes[arr[i]] = numbersToTimes[arr[i]] + 1
//     }

//     let numberMaxTimes = undefined
//     let maxTimes = undefined

//     for (let number in numbersToTimes) {
//       const times = numbersToTimes[number]
//       if (maxTimes == undefined || maxTimes < numbersToTimes[number]) {
//         maxTimes = numbersToTimes[number]
//         numberMaxTimes = number
//       }
//     }
//     console.log(numberMaxTimes, maxTimes);


// Cho một mảng n số nguyên. Tìm 3 số lớn nhất trong mảng, 3 số không được trùng nhau
// let max1 = arr[0],
//   max2,
//   max3;

// for (let i = 0; i < arr.length; i++) {
//   if (max1 < arr[i]) {
//     max1 = arr[i];
//   }
// }

// for (let i = 0; i < arr.length; i++) {
//   if ((max2 === undefined || max2 < arr[i]) && max1 > arr[i]) {
//     max2 = arr[i];
//   }
// }

// for (let i = 0; i < arr.length; i++) {
//   if ((max3 === undefined || max3 < arr[i]) && max2 > arr[i]) {
//     max3 = arr[i];
//   }
// }

// console.log({
//   max1,
//   max2,
//   max3,
// });


// Cho một mảng n số nguyên. Tính trung bình các số nguyên tố trong mảng. Nếu dãy không có số nguyên tố, in ra “NOT FOUND”.
// arr.push(2);
// arr.push(4);
// let sum = 0;
// let count = 0;
// const newArray = [];
// function isNguyenTo(n) {
//   if (n <= 1) {
//     return false;
//   }
//   let isNguyenTo = true;

//   for (let i = 2; i < n; i++) {
//     if (n % i == 0) {
//       return false;
//     }
//   }

//   return isNguyenTo;
// }
// for (let i = 0; i < arr.length; i++) {
//   if (isNguyenTo(arr[i])) {
//     sum += Number(arr[i]);
//     count++;
//     newArray.push(arr[i]);
//   }
// }

// if (count === 0) {
//   console.log("NOT FOUND");
//   return;
// }

// const output = sum / count;
// console.log(`Có ${count} số nguyên tố trong mảng`);
// console.log(`Các số nguyên tố trong mảng ${newArray}`);
// console.log(`Trung bình ${output}`);


// Cho một mảng n số nguyên. 
//Kiểm tra xem mảng có tăng dần không. 
//Mảng tăng dần là mảng mà số sau lớn hơn số trước. 
//Nếu mảng tăng dần in ra “TRUE”, nếu không in ra “FALSE”.

// const arr = [1, 2, 2, 3, 4];
// const arr2 = [1, 2, 3, 4];
// console.log(arr);
// for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] >= arr[i + 1]) {
//       console.log('FALSE')
//       return
//     }
//   }

//   console.log('TRUE')


// Tính tổng ước nguyên của số N, không tính N
// function tinhTongUoc(n) {
//   const arrayNumber = [];
//   let tong = 0;
//   for (var i = 1; i < n; i++) {
//     if (n % i == 0) {
//       arrayNumber.push(i);
//       tong += i;
//     }
//   }
//   console.log(`Các ước sủa số ${n}: ${arrayNumber}`);
//   console.log(`Tổng của tất cả các ước nguyên dương của số nguyên dương ${n}: ${tong}`);
// }
// console.log(tinhTongUoc(30));


// function chinhPhuong(L, R) {
//   let count = 0;
//   let sqr = Math.sqrt(L);
//   for (let i = L ; i < R ; i++) {
//     if(i * i == sqr) {
//       console.log(i);
//       count++;
//     }
//     console.log(i);
//     console.log(sqr);
//   }
//   return count++;
// }

// console.log(chinhPhuong(10, 100));

// function soHoanHao(L, R) {
//   let count = 0;
//   let S = 0;
//   for(let i = 1; i <= L-1; i++)
//     {
//         if(L % i == 0)
//         {
//             S += i;
//         }
//     }
//     if (S == N) {}
// }
