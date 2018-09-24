//the variables bit
var correctMsg = "right!"
var wrongMsg = "wrong!"
var playerAnswer = ""
var compyAnswer = ""
var winsCounter = 0
var lossesCounter = 0


//code runs as follows:
//function 1, function call--start by clicking start button. When start button is clicked;
//function 2 is triggered, which is to loop to question 1 in the array, print the question and loop through and create a button for each answer, and call function 3, the timer.
// function 3 is triggered, and during that time player must click.
// function 4 IF PLAYER CLICKS timer stops and player click answer is evaluted






//the questions in an array of arrays (current answers are dummies for now and not intended to make sense, curating real ones See working list at 180)
var questionArray = [{ pos: 0,
    question: "Coffee?",
    possAnswers: ["a. coffee", "b. more coffee", "c. espresso", "d. latte with a double shot of espresso",],
    answer: 3
  },
  { pos: 1,
    question: "Tea?",
    possAnswers: ["a. coffee",
      "b. more coffee",
      "c. espresso",
      "d. latte with a double shot of espresso",
    ],
    answer: 0
  },
  { pos: 2,
    question: "Milk?",
    possAnswers: ["a. coffee",
      "b. um, no, duh, coffee",
      "c. seriously?",
      "d. No, I prefer cream in my coffee",
    ],
    answer: 3
  }
]


// Variable to  hold the setInterval when we start the slideshow
var nextQuestion;
var timeRemaining = 7
// function when player choice is made


//The startup bit

// Function for displaying questions and answers:
function makeQuestionSet() {
  $("#question-view").empty();
  $("#buttons-view").empty();
    var i = 0
    questionArray[i];
   questionArray[i].question
    $("#question-view").html("<h1>" + questionArray[i].question + "</h1>");
        console.log (questionArray[i].question);
     for (var j = 0; j < questionArray[i].possAnswers.length; j++) {
      //create a button
      var a = $("<button>");
      // Adding a class of question-btn to our button just like we did with the movie exercise
      a.addClass("question-btn");
      // Adding a data-attribute
      a.attr("data-name", questionArray[i].possAnswers[j]);
      // Providing the initial button text
      a.text(questionArray[i].possAnswers[j]);
      // Providing the answer value
      a.attr("data-answer", questionArray[i].answer)
      // Adding the button to the buttons-view div
      a.attr("data-index", questionArray[i].pos)
      $("#buttons-view").append(a);
    }
  }
//Click event to start the whole thing off.
  $("#start").on("click", function (){
    console.log("start");
    $("#start").hide();
    
    makeQuestionSet();
  })


  //  Variable for interval ID when we execute
  //  the "questionCountdown" function
  var intervalId


    // This function handles events where a question button is clicked
    $(".question-btn").on("click", function () {
      clearInterval(intervalId);
      intervalId = setInterval(countdown, 1000);
          })

  var ranouttatime = false
  //  The countdown function
  function countdown() {
  timeRemaining--
    //  Decrease number by one.
    timeRemaining--;
    console.log(timeRemaining)
    //  Show the number in the #show-number tag.
    $("#show-number").html("<h1>You have" + timeRemaining + "seconds left to answer.</h1>");
  }

    function changeScore() {
      if (button.data-index===button.data-answer) {
        console.log("winner, winner, chicken dinner!");
        winsCounter++
        console.log(winsCounter)
        $("#winsHTML").html(winsCounter)
        $("#scores-section").append("<h2>well done, fellow coffee drinker. You deserve another cup! Care to play again?</h2>");
        $(restartGame())
      } else if ((button.data-index !== button.data-answer) || (ranouttatime)) {
        console.log("LOSER!");
        console.log(lossesCounter + 1)
        lossesCounter++
        $("#lossesHTML").html(lossesCounter);
        $(restartGame())
      }
    //  Once number hits zero...
    if (timeRemaining === 0) {
      consoleLog(intervalID)
      $("#scores-section").append("<h2>You ran out of time. You need to drink more coffee.</h2>");
      console.log("time is up");
      ranouttatime = true
      changeScore()
    }}
       
  
  
        // Adding a click event listener to all elements with a class of "movie-btn"

   

  

    

    



   


















    /* 
    1. Q: __________ discovered coffee in Ethiopia circa 800 A.D.
        A: Shepherds


    Legend has it that 9th century goat herders noticed the effect caffeine had on their goats, who appeared to "dance" after eating coffee berries. A local monk then made a drink with coffee berries and found that it kept him awake at night, thus the original cup of coffee was born.

    2. Q: Coffee is the most traded commodity on earth.
      a. False
      b. True

    According to the Global Exchange, there are approximately 25 million farmers in over 50 countries involved in producing coffee. The number one commodity? Oil.

    3. In Italian espresso means
    a. "coffee"
    b. "expressive"
    c. "when something is forced out."
    d. "animated"

    This refers to the way espresso is made — forcing boiling water through pressed coffee grounds. And, although espresso has more caffeine per volume than coffee, because it's consumed in smaller quantities, it actually has about a third of the amount of caffeine as a regular cup of coffee.

    4. Coffee was the first food to be freeze-dried.

    The process of freeze drying — when fresh foods are placed in a dryer where temperatures drop to negative 40 degrees F — first started during World War II to preserve foods.

    5. There are two types of coffee beans: Arabica and Robusta.

    Seventy percent of coffee beans are Arabica. Although less popular, Robusta is slightly more bitter and has twice as much caffeine.

    6. The majority of coffee is produced in Brazil.

    Brazil produces 40% of the world's coffee, which is twice as much as 2nd and 3rd place holders, Colombia and Vietnam.

    7. Hawaii is the only state in the U.S. that commercially grows coffee.

    Kona coffee is the United States' gift to the coffee world. Because coffee grows best in climates along the equator, Hawaii's weather is optimal for harvesting coffee beans.

    8. Coffee was originally a food.

    Coffee berries were mixed with fat to create an energy-rich snack ball. It was also consumed as a wine when made from the pulp of coffee berries.

    9. Coffee is actually a fruit.

    Coffee beans as we know them are actually the pits of a cherry-like berry that are grown on bushes. Even though coffee is actually a seed, it's called a bean because of its resemblance to actual beans.

    10. The world's most expensive coffee is $600 a pound.

    And it comes from the feces of a Sumatran wild cat. The animal — called a Luwak — is unable to digest coffee beans. In the process of digesting the beans, they are fermented in the stomach. When the beans are excreted, they produce a smooth, chocolaty coffee.

    11. There have been five attempts to ban coffee throughout history.

    Coffee was first banned in Mecca in 1511 because leaders believed it stimulated radical thinking. And, 16th century Italian clergymen tried to ban coffee because they believed it to be "satanic." However, Pope Clement VII loved coffee so much that he lifted the ban and had coffee baptized in 1600. But Ottoman leader Murad IV took it even further when he ascended the throne in 1623 by creating the first punishments for drinking coffee, which included beatings and being thrown into the sea.

    In 1746, the Swedish government made it illegal to even have coffee paraphenalia, including cups and dishes. And finally, in 1777, Frederick the Great of Prussia issued a manifesto declaring beer's superiority over coffee because he believed it interfered with the country's beer consumption.

    Advertisement - Continue Reading Below


    12. You can overdose on coffee.

    However, you would need to drink over 100 cups to consume the lethal dose of caffeine.

    RELATED: 50 American Food Fats You Didn't Know »

    13. New Yorkers drink almost seven times as much coffee as the rest of the U.S.

    However, Finland is the most caffeinated country, where the average adult consumes the equivalent of four or five cups of coffee a day.

    14. Coffee drinkers have a lower risk of Alzheimer's disease.

    Researchers found that older patients with high levels of caffeine in their blood were more likely to avoid Alzheimer's. Studies have also shown that caffeine has positive effects on type 2 diabetes and Parkinson's disease. It has also been shown to protect against skin cancer in women.

    15. Coffee stays warmer when you add cream.

    Coffee with added cream cools about 20% slower than plain black coffee.

    16. But when you add milk, it weakens the effects of caffeine.

    Our bodies absorb coffee much slower when it has added fat milk content, which decreases the stimulants.

    17. The largest cup of coffee ever was brewed in July 2014 in South Korea.

    It was over 3,700 gallons. The largest iced coffee was brewed in Las Vegas in 2010, and was 1,500 gallons — ice not included.

     image
    CHRISTIAN KARGL/GETTY IMAGES
    18. Coffee was brought to New Amsterdam (present day New York City) in the mid-1600s.

    However, it didn't become very popular until after the Boston Tea Party in 1773. The Civil War and other conflicts helped boost the popularity of coffee.

    19. George Washington invented instant coffee.

    Not that Washington. Chemist George Constant Washington experimented with dried coffee before he created Red E Coffee — the first brand name instant coffee.

    RELATED: 10 Surprising Facts About Pumpkins »

    20. Just smelling coffee can wake you up.

    A group of scientists reported that simply inhaling the aroma of coffee can alter the activity of some genes in the brain, reducing the effects of sleep deprivation. And when you do drink that cup of coffee, caffeine reaches your blood fast, like 10 minutes fast.

    21. Dark roast coffees have less caffeine than lighter roasts.

    Even though the flavor is often stronger, roasting actually burns off some of the caffeine.

    22. Decaf does not mean caffeine-free.

    An eight ounce brewed cup of decaf coffee actually has two-to-12 milligrams of caffeine. In comparison, a regular cup of coffee has anywhere from 95 to 200 milligrams. (Twelve ounces of coke only has 23-35 milligrams of caffeine.)

    23. In the United States, 80% of adults consume caffeine every day.

    According to the Food and Drug Administration, the average intake is 200 milligrams, or about two five-ounce cups of coffee.

    24. Americans consume 400 million cups of coffee per day.

    This is the equivalent to 146 billion cups each year, making the U.S. the leading consumer of coffee.

    25. The average worker spends $20 a week on coffee.

    That totals nearly $1,100 annually.

    26. The original definition of coffee means "wine."

    Coffee's original name, qahwah, came from the Yemen term for wine. In Turkey it was called kahveh, until the Dutch referred to it as koffie, where we get the English coffee. */