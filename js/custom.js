let modal_logo_asd_arrow_left = document.querySelector("#modal-logo-asd-arrow-left")
let modal_logo_asd_arrow_right = document.querySelector("#modal-logo-asd-arrow-right")

let modal_logo_asd_inside1 = document.querySelector("#modal_logo_asd_1")
let modal_logo_asd_inside2 = document.querySelector("#modal_logo_asd_2")

console.log(modal_logo_asd_inside2)

modal_logo_asd_arrow_left.addEventListener("click", () => {
    modal_logo_asd_inside1.style.display = "flex"
    modal_logo_asd_inside2.style.display = "none"
})

modal_logo_asd_arrow_right.addEventListener("click", () => {
    modal_logo_asd_inside1.style.display = "none"
    modal_logo_asd_inside2.style.display = "flex"
})

let arrow_clickable = (arrowvar) => {
    
}


let button_matt_change = document.querySelector("#change-matt-head")

button_matt_change.addEventListener("click", () => {
    let matt_head1 = document.querySelector("#matt-head1")
    let matt_head2 = document.querySelector("#matt-head2")

    console.log(matt_head2.style.display)

    if (matt_head2.style.display == "none"){
        matt_head1.style.display = "none"
        matt_head2.style.display = "inline"
        document.body.style.cursor="url(images/kursor-matt.png), default";
    }else{
        matt_head1.style.display = "inline"
        matt_head2.style.display = "none"
        document.body.style.cursor="url(images/kursor-matt-agent.png), default";
    }
})