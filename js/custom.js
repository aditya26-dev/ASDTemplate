let modal_logo_asd_arrow_left = document.querySelector("#modal-logo-asd-arrow-left")
let modal_logo_asd_arrow_right = document.querySelector("#modal-logo-asd-arrow-right")

let modal_logo_asd_inside1 = document.querySelector("#modal_logo_asd_1")
let modal_logo_asd_inside2 = document.querySelector("#modal_logo_asd_2")

modal_logo_asd_arrow_left.addEventListener("click", () => {
    modal_logo_asd_inside1.style.height = "auto"
    modal_logo_asd_inside1.style.maxWidth = "900px"
    modal_logo_asd_inside1.style.margin = "40px"
    modal_logo_asd_inside1.style.transition = "transform 500ms ease-in-out, opacity 500ms ease-in-out"
    modal_logo_asd_inside1.style.transform = "translateX(0)"
    modal_logo_asd_inside1.style.opacity = "100%"

    modal_logo_asd_inside2.style.height = "0"
    modal_logo_asd_inside2.style.maxWidth = "0"
    modal_logo_asd_inside2.style.margin = "0"
    modal_logo_asd_inside2.style.transitionDuration = "0s"
    modal_logo_asd_inside2.style.transform = "translateX(10%)"
    modal_logo_asd_inside2.style.opacity = "0"
})

modal_logo_asd_arrow_right.addEventListener("click", () => {
    modal_logo_asd_inside1.style.height = "0"
    modal_logo_asd_inside1.style.maxWidth = "0"
    modal_logo_asd_inside1.style.margin = "0"
    modal_logo_asd_inside1.style.transitionDuration = "0s"
    modal_logo_asd_inside1.style.transform = "translateX(-10%)"
    modal_logo_asd_inside1.style.opacity = "0"

    modal_logo_asd_inside2.style.height = "auto"
    modal_logo_asd_inside2.style.maxWidth = "900px"
    modal_logo_asd_inside2.style.margin = "40px"
    modal_logo_asd_inside2.style.transition = "transform 500ms ease-in-out, opacity 500ms ease-in-out"
    modal_logo_asd_inside2.style.transform = "translateX(0)"
    modal_logo_asd_inside2.style.opacity = "100%"
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