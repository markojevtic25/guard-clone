window.onload=function(){
    document.getElementById("myBtn").addEventListener("click", function(){
        var number = prompt("Ukucaj broj", "**");
        var number_green = 100 - Number(number);
        var n =  number_green.toString();
            document.getElementById("blue").style.width=number + "%"; 
            document.getElementById("blueScore").innerHTML=number  + "%"; 
            document.getElementById("greenScore").innerHtml=number + "%";
    }
)};
