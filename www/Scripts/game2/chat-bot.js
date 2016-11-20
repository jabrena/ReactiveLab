function chatBot() {
    
    this.input;
    
    this.match = function(regex) {
        return new RegExp(regex).test(this.input);
    }

    this.ping = function(ifttt_event){

        var payload = {
            "value1": "demo",
            "value2": "demo2"
        };

        var data = new FormData();
        data.append( "json", JSON.stringify( payload ) );

        var corsProvider = "https://crossorigin.me/";
        var iftttRecipe = "https://maker.ifttt.com/trigger/" + ifttt_event + "/with/key/dvHJXlCso1laUplLipy7LT";
        fetch(corsProvider + iftttRecipe,
        {
            method: "POST",
            mode: 'cors', 
            headers: new Headers({
                "Content-Type": "application/json"
            }),
            body : data
        })
        .then(function(res){ console.log(res); })
    }

    this.respondTo = function(input) {
    
        this.input = input.toLowerCase();
        
        if(this.match('(hi|hello|hey|hola|howdy)(\\s|!|\\.|$)')){
            return [
                "um... hi?"];
        }
        
        if(this.match('(robin)(\\s|!|\\.|$)')){
            return [
                "This is my name. Do you need some info about something?"];
        }
        
        if(this.match('l(ol)+') || this.match('(ha)+(h|$)') || this.match('lmao')){
            return [
                "what's so funny?"];
        }
        
        if(this.match('^no+(\\s|!|\\.|$)')){
            return [
                "don't be such a negative nancy :("];
        }
        
        if(this.match('(cya|bye|see ya|ttyl|talk to you later)')){
            return [
                "alright, see you around", 
                "Good luck with the challenge!"];
        }
        
        if(this.match('(dumb|stupid|is that all)')){
            return [
                "hey i'm just a proof of concept", 
                "you can make me smarter if you'd like"];
        }
        
        if(this.match('(game|game2|challenge|winter game|game)')){
            return [
                "Nice, we are going to play...",
                "Do you like middleware?"];
        }
        
        if(this.match('(1|backend|middleware|spring)')){
            this.ping("winter-games-game1-java");
            return [
                "Oki,",
                "In the second game, you have to learn the difference between a Future object and the usage of CompletableFuture.",
                "Create in your API:",
                "a new method calling 2 Services in a sequence.",
                "a new method calling 2 Services in parallel using Future objects.",
                "a new method using @Async.",
                "a new method calling 2 Services with Future objects and simulate and exception in one of them.",
                "a new method calling 2 Services in parallel using CompletableFuture objects.",
                "a new method calling 2 Services with CompletableFuture objects and simulate a timeout in one of them.",
                "Get extra points if you use in some tests the library from Spotify about CompletableFuture.",
                "You have 2 weeks to get your best in this game"];
        }

        if(this.match('(results)')){
            return [
                "The athletes who participated on Game 1:",
                "Victor Herraiz:",
                "https://github.com/victorherraiz/cached-greeter",
                "Juan Antonio Breña:",
                "https://winter-games-game1.herokuapp.com/v1/resource/method1",
                "https://github.com/jabrena/winter-games-game1",
                "https://github.com/jabrena/winter-games-game1/tree/release/v0.2.0/src/main/java/com/wintergames/game1",
                "Try to participate in the next game and enjoy with the technology."];
        }

        if(this.match('(rules)')){
            return [
                "Store your game on this repo or in your personal repository on Github.",
                "Try to not use the same PAAS provider.",
                "With the game deployed, paste your results on issue #4",
                "Enjoy with the technology and learn"];
        }

        if(this.match('(extra points)')){
            return ["You get extra points in the following cases:",
                    "Use Spring Boot 2.0",
                    "Use complex Spring bean configuration on your examples",
                    "Use Wiremock & Spring Cloud contract",
                    "Call service in parallel with Completable Future or other techniques",
                    "Apply cache techiques",
                    "Add HTTP/2 without using Servlet Spec.",
                    "Use Spring Reactive"];
        }

        if(this.match('(help)')){
            return [
                "Type the right question",
                "If the problem continues, Create an Issue on Github. ",
                "My creator will help you."];
        }

        if(this.match('(about)'))
            return ["Created with ❤️  in Milton Keynes, UK"];

        if(this.input == 'noop')
            return;
        
        return ["" + input + " what?"];
    }

}
