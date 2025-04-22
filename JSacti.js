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
    pl += "Arroz"
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

//ACT 8

  console.log(`Act n 8 : Los multiplos de 2 y 5 menores a 100.`);
var mult = 0;
var cn = 0;
while (cn <= 100) 
{
    if (cn % 2 == 0 || cn % 5 == 0)
    {
         mult += `${cn} `;
    }
    cn++;
}

console.log(`Los multiplos de 2 y 5 menores a 100 son: ${mult}`);
console.log("---------------------------------------------------------");

//ACT 9

console.log(`Act n 9 : La suma de los elementos del array (2, 23, 7, 5 y 25)`);
let total=0
numers = [2, 23, 7, 5, 25];
for(let cnts = 0; cnts < numers.length; cnts++) total+=numers[cnts];
console.log(`La suma de los elementos de un array da: ${total}.`); 
console.log("---------------------------------------------------------");

//ACT 10

console.log(`Act n 10 : La suma de los elementos pares del array (2, 4, 7, y 9)`);
let totalpar=0
numers = [2, 4, 7, 9];
for(let cunts = 0; cunts < numers.length; cunts++) 
    if (numers[cunts] % 2 == 0) {totalpar+=numers[cunts];}
console.log(`La suma de los elementos pares de un array da: ${totalpar}.`); 
console.log("---------------------------------------------------------");
  
//ACT 11

console.log(`Act n 11 : En una palabra identificar sus letras iguales y distintas, palabra: POLLO`);

function contletr(palabra) {
  const conteo = {};
  for (const letra of palabra) {
    if (conteo[letra]) {
      conteo[letra]++;
    } else {
      conteo[letra] = 1;
    }
  }
  return conteo;
}

contletr("POLLO");

console.log(contletr("POLLO"));
console.log("---------------------------------------------------------");

//ACT 12

console.log(`Act n 12 :Un objeto literal con las siguiente propiedades: nombre, sexo biológico y edad. Agregar varios elementos a una lista. Obtener el promedio de edad, el nombre de la mujer con mayor edad, el nombre del hombre con menor edad, el promedio de edad de las mujeres.`);

let personas = [
  { nombre: "Emilia", sexo: "F", edad: 20 },
  { nombre: "Felipe", sexo: "M", edad: 25 },
  { nombre: "Simona", sexo: "F", edad: 45 },
  { nombre: "Enzo", sexo: "M", edad: 22 },
];

let edadpromedio =
  personas.reduce((acc, p) => acc + p.edad, 0) / personas.length;

console.log("Promedio de edad de todos:", Math.round(edadpromedio, 0));

let mujeres = personas.filter((p) => p.sexo === "F");

console.log("mujeres:", mujeres);

let mujermr = mujeres.reduce(
  (mayor, p) => (p.edad > mayor.edad ? p : mayor),
  { edad: 0 }
);

console.log("Mujer de mayor edad:", mujermr.nombre);

let hombres = personas.filter((p) => p.sexo === "M");
console.log("hombres:", hombres);

let hombreMer = hombres.reduce(
  (menor, p) => (p.edad < menor.edad ? p : menor),
  { edad: Infinity }
);
console.log("Hombre de menor edad:", hombreMer.nombre);

let edadpromediomujeres =
  mujeres.reduce((acc, p) => acc + p.edad, 0) / mujeres.length;

console.log("Promedio de edad de mujeres:", Math.round(edadpromediomujeres, 0));

