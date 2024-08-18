var a;
var b;
var c;
var x1;
var x2;
if(a!=0 && b!=0 && c!=0){
    var delta = b*b - 4*a*c;
    if(delta<0){
        console.log("Die Polynom hat keine Nullstelle")
    }
    else if(delta = 0){
        x1 = -b/2*a;
        x2 = -b/2*a;

        console.log("Die Polygon hat die zwei Nullstellen x1 = "+ x1 + ", x2 = "+ x2);
    }
    else{
        x1 = (-b - Math.sqrt(delta))/2*a;
        x2 = (-b + Math.sqrt(delta))/2*a;
    }
}