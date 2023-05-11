let P = document.querySelector("#V")
let VP = document.querySelector("#vp")
let A = document.querySelector("#MA")
let VA = document.querySelector("#va")
let SUL = document.querySelector("#RE")
P.oninput=()=>{calcular()}
A.oninput=()=>{calcular()}
const calcular=()=>{
    VP.innerHTML= `${P.value} KG`
    VA.innerHTML= `${A.value} M`
    SUL.innerHTML= `<img src="../IMG/C.jpg" class="w-25">`
    setTimeout(() => {
        let pe = parseInt(P.value);
        let al = parseFloat(A.value);
        let IMC = pe/(al*al);
        let con="";
        if (IMC<18.5) {con="BAJO PESO"}
        else if (IMC>=18.5&&IMC<25) {con="NORMAL" } 
        else if (IMC>=25&&IMC<30) {con="SOBRE PESO" }
        else if (IMC>=30&&IMC<35) {con="OBESIDAD I" } 
        else if (IMC>=35&&IMC<40) {con ="OBESIDAD II" }
        else{con="OBESIDAD III"}
        SUL.innerHTML=`<div class="text-center m-auto">
        <h1 class="text-danger">IMC</h1>
        <div class="card text-primary w-50 m-auto"><h2>$(IMC.toFixed(2))</h2></div>
        <h1 class="text-danger">CONDICION</h1>
        <div class="card text-primary w-50 m-auto"><h2>$(con)</h2></div>
        </div>`
    } ,1200);
}