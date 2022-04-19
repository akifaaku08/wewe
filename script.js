console.log(ls)
function finalClick() {

    if (sessionStorage.getItem("subok") == "true") {
        window.location = "#";
    } else {
        alert("You must have to subscribe piximods youtube channel and ads click");
    }
}
       
       
let waitingTime = 25;
let click;

if (localStorage.getItem("url")) {
    
    if (localStorage.getItem("url") == document.URL) {
        if (sessionStorage.getItem("subok") == "true" && Number(sessionStorage.getItem("timeRun")) == waitingTime) {

            document.querySelector(".valadating").classList.add("d-none");
            document.querySelector(".loading").classList.add("d-none");
            document.querySelector("#task1").style =
                "background-color: rgb(26, 179, 44);";
            document.querySelector(".success").classList.remove("d-none");
            document.querySelector(".non-succes").classList.add("d-none");
            document.querySelector(".done").classList.remove("d-none");
            document.querySelector(".fa-lock").classList.add("d-none");
            document.querySelector(".fa-unlock").classList.remove("d-none");
            document.querySelector("#task1").disabled = true;
            document.querySelector("#unlocklink").removeAttribute("disabled");
            document.querySelector("form[name='dsb']").setAttribute("action","<?php echo $_GET['linkr']; ?>");
        }
    }else if (localStorage.getItem("url") !== document.URL) {
        sessionStorage.removeItem("timeRun");
        localStorage.removeItem("subok");
        sessionStorage.removeItem("isclicked");
    }
    
    
}else{
    localStorage.setItem("url",document.URL);
}


if (sessionStorage.getItem("isclicked") == "true" && Number(sessionStorage.getItem("timeRun")) < waitingTime) {

    document.querySelector(".loading").classList.remove("d-none");
    document.querySelector(".valadating").classList.remove("d-none");
    document.querySelector(".non-succes").classList.add("d-none");
    document.querySelector("#unlocklink").disabled = true;
    
    localStorage.setItem("url",document.URL);
    if (Number(sessionStorage.getItem("timeRun")) < waitingTime) {
        var timesRun = Number(sessionStorage.getItem("timeRun"));
        var interval = setInterval(function () {
            timesRun += 1;
            sessionStorage.setItem("timeRun", timesRun);
            if (timesRun == waitingTime) {
                clearInterval(interval);
                document.querySelector(".valadating").classList.add("d-none");
                document.querySelector(".loading").classList.add("d-none");
                document.querySelector("#task1").style =
                    "background-color: rgb(26, 179, 44);";
                document.querySelector(".success").classList.remove("d-none");
                document.querySelector(".non-succes").classList.add("d-none");
                document.querySelector(".done").classList.remove("d-none");
                document.querySelector(".fa-lock").classList.add("d-none");
                document.querySelector(".fa-unlock").classList.remove("d-none");
                document.querySelector("#task1").disabled = true;
                document.querySelector("#unlocklink").disabled = false;
                sessionStorage.setItem("subok", "true");
                sessionStorage.setItem("isclicked","true");
                document.querySelector("form[name='dsb']").setAttribute("action","<?php echo $_GET['linkr']; ?>");
            }
        }, 1000);
    }


}


// If Subscribe button clicked
document.querySelector("#task1").addEventListener("click", function () {
    timer();
    sub_channel();
})

if (new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit',hour12: false }) == "00:00") {
    sessionStorage.removeItem("timeRun");
    localStorage.removeItem("subok");
}


function timer() {

    isclicked = true;
    sessionStorage.setItem("isclicked", "true");
    localStorage.setItem("url",document.URL);
    document.querySelector(".loading").classList.remove("d-none");
    document.querySelector(".valadating").classList.remove("d-none");
    document.querySelector(".non-succes").classList.add("d-none");
    document.querySelector("#unlocklink").disabled = true;
    
    var timesRun = 0;
    var interval = setInterval(function () {
        timesRun += 1;
        sessionStorage.setItem("timeRun", timesRun);
  
        if (timesRun == waitingTime) {
            clearInterval(interval);
            document.querySelector(".valadating").classList.add("d-none");
            document.querySelector(".loading").classList.add("d-none");
            document.querySelector("#task1").style =
                "background-color: rgb(26, 179, 44);";
            document.querySelector(".success").classList.remove("d-none");
            document.querySelector(".non-succes").classList.add("d-none");
            document.querySelector(".done").classList.remove("d-none");
            document.querySelector(".fa-lock").classList.add("d-none");
            document.querySelector(".fa-unlock").classList.remove("d-none");
            document.querySelector("#task1").disabled = true;
            document.querySelector("#unlocklink").disabled = false;
            sessionStorage.setItem("subok", "true");
            sessionStorage.setItem("isclicked","true");
            document.querySelector("form[name='dsb']").setAttribute("action","<?php echo $_GET['linkr']; ?>");
        }
    }, 1000);


}

function sub_channel() {
    window.open("https://www.youtube.com/channel/UCIur4-CYFUC6MKWpb-T66Ig?sub_confirmation=1");
}
       
