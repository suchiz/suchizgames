var count = 0;
var audio = document.getElementById('audio')
var audioPlayPause = document.getElementById('audioPlayPause')
var audioStop = document.getElementById('audioStop')
var slider = document.getElementById('slider')


audioPlayPause.addEventListener('click', function(){
    if(count == 0) {
        count = 1;
        audio.play();
        audioPlayPause.innerHTML = "<i class = 'fa fa-pause'></i>";
        var audioList = document.querySelectorAll('.aTrigger');
        audioList.forEach(function(audioSingle, index){
            var dataActive = audioSingle.getAttribute('data-active');
            if (dataActive == "pause"){
                audioSingle.setAttribute('data-active', 'active');
            }
        })
    } else {
        count = 0;
        audio.pause();
        audioPlayPause.innerHTML = "<i class = 'fa fa-play'></i>";
        var audioList = document.querySelectorAll('.aTrigger');
        audioList.forEach(function(audioSingle, index){
            var dataActive = audioSingle.getAttribute('data-active');
            if (dataActive == "active"){
                audioSingle.setAttribute('data-active', 'pause');
            }
        })
    }
})
audioStop.addEventListener('click', function(){
    count = 0;
    audio.pause();
    slider.value = 0;
    audio.currentTime = 0;
    audioPlayPause.innerHTML = "<i class = 'fa fa-play'></i>";
    audioPlayPause.className = "";
    audioStop.className = "";
    document.getElementById('audioTitle').innerHTML = "&nbsp"
    duration.innerHTML = "00:00";
    durationUpdate.innerHTML = "00:00";
    var audioList = document.querySelectorAll('.aTrigger');
    audioList.forEach(function(audioSingle, index){
        var dataActive = audioSingle.getAttribute('data-active');
        if (dataActive == "active" || dataActive == "pause"){
            audioSingle.setAttribute('data-active', '');
        }
    })
})

var audioList = document.querySelectorAll('.aTrigger');
audioList.forEach(function(audioSingle, index){
    var dataAudioName = audioSingle.getAttribute("data-audio");
    var audioName = dataAudioName.substring(dataAudioName.lastIndexOf("/") + 1, dataAudioName.length-4);
    audioList[index].nextElementSibling.innerHTML = audioName;
    audioSingle.addEventListener('click', function(index){
        thisisAudioSingle = this;
        audioPlayPause.className = "active";
        audioStop.className = "active";
        var dataAudio = this.getAttribute('data-audio');
        var dataActive = this.getAttribute('data-active');
        var audioSource = document.getElementById("audioSource");
        audioSource.src = dataAudio;
        document.getElementById("audioTitle").innerHTML = audioName;

        for(var i = 0; i < audioList.length; i++){
            audioList[i].innerHTML = "<i class = 'fa fa-play'></i>";
            audioList[i].setAttribute("data-active", "");
        }
        if(dataActive == ""){
            count = 1;
            audio.load()
            audio.play();
            this.setAttribute("data-active", "active");
            audioPlayPause.innerHTML = "<i class = 'fa fa-pause'></i>";
        } else if (dataActive == "pause"){
            count = 1;
            audio.play();
            this.setAttribute("data-active", "active");
            audioPlayPause.innerHTML = "<i class = 'fa fa-pause'></i>";
        }else {
            count = 0;
            audio.pause();
            this.setAttribute("data-active", "pause");
            audioPlayPause.innerHTML = "<i class = 'fa fa-play'></i>";
        }

        var duration = document.getElementById("duration");
        setTimeout(function(){
            if (audio != null){
                var s1 = parseInt(audio.duration % 60);
                var m1 = parseInt((audio.duration / 60) %60);
                if (s1 < 10)
                    duration.innerHTML = "0" +m1 +":" +"0"+s1;
                else
                    duration.innerHTML = "0" +m1 +":" +s1;
                
                audio.addEventListener("timeupdate", function(){
                    var durationUpdate = document.getElementById("durationUpdate");
                    var s = parseInt(audio.currentTime % 60);
                    var m = parseInt((audio.currentTime / 60) %60);
                    if (s < 10)
                        durationUpdate.innerHTML = "0" +m +":" +"0"+s;
                    else
                        durationUpdate.innerHTML = "0" +m +":" +s;
                    
                    if(duration.textContent == durationUpdate.textContent){
                        audioPlayPause.innerHTML = "<i class = 'fa fa-play'></i>";
                        thisisAudioSingle.setAttribute("data-active", "pause");
                        count = 0;
                    }    
    
                    slider.value = (audio.currentTime/audio.duration) * 100; 
                    slider.oninput = function(){
                        audio.currentTime = (this.value/100) * audio.duration;
                    }
                    
                }, false)
            }
          
        }, 200)
    })
})

document.getElementById("contact-form").addEventListener("submit", submitForm);

function submitForm() {

    let name = document.getElementById("form-name").value;
    let email = document.getElementById("form-email").value;
    let message = document.getElementById("form-message").value;


    // document.querySelector("contact-form").reset();
    sendEmail(name, email, message);
    document.getElementById("contact-form").reset();
  }

  function sendEmail(name, email, message){
      Email.send({
          Host: "smtp.gmail.com",
          Username: 'suchizgames@gmail.com',
          Password: "gjwhxavkhmjzmcnu",/*"gjwhxavkhmjzmcnu"*/
          To: "suchizgames@gmail.com",
          From: "suchizgames@gmail.com",
          Subject: `${name} sent you a message`,
          Body: `Name: ${name} <br/> Email: ${email} <br/> Message: ${message}`,
      }).then((message) => alert("Mail is sent successfully :). Thank you !"));

  }