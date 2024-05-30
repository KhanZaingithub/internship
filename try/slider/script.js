const arrow_right=document.querySelector("#arrow-right")
const arrow_left=document.querySelector("#arrow-left")
const slider=document.querySelector(".slider")

const width_slider= slider.scrollWidth
const interval = 200




function slide(event){

    
    const current_property_left_slider= parseInt(getComputedStyle(slider).left)


    let new_pos_left_slider


    if(event.currentTarget === arrow_right){


        if(Math.abs(current_property_left_slider) + interval + slider.clientWidth >= slider.scrollWidth){

            new_pos_left_slider= `-${slider.scrollWidth - slider.clientWidth}px`

        }


        else{

            new_pos_left_slider= `${current_property_left_slider - interval}px`

        }

        slider.style.left= new_pos_left_slider

        
    }



    if(event.currentTarget === arrow_left){

        new_pos_left_slider = current_property_left_slider + interval

        if(new_pos_left_slider > 0){
            
            slider.style.left="0px"
        }

        else{

            slider.style.left= `${new_pos_left_slider}px`

        }
    }

}


arrow_left.addEventListener("click", slide)
arrow_right.addEventListener("click", slide)


