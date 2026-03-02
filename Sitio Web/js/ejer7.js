var btn = document.querySelector('.calcular')
btn=addEventListener('click', mayor)
function mayor(e){ 
    e.preventDefault()
    var valor1 = parseInt(document.querySelector('#valor1').value);
    var valor2 = parseInt(document.querySelector('#valor2').value);
    var valor3 = parseInt(document.querySelector('#valor3').value);

    if(valor1 > valor2 )
    {
        if(valor1 > valor3){
            document.querySelector('#resultado').value = valor1;
        }
        else{
            document.querySelector('#resultado').value = valor3;
        }
    }
    else if(valor2 > valor3){
        document.querySelector('#resultado').value = valor2;
    }
    else{
        document.querySelector('#resultado').value = valor3;
    }
}