const timeDiv = document.getElementById("clock");
const todayDiv = document.getElementById("today");


function getTime() {
  let now = new Date();
  let hour = now.getHours(); //0-23시
  let minute = now.getMinutes(); //0-59분
  let second = now.getSeconds(); //0-59초
  let noon = "오전";
  let year = now.getFullYear();
  let month = now.getMonth() + 1;
  let day = now.getDate();
  const dayList = ["일", "월", "화", "수", "목", "금", "토"];
  if (hour > 11) {
    noon = "오후";
    hour = hour - 12;
    if (hour == 0) {
      hour = 12;
    }
  }


  timeDiv.textContent =
    noon +
    " " +
    formatNumber(hour) +
    ":" +
    formatNumber(minute) +
    ":" +
    formatNumber(second);

  
  todayDiv.textContent =
    formatNumber(year) + 
    "년 " +
    formatNumber(month) + 
    "월 " +
    formatNumber(day) + 
    "일 " +
    formatNumber(dayList[now.getDay()]) + 
    "요일"
}


getTime();
setInterval(getTime, 1000);


function formatNumber(num) {
  if (num < 10) {
    return "0" + num;
  }
  return num;
}