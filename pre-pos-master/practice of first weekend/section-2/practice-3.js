'use strict';

function countSameElements(collection) {
  var count = 1;
  var array = new Array();
  var p = 0;
  var key2
  for (var i = 0; i < collection.length; i++) {
    var key = collection[i];
    //判断是否是最后一个
    if (i != collection.length - 1) {
      key2 = collection[i + 1];
    } else {
      key2 = '';
    }
    //取出字符中的字母和数字
    var num = key.replace(/[^0-9]/ig, "");
    var k1 = key.replace(/[^a-z]+/ig, "");
    //
    if (k1 != key2.replace(/[^a-z]+/ig, "")) {
      //判断是否为某一字符的最后一个
      if (key.replace(/[^0-9]/ig, "") != "") {
        count = count + parseInt(key.replace(/[^0-9]/ig, "")) - 1;
      }
      array[p++] = { 'name': k1, 'summary': count };
      count = 1;
    } else {
      if (num == "") {
        count++;
      } else if (num != "") {
        count = count + parseInt(num);
      }
    }
  }
return array;
}
