//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value.toLowerCase();
  const url = 'https://api.nasa.gov/planetary/apod?api_key=7ASLXpwaPxOg7mybrVvZ1jQtEdDsBt8mDjN0dzUC'

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

