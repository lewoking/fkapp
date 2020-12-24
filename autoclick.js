/**
 * @Description: Auto.js fkapp https://github.com/lewoking/fkapp
 * @version: 1.0.0
 * @Author: lewoking
 * @Date: 2020-12-24
 */

h = device.height;//屏幕高  2280
w = device.width;//屏幕宽  1080
x1 = w / 8; // 第一列135
x3 = w / 27 * 17 //第三列680
h1 = h / 114 * 23;  //第一行460
h2 = h / 228 * 65;//  第二行650
h3 = h / 19 * 18;//底部首页2165
msg = 0;//默认为时间触发 今明联动    tasker中可设置短信触发及激活取消时间触发项
/********************************************全局变量***********************************************/

/**
 * @description: 延时函数
 * @param: seconds-延迟秒数
 * @return: null
 */
function delay(seconds) {
    sleep(1000 * seconds);//sleep函数参数单位为毫秒所以乘1000
}

/**
 * @description: 短信触发计划发布
 * @param: n-计划编号 today-日期
 * @return: null
 */
function release(n, today) {
    seconds = seconds + randomNum(0, 10)
    h = device.height;//屏幕高
    w = device.width;//屏幕宽
    x = (w / 3) * 2;
    h1 = (h / 6) * 5;
    h2 = (h / 6);
    for (var i = 0; i < seconds; i++) {
        while (!textContains("欢迎发表你的观点").exists())//如果离开了文章界面则一直等待
        {
            console.error("当前已离开第" + (n + 1) + "文章界面，请重新返回文章页面...");
            delay(2);
        }
        if (i % 5 == 0)//每5秒打印一次学习情况
        {
            console.info("第" + (n + 1) + "篇文章已经学习" + (i + 1) + "秒,剩余" + (seconds - i - 1) + "秒!");
        }
        sleep(1000);
        if (i % 10 == 0)//每10秒滑动一次，如果android版本<7.0请将此滑动代码删除
        {
            toast("这是防息屏toast,请忽视-。-");
            if (i <= seconds / 2) {
                swipe(x, h1, x, h2, 500);//向下滑动
            }
            else {
                swipe(x, h2, x, h1, 500);//向上滑动
            }
        }
    }
}

/**
 * @description: 每日自动完工
 * @param: null
 * @return: null
 */
function dayover() {
    // seconds = seconds + randomNum(0, 10)
    while (!textContains("我的工作").exists());
    click(x1, h1);
    id("nav-left2").waitFor(); //返回按钮
    sleep(3000);
    if (className("android.view.View").text("暂无数据").exists()) {
        console.log("今日无工作")
    } else {
        console.log("执行完工操作")  //补充完工步骤
    };
    if (id("nav-left2").exists()) {
        back();  //返回主页
    }
    // if (i % 10 == 0)//每10秒滑动一次，如果android版本<7.0请将此滑动代码删除
    // {
    //     toast("这是防息屏toast,请忽视-。-");
    //     if (i <= seconds / 2) {
    //         swipe(x, h1, x, h2, 500);//向下滑动
    //     }
    //     else {
    //         swipe(x, h2, x, h1, 500);//向上滑动
    //     }
    // }
}

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
/**
 * @description: 获取当天日期字符串函数
 * @param: null
 * @return: s 日期字符串 "2019-xx-xx"
 */
function getTodayDateString() {
    var date = new Date();
    var y = date.getFullYear();
    var m = date.getMonth();
    var d = date.getDate();
    var s = dateToString(y, m, d);//年-月-日
    return s
}


/**
 * @description: 启动app
 * @param: null
 * @return: null
 */
function start_app() {
    console.setPosition(0, device.height / 2);//部分华为手机console有bug请注释本行
    console.show();//部分华为手机console有bug请注释本行
    console.log("正在启动app...");
    if (!launchApp("安管2.0"))//启动安管2.0app
    {
        console.error("找不到安管2.0App!");
        return;
    }
    while (!textContains("我的工作").exists()) {
        console.log("正在等待加载出主页");
        delay(1);
    }
    delay(1);
}


function main() {
    start_app();//启动app
    today = getTodayDateString();
    console.info(today);
    dayover(); // 完工
    release(); //发布
    console.warn("自动备份已学文章列表到/sdcard/Download!!!");
    console.hide();
}

module.exports = main;