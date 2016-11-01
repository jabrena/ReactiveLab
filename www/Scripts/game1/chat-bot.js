function chatBot() {
    
    this.input;
    
    this.match = function(regex) {
        return new RegExp(regex).test(this.input);
    }

    this.respondTo = function(input) {
    
        this.input = input.toLowerCase();
        
        if(this.match('(hi|hello|hey|hola|howdy)(\\s|!|\\.|$)'))
            return ["um... hi?"];
        
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
        
        if(this.match('(game1|challenge|winter game|game)'))
            return ["Do you like UX? Or...", "Do you like middleware plumbing?"];

        if(this.match('(ux|frontend|front-end|client)'))
            return ["Do you like Javascript, IOS or Android?"];

        if(this.match('(javascript|js)'))
            return [
            "In the first game, you have to learn to publish a Static WebApp on your favourite Cloud Provider. (AWS, Bluemix, PWS or Google Cloud)",
            "Later, read some stuff about reactive extensions for your favourite front-end environment."];

        if(this.match('(android|ios|swift|objective c|native)'))
            return [
            "In the first game, you have to learn to publish a Native application on your favourite Cloud Provider. (AWS, Bluemix, PWS or Google Cloud)",
            "Later, read some stuff about reactive extensions for your favourite front-end environment."];
        
        if(this.match('(java|middleware|spring)'))
            return [
            "In the first game, you have to learn to publish a REST API on your favourite Cloud Provider. (AWS, Bluemix, PWS or Google Cloud)",
            "It is possible to get extra points if you add some feature about Spring Cloud Contract."];

        if(this.match('(help)'))
            return ["Create an Issue on Github. My creator will help you."];

        if(this.input == 'noop')
            return;
        
        return ["" + input + " what?"];
    }

}
