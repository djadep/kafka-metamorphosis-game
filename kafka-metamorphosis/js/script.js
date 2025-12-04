$("#check-time").hide();
$("#out-of-bed").hide();
$("#sleep-in").hide();
$("#get-up").hide();
$(".second-image").hide();
$("#achievement").hide();

$("#check-time").show();
$("#out-of-bed").show();

let text1 = "Gregor awakes to a gentle coaxing from the morning sun, his room is as it was when he had gone to bed, very human, cozy, and lively. But Gregor notices...an anomaly in his room. Himself. He has woken up to find he has become a giant bug.";

let text1TotalCharacterNumber = text1.length;

let text1iterationindex = 0;

let text1Interval = setInterval(function(){
    $("#textbox").append(text1.charAt(text1iterationindex));
    text1iterationindex = text1iterationindex + 1;
    console.log("1 iteration completed");
    if (text1iterationindex == text1TotalCharacterNumber){
        clearInterval(text1Interval);
    };
}, 15);

$("#check-time").on("click", function(){
    $("#textbox").text("");
    $("#check-time").hide();
    $("#sleep-in").show();
    $("out-of-bed").show();
    $("#get-up").hide();
    
    let text2 = "Gregor looks at the clock and realizes hes late for work! he has got to get out of bed and off to work. Theres got to be a way to get up.";

    let text2TotalCharacterNumber = text2.length;

    let text2iterationindex = 0;

    let text2Interval = setInterval(function(){
    $("#textbox").append(text2.charAt(text2iterationindex));
    text2iterationindex = text2iterationindex + 1;
    console.log("1 iteration completed");
    if (text2iterationindex == text2TotalCharacterNumber){
        clearInterval(text2Interval);
    };
}, 15);    
});

$("#out-of-bed").on("click", function(){
    $("#textbox").text("");
    $("#check-time").hide();
    $("#sleep-in").hide();
    $("#out-of-bed").hide();
    $("#get-up").show();

    let text3 = "Gregor tries with all his might, but he has fallen asleep on his back, and roaches are not very good at rolling back on their sides.";

    let text3TotalCharacterNumber = text3.length;

    let text3iterationindex = 0;

    let text3Interval = setInterval(function(){
    $("#textbox").append(text3.charAt(text3iterationindex));
    text3iterationindex = text3iterationindex + 1;
    console.log("1 iteration completed");
    if (text3iterationindex == text3TotalCharacterNumber){
        clearInterval(text3Interval);
    };
}, 15);
});

$("#get-up").on("click", function(){
    $("#textbox").text("");
    $("#check-time").hide();
    $("#sleep-in").hide();
    $("#out-of-bed").hide();
    $("#get-up").hide();
    $(".first-image").hide();
    $(".second-image").show();

    setTimeout(function(){
        $("#achievement").show();
    }, 1800)

    let text4 = "Gregor pushes and turns and squirms and writhes. It's painful, but he is making headway, small white spots appear on his body, it burns and itches, but he finally turns round!";

    let text4TotalCharacterNumber = text4.length;

    let text4iterationindex = 0;

    let text4Interval = setInterval(function(){
    $("#textbox").append(text4.charAt(text4iterationindex));
    text4iterationindex = text4iterationindex + 1;
    console.log("1 iteration completed");
    if (text4iterationindex == text4TotalCharacterNumber){
        clearInterval(text4Interval);
    };
}, 15);

});