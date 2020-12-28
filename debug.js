// var question = text('确认答案').findOne().parent().child(0);//题干

// var cl = text('确认答案').findOne().bounds();//提交答案坐标
// // var p = text('确认答案').findOne().parent().child(2).text();//题干
// log(question);
// var tjx = cl.centerX();
// var tjy = cl.centerY();
// log(tjx);
// log(tjy);
// click(tjx, tjy);
// toast("hello");

/**
 * @description: 日期转字符串函数
 * @param: y,m,d 日期数字 2019 1 1
 * @return: s 日期字符串 "2019-xx-xx"
 */
function dateToString(y, m, d) {
    var year = y.toString();
    if ((m + 1) < 10) {
        var month = "0" + (m + 1).toString();
    }
    else {
        var month = (m + 1).toString();
    }
    if (d < 10) {
        var day = "0" + d.toString();
    }
    else {
        var day = d.toString();
    }
    var s = year + "-" + month + "-" + day;//年-月-日
    return s;
}
function getTodayDateString() {
    var date = new Date();
    var y = date.getFullYear();
    var m = date.getMonth();
    var d = date.getDate();
    var s = dateToString(y, m, d);//年-月-日
    return s
}
// console.setPosition(0, device.height / 3);//部分华为手机console有bug请注释本行
// console.show();
// s=getTodayDateString();
console.info(getTodayDateString());
// h = device.height;//屏幕高  2280
// w = device.width;//屏幕宽  1080
// x1 = w / 8; // 第一列135
// x3 = w / 27 * 17 //第三列680
// h1 = h / 114 * 23;  //第一行460
// h2 = h / 228 * 65;//  第二行650
// h3 = h / 19 * 18//底部首页2165
// while (!textContains("我的工作").exists());
// click(x1, h1);
// id("nav-left2").waitFor(); //返回按钮
// sleep(2000)
// if (className("android.view.View").text("暂无数据").exists()) {
//     console.log("今日无工作")
// } else {
//     console.info("执行完工操作")  //补充完工步骤
// };
// if (id("nav-left2").exists()) {
//     back();  //返回主页
// }
function delay(seconds) {
    sleep(1000 * seconds + random(100, 2000));//sleep函数参数单位为毫秒所以乘1000
}
h = device.height;//屏幕高  2280
w = device.width;//屏幕宽  1080
x1 = w / 8; // 第一列135
x3 = w / 27 * 17 //第三列680
h1 = h / 114 * 23;  //第一行460
h2 = h / 228 * 65;//  第二行650
h3 = h / 19 * 18;//底部首页2165
y1 = h / 19 * 11; //1320 待办1

x4 = w / 18 * 13;// 780
y2 = h / 57 * 8;// 320
// while (textContains("我的工作").findone);
// click(x3, h3);// 我的工作
// delay(2);
// while (textContains("我的待办").findone);
// click(x1, y1); //计划管理
// delay(2);
// while (textContains("待发布").findone);
// click(x4, y2);// 待发布
// delay(2);
// if (id("gqBtn").exists()) {
//     click(x3, h2); //工作内容
//     delay(2);
//     // swipe(x, h1, x, h2, 500);//向下滑动
x4 = w / 18 * 13;// 780
y2 = h / 57 * 8;// 320
while (textContains("我的工作").findone);
click(x3, h3);// 我的工作
delay(2);
while (textContains("我的待办").findone);
click(x1, y1); //计划管理
delay(2);
while (textContains("待发布").findone);
click(x4, y2);// 待发布
delay(2); 
if  (!text("计划详情").exists()){
    back(); //退出
}else{
delay(0);
swipe(x3, h3, x3, y2, 500);//向下滑动1
delay(0);
swipe(x3, h3, x3, y1, 500);//向下滑动,0.5
delay(0);
lb = text("工作票类别").findOne().parent().bounds();
console.log(lb);
if (textContains("机房").exists()) {
    if (click(lb.centerX(), lb.centerY())) {
        delay(1);
        jk = text("监控工作票").findOne().bounds();
        console.log(jk);
        if (click(jk.centerX(), jk.centerY())) {
            delay(1);
            lx = text("工作票类型").findOne().parent().bounds();
            if (click(lx.centerX(), lx.centerY())) {
                delay(1);
                jkp = text("电力监控工作票").findOne().bounds();
                click(jkp.centerX(), jkp.centerY());
            }
        };
    }
} else {
    if (click(lb.centerX(), lb.centerY())) {
        delay(1);
        bd = text("变电工作票").findOne().bounds();
        console.log(bd);
        if (click(bd.centerX(), bd.centerY())) {
            delay(1);
            lx = text("工作票类型").findOne().parent().bounds();
            if (click(lx.centerX(), lx.centerY())) {
                delay(1);
                bdp = text("变电站（发电厂）第二种工作票").findOne().bounds();
                click(bdp.centerX(), bdp.centerY());
            }
        };
    }
}
delay(0);
swipe(x3, h3, x3, y2, 500);
delay(0);
swipe(x3, h3, x3, y2, 500);
delay(0);
swipe(x3, h3, x3, y2, 500);
delay(0);
sub = id("subBtn").findOne().bounds();
click(sub.centerX(), sub.centerY());//提交按钮 
back(); 返回主页
click(x1, h3);
}
// }


// toast("end")
console.error("hello");
// console.hide();