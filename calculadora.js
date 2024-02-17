const pantalla = document.getElementById("pantalla");
const buttons = document.querySelectorAll("button");

buttons.forEach((btn)=>{
    btn.addEventListener("click", ()=>{
        let botonpresionado = btn.textContent;

        if(btn.id == "borrar"){

            if(pantalla.innerHTML.length == 1){
                pantalla.innerHTML = "0";
            }else{
                pantalla.innerHTML = pantalla.innerHTML.slice(0, -1);
            }
            
            return;
        }

        if(btn.id == "igual"){
            pantalla.innerHTML = eval(pantalla.innerHTML);

            return;
        }

        if(btn.id == "limpiar"){
            pantalla.innerHTML = "0";
            return;
        }

        if(pantalla.innerHTML == 0){
            pantalla.innerHTML = botonpresionado;
        }else{
            pantalla.innerHTML += botonpresionado;
        }
        
    });
});