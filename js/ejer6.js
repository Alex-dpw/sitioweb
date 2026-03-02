const $sumit = document.getElementById("submit"),
      $password = document.getElementById("password"),
      $usarname = document.getElementById("usarname"),
      $visible = document.getElementById("visible");
document.addEventListener("change",(e)=>{
    if(e.target === $visible){
        if($visible.checked === false) $password.type = "password";
        else $password.type = "text";
    }
});
document.addEventListener("click",(e)=>{
    if(e.target === $sumit){
        if($password.value !== "" && $usarname.value !== ""){
            e.preventDefault();
            window.location.href= "2do.html";
        }
    }
})