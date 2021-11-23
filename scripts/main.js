//Hides the short info of all events when page loads
function hideEventInfo(){
    $(".eventInfo").hide();
}

//Show short info of clicked Event
function toggleMoreInfo() {
    $(".moreInfo").on("click", function(){
        $(this).next(".eventInfo").toggle("fast");
    })
}

//Resize thumbnail images by 10px on event-page.html
function resizeEventImageOnHover(){
    $(".imageContainer").mouseover(function(){
        let imageWidth = $(this).children("img").innerWidth();
        
        imageWidthNew = imageWidth + 10;
        
        $(this).children("img").css({"width": imageWidthNew});
        // $(this).children("img").css({"width": "210px"});

        $(".imageContainer").mouseout(function(){
            $(this).children("img").css({"width": imageWidth});
        })
    })
}

//Show a "Thank You" message when user clicks "Submit" on a form
function showSubmitFormMessage(){
    $(".submitButton").on("click", function(e){
        $(".formContainer").hide();
        e.preventDefault();

        $(".formThankYouMessage").show();
    })
}

//Changes the color of the text "No file chosen" in "type=file" input elements to white (create-event.html)
function changeInputFileTextColorToWhite(){
    $("#images1, #images2, #images3, #images4").css({"color":"white"});
}

$(function() {

    //Hides the short info of all events when page loads
    hideEventInfo()
    
    //Shows short info of clicked Event
    toggleMoreInfo();

    //Resizes thumbnail images by 10px on event-page.html
    resizeEventImageOnHover();

    //Shows a "Thank You" message when user clicks "Submit" on a form
    showSubmitFormMessage()

    //Changes the color of the text "No file chosen" in "type=file" input elements to white (create-event.html)
    changeInputFileTextColorToWhite();
    
})