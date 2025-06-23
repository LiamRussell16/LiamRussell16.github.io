var shown = false;
      function showhideinfo(){
      if (shown){
      document.getElementById('email').innerHTML = "Show my contact information";
      shown = false;
      }else{
      var myemail = "740-207-9123 | russell5@mail.uc.edu";
      document.getElementById('email').innerHTML=myemail;
      shown = true;
      }
      }
