'use strict';

function collectSameElements(collectionA, collectionB) {
  var m = 0;
  const a = new Array();
  for (var i = 0, l = collectionA.length; i < l; i++) {
    for (var j = 0, k = collectionB[0].length; j < k; j++) {
      if (collectionA[i] == collectionB[0][j]) {
        a[m] = collectionA[i];
        m++;
      }
    }
  }
return a;
}
