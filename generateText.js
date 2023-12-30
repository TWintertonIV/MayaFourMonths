let counter = 0;
let complements = [
    "I love the way you bring peace to those around you",
    "I love the way you get scared and still face fear",
    "I love the way you talk shit as a love language",
    "I love the way you make the embarassing moments things to take pride in",
    "I love the way you motivate and drive me",
    "I love the way you go with the flow, and encourage me to be flexable",
    "I love the way you are gentle with your words",
    "I love the way you flap your hands when you are excited",
    "I love the way you jump up and down when you are filled with energy",
    "I love the way you smirk when you know you are being mischievous",
    "I love the way you giggle when I make a stupid joke",
    "I love the way you go silent in surprsie when I do something special",
    "I love the way you get quiet and use fewer words when you are sleepy",
    "I love the way that you aren't afraid to talk about the scary stuff",
    "I love the way you say \"thats hard\" when I come to you in pain",
    "I love the way you stroke my hair",
    "I love the way you send me your favorite songs over text",
    "I love the way you share your day in detail when I ask about it",
    "I love the way that hours fly by when I talk to you",
    "I love the way you leave small reminders of yourself in my room",
    "I love the way you trust me",
    "I love the way you comfort me, and make me confident in who I am",
    "I love the way you share reminders of yourself throughout my day",
    "I love the way you make me smile when I feel my watch buzz",
    "I love the way we can adventure together",
    "I love the way you make me feel when I think about the future",
    "I love the way that you aren't afraid to come to me with your secrets",
    "I love the way that you actually listen to my concerns and fears",
    "I love the way you change little things to keep me comfortable",
    "I love the way you can compromise with me to make this work",
    "I love the way you show you really care",
    "I love the way that you make me know that I am a priority in your life",
    "I love the way we can share our things",
    "I love the way that I feel falling asleep next to you",
    "I love the way I feel when I wake up with you in my arms",
    "I love the way that you like our questions of the week",
    "I love the way that you take care of the people around you",
    "I love the way that you make things feel easy",
    "I love the way I can imagine a future together",
    "I love the way I feel when I think of you as family",
    "I love the way you bring optimisim to life",
    "I love the way that you are passionate",
    "I love the way that you dream",
    "I love the way that you care about making an impact on the world",
    "I love the way that you are patient with me",
    "I love the way you can accept that I have flaws",
    "I love all the ways you are a badass",
    "I love the way you are brave",
    "I love the way you are present with the people you spend time with",
    "I love the way that you can commit and work towards a goal",
    "I love the way you smile",
    "I love the way you cook with love",
    "I love the way you use words",
    "I love the way that you think about balance in our relationship",
    "I love the way you tell me that it will all be ok",
    "I love the way that I can sometimes read your mind",
    "I love the way that we are in tune with each other",
    "I love the way that I feel that we can work through the hard times",
    "I love the way that you give hugs",
    "I love the way that I feel when I kiss you",
    "I love the way that we do date nights every week",
    "I love the way that we FaceTime over long distance",
    "I love the way that we do movie nights",
    "I love the way that we do \'Movie Nights\' ;)",
    "I love the way you use text emojis",
    "I love the way you dress",
    "I love the way you let me know how I've impacted your life",
    "I love the way you are. Just in general.",
    "I love the way I can be proud of who you are"
];


//69 complements

function addElement() {
    let newtext = document.createElement("p");
    let Div = document.getElementById("messages");
    let text = '';
    let number = Math.floor((Math.random() * complements.length) + 1);
    console.log(number);

    text = complements.pop(number);
    console.log(complements);

    if(complements.length == 0){
        text = "I love you, sunshine."
    }


    newtext.style.color = 'white';
    newtext.textContent = text;
    newtext.style.animation = "fadeIn 3s"

    Div.appendChild(newtext);


    counter++;

    if(counter == 18){
        counter = 0;
        Div.innerHTML = "";
        addElement();
    }

  }
  