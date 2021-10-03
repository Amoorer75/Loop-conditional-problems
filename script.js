//Problem A
let lunchArray = ['Burger', 'Salad', 'Lasagna', 'Sushi', 'Meatloaf'];

let longestCount = 0;
let longestWord;

for(var i = 0; i < lunchArray.length; i++){

    console.log(lunchArray[i].length)

    if(lunchArray[i].length > longestCount){

	    longestCount = lunchArray[i].length;

        longestWord = lunchArray[i]
    }
  }
console.log(longestWord,longestCount)

//Problem B
function odd (str){
    
    for(var i = 1; i < str.length; i = i + 2){
       
        console.log(str[i])
        
    }
} 
console.log(odd(lunchArray))

//Problem C
function factorial(n){
    let fact = [];
    
    for (i = 0; i <= n; i++){

        if (n % i === 0){
           

            fact.push(i);
            console.log(fact)
            
            
        }

    }


}
console.log(factorial(30)); 
//Problem D
function gas(mpg){

    if (mpg >= 11 && mpg <= 16){
             console.log('Planet still frowns upon this, and so does your wallet');

        }else if (mpg >= 17 && mpg <= 20){

            console.log('it’s palpable');

        }else if (mpg >= 21 && mpg <= 29){

            return console.log('Atmosphere smiles at your decision');

        }else if (mpg >= 30 && mpg <= 35){

            return console.log('Not many gas stops will be taken');

        }else if (mpg > 35 && mpg <120){

            return console.log('The fish of the sea smile at your conservation')

        }else if (mpg === 120){

            return console.log('/if you are using the Tom Ogle fuel system, props') 

        } else if (mpg <= 10){

            console.log('gas guzzler');

        }
    
}
console.log(gas(6))