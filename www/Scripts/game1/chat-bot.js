function chatBot() {
    
    this.input;
    
    this.match = function(regex) {
        return new RegExp(regex).test(this.input);
    }

    this.respondTo = function(input) {
    
        this.input = input.toLowerCase();
        
        if(this.match('(hi|hello|hey|hola|howdy)(\\s|!|\\.|$)'))
            return ["um... hi?"];
        
        if(this.match('(robin)(\\s|!|\\.|$)'))
            return ["This is my name. Do you need some info about something?"];

        if(this.match('what[^ ]* up') || this.match('sup') || this.match('how are you'))
            return ["this github thing is pretty cool, huh?"];
        
        if(this.match('l(ol)+') || this.match('(ha)+(h|$)') || this.match('lmao'))
            return ["what's so funny?"];
        
        if(this.match('^no+(\\s|!|\\.|$)'))
            return ["don't be such a negative nancy :("];
        
        if(this.match('(cya|bye|see ya|ttyl|talk to you later)'))
            return ["alright, see you around", "Good luck with the challenge!"];
        
        if(this.match('(dumb|stupid|is that all)'))
            return ["hey i'm just a proof of concept", "you can make me smarter if you'd like"];
        
        if(this.match('(game|game1|challenge|winter game|game)'))
            return ["Do you like UX? Or...", "Do you like middleware plumbing?"];

        if(this.match('(1|ux|frontend|front-end|client)'))
            return ["What is your favourite channel technology? (Javascript, IOS or Android)"];

        if(this.match('(javascript|js)'))
            return [
            "In the first game, you have to learn to publish a Static WebApp on your favourite Cloud Provider. (AWS, Bluemix, PWS or Google Cloud)",
            "Get extra points if you read some stuff about reactive extensions for your favourite Javascript library/framework (JQuery, React & Angular 2).",
            "You have 2 weeks to get your best in this game"];

        if(this.match('(android|ios|swift|objective c|native)'))
            return [
            "In the first game, you have to learn to publish a Native application on your favourite Cloud Provider. (AWS, Bluemix, PWS or Google Cloud)",
            "Get extra points if you read some stuff about reactive extensions for your favourite front-end environment.",
            "You have 2 weeks to get your best in this game"];
        
        if(this.match('(2|java|middleware|spring)'))
            return [
            "In the first game, you have to learn to publish a REST API on your favourite Cloud Provider. (AWS, Bluemix, PWS or Google Cloud)",
            "Get extra points if you add some feature about Spring Cloud Contract.",
            "You have 2 weeks to get your best in this game"];

        if(this.match('(rules)'))
            return ["Store your game on this repo or in your personal repository on Github.",
                    "Try to not use the same PAAS provider.",
                    "With the game deployed, paste your results on issue #4",
                    "Enjoy with the technology and learn"];

        if(this.match('(extra points)'))
            return ["You get extra points in the following cases:",
                    "Use Spring Boot 2.0",
                    "Use complex Spring bean configuration on your examples",
                    "Use Wiremock & Spring Cloud contract",
                    "Call service in parallel with Completable Future or other techniques",
                    "Apply cache techiques",
                    "Add HTTP/2 without using Servlet Spec.",
                    "Use Spring Reactive"];

        if(this.match('(help)'))
            return ["Create an Issue on Github. My creator will help you."];

        if(this.match('(about)'))
            return ["Created with ❤️  in Milton Keynes, UK"];

        if(this.input == 'noop')
            return;
        
        return ["" + input + " what?"];
    }

}
