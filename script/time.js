// 변수
function updateTime(){
  let yoil=['일','월','화','수','목','금','토'];
  let w_hour = ['오전', '오후']
  let today = new Date;
  // 년도
  let year_num = today.getFullYear();
  // 월
  let month = today.getMonth() + 1;
  // 일
  let date = today.getDate();
  // 요일
  let yoil_num = today.getDay(); 
  let y = yoil[yoil_num];
  // 시간
  let hour = today.getHours();
  // 분
  let minutes = today.getMinutes();

  let after;

  if(hour <= 12){
    after = w_hour[0];
  }else{
    after = w_hour[1];
    hour = hour-12;
  }

  // 월
  if(month < 10){
    month = '0'+month;
  }
  // 분
  if(hour < 10){
    hour = '0'+hour;
  }
  if(minutes < 10){
    minutes = '0'+minutes;
  }

  document.getElementById('time').innerHTML=`${year_num}년 ${month}.${date}(${y}) ${after} ${hour}:${minutes}`;
}

updateTime();
setInterval(updateTime, 1000);
