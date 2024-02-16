function startReading() {
    const text = "Saffron is a spice//that is used for cooking//in many countries//around the world.//It is made from small parts// of a flower called a crocus.//These parts are red,//but food cooked with saffron//is yellow.  . //Many people think//the taste is strong and delicious.//Saffron is used to cook//many kinds of food,//such as rice, meat, and soup.//People in parts of Asia//have used saffron  . //when they cook for a long time.//It has also been popular//for hundreds of years//in parts of southern Europe.//Later, people in other places//started using it, too.//Many people used saffron for cooking,//but some people used it//for other things.  .//It was given to sick people//to help them to feel better,//and people also used it//to dye clothes.  . //Making saffron isn't easy.//Usually, more than 150 crocus flowers//must be collected  . //to make one gram of saffron.//The flowers only grow//for a few months  . //in fall and winter. . //The flowers are weak,//so people have to collect them//with their hands.  .//This takes a long time,//so many people are needed//to collect them.  . //Also, the flowers should be collected//early in the morning//before the sun damages them.//For these reasons,//saffron is expensive. . //It is the most expensive spice//in the world.  . //In the past,  . //it was more expensive//than gold.  . However,//people don't need . .//to use much of it//when they cook . //because of its strong taste.//Because of that,  .  //many people still buy saffron//to use at home.  .//";
    const chunkArray = text.split('//'); // Splitting text into chunks based on.  . '//'

    const displayArea = document.getElementById('displayArea');
    const speedInput = document.getElementById('speed');
    const wordsPerMinute = parseInt(speedInput.value);
    const wordsPerChunk = chunkArray.map(chunk => chunk.split(' ').length);
    let chunkIndex = 0;

    function displayNextChunk() {
        if (chunkIndex < chunkArray.length) {
            displayArea.innerText = chunkArray[chunkIndex];
            // Calculate display time based on the number of words in the chunk
            let displayTime = (60000 / wordsPerMinute) * wordsPerChunk[chunkIndex];
            chunkIndex++;
            setTimeout(displayNextChunk, displayTime);
        }
    }

    displayNextChunk();
}





