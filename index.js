const DOG_URL = "https://dog.ceo/api/breeds/image/random";

const doggos = document.querySelector('.dog-wrapper');

function addNewDoggo() {
    const promise = fetch(DOG_URL);
    promise
        .then(function(response) {
            const processingPromise = response.json();
            return processingPromise;
        })
        .then(function(processedResponse) {
            console.log(processedResponse.status);
            const img = document.createElement("img");
            img.classList.add('dog-image');
            img.src = processedResponse.message;
            img.alt = "cute dog";
            doggos.appendChild(img);
        });
}

document.querySelector(".dog-button").addEventListener("click", addNewDoggo);
