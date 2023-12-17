function createtime() {
    var now = new Date(); // 获取当前时间
    var startDate = new Date("12/17/2023 21:00:00"); // 网站开始运行的日期，按需更改
    var elapsed = now - startDate; // 计算流逝的时间

    var seconds = Math.floor(elapsed / 1000);
    var minutes = Math.floor(seconds / 60);
    var hours = Math.floor(minutes / 60);
    var days = Math.floor(hours / 24);

    seconds %= 60; // 剩余秒数
    minutes %= 60; // 剩余分钟数
    hours %= 24; // 剩余小时数

    // 确保时间是两位数字格式
    var secondsStr = seconds < 10 ? "0" + seconds : seconds;
    var minutesStr = minutes < 10 ? "0" + minutes : minutes;
    var hoursStr = hours < 10 ? "0" + hours : hours;

    // 更新网站内容
    var c = `<div style="font-size:13px;font-weight:bold">本站居然运行了 ${days} 天 ${hoursStr} 小时 ${minutesStr} 分 ${secondsStr} 秒</div>`;
    document.getElementById("workboard").innerHTML = c;
}

setInterval(createtime, 1000); // 每秒更新一次
