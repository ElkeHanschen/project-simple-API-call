# Project simple API call

### What is this about?

- for desktop (not responsive), build a simple website with HTML, CSS, JavaScript, that [fetches data from the Dog API](https://dog.ceo/api/breeds/image/random)

### This Repo is based on:

- tutorial within [Frontendmasters' Beginners Path](https://frontendmasters.com/learn/beginner/)
- tutorial video [AJAX](https://frontendmasters.com/courses/web-development-v2/ajax/)
- tutorial course notes [AJAX](https://btholt.github.io/intro-to-web-dev-v2/ajax/)

### Code within tutorial

- I've adapted my code already, as the tutorial code was missing the `<button>` anyhow

```
<!DOCTYPE html>
<html lang="en">

<head>
  <title>Dogs</title>
</head>

<body>
  <h1>Doggos</h1>
  <div class="doggos">
  </div>

  <script src="./doggos.js"></script>
</body>

</html>
```

```
const DOG_URL = "https://dog.ceo/api/breeds/image/random";

const doggos = document.querySelector(".doggos");

function addNewDoggo() {
  const promise = fetch(DOG_URL);
  promise
    .then(function(response) {
      const processingPromise = response.json();
      return processingPromise;
    })
    .then(function(processedResponse) {
      const img = document.createElement("img");
      img.src = processedResponse.message;
      img.alt = "Cute doggo";
      doggos.appendChild(img);
    });
}

document.querySelector(".add-doggo").addEventListener("click", addNewDoggo);
```

### Possible next steps

- use `<select>` to request off of a [list of breeds offered](https://dog.ceo/dog-api/documentation/), when a user selects a dog breed, show a random image of a dog of the [selected breed](https://dog.ceo/dog-api/documentation/breed)

### How to run this?

- clone this repo
- `cd` into project
- open `index.html` in your browser of choice (in my case, built in/for Chrome)
