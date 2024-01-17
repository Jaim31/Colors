//definiendo nuestra paleta de colores para luego llamar
let colors=["#f72585" , "#b5179e" , "#7209b7" , "#560bad" , "#480ca8" , "#3a0ca3" , "#3f37c9" , "#4361ee" , "#4895ef" , "#4cc9f0"];

//seleccionar los elementos reelevantes para modificar dinamicamente
const body=document.querySelector('body');
const boton=document.querySelector('.container-button');


let contador=0;
boton.addEventListener("click",()=>{
    body.style.backgroundColor=colors[contador]; 
    // contador++;
    // if(contador==9){
    //     contador=0;
    // }

    //Opcion Alternativa
    let resultado=Math.floor(Math.random()*colors.length);
    body.style.backgroundColor=colors[resultado];
});


