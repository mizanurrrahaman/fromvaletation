let btn = document.querySelector(".btn")
let full_name = document.querySelector(".name")
let email = document.querySelector(".email")
let pass = document.querySelector(".pass")
let con_pass = document.querySelector(".con_pass")

let validata_email =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
let validata_pass = "/^(?=.*\d)(?=.*[a-zA-Z]).{6,20}$/"

let name_err = document.querySelector(".name_err")
let email_err = document.querySelector(".email_err")
let pass_err = document.querySelector(".pass_err")
let con_pass_err = document.querySelector(".con_pass_err")


btn.addEventListener("click",(e)=>{
    e.preventDefault()
    if(!full_name.value){
        name_err.innerHTML =" Enter your name"
    }
    else{
        name_err.innerHTML = " "
    }

    if(!email.value){
        email_err.innerHTML = " Enter your email"
    }
    else{
        if(email.value.match(validata_email)){
            email_err.innerHTML = " "
        }
        else{
            console.log("Please write your email");
        } 
    }
    
    if(!pass.value){
        pass_err.innerHTML = "Please write a password"
    }
    else{
        if(pass.value.match(validata_pass)){
            pass_err.innerHTML = ""
        }
        else{
            pass_err.innerHTML = "Please write a strong password"
        }
    }

    if(!con_pass.value){
        con_pass_err.innerHTML = " Confirm Password"
    }
    else{
        if(pass.value == con_pass_err.value){
            con_pass_err.innerHTML = ""
        }
        else{
            con_pass_err.innerHTML = "Don't Match"
        }
    }


})


