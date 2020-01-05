const jokeEl = document.getElementById('joke'),
      get_joke = document.getElementById('get_joke');

get_joke.addEventListener('click', generateJoke);

generateJoke();

async function generateJoke() {
  //calling the icanhaz API: https://icanhazdadjoke.com/
  const jokeRes = await fetch('https://icanhazdadjoke.com/', {
    //to specify that we need a JSON response
    headers: {
      'Accept': 'application/json'
    }
  });

  const joke = await jokeRes.json();

  console.log(joke);

  jokeEl.innerHTML = joke.joke;

}