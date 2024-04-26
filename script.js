const imgSrc=['https://media.tenor.com/YwcrJzdxus4AAAAj/milk-rofl-milk-laugh.gif',
'https://media.tenor.com/-PsWbH5BFFoAAAAj/milk-and-mocha-cute.gif',
'https://media.tenor.com/ufB11su3LwYAAAAj/laughing-cute.gif',
'https://media.tenor.com/35Moldi07wMAAAAj/happy-chuckle.gif',
'https://media.tenor.com/oFeQLr4R2zQAAAAj/peach-cat-cute.gif'];


const button = document.querySelector("button");
const resultDiv = document.querySelector("#result");

const loader = document.querySelector("#loading");


const apiKey = "3znBYdb17tpO/7pHX741cA==ftYx8aNZMd4Am0Jm";
const options = {
    method: "GET",
    headers: {
      "X-Api-Key": apiKey,
    },
  };
  
  const apiURL = "https://api.api-ninjas.com/v1/dadjokes";

  function displayLoading(){
    loader.classList.add("display");
    setTimeout(()=>{
        loader.classList.remove("display");
    },5000);
  }

  function hideLoading(){
    loader.classList.remove("display");
  }

async function getJoke(){
  const random = Math.floor(Math.random()*imgSrc.length);
  console.log(random);
    displayLoading();
    const response = await fetch(apiURL,options);
    const result = await response.json();
    console.log(result[0].joke); 
    hideLoading();

    const para = document.createElement("p");
    para.classList.add("para");
    para.innerHTML= result[0].joke;
    resultDiv.append(para);

    const img = document.createElement("img");
   
    img.src=imgSrc[random];
    img.classList.add("image");

    resultDiv.append(img);

}





button.addEventListener("click",()=>{
    resultDiv.innerHTML='';
    getJoke();
})

