// Code your solution in this file!
let hqBlock = 42;
function  distanceFromHqInBlocks(block){
   return Math.abs(hqBlock - block);
}
function distanceFromHqInFeet(distance){
   return distanceFromHqInBlocks(distance) * 264;
     
}
function  distanceTravelledInFeet(start, end){
  return Math.abs((end-start))*264;
}
function  calculatesFarePrice(start, destination){
    let distance = distanceTravelledInFeet(start, destination);
    if(distance < 400){
        return 0;
    }
    else if(distance >= 400 && distance < 2000){
            return (distance- 400)* 0.02;
    } else if(distance > 2000 && distance < 2500){
        return 25;
    } else{
        return "cannot travel that far";
    }
}