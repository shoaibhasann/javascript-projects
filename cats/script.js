/**
 * get your free api key from @https://catapi.com
 */

// acessing dom elements
const btn = document.querySelector(".btn");
const container = document.querySelector(".container");
const url = "https://api.thecatapi.com/v1/images/search?limit=1&order=RANDOM";

// creating container for cat images
const catsContainer = document.createElement("div");
catsContainer.className = "cats";
container.appendChild(catsContainer);

// function for fectching cat images using API
const fetchCatImage = async () => {
  // setting headers
    const headers = new Headers({
        "Content-Type": "application/json",
        "x-api-key": "Your-API-Key"
      });
      
  // setting request options 
      let requestOptions = {
        method: 'GET',
        headers: headers,
        redirect: 'follow'
      };
      
      // making api request using fetch
      const response = await fetch(url, requestOptions);
      const data = await response.json();

      if(data){
        const image = document.createElement("img");
        image.setAttribute("src", data[0].url);
        image.className = "remove_cats";
        catsContainer.appendChild(image);
      }
      
}

btn.addEventListener("click", fetchCatImage);