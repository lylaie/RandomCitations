  /* CONSTANTES AND VARIABLES */


  /* --- The citations are in French because I'm French, sooooo enjoy ! ---

  The structure is the followgin :

  {
    "number" : use to generate an array to choose a random quote not already use;
    "quote": the fabulous text
    "source": the fabulous author
    "category": simple tag to change the style
  }

  */

  const quotes = [
    {
      "number":"1",
      "quote":"Les aptitudes sont ce que vous pouvez faire. La motivation détermine ce que vous faites. Votre attitude détermine votre degré de réussite.",
      "source" : "Lou Holtz",
      "category": "motivation"
    },
    {
      "number": "2",
      "quote": "La motivation transforme une tâche en un devoir, avec l'union, c'est la victoire.",
      "source": "Didier Court",
      "category": "motivation"
    },
    {
      "number": "3",
      "quote": "Le premier travail d'un manager n'est pas d'apporter la motivation mais de supprimer les obstacles.",
      "source": "Scott Adams",
      "category": "motivation"
    },
    {
      "number": "4",
      "quote": "La beauté féminine est un facteur clé de motivation pour les hommes.",
      "source": "Gérard Mafosse",
      "category": "motivation"
    },
    {
      "number": "5",
      "quote": "Le désir de bien faire est un puissant moteur. Celui de faire du bien est plus puissant encore.",
      "source": "Zig Ziglar",
      "category": "motivation"
    },
    {
      "number": "6",
      "quote": "Un seul être vous manque et tout est dépeuplé.",
      "source": "Lamartine",
      "category": "love"
    },
    {
      "number": "7",
      "quote": "Le sentiment de ne pas être aimé est la plus grande des pauvretés.",
      "source": "Mother Teresa",
      "category": "love"
    },
    {
      "number": "8",
      "quote": "Aimer, ce n'est pas se regarder l'un l'autre, c'est regarder ensemble dans la même direction.",
      "source": "Antoine de Saint Exupéry",
      "category": "love"
    },
    {
      "number": "9",
      "quote": "Nous ne sommes jamais aussi mal protégés contre la souffrance que lorsque nous aimons.",
      "source": "Sigmund Freud",
      "category": "love"
    },
    {
      "number": "10",
      "quote": "Nous ne sommes jamais aussi mal protégés contre la souffrance que lorsque nous aimons.",
      "source": "Coco Channel",
      "category": "love"
    }
  ]

  /* FONCTIONS */

  var number = []
  var backgroundList = ['red', 'yellow', 'blue', 'pink', '#FF7F50'];

  var myVar = setInterval(function(){
    document.body.style.backgroundColor = backgroundRandom();
    printQuote();
  }, 1500);

  //Function who fillup the array number. Use to choose a Random object in the array quote
  function fillNumber(number){
    for (i = 1; i <= quotes.length; i++){
      number.push(i)
    }
    return number
  }

  //Generate a random quote

  function getRandomQuote(){
    var max = Math.floor(quotes.length);

    var index = (Math.floor(Math.random() *( max))); //Personal  note : don't add +1 or you will out range (thinks about segfault error !)
    delete number[index];
    number = number.filter(Boolean);
    return quotes[index]; // The filter(Boolean) is important because the value at the index number is delete but always reserve (dunno why)
  }

  //Change randomly the background color

  function backgroundRandom(){
    var index = (Math.floor(Math.random() * Math.floor(backgroundList.length)));
    var newBackground = backgroundList[index];
    console.log(newBackground);
    return newBackground;
  }


  // Principal function to printQuote

  function printQuote(){
    var a = getRandomQuote();
    var statusHTML = '<blockquote class="quote-box"><p>';
    statusHTML += a["quote"] + '</p></blockquote>';
    statusHTML += "<cite>" + a["source"] + "</cite>";
    console.log('Function called');
    return document.getElementById('quote').innerHTML = statusHTML;
  }
  fillNumber(number);

  printQuote();
