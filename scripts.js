//Google arama motoru:
        
        document.addEventListener('keydown', function(keyevent) {
  if (keyevent.key === 'Enter') {
    var text = document.getElementById("input").value;
        if(text == ""){alert("bir değer girmelisin")}
        else{var text = document.getElementById("input").value;
        window.open("https://www.google.com/search?q="+text+"&oq="+text+"&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRg90gEHNzA0ajBqN6gCALACAA&sourceid=chrome&ie=UTF-8","")}
        
  }
});
    
        function arat(){
            var text = document.getElementById("input").value;
            if(text == ""){alert("bir değer girmelisin")}
        else{var text = document.getElementById("input").value;
        window.open("https://www.google.com/search?q="+text+"&oq="+text+"&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRg90gEHNzA0ajBqN6gCALACAA&sourceid=chrome&ie=UTF-8","")}
        }
    
