function movie() {
    const value = document.getElementById('u1').value;
    console.log(value);
  let abc=document.getElementById('inputform')
  abc.classList.add("abcde")
  let abc1=document.getElementById('gggg')
  abc1.classList.add("abcde1")
  let abcd2=document.getElementById('ccc')
  abcd2.classList.add("abcd23")
    fetch(`http://www.omdbapi.com/?s=${value}&apikey=5c471eeb`)
      .then(response => response.json())
      .then(data => {
        const movie=data.Search[0];
    console.log(movie.Title);
        document.getElementById('title').innerHTML=movie.Title
        document.getElementById('year').innerHTML=movie.Year
        document.getElementById('imdb').innerHTML=movie.imdbID
        document.getElementById('type').innerHTML=movie.Type
        const image=`url(${movie.Poster})`;
        document.getElementById('photo').style.backgroundImage=image
        
      })
      .catch(error => {
        console.error('Error fetching data:', error);

      });
      
  }
  
