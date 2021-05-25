var xmlHttp
var frase

if(window.XMLHttpRequest){
    xmlHttp = new XMLHttpRequest;
}
else{
    xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
}

xmlHttp.onreadystatechange = function(){
    if(xmlHttp.readyState == 4 && xmlHttp.status == 200){
        console.log(xmlHttp.responseText)
        var exp = /[;-]/g;

        frase = xmlHttp.responseText.split(exp)[parseInt(Math.random()*6)]
    }

}


xmlHttp.open('GET', 'https://raw.githubusercontent.com/alexRicc2/hello-world/master/sucess.txt', true);
xmlHttp.send();



const validacao = document.querySelector('[data-form-botao]')
const formulario = document.querySelector('[data-form]')
validacao.addEventListener('click', valida)
formulario.addEventListener('click', mask)

function mask(){
    VMasker(document.querySelector("[data-form-numero]")).maskPattern("(99)9999-9999");

    VMasker(document.querySelector("[data-form-zip]")).maskPattern("99999-999");

}

function valida(evento){

    evento.preventDefault()

    const email = document.querySelector('[data-form-email]').value
    const numero = document.querySelector('[data-form-numero]').value
    const cep = document.querySelector('[data-form-zip]').value
    const nome = document.querySelector('[data-form-nome]').value

    const numeroRGEX = /^[(][0-9]{2,3}[)][0-9]{4,5}[-][0-9]{4}$/
    const emailRGEX = /^[a-z0-9.]+[@][a-z0-9]+\.[a-z0-9]+$/
    const cepRGEX = /[0-9]{5}[-][0-9]{3}/

    
    const validaEmail = emailRGEX.test(email)
    const validaNumero = numeroRGEX.test(numero)
    const validaCEP = cepRGEX.test(cep)

    if(validaNumero && validaEmail &&validaCEP){
        alert(frase)
    }
    else if(!validaEmail){
        alert('O email precisa ser um email valido.\nEx. : nome@gmail.com')
    }
    else if(!validaNumero){
        alert('O número precisa ser um número valido\nEx. : (xx)xxxxx-xxxx')
    }
    else if(!validaCEP){
        alert('O zip precisa ser valido\nEx. : xxxxx-xxx')
    }
}

document.querySelectorAll('a[href^="#"]').forEach(function (element) {
    if (!element.hash) return;
    if (element.origin + element.pathname !== self.location.href) return;
    
    (function (destination) {
        element.addEventListener('click', function (event) {
            window.scrollTo({
                top: destination.offsetTop,
                behavior: 'smooth'
            });
            event.preventDefault();
        }, false);
    })(document.querySelector(element.hash));
});

console.log(frase);