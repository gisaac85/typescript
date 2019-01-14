//data types in typescript
class Startup {
    public static main(): any {
        
        let text1:any="Hello World!"; //Any type
        
        let isDone:boolean=true;    //boolean type
        
        let num1:number=6;      //number type
        let num2:number=-10.5;   //number type
        let textLength:number=(<string>text1).length;  //type assertion
        let textMagic:number=(text1 as string).indexOf('!');
        let arr1:Array<number>=[1,2,3];   //Array
        
        let myTuple:[string,number];  //Tuple
        myTuple=["My age = ",33];    

        enum Color{Red,Green,Blue}; //num
        let c:Color=Color.Green;
        let colorName:string=Color[1];

        console.log(text1+" "+isDone+" "+num1+" "+num2+" "+arr1+" "+myTuple[0]+myTuple[1]+" "+c+" "+colorName +" "+textLength+" "+textMagic);
        
        return 0;
    }
}
Startup.main();

// function buildName(firstName: string, lastName: string) {
//      console.log(firstName + " " + lastName);
//return 0;
// }
// let result3 = buildName("Gaorieh", "Isaac"); 



