var score = 0;

function recordAnswer(question, points) {
score += points;
console.log(score);

}

function total() {
    if (score <= 8) {
        document.getElementById("result").innerHTML = "GIRAFFE - Get on my level! Your neck may be long, but your head is anywhere but in the clouds. With an eye for the big picture, you manage to stay grounded and rise above pesky drama, all the while reaching for the next branch on the tree of success. Keep your head held high!";
    } else if ((score > 16) && !(score > 24)) {
        document.getElementById("result").innerHTML ="FOX - You've got moxie, Foxy! Always trust your gut! Your intuition keeps you sharp and your cleverly-wrapped wisdom helps you charm new friends and smooth over disputes.";
    } else if ((score > 24) && !(score > 32)) {
        document.getElementById("result").innerHTML= "BEAVER - Well, I'll be dammed... Teamwork makes the dream work! Not only are you a great motivator, but you understand the importance of trusting your mates and working together to accomplish your goals. Your creativity and craftiness make you stand out from the crowd!";
    } else if (score > 32) {
        document.getElementById("result").innerHTML = "TIGER - Nothing shy of PURRR-fect! Fierce, brave and strong-willed, a fire burns in your belly as you strive for greatness.";
    }
}

