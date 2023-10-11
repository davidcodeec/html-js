/* 

Switch

Används för att kontrollera på ett effektivare sätt, än en if-sats, när det kommer till lika med värdet.

switch(value){
    case 1:
        break;
    case 2:
        break;
    default:
        break;        
}




/* Example */

let value = 1;

switch (value) {
  case 1:
    console.log("Off")
    break;
  case 2:
    console.log("On")
    break;
  default:
    console.log("No value found")
}