var myClass = document.getElementsByClassName("timerHidden");
for (var i = 0; i < myClass.length; i++){
    var appearTime = myClass[i].getAttribute("data-appear_time");
    var disappearTime = myClass[i].getAttribute("data-disappear_time");
    var threshould_start = Date.parse(appearTime);
    var threshould_end = Date.parse(disappearTime);
    var current = new Date();
    if (threshould_start < current && threshould_end > current) {
      // HTMLで設定した期間
      myClass[i].classList.add("timerVisible");
    } else {
      // 上の期間外の場合
      myClass[i].classList.remove("timerVisible");
    }
}

const timer = 60000    // ミリ秒で間隔の時間を指定
window.addEventListener('load',function(){
  setInterval('location.reload()',timer);
});