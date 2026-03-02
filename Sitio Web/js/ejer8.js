const btn=document.querySelector('#btn')
btn.addEventListener('click', primo)
function primo(e)
{
    e.preventDefault()
    const valor = document.querySelector('.valor').value
    const resultado =document.querySelector('#resultado')
    var p=false, i=1
    while(p== false && i<parseInt(Math.sqrt(valor)))
        {
           i++
           if (valor % i==0)
           {
            p=true
           }
        }
        if(p == false)
        {
            console.log('Es Primo') 
        }
        else{
            console.log('No Es Primo') 
        } 
        resultado.innerHTML=resultado.innerHTML+" " +p+ " "
}