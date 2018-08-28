window.onload=function(){
    

    /*document.getElementById("myBtn").addEventListener("click", function(){
        var number = prompt("Ukucaj broj", "**");
        if (number != null) {
            document.getElementById("blue").style.width=number + "%"; 
            document.getElementById("blueScore").innerHTML=number  + "%"; 
        }
    }); */



    $(document).ready(function() {
 
   /* jQuery(function() {
        jQuery('.ss_button').on('click',function() {
           
            jQuery('.ss_content').slideUp('fast');
            jQuery(this).next('.ss_content').slideDown('fast');
        });
    }); */
    $('.ss_button').click(function() {
        $(this).next('.ss_content').slideToggle();
    }); 
});

}
