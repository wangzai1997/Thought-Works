'use strict';

function createUpdatedCollection(collectionA, objectB) {
  return h1(h2(collectionA), objectB);
}

function h2(collection) {
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

function h1(collectionA, objectB) {
  var array=new Array();
  var p = 0;
  var json_data ;
  var oB=new Array();
  oB=objectB.value;
  for (var i = 0, l = collectionA.length; i < l; i++) {
      var count=collectionA[i].count;
      for (var j = 0, k = oB.length; j < k; j++) {
       if (collectionA[i].key == oB[j]) {
       count=collectionA[i].count-parseInt(collectionA[i].count/3);
      }
    }
    json_data={'key':collectionA[i].key,'count':count};
    array[p++]=json_data;
  }
  return array;
}
