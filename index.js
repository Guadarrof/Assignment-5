//Ejercicio 1

let cantidadDeGatos= 10;

for (let i = 1; i <= cantidadDeGatos; i++){
  const catNumber = (`Gato#${i}`)
  let division = i % 3;
  if (division === 1) {
    console.log(catNumber.concat ('😺'))
  }
  else if (division === 2) {
    console.log(catNumber.concat ('😸'))
  }
  else {
    console.log(catNumber.concat ('😹'))
  }
}

//Ejercicio 2

var catAmount = 5;
var catSteps = 3;

for (let i = 1; i <= catAmount ; i++){
  const cat = (`Gato#${i} 🐈`);
  let paws='';
    for (let y = 1; y <= catSteps; y++){
      paws=paws.concat('🐾');
    }
  console.log(cat+paws);
}


//Ejercicio 3

var catAmount = 10;
var catSteps = 4;

for (let i = 1; i <= catAmount ; i++){
  const orangeCat = (`Gato#${i} 🐈`);
  const blackCat = (`Gato#${i} 🐈‍⬛`);
  let paws='';
    for (let y = 1; y <= catSteps; y++){
      paws=paws.concat('🐾');
    }
  if (i%2!==0){
    console.log(orangeCat+paws);
  }
  else{
    console.log(blackCat+paws);
  }
}
