window.onload = () => {
    //Llao a la función fecha para que lo muestre en el footer
    fecha();

    const ham = document.querySelector('.ham');
    const enlaces = document.querySelector('.enlaceMenu');
    const barras = document.querySelectorAll('.ham span');
    let control = false;

    /**************************************************/
    /**************************************************/
    /* Con este código calculo el tamaño del navegador del 
    usuario y en función de ello le voy a activar la clase
    .activado para que se vea el menu en lista o se quede
    oculto y se muestre el button con la clase .ham */
    if(navegador > 768) {
        enlaces.classList.add('activado', true);
        control = true;
    } else {
        ham.addEventListener('click', () => {
            enlaces.classList.toggle('activado');
            barras.forEach(child => {
                child.classList.toggle('animado');
            })
           mostrar = true;
        })

        enlaces.addEventListener('click', () => {
            enlaces.classList.toggle('activado');
            barras.forEach(child => {
                child.classList.toggle('animado'); 
            })  
        })


    }

    window.addEventListener('resize', () => {
        let nuevoTam = window.innerWidth;
        
        if(control && nuevoTam < 769 ) {
            enlaces.classList.toggle('activado', false);
            control = true

            enlaces.addEventListener('click', () => {
                enlaces.classList.toggle('activado');
                barras.forEach(child => {
                    child.classList.toggle('animado'); 
                })  
            })

        }else {

            if(nuevoTam > 768) {
                enlaces.classList.add('activado', true);
                control = false;
            }else {
                enlaces.addEventListener('click', () => {
                    enlaces.classList.toggle('activado');
                    barras.forEach(child => {
                        child.classList.toggle('animado'); 
                    })  
                })
            }
        }
    })
    /**************************************************/
    /**************************************************/
    /**************************************************/
    /**************************************************/
   
       
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