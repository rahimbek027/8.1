/* 1- masala*/
/*
function getInputs(): string[] {
    const inputs: string[] = [];
    
    for (let i = 0; i < 3; i++) {
      const input = prompt(`Qiymat ${i + 1}-ni kiriting:`);
      if (input) {
        inputs.push(input);
      }
    }
    
    return inputs;
  }
  
  const inputArray = getInputs();
  console.log("Kiritilgan qiymatlar:", inputArray);
  
*/


  /*2-masala*/
/*
  let numberList: number[] = [18, 27, 13, 7, 8];

  function findMaxNumber(arr: number[]): number {
      let maxNum: number = arr[0];
      for (let num of arr) {
          if (num > maxNum) { 
              maxNum = num;
          }
      }
      return maxNum;
  }
  
  const result:number = findMaxNumber(numberList);
  console.log(result);
  */


  /*3-masala*/
/*
  let value: string | null = prompt("Soz kiriting");
  let list: string[] = ["Salom", "Yaxshi", "Zor", "Rahimbek"];
  
  function findValue(newValue: string | null, arr: string[]): void {
      if (newValue === null) {
          console.log(false);
          return;
      }
  
      let count: number = 0;
      arr.forEach((item: string) => {
          if (item === newValue) {
              count++;
          }
      });
      
      console.log(count > 0 ? true : false);
  }
  
  findValue(value, list);

  */




/*4-masal*/

/*
function juftlar(numbers: number[]): number[] {
    return numbers.filter((num) => num % 2 === 0);
}


const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = juftlar(myArray);

console.log(evenNumbers); 
*/



/*5-masala*/
/*
function yigindi(numbers: number[]): number {
    return numbers.reduce((acc: number, num: number) => acc + num, 0);
  }
  
  const numbers: number[] = [1, 2, 3, 4, 5];
  const sum = yigindi(numbers);
  
  console.log("Array elementlari yig'indisi:", sum);
*/


 /*6-masala*/

  /*  type User = {
    id: number;
    name: string;
    email: string;
    password: string;
    address: string;
};

function getNameAndEmail(users: User[]): { name: string; email: string }[] {
    return users.map(user => ({
        name: user.name,
        email: user.email
    }));
}


const users: User[] = [
    { id: 1, name: "Rahimbek", email: "rahimbek@gmail.com", password: "1234", address: "Uchtepa-Lutfiy" },
    { id: 2, name: "ildam", email: "ildam@gmail.com", password: "abcd", address: "Vatan" },
    { id: 3, name: "Parvoz", email: "parvoz@gmail.com", password: "5678", address: "Chilonzor" },
];

const result = getNameAndEmail(users);
console.log(result);  */


/*7-masala*/

/*
type User = {
    id: number;
    name: string;
    address: string;
  };
  
  function getAddressById(id: number, users: User[]): string | null {
    const user = users.find((user) => user.id === id);
    return user ? user.address : null;
  }
  
  
  const users: User[] = [
    { id: 1, name: "Rahimbek", address: "Chilonzor 20" },
    { id: 2, name: "Ildam", address: "Chilonzor 21" },
    { id: 3, name: "Suxrob", address: "Chilonzor 22" },
    { id: 4, name: "Ergash", address: "Chilonzor 23" },
    { id: 5, name: "Rizomat", address: "Chilonzor 24" },
    { id: 6, name: "Parvoz", address: "Chilonzor 25" },
    { id: 7, name: "Sherzod", address: "Chilonzor 26" },
    { id: 8, name: "Aziz", address: "Chilonzor 27" },
    { id: 9, name: "Elyor", address: "Chilonzor 28" },
    { id: 10, name: "Umrbek", address: "Chilonzor 29" },
  ];
  
 
  const address = getAddressById(3, users);
  console.log("Address:", address);
  */



  /*8-masala*/

  /*
  type User = {
    id: number;
    name: string;
    address: string;
  };
  
  function getNames(users: User[]): string[] {
    return users.map((user) => user.name);
  }
  
  
  const users: User[] = [
    { id: 1, name: "Rahimbek", address: "Chilonzor 20" },
    { id: 2, name: "Ildam", address: "Chilonzor 21" },
    { id: 3, name: "Suxrob", address: "Chilonzor 22" },
    { id: 4, name: "Ergash", address: "Chilonzor 23" },
    { id: 5, name: "Rizomat", address: "Chilonzor 24" },
    { id: 6, name: "Parvoz", address: "Chilonzor 25" },
    { id: 7, name: "Sherzod", address: "Chilonzor 26" },
    { id: 8, name: "Aziz", address: "Chilonzor 27" },
    { id: 9, name: "Elyor", address: "Chilonzor 28" },
    { id: 10, name: "Umrbek", address: "Chilonzor 29" },
  ];
  
  
  const names = getNames(users);
  console.log("Ismlar:", names); 
  
  */


  /*9-masala*/

 /*
  function engKatta(array1: number[], array2: number[]): string[] {
    
    const max1 = Math.max(...array1);
    
    const max2 = Math.max(...array2);
    
 
    return [max1.toString(), max2.toString()];
  }

  const array1: number[] = [1, 5, 3, 9, 2];
  const array2: number[] = [7, 4, 10, 8, 6];
  

  const result = engKatta(array1, array2);
  
  console.log("Eng katta elementlar:", result);
  */


  /*10-masala*/
/*
  function separateEvenOdd(numbers: number[]): { even: number[]; odd: number[] } {
    const even: number[] = [];
    const odd: number[] = [];
  
    numbers.forEach((num) => {
      if (num % 2 === 0) {
        even.push(num);
      } else {
        odd.push(num);
      }
    });
  
    return { even, odd };
  }
  
 
  const numbers = [3, -2, 4, -7, 8, -5, 10, -9];
  
 
  const result = separateEvenOdd(numbers);
  console.log("Juft raqamlar:", result.even); 
  console.log("Toq raqamlar:", result.odd);  
  
  */






  /*8 talik masalalar */////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  

  /*1-masala*/
/*
  function reverseThreeDigitNumber(number: number): number {
    if (number < 100 || number > 999) {
      throw new Error("Faqat 3 xonali son kiriting");
    }
  
    const reversed = parseInt(number.toString().split("").reverse().join(""));
    return reversed;
  }
  
 
  const number = 123;
  const reversedNumber = reverseThreeDigitNumber(number);
  console.log("Teskari son:", reversedNumber); 
  */

  /*2-masala*/
/*
  function factorial(n: number): number {
    if (n < 0) {
      throw new Error("Musbat son kiriting");
    }
    if (n === 0 || n === 1) {
      return 1;
    }
  
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  }
  
  
  const number = 5;
  const fact = factorial(number);
  console.log("Faktorial:", fact); 
  
*/




 




  
  
  



  

