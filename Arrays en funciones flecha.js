/*Ideas para el ejercicio reclicadas de las otras clases*/

/*#1*/
const Mayores = (persona) => persona >= 18;

const Cuchos = (callbackFuntion,persona) => {
    const Ancianos = persona.filter(viejos => {
        return callbackFuntion(viejos);
    });
    console.log('Los mayores de 18 en adelante son: ' + Ancianos);
    return Ancianos; 
}
let edad = [10,8,15,54,21,29,26]
Cuchos(Mayores, edad);

/*#2*/
const Divida = (Xm) => Xm / 2;

const Mlt =(callbackFuntion,Xm) => {
    const M27 = Xm.map(Mula => {
        return callbackFuntion(Mula);
    });
    console.log('Resultados de la division de los numeros: ' + M27);
    return M27; 
}

let NMulti =[100,5,4,52,46,9,79]
Mlt(Divida, NMulti); 


/*#3*/
const NumerosPares  =(numero) => numero%2 ==0;
 
const Muestre = (callbackFunction, num) => {
    const NumeroPar = num.filter(Par =>{
        return callbackFunction(Par);
    }); 
    console.log('Numeros que son pares: ' + NumeroPar);
    return NumeroPar;
}
let array =[1,8,4,6,7,5,9,28,79,10,2,3,100]
Muestre(NumerosPares, array);  