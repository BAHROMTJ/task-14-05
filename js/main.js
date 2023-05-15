// function arrayValuesTypes(arr) {
// 	return arr.map(x=> typeof(x))
// }




// function repeatString(txt, n) {
// 	return typeof(n)=="number"&&typeof(txt)=="string"?txt.repeat(n):"Not A String !!"
// }






//     let btn=document.querySelector('.btn')
// function reversePsychology(s) {
//     return	s=="" ?"Do not do anything.":`Do not ${s}.`
//     }

//     btn.onclick=()=>
//     {
//     let input=document.querySelector('.input')
//     let display=document.querySelector('.display')
//     display.innerHTML=reversePsychology(input.value)
//     }







    // let btn=document.querySelector('.btn')
    // function nthEven(n) {
    //     let b=n*2
    //     return b%2==0?b-2:n
    // }

    // btn.onclick=()=>
    // {
    // let input=document.querySelector('.input')
    // let display=document.querySelector('.display')
    // display.innerHTML=nthEven(input.value)
    // }


    





//  let btn=document.querySelector('.btn')
//     function sortWord(word) {
//         return word.split("").sort().join("")
//         }

//         btn.onclick=()=>
//     {
//     let input=document.querySelector('.input')
//     let display=document.querySelector('.display')
//     display.innerHTML=sortWord(input.value)
//     }






// let btn=document.querySelector('.btn')
// function amazingEdabit(str) {
// 	return str.includes("edabit")?str:str.replace('amazing.','not amazing.')
// }

// btn.onclick=()=>
//     {
//     let input=document.querySelector('.input')
//     let display=document.querySelector('.display')
//     display.innerHTML=amazingEdabit(input.value)
//     }





// let btn=document.querySelector('.btn')
// function colorInvert(rgb) {
//     let m=rgb.split(',')
// 	return m.map(x=>255-x)
// }

// btn.onclick=()=>
//     {
//     let input=document.querySelector('.input')
//     let display=document.querySelector('.display')
//     display.innerHTML=colorInvert(input.value)
//     }






// let btn=document.querySelector('.btn')
// function length(s) {
//     return	s.lastIndexOf("")
//     }
    
// btn.onclick=()=>
//     {
//     let input=document.querySelector('.input')
//     let display=document.querySelector('.display')
//     display.innerHTML=length(input.value)
//     }






// function NOT(n) {
//     return Number(!n)
//     }
    
//     function AND(a, b) {
//             return a&&b
//     }
    
//     function OR(a, b) {
//         return a||b
//     }






// function totalAmountAdjectives(obj) {
// 	return Object.values(obj).length
// }








// let btn=document.querySelector('.btn')
// function relationToLuke(name) {
// 	let obj={
// 	'Darth Vader':'father.',
// 		Leia:"sister.",
// 		Han:"brother in law.",
// 		R2D2:"droid.",
		
		
// 	}
// 	return `Luke, I am your ${[obj[name]]}`
// }

// btn.onclick=()=>
//     {
//     let input=document.querySelector('.input')
//     let display=document.querySelector('.display')
//     display.innerHTML=relationToLuke(input.value)
//     }










// let btn=document.querySelector('.btn')
// function stutter(word) {
//     let b=word.substring(0,2)+"... " 
//     return b.repeat(2)+word+"?"
//     }

//     btn.onclick=()=>
//     {
//     let input=document.querySelector('.input')
//     let display=document.querySelector('.display')
//     display.innerHTML=stutter(input.value)
//     }







// let btn=document.querySelector('.btn')
// function firstLast(name) {
// 	return name.charAt(0)+ name.charAt(name.length-1)
// }

// btn.onclick=()=>
//     {
//     let input=document.querySelector('.input')
//     let display=document.querySelector('.display')
//     display.innerHTML=firstLast(input.value)
//     }










// let btn=document.querySelector('.btn')
// function validStrNumber(n) {
// 	return !isNaN(n)
// }
// btn.onclick=()=>
//     {
//     let input=document.querySelector('.input')
//     let display=document.querySelector('.display')
//     display.innerHTML=validStrNumber(input.value)
//     }











//     let btn=document.querySelector('.btn')
// function checkSquareAndCube(arr) {
//     let b=arr.split(".")
// 	return Math.sqrt(b[0])==Math.cbrt(b[1])
// }
// btn.onclick=()=>
//     {
//     let input=document.querySelector('.input')
//     let display=document.querySelector('.display')
//     display.innerHTML=checkSquareAndCube(input.value)
//     }








// let btn=document.querySelector('.btn')
// function halfQuarterEighth(n) {
// 	let b=[]
// 	b.push(n/2,n/4,n/8)
// 	return b
// }
// btn.onclick=()=>
//     {
//     let input=document.querySelector('.input')
//     let display=document.querySelector('.display')
//     display.innerHTML=halfQuarterEighth(input.value)
//     }













// let btn=document.querySelector('.btn')

// function countSyllables(str) {
// 	return str.length/2
// }
// btn.onclick=()=>
//     {
//     let input=document.querySelector('.input')
//     let display=document.querySelector('.display')
//     display.innerHTML=countSyllables(input.value)
//     }











// let btn=document.querySelector('.btn')

// function moodToday(mood) {
//     return	mood==NaN?"Today, I am feeling neutral":"Today, I am feeling "+mood
//     }

// btn.onclick=()=>
//     {
//     let input=document.querySelector('.input')
//     let display=document.querySelector('.display')
//     display.innerHTML=moodToday(input.value)
//     }









// const str = '[head, ...tail] = [1, 2, 3, 4]'




// const arr = ["eyes", "nose", "lips", "ears"]
// let [eyes, nose, lips, ears] = arr







// let btn=document.querySelector('.btn')

// function greaterThanOne(frac) {
//     let b= frac.split("/")
//     return b[0]/b[1]>1
//     }

// btn.onclick=()=>
//     {
//     let input=document.querySelector('.input')
//     let display=document.querySelector('.display')
//     display.innerHTML=greaterThanOne(input.value)
//     }




