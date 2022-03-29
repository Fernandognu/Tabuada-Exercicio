/*
Crie um programa que imprima a tabuada de multiplicar.
*/

var num1 = 0

function multiplica(num1) {
    for(var base = 0 ; base <= 10 ; base++) {
        var resultato = num1 * base;
        console.log(num1, "x",  base, "=", resultato);
        document.body.innerHTML = (num1, "x",  base, "=", resultato);
      }
}

/*
Projeto esta calculando:
 - Falta fazer aparencia, como exibir esses dados.
 - Como recever o numero do usuario
 - Funciona via console
*/