"use strict";
class Sudoku {
    constructor(mezclas = 30) {
        this.datos = [

            9,	2,	3,	8,	6,	1,	7,	4,	5,
            5,	4,	1,	2,	7,	9,	3,	8,	6,
            7,	6,	8,	4,	3,	5,	2,	9,	1,
            2,	8,	6,	7,	5,	3,	4,	1,	9,
            3,	7,	9,	6,	1,	4,	8,	5,	2,
            4,	1,	5,	9,	2,	8,	6,	3,	7,
            1,	9,	2,	3,	4,	7,	5,	6,	8,
            8,	3,	7,	5,	9,	6,	1,	2,	4,
            6,	5,	4,	1,	8,	2,	9,	7,	3
        ];
        this.nuevo(mezclas);

    }
    intercambiaFila(i = 10) {
        switch (i) {
            case 0:
                this.cambiaFilas(1, 2);
                break;
            case 1:
                this.cambiaFilas(0, 2);
                break;
            case 2:
                this.cambiaFilas(0, 1);
                break;
            case 3:
                this.cambiaFilas(4, 5);
                break;
            case 4:
                this.cambiaFilas(3, 5);
                break;
            case 5:
                this.cambiaFilas(3, 4);
                break;
            case 6:
                this.cambiaFilas(7, 8);
                break;
            case 7:
                this.cambiaFilas(6, 8);
                break;
            case 8:
                this.cambiaFilas(6, 7);
                break;
            default:
                this.intercambiaFila(Math.floor(Math.random() * 9));
                break;
        }
    }

    cambiaFilas(a, b) {
        //valores indices inicio ->0, 9, 18, 27, 36, 45, 54, 63, 72  
        let index1 = 9*a;
        let index2 = 9*b;

        //Hacer 9 cambios
        for(let i=0;i<9;i++){
            let copia = this.datos[index1];
            this.datos[index1] = this.datos[index2];
            this.datos[index2] = copia;
            index1++;
            index2++;
        }

    }

    intercambiaColumna(i = 10) {
        switch (i) {
            case 0:
                this.cambiaColumnas(1, 2);
                break;
            case 1:
                this.cambiaColumnas(0, 2);
                break;
            case 2:
                this.cambiaColumnas(0, 1);
                break;
            case 3:
                this.cambiaColumnas(4, 5);
                break;
            case 4:
                this.cambiaColumnas(3, 5);
                break;
            case 5:
                this.cambiaColumnas(3, 4);
                break;
            case 6:
                this.cambiaColumnas(7, 8);
                break;
            case 7:
                this.cambiaColumnas(6, 8);
                break;
            case 8:
                this.cambiaColumnas(6, 7);
                break;
            default:
                this.intercambiaColumna(Math.floor(Math.random() * 9));
                break;
        }
    }

    cambiaColumnas(a, b) {
        //Hacer 9 cambios
        let index1 = a;
        let index2 = b;
        for(let i=0;i<9;i++){
            let copia = this.datos[index1];
            this.datos[index1] = this.datos[index2];
            this.datos[index2] = copia;
            index1+=9;
            index2+=9;
        }

        
    }

    nuevo(mezclas = 10) {
        for (let i = 0; i < mezclas; i++) {
            this.intercambiaFila();
            this.intercambiaColumna();
        }
    }

    muestra(porcentaje) {
        for (let i = 0; i < 81; i++) {
            
            if(Math.random()<porcentaje)
            {
                const elementoNoEditable = document.getElementById('td' + i);
                elementoNoEditable.innerText = this.datos[i];
                this.celdasNoEditables.push('td' + i);
                elementoNoEditable.classList.add("elementosNoEditables");
                // Rellenar el array con huecos
                this.sudokuJuego[i] =this.datos[i];
            }
            else{
                const elementoEditable = document.getElementById('td' + i);
                elementoEditable.innerText = " ";
                this.celdasEditables.push('td' + i);
                this.sudokuJuego[i] =undefined;
            }

        }
        this.sudokuCopia = [...this.sudokuJuego];

    }
    muestraEntero(){
        for (let i = 0; i < 81; i++) {
            
            const elemento = document.getElementById('td' + i);
            elemento.innerText = this.datos[i];
 
        }
    }
    muestraDeNuevo(){
        for (let i = 0; i < 81; i++) {
            const elemento = document.getElementById('td' + i);
            if(this.sudokuCopia[i]==undefined){
                elemento.innerText = " ";
            } else{
                elemento.innerText = this.sudokuCopia[i];
            }
        }
        this.sudokuJuego = [...this.sudokuCopia];
    }

    muestraCeldasEditables(){
        const elementoEditable = document.getElementById('td' + i);
        elementoEditable.innerText = " ";
        this.celdasEditables.push('td' + i);
        this.sudokuJuego[i] =undefined;
    }
    muestraCeldasNoEditables(){
        const elementoNoEditable = document.getElementById('td' + i);
        elementoNoEditable.innerText = this.datos[i];
        this.celdasNoEditables.push('td' + i);
        elementoNoEditable.classList.add("elementosNoEditables");
        // Rellenar el array con huecos
        this.sudokuJuego[i] =this.datos[i];
    }

    celdasNoEditables = [];
    celdasEditables = [];
    sudokuCopia = [];
    sudokuJuego = [];

    estaResuelto() {
        // debe devolver true o false
        const fila0 = recorreGuardaFila(0);
    const fila1 = recorreGuardaFila(9); 
    const fila2 = recorreGuardaFila(18);
    const fila3 = recorreGuardaFila(27);
    const fila4 = recorreGuardaFila(36);
    const fila5 = recorreGuardaFila(45);
    const fila6 = recorreGuardaFila(54);
    const fila7 = recorreGuardaFila(63);
    const fila8 = recorreGuardaFila(72);

    const columna0 = recorreGuardaColumna(0);
    const columna1 = recorreGuardaColumna(1); 
    const columna2 = recorreGuardaColumna(2);
    const columna3 = recorreGuardaColumna(3);
    const columna4 = recorreGuardaColumna(4);
    const columna5 = recorreGuardaColumna(5);
    const columna6 = recorreGuardaColumna(6);
    const columna7 = recorreGuardaColumna(7);
    const columna8 = recorreGuardaColumna(8);

    const miniSudoku0 = recorreGuardaMiniSudoku(0, 9, 18);
    const miniSudoku1 = recorreGuardaMiniSudoku(3, 12, 21); 
    const miniSudoku2 = recorreGuardaMiniSudoku(6, 15, 24);
    const miniSudoku3 = recorreGuardaMiniSudoku(27, 36, 45);
    const miniSudoku4 = recorreGuardaMiniSudoku(30, 39, 48);
    const miniSudoku5 = recorreGuardaMiniSudoku(33, 42, 51);
    const miniSudoku6 = recorreGuardaMiniSudoku(54, 63, 72);
    const miniSudoku7 = recorreGuardaMiniSudoku(57, 66, 75);
    const miniSudoku8 = recorreGuardaMiniSudoku(60, 69, 78);

    if(miSudoku.sudokuJuego.includes(undefined)) return false;
    else if(hayRepetidos(fila0)) return false;
    else if(hayRepetidos(fila1)) return false;
    else if(hayRepetidos(fila2)) return false;
    else if(hayRepetidos(fila3)) return false;
    else if(hayRepetidos(fila4)) return false;
    else if(hayRepetidos(fila5)) return false;
    else if(hayRepetidos(fila6)) return false;
    else if(hayRepetidos(fila7)) return false;
    else if(hayRepetidos(fila8)) return false;
    else if(hayRepetidos(columna0)) return false;
    else if(hayRepetidos(columna1)) return false;
    else if(hayRepetidos(columna2)) return false;
    else if(hayRepetidos(columna3)) return false;
    else if(hayRepetidos(columna4)) return false;
    else if(hayRepetidos(columna5)) return false;
    else if(hayRepetidos(columna6)) return false;
    else if(hayRepetidos(columna7)) return false;
    else if(hayRepetidos(columna8)) return false;
    else if(hayRepetidos(miniSudoku0)) return false;
    else if(hayRepetidos(miniSudoku1)) return false;
    else if(hayRepetidos(miniSudoku2)) return false;
    else if(hayRepetidos(miniSudoku3)) return false;
    else if(hayRepetidos(miniSudoku4)) return false;
    else if(hayRepetidos(miniSudoku5)) return false;
    else if(hayRepetidos(miniSudoku6)) return false;
    else if(hayRepetidos(miniSudoku7)) return false;
    else if(hayRepetidos(miniSudoku8)) return false;
    else return true;
    }
}


const miSudoku = new Sudoku();

miSudoku.muestra(0.5);

function nuevoSudoku(evento) {
    evento.preventDefault();

    let porcentaje;
    if (evento.target.id === 'nuevoSudokuF') {
        porcentaje = 0.75;
    } else if (evento.target.id === 'nuevoSudokuM') {
        porcentaje = 0.5;
    } else if (evento.target.id === 'nuevoSudokuD') {
        porcentaje = 0.35;
    }

    miSudoku.celdasNoEditables.length=0;
    miSudoku.celdasEditables.length=0;
    miSudoku.nuevo();
    miSudoku.muestra(porcentaje);
}

// -----------------------------------------------
function recorreGuardaFila(index){
    let arrayFila = [];
    let contador= 0;
    for(let i= index; i<index+9; i++){
        //Añadir al array solo los números
        if(miSudoku.sudokuJuego[i]!=undefined){
            arrayFila[contador] = miSudoku.sudokuJuego[i];
            contador++;
        }
       
    }
    return arrayFila;
}

function recorreGuardaColumna(index){
    let arrayColumna = [];
    let contador = 0;
    
    for(let i = index; i<73+index; i+=9){
        
        if(miSudoku.sudokuJuego[i]!=undefined){
            arrayColumna[contador]= miSudoku.sudokuJuego[i];
            contador++;
        }
    }
    return arrayColumna;
}

function recorreGuardaMiniSudoku(index1, index2, index3){
    let arrayMiniSudoku = [];
    let contador = 0;

    for(let i = index1; i<index1+3; i++){
        if(miSudoku.sudokuJuego[i]!=undefined){
            arrayMiniSudoku[contador]= miSudoku.sudokuJuego[i];
            contador++;
        }
    }
    for(let i = index2; i<index2+3; i++){
        if(miSudoku.sudokuJuego[i]!=undefined){
            arrayMiniSudoku[contador]= miSudoku.sudokuJuego[i];
            contador++;
        }
    }
    for(let i = index3; i<index3+3; i++){
        if(miSudoku.sudokuJuego[i]!=undefined){
            arrayMiniSudoku[contador]= miSudoku.sudokuJuego[i];
            contador++;
        }
    }
    return arrayMiniSudoku;
}

// -----------------------------------------------



function mostrarTablaValores(idDocumentSudoku, idSudoku){
    idDocumentSudoku.style.display = 'block';
    e1.style.display = 'block';
    e2.style.display = 'block';
    e3.style.display = 'block';
    e4.style.display = 'block';
    e5.style.display = 'block';
    e6.style.display = 'block';
    e7.style.display = 'block';
    e8.style.display = 'block';
    e9.style.display = 'block';
    e0.style.display = 'block';
    // Según la idSudoku -> ej: td41: mirar que fila, columna y minisudoku tiene
    const estaFila = document.getElementById(idSudoku).dataset.fila;
    const estaColumna = document.getElementById(idSudoku).dataset.columna;
    const esteMiniSudoku = document.getElementById(idSudoku).dataset.nombre;

    //guardar en un array los números no posibles
    let numerosFila= [];
    //Fila
    switch(estaFila){
        case "fila0":
            // empieza el bucle desde 0 con un length de 9
            numerosFila= recorreGuardaFila(0);
            break;
        case "fila1":
            //9
            numerosFila= recorreGuardaFila(9);
            break;
        case "fila2":
            //18
            numerosFila= recorreGuardaFila(18);
            break;
        case "fila3":
            //27
            numerosFila= recorreGuardaFila(27);
            break;
        case "fila4":
            //36
            numerosFila= recorreGuardaFila(36);
            break;
        case "fila5":
            //45
            numerosFila= recorreGuardaFila(45);
            break;
        case "fila6":
            //54
            numerosFila= recorreGuardaFila(54);
            break;
        case "fila7":
            //63
            numerosFila= recorreGuardaFila(63);
            break;
        case "fila8":
            //72
            numerosFila= recorreGuardaFila(72);
            break;

    }
    

    // Columna
    let numerosColumna= [];
    switch(estaColumna){
    case "columna0":
        numerosColumna = recorreGuardaColumna(0);
        break;
    case "columna1":
        numerosColumna = recorreGuardaColumna(1);
        break;
    case "columna2":
        numerosColumna = recorreGuardaColumna(2);
        break;
    case "columna3":
        numerosColumna = recorreGuardaColumna(3);
        break;
    case "columna4":
        numerosColumna = recorreGuardaColumna(4);
        break;
    case "columna5":
        numerosColumna = recorreGuardaColumna(5);
        break;
    case "columna6":
        numerosColumna = recorreGuardaColumna(6);
        break;
    case "columna7":
        numerosColumna = recorreGuardaColumna(7);
        break;
    case "columna8":
        numerosColumna = recorreGuardaColumna(8);
        break;

    }

    

    // Minisudoku
    let numerosMinisudoku = [];
    switch(esteMiniSudoku){
        case "miniSudoku0":
            numerosMinisudoku = recorreGuardaMiniSudoku(0, 9, 18);
            break;
        case "miniSudoku1":
            numerosMinisudoku = recorreGuardaMiniSudoku(3, 12, 21);
            break;
        case "miniSudoku2":
            numerosMinisudoku = recorreGuardaMiniSudoku(6, 15, 24);
            break;        
        case "miniSudoku3":
            numerosMinisudoku = recorreGuardaMiniSudoku(27, 36, 45);
            break;
        case "miniSudoku4":
            numerosMinisudoku = recorreGuardaMiniSudoku(30, 39, 48);
            break;
        case "miniSudoku5":
            numerosMinisudoku = recorreGuardaMiniSudoku(33, 42, 51);
            break;
        case "miniSudoku6":
            numerosMinisudoku = recorreGuardaMiniSudoku(54, 63, 72);
            break;
        case "miniSudoku7":
            numerosMinisudoku = recorreGuardaMiniSudoku(57, 66, 75);
            break;
        case "miniSudoku8":
            numerosMinisudoku = recorreGuardaMiniSudoku(60, 69, 78);
            break;            
    }

   
    //Concatenar los arrays 
    const arrayNumerosUsados = [];
    arrayNumerosUsados.push(...numerosFila);
    arrayNumerosUsados.push(...numerosColumna);
    arrayNumerosUsados.push(...numerosMinisudoku);
    const setArrayNumeros = new Set(arrayNumerosUsados);
    const numerosUsados = Array.from(setArrayNumeros);
    // numerosUsados es el array que hay que NO mostrar en la tabla de valores a introducir en el sudoku
    for (let i = 0; i<numerosUsados.length;i++){
        switch(numerosUsados[i]){
            case 1:
                e1.style.display = 'none';
                break;
            case 2:
                e2.style.display = 'none';
                break;           
            case 3:
                e3.style.display = 'none';
                break;
            case 4:
                e4.style.display = 'none';
                break;
            case 5:
                e5.style.display = 'none';
                break;                
            case 6:
                e6.style.display = 'none';
                break;
            case 7:
                e7.style.display = 'none';
                break;                
            case 8:
                e8.style.display = 'none';
                break;
            case 9:
                e9.style.display = 'none';
                break;
            case 0:
                e0.style.display = 'none';
                break;
        }
    }
    
}

let celdaUltimoFoco = -1;
let antiguoMiniSudoku;
let antiguaColumna;
let antiguaFila;
let celdaFocoActual;

function clickEnTabla(evento) {

    if (evento.target.id.charAt(0) != 't' || evento.target.id.charAt(1) != 'd') return;
    

    // Hacer visible la tabla de valores si la celda esta dentro del array de celdasEditables
    if (miSudoku.celdasEditables.includes(evento.target.id)) {
        
        const idTablaValores = document.getElementById('tablaValores');
        mostrarTablaValores(idTablaValores, evento.target.id);
        
    }
    else{
        const idTablaValores = document.getElementById('tablaValores');
        idTablaValores.style.display = 'none';
    }

    
    
    celdaFocoActual= evento.target.id;
    
    if (celdaUltimoFoco != -1) {
        document.getElementById(celdaUltimoFoco).classList.remove("gamehighlighttd");
    }
    evento.target.classList.add("gamehighlighttd");
    celdaUltimoFoco = evento.target.id;

    // Borrar antes de marcar los antiguos
    if (antiguoMiniSudoku) {
        for (let i = 0; i < antiguoMiniSudoku.length; i++) {
            antiguoMiniSudoku[i].classList.remove("gamehighlighttdAlrededor");
        }
    }
    if(antiguaFila){
        for(let i =0; i<antiguaFila.length; i++){
            antiguaFila[i].classList.remove("gamehighlighttdAlrededor");
        }
    }
    if(antiguaColumna){
        for(let i =0; i<antiguaColumna.length; i++){
            antiguaColumna[i].classList.remove("gamehighlighttdAlrededor");
        }
    }
    // MiniSudokus
    const miniSudoku = document.getElementById(evento.target.id).dataset.nombre;
    
    const elementos = document.querySelectorAll(`[data-nombre='${miniSudoku}']`);
    for (let i = 0; i < elementos.length; i++) {
        // Se colorean todos los elementos del minisudoku menos el seleccionado
        if(elementos[i]!==evento.target){
            elementos[i].classList.add("gamehighlighttdAlrededor");
        }  
    }
    // Filas
    const filaSeleccionada = document.getElementById(evento.target.id).dataset.fila;
    
    const elementosFila = document.querySelectorAll(`[data-fila='${filaSeleccionada}']`);
    for (let i = 0; i < elementosFila.length; i++) {
        if(elementosFila[i]!==evento.target){
            elementosFila[i].classList.add("gamehighlighttdAlrededor");
        }  
    }
    // Colummnas
    const columnaSeleccionada = document.getElementById(evento.target.id).dataset.columna;
    
    const elementosColumna = document.querySelectorAll(`[data-columna='${columnaSeleccionada}']`);
    for (let i = 0; i < elementosColumna.length; i++) {
        if(elementosColumna[i]!==evento.target){
            elementosColumna[i].classList.add("gamehighlighttdAlrededor");
        }  
    }

    antiguaFila = elementosFila;
    antiguoMiniSudoku = elementos;
    antiguaColumna = elementosColumna;
}


function clickEnTablaValores(evento){
    const valorPulsado = evento.target.id;
    const valorFinal = valorPulsado.charAt(1);
    anadirElemento(celdaFocoActual, valorFinal);

}


function anadirElemento(lugar, valor){
    const indiceArray = lugar.replace("td", "");
    if(valor!=="0"){
        document.getElementById(lugar).innerText = valor;
        miSudoku.sudokuJuego[indiceArray] = parseInt(valor);
    }
    else{
        document.getElementById(lugar).innerText = " ";
        miSudoku.sudokuJuego[indiceArray] = undefined;
    }
  
}

function hayRepetidos(array){
    for (let i = 0; i< array.length; i++){
        for (let j = i+1; j<array.length; j++){
            if(array[i]===array[j]){
                return true;
            }
        }
    }
    return false;
}


function ventanaComprueba(){
    const correctamenteCompletado = miSudoku.estaResuelto();

    const tituloModal = document.getElementById("tituloModal");
    if (correctamenteCompletado){
        tituloModal.innerHTML="¡Enhorabuena! Está correctamente completado";
        
    }
    else{
        tituloModal.innerHTML="Lo siento, no está correctamente completado";
    }

    // Ventana modal
    const modal = document.getElementById("ventanaModal");
    const boton = document.getElementById("comprobar");
    const span = document.getElementsByClassName("cerrar")[0];
    boton.addEventListener("click",function() {
        modal.style.display = "block";
    });
    span.addEventListener("click",function() {
        modal.style.display = "none";
    });
    window.addEventListener("click",function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });

    
}

function meRindo(){

    miSudoku.muestraEntero();
}

function reinicia(){
    //Hay que mostrar miSudoku.arrayCopia
    miSudoku.muestraDeNuevo();
}






document.addEventListener("keydown", function(event) {
    const teclaPresionada = event.key;
    if (miSudoku.celdasEditables.includes(celdaFocoActual) && (teclaPresionada==1 || teclaPresionada==2 ||teclaPresionada==3 || teclaPresionada==4 ||
        teclaPresionada==5 || teclaPresionada==6 || teclaPresionada==7 || teclaPresionada==8 || teclaPresionada==9)) {
        anadirElemento(celdaFocoActual, teclaPresionada);
    }
});

document.getElementById('nuevoSudokuF').addEventListener('click', nuevoSudoku);
document.getElementById('nuevoSudokuM').addEventListener('click', nuevoSudoku);
document.getElementById('nuevoSudokuD').addEventListener('click', nuevoSudoku);
document.getElementById('comprobar').addEventListener('click', ventanaComprueba);
document.getElementById('meRindo').addEventListener('click', meRindo);
document.getElementById('otraPartida').addEventListener('click', reinicia);

document.getElementById('playtable').addEventListener('click', clickEnTabla);
document.getElementById("tablaValores").addEventListener('click', clickEnTablaValores);

