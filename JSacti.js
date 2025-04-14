//ACT 1

console.log(`----------------------------------`);
console.log(`Act n 1 : Suma de dos numeros, 4 y 5.`);
let n1 = 4;
let n2 = 5;
r = n1 + n2;
console.log(`${n1} + ${n2} da = ${r}`);
console.log(`----------------------------------`);

//ACT 2

console.log(`Act n 2 : El mayor y el menor de 3 valores, 7, 4 y 2.`);
let nu1 = 2;
let nu2 = 4;
let nu3 = 7;
let ma = nu1;
let me = nu1;

if (nu2 > nu1 && nu2 > nu3) {
    ma = nu2;
  } else
{ if (nu3 > nu2 && nu3 > nu1)  {
    ma = nu3; 
  } 
  
}

if (nu2 < nu1 && nu2 < nu3) {
    me = nu2;
  } else
{ if (nu3 < nu2 && nu3 < nu1)  {
    me = nu3; 
  } 
  
}

console.log(`${ma} es el numero mayor y el ${me} es el numero menor.`); 
console.log(`----------------------------------`);

//ACT 3

console.log(`Act n 3 : Numero de letras de una palabra (arroz).`);

let plbr = "Arroz"
let ltrs = 0;

ltrs = plbr.length;
console.log(`${plbr} tiene ${ltrs} letras.`);
console.log(`----------------------------------`);

//ACT 4

console.log(`Act n 4 : Ingrese un numero y indique si es par o impar, num: 2.`);

n1 = 2;
r1 = n1 % 2;

if (r1 == 0) { 
    console.log(`${n1} es par.`); 
} else { 
    console.log(`${n1} es impar.`); 
}
console.log(`----------------------------------`);

//ACT 5

console.log(`Act n 5 : Ingrese una palabra (arroz) y repitala un numero de veces, num: 12.`);
let pl = "Arroz"

for (let rptr = 0; rptr < 11; rptr++) {
    pl = pl + "Arroz"
  }

console.log(`${pl}.`);
console.log(`----------------------------------`); 

//ACT 6

console.log(`Act n 6 : Ingrese dos numeros enteros y enumere los elementos que los separan, nums : 2 y 7.`);

function nume(num1, num2) {
    let nums = [];
  
    let inicio = Math.min(num1, num2) + 1;
    let fin = Math.max(num1, num2);
  
    for (let cnt = inicio; cnt < fin; cnt++) {
      nums.push(cnt);
    }
  
    return nums;
  }
  
  let resultado = nume(2, 7);
  console.log("Elementos entre 2 y 7:", resultado);
console.log("---------------------------------------------------------");

//ACT 7

console.log(`Act n 7 : Ingrese dos numeros y muestre los multiplos de 3 entre ellos, nums : 2 y 12.`);

function nume(nume1, nume2) {
    let nums = [];
  
    let inicio = Math.min(nume1, nume2) + 1;
    let fin = Math.max(nume1, nume2);
  
    for (let cnt = inicio; cnt < fin; cnt++) {
        if (cnt % 3 === 0) {
      nums.push(cnt);
    }
    }
  
    return nums;
  }
  
  let resu = nume(2, 12);
  console.log("Elementos entre 2 y 12:", resu);
  console.log("---------------------------------------------------------");

  