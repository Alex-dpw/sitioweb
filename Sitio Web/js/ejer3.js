var btn=document.getElementById('calcular')
btn=addEventListener('click',area)
function area(){
    var altura =parseFloat(document.querySelector('#altura').value);
    var base = parseFloat(document.querySelector('#base').value);

    var resultado = (altura * base)/2;
    document.querySelector('#resultado').value = resultado;
}