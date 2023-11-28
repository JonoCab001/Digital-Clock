function showTime(){
    var dateTime = new Date();
    var h = dateTime.getHours();
    var m = dateTime.getMinutes();
    var s = dateTime.getSeconds();
    var session = document.getElementById('session');

    // Change sessions from Day to Night
    if(h >= 12){
        session.innerHTML = 'PM';
    }
    else{
        session.innerHTML = 'AM';
    }

    // Show time in 12 hr format
    if(h > 12){
        h = h - 12;
    }

    document.getElementById('hours').innerHTML = h;
    document.getElementById('mins').innerHTML = m;
    document.getElementById('secs').innerHTML = s;
}

setInterval(showTime, 10);