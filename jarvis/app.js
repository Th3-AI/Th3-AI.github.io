const btn = document.querySelector('.talk');
const content = document.querySelector('.content');
const audio = document.getElementById('audio');

const greetings = [
    'Hello boss',
    'Hello sir',
    'Hi master'
];

const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    // Add more quotes here
];

const jokes = [
    "Why don't scientists trust atoms? Because they make up everything!",
    "I told my wife she was drawing her eyebrows too high. She looked surprised.",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    // Add more jokes here
];

const facts = [
    "The Eiffel Tower can be 15 cm taller during the summer.",
    "Honey never spoils. You can eat 3000-year-old honey!",
    "A flock of flamingos is called a 'flamboyance'.",
    // Add more facts here
];

var music = new Array(
    "audio1.mp3",
    "audio2.mp3",
    "audio3.mp3"
);

const texts = document.querySelector('.text');

const SpeechRecognition = window.speechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

window.addEventListener("load", function () {
    // alert("Activate AI");
    setTimeout(() => {
        document.querySelector(".preloader").style.display = "none";
    }, 1000);
    speak('Activating Jarvis AI');
    speak('going online');
    wishMe();
});

const date = new Date().toLocaleString(undefined, { month: "short", day: "numeric"});
document.getElementById("CurDate").innerHTML = date;

const time = new Date().toLocaleString(undefined, {hour: "numeric", minute: "numeric"})
document.getElementById("CurTime").innerHTML = time;


recognition.onresult = (event) => {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    speakThis(transcript.toLowerCase());
}

btn.addEventListener('click', () => {
    recognition.start();
});


function speakThis(message) {
    const speech = new SpeechSynthesisUtterance();

    speech.text = 'I dont know what you said';

    if (message.includes('hi') || message.includes('hello') || message.includes('hii') || message.includes('hey')) {
        const finalText = greetings[Math.floor(Math.random() * greetings.length)];
        speech.text = finalText;
    }

    else if (message.includes('how are you') || message.includes('whats up')) {
        const finalText = 'I am fine boss tell me how can i help you';
        speech.text = finalText;
    }

    else if (message.includes('reality')) {
        const finalText = 'Wake up to reality. Nothing ever goes as planned in this world. The longer you live,the more you realize that only pain, suffering and futility in this reality. In this world, wherever there is light, there are always shadows. As long as there is a concept of victory, the vanquished will also exist. The selfish desire for peace give rise to war. And hatred is born in order to protect love. These are all nexuses, causal relationships that cannot be separated';
        speech.text = finalText;
    }

    else if (message.includes('name')) {
        const finalText = 'My name is Jarvis AI';
        speech.text = finalText;
    }

    else if (message.includes('play music')) {
        const finalText = 'Playing music';
        speech.text = finalText;
        audio.src = music[Math.floor(Math.random() * music.length)];
        audio.play();
    }

    else if (message.includes('pause music')) {
        audio.pause();
        const finalText = 'Music paused';
        speech.text = finalText;
    }

    else if (message.includes('open google')) {
        window.open(`http://google.com`, "_blank");
        const finalText = 'opening google';
        speech.text = finalText;
    }

    else if (message.includes('open instagram')) {
        window.open(`http://instagram.com`, "_blank");
        const finalText = 'opening instagram';
        speech.text = finalText;
    }

    else if (message.includes('open facebook')) {
        window.open(`http://instagram.com`, "_blank");
        const finalText = 'opening facebook';
        speech.text = finalText;
    }

    else if (message.includes('open youtube')) {
        window.open(`http://youtube.com`, "_blank");
        const finalText = 'opening youtube';
        speech.text = finalText;
    }

    else if (message.includes('open maps') || message.includes('calculate')) {
        window.open('http://maps.google.com', "_blank");
        const finalText = "opening maps";
        speech.text = finalText;
    }

    else if (message.includes('what is') || message.includes('who is') || message.includes('what are') || message.includes('why')) {
        window.open(`http://google.com/search?q=${message.replace("search", "")}`, "_blank");
        const finalText = "This is what i found on google related to " + message;
        speech.text = finalText;
    }

    else if (message.includes('wikipedia')) {
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "")}`, "_blank");
        const finalText = "showing result for " + message.replace("wikipedia", "") + " on wikipedia";
        speech.text = finalText;
    }

    else if (message.includes('youtube')) {
        window.open(`https://www.youtube.com/results?search_query=${message.replace("youtube", "")}`, "_blank");
        const finalText = "showing result for " + message.replace("youtube", "") + " on youtube";
        speech.text = finalText;
    }

    else if (message.includes('time')) {
        const time = new Date().toLocaleString(undefined, {hour: "numeric", minute: "numeric"})
        const finalText = time;
        speech.text = finalText;
    }

    else if (message.includes('date')) {
        const date = new Date().toLocaleString(undefined,  { month: "short", day: "numeric"})
        const finalText = date;
        speech.text = finalText;
    }

    else if (message.includes('open calculator') || message.includes('calculate')) {
        window.open('Calculator:///');
        const finalText = "opening calculator";
        speech.text = finalText;
    }

    else if (message.includes('flip a coin')) {
        const result = Math.random() < 0.5 ? 'heads' : 'tails';
        const finalText = `I flipped a coin and it landed on ${result}.`;
        speech.text = finalText;
    }

    else if (message.includes('roll a dice')) {
        const result = Math.floor(Math.random() * 6) + 1;
        const finalText = `I rolled a dice and the result is ${result}.`;
        speech.text = finalText;
    }

    else if (message.includes('random number')) {
        const [, min, max] = message.match(/random number (\d+) (\d+)/) || [];
        if (min && max) {
            const result = Math.floor(Math.random() * (parseInt(max) - parseInt(min) + 1)) + parseInt(min);
            const finalText = `Here's a random number between ${min} and ${max}: ${result}`;
            speech.text = finalText;
        } else {
            const finalText = 'Please provide a minimum and maximum value for the random number range.';
            speech.text = finalText;
        }
    }

    else if (message.includes('tell me a joke')) {
        const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
        speech.text = randomJoke;
    }

    else if (message.includes('tell me a fact')) {
        const randomFact = facts[Math.floor(Math.random() * facts.length)];
        speech.text = randomFact;
    }

    else if (message.includes('tell me a quote')) {
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        speech.text = randomQuote;
    }

    else {
        window.open(`http://google.com/search?q=${message.replace("search", "")}`, "_blank");
        const finalText = "I found some information for " + message + "on Google";
        speech.text = finalText;
    }

    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);
}

function speak(sentence) {
    const utterance = new SpeechSynthesisUtterance(sentence)

    utterance.rate = 1
    utterance.pitch = 1

    window.speechSynthesis.speak(utterance)
}

function wishMe() {
    var day = new Date();
    var hr = day.getHours();
    if (hr >= 0 && hr < 12) {
        speak('Good Morning Sir!');
    } 
    else if (hr == 12) {
        speak('Good Noon Sir!');
    } 
    else if (hr >= 12 && hr <= 17) {
        speak('Good Afternoon Sir!');
    } 
    else {
        speak('Good Evening Sir!');
    }
}