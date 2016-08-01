var newFriend;

function User(name, pic, answers){
  this.name = name;
  this.picture = pic;
  this.scores = answers;

};



var getInfo = function(){
  var name = $('#name').val().trim();
  var pic = $('#image-link').val().trim();
  var answers = [];

  answers.push($('#q1').val().trim());
  answers.push($('#q2').val().trim());
  answers.push($('#q3').val().trim());
  answers.push($('#q4').val().trim());
  answers.push($('#q5').val().trim());
  answers.push($('#q6').val().trim());
  answers.push($('#q7').val().trim());
  answers.push($('#q8').val().trim());
  answers.push($('#q9').val().trim());
  answers.push($('#q10').val().trim());



   newFriend = new User(name, pic, answers);

   
   var currentUrl = window.location.origin;

   $.post(currentUrl + '/api/friends', newFriend, function(data){

    console.log(data);

   });

   return false;
};


$('#submit-survey').on('click',  getInfo);