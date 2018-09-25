
//exercise1
const ugh = function(a, b, c, d) {
    
    const add = function(a, b) {
      return a + b;
    };
    return add(a, b) / c * d;
  };
  
  //exercise2
  const pumpkin = function(){
    return "jacko'lantern";
  };
  //exercise3
  const tghoul = function(goblins) {
    console.log(goblins);
  };

      //exercise4
  const strings = function(str1, str2, str3){
    if(str2 > str1){
      if(str2 > str3){
        return str2;
        }
      } else if(str3 > str2){
        if(str3 > str1){
          return str3;
        }
      } else if(str1 > str2){
        if(str1 > str3){
          return str1;
        }
      }    
    }   // did I just invent something :/ ?
  


     //exercise5
  const compare = function(number1, number2) {
   if(number1 === number2){
    return 0;

   }else if(number2 > number1) {
    return 1;

   }else if (number2 < number1) {
    return -1;
  };
};

 //exercise6
const multiply = function(f1, d1){
   const result = f1*d1;
   return result;
};
//exercise7
const divide = function(l1, n1){
  const result = l1/n1;
  return result;
};

       //exercise8
       const TriangleArea = function(base, height){
  const step1 = multiply(base, height);
  const step2 = divide(step1,2);
  return step2;
}
const կոսծյա = TriangleArea(26,1.5);
console.log (կոսծյա);   //well, It's my Cat's name, idk y I used it ... it works tho


//exercise9
  const NumLength = function(number){
    return ("" + number).length;
  }
  
  
  console.log(NumLength(78694))



//exercise10

   const Cereal = function(str1, str2, numr){
    
    if(str1.length + str2.length > numr){
    return 1;
      
    }else {
    return -1;
   }
  
  }
  const վալոդիկ = Cereal("hello","imAstring", 19)

  console.log(վալոդիկ)



//exercise11

         
 const runStuff = function(string, base, height){
    if(string === "rectangle"){
      return base*height;
   
    }else if(string === "triangle"){
      return TriangleArea(base, height);
    }
  }
  
  
  console.log(runStuff("rectangle", 10,14))
  console.log(runStuff("triangle", 17, 10))














  