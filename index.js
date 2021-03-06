 const fs = require('fs/promises');



 function soma(n1, n2) {
     return new Promise(async(resolve, reject) => {
         const somando = n1 + n2;
         if (typeof n1 !== 'number' || typeof n2 !== 'number') {
             return reject('Não são números');
         }
         await fs.appendFile('resultado.txt', `O resultado da soma entre ${n1} + ${n2} é ${somando} \n`)
         resolve(somando);


     })
 }

 soma(10, 10)
     .then((resultado) => console.log(resultado))
     .catch((error) => console.log(error));