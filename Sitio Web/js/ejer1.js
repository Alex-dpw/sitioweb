const btn=document.querySelector('#btn')
btn.addEventListener('click', vocales)
function vocales(e)
{
    e.preventDefault()
    const frase = document.querySelector('.frase').value
    const resultado =document.querySelector('#resultado')
    let arr = frase.split('');
    console.log(arr)
    console.log(arr[0])
    var ca=0, ce=0, ci=0, co=0, cu=0
    for(var i=0;i<frase.length;i++)
        {
            switch (arr[i])
            {
                case 'a':
                    ca=ca+1
                    break

                case 'e':
                    ce=ce+1
                    break

                case 'i':
                    ci=ci+1
                    break

                case 'o':
                    co=co+1
                    break

                case 'u':
                    cu=cu+1
                    break
            }
        }
        console.log(ca,ce,ci,co,cu) 
        resultado.innerHTML=resultado.innerHTML+"<h4> Se Encontro "+ca +" vocal A </h4>"
        resultado.innerHTML=resultado.innerHTML+"<h4> Se Encontro "+ce +" vocal E </h4>"
        resultado.innerHTML=resultado.innerHTML+"<h4> Se Encontro "+ci +" vocal I </h4>"
        resultado.innerHTML=resultado.innerHTML+"<h4> Se Encontro "+co +" vocal O </h4>"
        resultado.innerHTML=resultado.innerHTML+"<h4> Se Encontro "+cu +" vocal U </h4>"
}
 