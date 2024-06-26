function countRedBeads(n) {
   if (n < 2) {
       return 0
   } else {
       return 2 * (n - 1)
   }
}

countRedBeads(5)  //8

//k = 2 * (n - 1)