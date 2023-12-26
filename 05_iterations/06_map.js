const codeingLang = ['ja', 'java', 'python', 'php', 'ruby']
// what if we store it in a variable
const myLoop = codeingLang.forEach((items)=>{
    // console.log(items);
    return items         //for each don't return any value.
})
// console.log(myLoop);  // this gives undefined, as we know that when we store a function in  variable then it compulsry to return the value, but 


// Filter()

const myNum = [1,2,3,4,5,6, 7,8,9]

// const newNums = myNum.filter( (num) => num>4  )  // filter return the store value not foreach loop. 
// const newNums = myNum.filter( (num) => {
    // return num>4}  )                     // if we use scope then it is compulsory to use return keyword.
    
    
    // use of condition in for each
    
    // const newNums = []
    
    // myNum.forEach( (num) =>{
    //     if (num > 5) {
    //         newNums.push(num)
    //     }
    // } )
    
    // console.log(newNums);


// let us suppose we have a array object of books and need to practice differnent filter methods and conditions

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks  = books.filter( (book) => book.genre ==='Science' )
  userBooks = books.filter((book)=>{
    return book.edition >= 2000 && book.genre === "History"
})
//   console.log(userBooks);


  // MAPS


  const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10})

const newNums = myNumers
                .map((num) => num * 10 )   // this execute first
                .map( (num) => num + 1)     //this will refere to above condition       //this is called method chaining
                .filter( (num) => num >= 40)

console.log(newNums);