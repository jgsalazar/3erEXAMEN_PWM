function P01(){
    let op1 = document.getElementById("P1-1")
    let op2 = document.getElementById("P1-2")
    let op3 = document.getElementById("P1-3")

    let msg = ""

    if (!op1.checked && !op2.checked && !op3.checked){
        msg = "Seleccione una opción"
    } else if (op1.checked) {
        msg = "Respuesta correcta"
    } else {
        msg = "Respuesta incorrecta"
    }

    document.getElementById("R01").innerHTML = msg
}

function P02(){
    let op3 = document.getElementById("O1-3")
    let op6 = document.getElementById("O2-2")
    let op12 = document.getElementById("O3-4")
    let op14 = document.getElementById("O4-2")

    let msg = ""

    if (op3.checked && op6.checked && op12.checked && op14.checked){
        msg = "Respuesta correcta"
    } else {
        msg = "Respuesta incorrecta"
    }

    document.getElementById("R02").innerHTML = msg
}


let sel1 = document.getElementById("etapa01")
let sel2 = document.getElementById("etapa02")
let sel3 = document.getElementById("etapa03")
let sel4 = document.getElementById("etapa04")
let sel5 = document.getElementById("etapa05")

let srcImagen

function P03(){
    let msg = ""

    if (sel1.value=="planificacion"&&sel2.value=="diseno"&&sel3.value=="codificacion"&&sel4.value=="pruebas"&&sel5.value=="lanzamiento"){
        msg = "Respuesta correcta "
    } else {
        msg = "Respuesta incorrecta "
    }

    document.getElementById("R03").innerHTML = msg

}

function change01(){
    let seleccion = sel1.value
    let img1 = document.getElementById("img01P3")
    cambioImagen(seleccion)
    img1.src = srcImagen
}

function change02(){
    let seleccion = sel2.value
    let img1 = document.getElementById("img02P3")
    cambioImagen(seleccion)
    img1.src = srcImagen
}

function change03(){
    let seleccion = sel3.value
    let img1 = document.getElementById("img03P3")
    cambioImagen(seleccion)
    img1.src = srcImagen
}

function change04(){
    let seleccion = sel4.value
    let img1 = document.getElementById("img04P3")
    cambioImagen(seleccion)
    img1.src = srcImagen
}

function change05(){
    let seleccion = sel5.value
    let img1 = document.getElementById("img05P3")
    cambioImagen(seleccion)
    img1.src = srcImagen
}

function cambioImagen(x){

    switch (x){
        case "planificacion":
            srcImagen = "img/planificacion.png"
            break
        case "diseno":
            srcImagen = "img/diseno.png"
            break
        case "codificacion":
            srcImagen = "img/codificacion.png"
            break
        case "pruebas":
            srcImagen = "img/pruebas.png"
            break
        case "lanzamiento":
            srcImagen = "img/lanzamiento.png"
            break
        default:
            srcImagen = "img/question.png"
            break
    }
}

function P04(x){
    let msg = ""
    if (x==1){
        msg = "Planificación. Respuesta correcta"
    } else {
        msg = "Respuesta incorrecta"
    }
    document.getElementById("R04").innerHTML = msg
}

function P05(){
    let op1 = document.getElementById("P5-1")
    let op2 = document.getElementById("P5-2")
    let op3 = document.getElementById("P5-3")
    let op4 = document.getElementById("P5-4")
    let op5 = document.getElementById("P5-5")

    let msg = ""

    if (!op1.checked && !op2.checked && !op3.checked && !op4.checked && !op5.checked){
        msg = "Seleccione al menos una opción"
    } else if (!op1.checked && op2.checked && !op3.checked && !op4.checked && op5.checked) {
        msg = "Respuesta correcta"
    } else {
        msg = "Respuesta incorrecta"
    }

    document.getElementById("R05").innerHTML = msg
}

function P06(){
    let op1 = document.getElementById("P6-1")
    let op2 = document.getElementById("P6-2")
    let op3 = document.getElementById("P6-3")
    let op4 = document.getElementById("P6-4")
    let op5 = document.getElementById("P6-5")
    let op6 = document.getElementById("P6-6")
    let op7 = document.getElementById("P6-7")
    let op8 = document.getElementById("P6-8")
    let op9 = document.getElementById("P6-9")
    let op10 = document.getElementById("P6-10")

    let msg = ""

    if (!op1.checked && !op2.checked && !op3.checked && !op4.checked && !op5.checked && !op6.checked && !op7.checked && !op8.checked && !op9.checked && !op10.checked){
        msg = "Seleccione al menos una opción"
    } else if (op1.checked && !op2.checked && !op3.checked && op4.checked && op5.checked && !op6.checked && !op7.checked && op8.checked && op9.checked && !op10.checked) {
        msg = "Respuesta correcta"
    } else {
        msg = "Respuesta incorrecta"
    }

    document.getElementById("R06").innerHTML = msg
}


