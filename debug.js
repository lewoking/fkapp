var question = text('确认答案').findOne().parent().child(0);//题干

var cl = text('确认答案').findOne().bounds();//提交答案坐标
// var p = text('确认答案').findOne().parent().child(2).text();//题干
log(question);
var tjx = cl.centerX();
var tjy = cl.centerY();
log(tjx);
log(tjy);
click(tjx, tjy);
toast("hello");
