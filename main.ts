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

  /*6-masala*/

  type User = {
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
console.log(result);

  
  
  



  

