// Aula-9 26/08/2021
//Desafio heckPoint Microondas
// Arnaldo Ramos
// Sala 2 - 
let comida = {
    pipoca: 10,
    macarrao: 8,
    carne: 15,
    feijão: 12,
    brigadeiro: 8
}

function microondas(comida, tempo){
    if(tempo < comida){
        console.log("Tempo Insuficiente!!")
    } else if(tempo >= comida && tempo < comida*2){
        console.log("Prato Pronto!!");
    } else if( tempo >= comida*2 && tempo < comida*3){
        console.log("Prato Queimou!!")
    } else if(tempo >= comida*3){
        console.log("Kabuumm!!")
    } else{
        console.log('Comida inexistente!!')
    }    
}

microondas(comida.pipoca, 20);