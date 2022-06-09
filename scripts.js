// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.addEventListener("load",function(){


    let takeOffButton = document.getElementById("takeoff");
    let status = document.getElementById('flightStatus');
    let background = document.getElementById('shuttleBackground');
    let height = document.getElementById('spaceShuttleHeight')
    
    takeOffButton.addEventListener('click', function(){
    let response = window.confirm ("Confirm that the shuttle is ready for takeoff.");
    if (response){
        
        status.innerText = "Shuttle in flight";
        background.style.background = 'blue';
        height.innerText = '10000';
    };

    });

    let landButton = document.getElementById("landing");
    landButton.addEventListener('click', function() {
        let landAlert = window.confirm ("The shuttle is landing. Landing gear engaged.");
        if (landAlert) {
            status.innerText = "The shuttle has landed.";
            background.style.background = 'green';
            height.innerText = '0';
        }
    });

    let abortMissionButton = document.getElementById("missionAbort");
    abortMissionButton.addEventListener('click', function(){
        let abortMission = window.confirm ("Confirm that you want to abort the mission.");
        if (abortMission) {
            status.innerText = "Mission aborted.";
            background.style.background = 'green';
            height.innerText = '0';
        };
    });

    
    let rocket = document.getElementById("rocket");
    rocket.style.position = relative;
    rocket.style.top = '0px';
    let upButton = document.getElementById("up");
    upButton.addEventListener('click', function(){
       let up = window.confirm ( "Moving up?");
        if (up) {
            rocket.style.position = relative;
            rocket.style.top = parseInt(rocket.style.top) + 10  + 'px';
        }
    });
    
    
    })
    