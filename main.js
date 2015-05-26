$("li").on("mouseenter", function(){
  randomColor = "#"+Math.floor(Math.random()*16777215).toString(16);
  $(this).velocity({
    backgroundColor : randomColor,
    color : "#000",
    translateZ: "20px",
    rotateZ: "90deg"
  });
});

$("li").on("mouseleave", function(){
  $(this).velocity("reverse");
  //$(this).css("z","0");
});


 