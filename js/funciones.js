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
    if(ventana > 768) {
       enlaces.classList.add('activado')
    }

    window.addEventListener('resize', () => {
        let nVenta = screen.availWidth;
        let nNavegador = window.innerWidth;
        console.log(`Ventana es ${ventana} y nVentana es ${nVenta} y el navegador es ${nNavegador}`)

        if(nVenta < 769 || nNavegador < 769) {
            enlaces.classList.remove('activado')
            console.log('pasaba por aqui')
            ham.addEventListener('click', () => {
                enlaces.classList.add('activado');
                barras.forEach(child => {
                    child.classList.toggle('animado');
                })
            })
        
            enlaces.addEventListener('click', () => {
                enlaces.classList.remove('activado');
                barras.forEach(child => {
                    child.classList.toggle('animado');
                    
                })
                
            })
        }

        if(nVenta > 768 || nNavegador > 768) {
            enlaces.classList.add('activado')
            enlaces.addEventListener('click', () => {
                enlaces.classList.add('activado');
            })
        }

    });   
}
//Función fecha que devuelve un string con el pie
//de la página.
function fecha() {

    return document.getElementById("center").innerHTML = `<a href="index.html">&copy; Desarrollado por Jose A. Santos 2021 - ${new Date().getFullYear()} </a>`;
}


const navegador = window.innerWidth;
const ventana = screen.availWidth;
console.log(`El tamaño del navegador es: ${navegador}`)