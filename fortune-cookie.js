let nouns =['Love','Fear','Incompetence', 'Dishonesty', 'Joy', 'Happiness', 'Fullfilment', 'Anger', 'Death', 'New beginnings','Money', 'Goals', 'Work', 'Companionship', 'A project', 'Family', 'Unexpected Guest']
let pointers=[' is around the corner. ',' is expected. ', ' is a clucth. ' ,' will not be in your life for now. ', ' will present itself. ', ' will reach out. ',' will drop into you life. ' , ' will meddle with your goals. ' , ' will guide you. ', ' will derail your journey. ' ];
let cautionary = ['Caution! ' , 'Embrace it. ', 'Expect turmoil. ', 'Beware! ', 'Deal with it! ', 'Push through. ', 'Hold on! ', 'Find balance. ', 'Consult it with friends. ']


const fortunecookie = (array1 , array2, array3) =>{
    let noun = array1[Math.floor(Math.random() * array1.length)]
    let pointer = array2[Math.floor(Math.random() * array2.length)]
    let cautionary = array3[Math.floor(Math.random() * array3.length)]
    let fortune = ''
    fortune += noun + pointer + cautionary
    fortune += `Your lucky numbers are ${Math.floor(Math.random()*100)}, ${Math.floor(Math.random()*100)} and ${Math.floor(Math.random()*100)}.`
    return fortune
    
}

console.log(fortunecookie(nouns,pointers,cautionary))