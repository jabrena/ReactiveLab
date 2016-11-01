$(function() {

	// chat aliases
	var you = 'You';
	var robot = 'Robin';
	
	// slow reply by 400 to 800 ms
	var delayStart = 400;
	var delayEnd = 800;
	
	// initialize
	var bot = new chatBot();
	var chat = $('.chat');
	var waiting = 0;
	$('.busy').text(robot + ' is typing...');
	
	// submit user input and get chat-bot's reply
	var submitChat = function() {
	
		var input = $('.input input').val();
		if(input == '') return;
		
		$('.input input').val('');
		updateChat(you, input);
		
		var reply = bot.respondTo(input);
		if(reply == null) return;
		
		speak(reply);
		ping();

		var latency = Math.floor((Math.random() * (delayEnd - delayStart)) + delayStart);
		$('.busy').css('display', 'block');
		waiting++;
		setTimeout( function() {
			if(typeof reply === 'string') {
				updateChat(robot, reply);
			} else {
				for(var r in reply) {
					updateChat(robot, reply[r]);
				}
			}
			if(--waiting == 0) $('.busy').css('display', 'none');
		}, latency);
	}

	var speak = function(texts){
		if(window.speechSynthesis){ 
	        for(var i=0; i < texts.length; i++){
	            var utterance = new SpeechSynthesisUtterance(texts[i]);
	            utterance.lang = 'en-US';
	            window.speechSynthesis.speak(utterance);
	        }
		}
    }

    var ping = function(){

    	var payload = {
            "value1": "demo",
            "value2": "demo2"
        };

		var data = new FormData();
		data.append( "json", JSON.stringify( payload ) );

        fetch("https://crossorigin.me/https://maker.ifttt.com/trigger/winter-games-game1/with/key/dvHJXlCso1laUplLipy7LT",
        {
        	method: "POST",
        	mode: 'cors', 
        	headers: new Headers({
				"Content-Type": "application/json"
			}),
            //body: JSON.stringify({"value1": "demo", "value2": "demo2"})
            body : data
        })
        .then(function(res){ console.log(res); })
        // $.post({
        //     url: 'https://crossorigin.me/https://maker.ifttt.com/trigger/winter-games-game1/with/key/dvHJXlCso1laUplLipy7LT',
        //     contentType : "application/json",
        //     dataType: "jsonp",
        //     //dataType: 'json',
        //     //jsonpCallback: "logResults",
        //     data: JSON.stringify({ value1: "demo" })
        // });
    }
	
	// add a new line to the chat
	var updateChat = function(party, text) {
	
		var style = 'you';
		if(party != you) {
			style = 'other';
		}
		
		var line = $('<div><span class="party"></span> <span class="text"></span></div>');
		line.find('.party').addClass(style).text(party + ':');
		line.find('.text').text(text);
		
		chat.append(line);
		
		chat.stop().animate({ scrollTop: chat.prop("scrollHeight")});
	
	}
	
	// event binding
	$('.input').bind('keydown', function(e) {
		if(e.keyCode == 13) {
			submitChat();
		}
	});
	$('.input a').bind('click', submitChat);
	
	// initial chat state
	updateChat(robot, 'Hi buddy, Can I help you?');
	$('#chatbar').focus();

});