window.onload = () => {
    //Llao a la función fecha para que lo muestre en el footer
    fecha();

    const ham = document.querySelector('.ham');
    const enlaces = document.querySelector('.enlaceMenu');
    const barras = document.querySelectorAll('.ham span');

    /**************************************************/
    /**************************************************/
    /* Con este código calculo el tamaño del navegador del 
    usuario y en función de ello le voy a activar la clase
    .activado para que se vea el menu en lista o se quede
    oculto y se muestre el button con la clase .ham */
    if(navegador > 768) {
        enlaces.classList.add('activado');
    }

    window.addEventListener('resize', () => {
        let nuevoTam = window.innerWidth;

        if(nuevoTam < 769 ) {
            enlaces.classList.remove('activado')
            navegador = nuevoTam;

        }else {
            enlaces.classList.add('activado')
            navegador = nuevoTam;
        }
    })
    /**************************************************/
    /**************************************************/
    /**************************************************/
    /**************************************************/

    ham.addEventListener('click', () => {
        enlaces.classList.add('activado');
        barras.forEach(child => {
            child.classList.toggle('animado');
        })
    })

    if(navegador < 769) {
        enlaces.addEventListener('click', () => {
            enlaces.classList.remove('activado');
            barras.forEach(child => {
                child.classList.toggle('animado');
                
            })
        })
    }
    
   
       
}

//Función fecha que devuelve un string con el pie
//de la página.
function fecha() {

    let fecha = new Date();

    let año = fecha.getFullYear();

    let texto = document.getElementById("center");

    texto.innerHTML = `<a href="index.html">&copy; Desarrollado por Jose A. Santos 2021 - ${año} </a>`;

    return texto;
}

const navegador = window.innerWidth;


console.log(`El tamaño del navegador es: ${navegador}`) 