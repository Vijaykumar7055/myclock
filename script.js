// function displayTime(){
//     let time =new Date();
//     console.log(time);
//     document.getElementById('time').innerHTML=time;
// }
// setInterval(displayTime, 1000);


// give the variable of all ids
let hour=document.getElementById('hour');
let mins=document.getElementById('minute');
let secs=document.getElementById('second');
let day=document.getElementById('day');
let DMY=document.getElementById('DMY');
let AMPM=document.getElementById('AMPM');
let AMPM1=document.getElementById('AMPM1');
function Time(){
    let dataObj=new Date();

    let hours=dataObj.getHours();
    let minutes=dataObj.getMinutes();
    let seconds=dataObj.getSeconds();
    AMPM1.textContent=hour <12 ? "AM": "PM";

    let day_name=dataObj.getDay();
    let year=dataObj.getFullYear();
    let month=dataObj.getMonth();
    let date=dataObj.getDate();

    hour.textContent=format(hours);
    mins.textContent=format(minutes);
    secs.textContent=format(seconds);

    day.textContent=returnday(day_name);
    DMY.textContent=format(date) + "/" +format(month+1)+"/"+format(year);
    
}

function returnday(n){
    Weekdays=[
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
    ];
    return Weekdays[n];
}

let format=(n)=>(n<10 ? "0"+n:n);
setInterval(Time, 1000);
