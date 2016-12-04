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
        
        //Safari doesn´t have fetch support
        if(self.fetch) {
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
        
        if(this.match('(game|game3|challenge|winter game|game)')){
            return [
                "Nice, we are going to play; I have some games to play with backend, Ok?"];
        }
        
        if(this.match('(ok|1|backend|middleware|spring)')){
            this.ping("winter-games-game3-java");
            return [
                "Oki,",
                "Create in your API the following examples:",
                "Implement a Function with function as an input and function as an output",
                "Implement a Function which return Function",
                "Read a CSV file with a Stream passing a behaviour",
                "Currying in an example",
                "Demostrate the usage of pure functions with functional programming",
                "Use a Closure",
                "Use a SAM Interface",
                "Use a Stream parallel"];
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
