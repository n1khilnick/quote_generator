const Quote = document.querySelector(".quote"),
 quoteBtn = document.querySelector("button"),
 Author = document.querySelector(".name"),
 speechBtn = document.querySelector('.sound');
 copyBtn = document.querySelector('.copy');
 tweetBtn = document.querySelector('.twitter');
 bgcolor = ["#666B7A","#8854d0","#20bf6b","#4b6584","#eb3b5a","#fc5c65","#fd9644","#2d98da","#4b6584","#cd84f1","#ffcccc","#ff4d4d","#ffb8b8","#ff3838","#fff200","#32ff7e","#7efff5","#4b4b4b","#7d5fff","#67e6dc","#7158e2","#3d3d3d","#40407a","#2c2c54","#227093","#218c74","#ff793f","#ccae62","#4C7FA7","#711B6A","#5A5340","#18560B","#18560B","#68502F","#501926","#6D753C","#1A476C","#7F6479","#2F734","#2F734F","#2A235D"];

  

 const generateQuotes  = async () => {

  try{
   const response = await fetch("https://api.quotable.io/random");
   const data    =  await response.json(); 
   

   console.log(data)
  //  quoteBtn.classList.add("loading");
  //  quoteBtn.innerText = "Loading Quote...";
   Quote.innerText = data.content;
   Author.innerText = `-${data.author}`; 
  //  quoteBtn.classList.remove("loading");
  //  quoteBtn.innerText = "New Quote"; 

  }catch(error){
  console.log(`The Error is ${error}`);
  }
      

  }

  speechBtn.addEventListener('click',() =>{

    // SpeechSynthesisUtterance is a web api that represents a speech request
    let utterance =  new SpeechSynthesisUtterance(`${Quote.innerText}`);
    speechSynthesis.speak(utterance); // speech method of speechSynthesis speaks the  utterance
  });

  copyBtn.addEventListener('click',() => {

    //copying the quote text on copyBtn click 
    // writeText() property writes the specified text string to the system clipboard.
    navigator.clipboard.writeText(Quote.innerText)
    
  })

  tweetBtn.addEventListener('click',() => {
    let tweetUrl = `https://twitter.com/intent/tweet?url=${Quote.innerText}`
    window.open(tweetUrl,"_blank"); // opening the new twitter tab with passing quote in the url
  })


  var i = 0;
  document.querySelector("button").addEventListener('click',() =>{
    i = i < bgcolor.length ? ++i : 0; 
    document.querySelector("body").style.background = bgcolor[i]
    document.querySelector(".quote").style.color = bgcolor[i]
    document.querySelector(".features .sound").style.background = bgcolor[i]
    document.querySelector(".features .copy").style.background = bgcolor[i]
    document.querySelector(".features .twitter").style.background = bgcolor[i]
    document.querySelector("button").style.background = bgcolor[i];
});

 quoteBtn.addEventListener('click',generateQuotes );
//  window.addEventListener('keyup',generateQuotes );
//   generateQuotes();

