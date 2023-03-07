let confirM = document.querySelector("#confirm")
let deleteNotice = document.querySelectorAll(".notice")
confirM.addEventListener('change',(e) => {
    e.preventDefault()
    //console.log(confirM.value)
    if(confirM.value > 99){
    confirM.style.display = "none";
    deleteNotice[0].style.display = "block";
        //any operation to do after sliding
    }
})
