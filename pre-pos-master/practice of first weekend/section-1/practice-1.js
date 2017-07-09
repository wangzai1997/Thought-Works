'use strict';

function collectSameElements(collectionA, collectionB) {
  var m = 0;
  const a = new Array();
  for (var i = 0, l = collectionA.length; i < l; i++) {
    for (var j = 0, k = collectionB.length; j < k; j++) {
      if (collectionA[i] == collectionB[j]) {
        a[m] = collectionA[i];
        m++;
      }
    }
  }
return a;
}
