let confirM = document.querySelector("#confirm")
let deleteNotice = document.querySelectorAll(".delete-notice")
confirM.addEventListener('change',() => {
    //console.log(confirM.value)
    confirM.style.display = "none";
    deleteNotice[0].style.display = "block";
    //any operation to do after sliding
})
