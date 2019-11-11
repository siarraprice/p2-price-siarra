// Jokes Section ++ API USAGE REQUIREMENT

var jokesSection = document.getElementById("jokesHolder");

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var apiResult = JSON.parse(this.responseText);

        //Code Dealing With The API Data Goes Here

        function showJoke() {
          var jokeParagraph = document.createElement('h6');
          jokesSection.appendChild(jokeParagraph);
          var jokeText = document.createTextNode(apiResult.contents.jokes[0].joke.text);
          jokeParagraph.appendChild(jokeText);
        };
        showJoke();

    }
};
xmlhttp.open('GET', 'https://api.jokes.one/jod?category=animal', true);
xmlhttp.send();
