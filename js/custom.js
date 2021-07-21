let button_matt_change = document.querySelector("#change-matt-head")

button_matt_change.addEventListener("click", () => {
    let matt_head1 = document.querySelector("#matt-head1")
    let matt_head2 = document.querySelector("#matt-head2")

    console.log(matt_head2.style.display)

    if (matt_head2.style.display == "none"){
        matt_head1.style.display = "none"
        matt_head2.style.display = "inline"
    }else{
        matt_head1.style.display = "inline"
        matt_head2.style.display = "none"
    }

    
})