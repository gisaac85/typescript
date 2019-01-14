//data types in typescript
var Startup = /** @class */ (function () {
    function Startup() {
    }
    Startup.main = function () {
        var text1 = "Hello World!"; //string type
        var isDone = true; //boolean type
        var num1 = 6; //number type
        var num2 = -10.5; //number type
        var textLength = text1.length; //type assertion
        var textMagic = text1.indexOf('!');
        var arr1 = [1, 2, 3]; //Array
        var myTuple; //Tuple
        myTuple = ["My age = ", 33];
        var Color;
        (function (Color) {
            Color[Color["Red"] = 0] = "Red";
            Color[Color["Green"] = 1] = "Green";
            Color[Color["Blue"] = 2] = "Blue";
        })(Color || (Color = {}));
        ; //num
        var c = Color.Green;
        var colorName = Color[1];
        console.log(text1 + " " + isDone + " " + num1 + " " + num2 + " " + arr1 + " " + myTuple[0] + myTuple[1] + " " + c + " " + colorName + " " + textLength + " " + textMagic);
        return 0;
    };
    return Startup;
}());
Startup.main();
// function buildName(firstName: string, lastName: string) {
//      console.log(firstName + " " + lastName);
//return 0;
// }
// let result3 = buildName("Gaorieh", "Isaac"); 
