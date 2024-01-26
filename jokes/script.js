const displayJoke = document.getElementById("displayJoke");
const btn = document.getElementById("getJoke");
const url = 'https://api.chucknorris.io/jokes/random';

let lastRequest = null;

btn.addEventListener("click", () => {
    if(lastRequest && lastRequest.readyState !== 4){
        // if there is any old request then cancel it
        lastRequest.abort();
    }

    // creating promise for xml http request
    const requestPromise = new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        // it will automatically parse data into json
        xhr.responseType = 'json';

        xhr.onload = () => {
            if(xhr.status == 200){
                resolve(xhr.response);
            } else{
                reject("Error: joke not found");
            }
        }

        // sending request
        xhr.send();
        lastRequest = xhr;
    });


    // handle request promise
    requestPromise.then((response) => {
        displayJoke.textContent = response.value;
    }).catch((err) => {
        displayJoke.textContent = err;
    });

});
