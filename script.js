console.log("ASdfasf")
$("#add-button").click(function() {
  $("#add-display").html("what?")
})

$("#picture-button").click(function() {
  $("#picture-display").html("what?")
})

var clicks = 0;
$("#counter-button").click(function() {  
  clicks = clicks + 1
  $("#counter-display").html(clicks)
})