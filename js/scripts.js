$(document).ready(function() {
  $("#politicalSurvey").submit(function(event) {
    var question1 = $("input:radio[name=question1]:checked").val();
    var question2 = $("input:radio[name=question2]:checked").val();
    var question3 = $("input:radio[name=question3]:checked").val();

    if (!question1 || !question2 || !question3) {
      alert("Please fill in all questions.")
    } else {

      if (question1 === "C" && question2 === "C" && question3 === "C") {
        $("#conservative").show();
        $("#liberal").hide();
        $("#moderate").hide();
      } else  if (question1 === "L" && question2 === "L" && question3 === "L") {
        $("#conservative").hide();
        $("#liberal").show();
        $("#moderate").hide();
      } else  if (question1 != question2 || question3) {
        $("#conservative").hide();
        $("#liberal").hide();
        $("#moderate").show();
      }
    }

    event.preventDefault();
  });
});
