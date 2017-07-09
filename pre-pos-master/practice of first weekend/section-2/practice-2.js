'use strict';

function countSameElements(collection) {
  var count = 1;
  var array=new Array();
  var p = 0;
  var json_data ;
  for (var i = 0; i < collection.length;  i++) {
    if(i<collection.length-1){
    var key = collection[i];
    if (key != collection[i + 1]) {
      json_data={'key':key,'count':count};
      array[p++]=json_data;
      count=1;
    } else {
      count++;
    }
  }
  else{
   var strs=collection[i].split("-");
     json_data={'key':strs[0],'count':parseInt(strs[1])};
     array[p++]=json_data;
  }
}
  return array;
}
