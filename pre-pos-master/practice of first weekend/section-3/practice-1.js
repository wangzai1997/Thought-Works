'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var array=new Array();
  var p = 0;
  var json_data ;
  var oB=new Array();
  oB=objectB.value;
  for (var i = 0, l = collectionA.length; i < l; i++) {
      var count=collectionA[i].count;
      for (var j = 0, k = oB.length; j < k; j++) {
       if (collectionA[i].key == oB[j]) {
       count=collectionA[i].count-1;
      }
    }
    json_data={'key':collectionA[i].key,'count':count};
    array[p++]=json_data;
  }
  return array;
}
