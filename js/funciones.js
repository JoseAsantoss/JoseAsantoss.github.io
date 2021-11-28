window.onload = () => {
    //Llao a la función fecha para que lo muestre en el footer
    fecha();

    const ham = document.querySelector('.ham');
    const enlaces = document.querySelector('.enlaceMenu');
    const barras = document.querySelectorAll('.ham span');
    let control = false;
    let nVentana = ventana;
    let nNavegador = navegador;


    /**************************************************/
    /**************************************************/
    /* Con este código calculo el tamaño del navegador del 
    usuario y en función de ello le voy a activar la clase
    .activado para que se vea el menu en lista o se quede
    oculto y se muestre el button con la clase .ham */
    if(navegador > 768) {
       enlaces.classList.add('activado')
       control =true;
    }

    if(navegador < 769) {
        enlaces.classList.remove('activado')
        control = false;
    }

    let flag = -1
    window.onresize = () => {
        let old;
        if(flag < 0) {
            nNavegador = window.innerWidth
            nVentana = screen.availWidth
            console.log(`El nuevo tamaño de nNavegador es ${nNavegador} y de nVentana es ${nVentana}`)
            flag = 1
            if((nNavegador >= navegador && navegador > 768) ||(nNavegador >= navegador && navegador < 769) ) {
                control = true
                enlaces.classList.toggle('activado', true);
                console.log(`He entrado y activo "activado"`)
            }else if((nNavegador <= navegador && navegador < 769)||(nNavegador >= navegador && navegador > 768)) {
                enlaces.classList.toggle('activado', false);
                control= false
                console.log(`He entrado y desactivo "activado"`)
            }
        }else {
            nuevo = window.innerWidth
            if(nuevo != nNavegador) {
                console.log(`El valor de old es ${nuevo} y de nVentana es ${nVentana}`)
                flag = -1
                if((nuevo >= nNavegador && nNavegador > 768)||(nuevo >= nNavegador && nNavegador < 769)) {
                   control = true;
                   enlaces.classList.toggle('activaddo', true);
                }else if((nuevo <= nNavegador && nNavegador > 769)||(nuevo >= nNavegador && nNavegador > 768)){
                    enlaces.classList.toggle('activado', false)
                    control = false
                    console.log(`He entrado y desactivo "activado"`)
                }
            }
            navegador = nuevo
        }

        
    }

    ham.addEventListener('click', () => {
        enlaces.classList.add('activado');
        barras.forEach(child => {
            child.classList.toggle('animado');
        })
    })

    enlaces.addEventListener('click', () => {
        if(!control) {
            enlaces.classList.remove('activado');
            barras.forEach(child => {
                child.classList.toggle('animado');
                
            })
        }      
    })


    
}
//Función fecha que devuelve un string con el pie
//de la página.
function fecha() {

    return document.getElementById("center").innerHTML = `<a href="index.html">&copy; Desarrollado por Jose A. Santos 2021 - ${new Date().getFullYear()} </a>`;
}

function tamNav() {
    window.innerWidth
}


let navegador = window.innerWidth;
const ventana = screen.availWidth;
console.log(`El tamaño del navegador es: ${navegador}`)
console.log(`El tamaño de la ventana es: ${ventana}`)