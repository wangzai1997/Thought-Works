'use strict';

function collectSameElements(collectionA, collectionB) {
  var m = 0;
  const a = new Array();
  for (var i = 0, l = collectionA.length; i < l; i++) {
    for (var j = 0, k = collectionB.value.length; j < k; j++) {
      if (collectionA[i].key == collectionB.value[j]) {
        a[m] = collectionA[i].key;
        m++;
      }
    }
  }
return a;
}
