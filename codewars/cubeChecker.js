function cubeChecker(volume, side){
   return (side * side * side === volume && volume > 0 && side > 0);
}


//cubeChecker(  8, 3) //false
//cubeChecker(  8, 2) //true

//volume = Length * Width * Height
//
// Но кто-то забыл вести правильный учет, поэтому у нас есть только объем и длина одной стороны!
//
// Вам предстоит выяснить, равны ли стороны у кубоида (= — куб).
//
// Вернитесь true, если у кубоида могут быть равные стороны, вернитесь false в противном случае.
//
// Возврат false также возможен для недопустимых чисел (например, объем или сторона меньше или равны 0).