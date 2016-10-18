    $(function(){

        $("#typed").typed({
          strings: [
          "If you enjoyed with Olympics Games.", 
          "Winter games are open!", 
          "This time, the games will put the focus on functional programming and reactive services.", 
          "To participate, reply on issue #2, it is free!", 
          "The first game will start on 1st of November.",  "The winter is coming."],
          typeSpeed: 30,
          callback: function(){
            shift();
          }
        });

    });

    function shift(){
      $(".head-wrap").addClass("shift-text");
      terminalHeight();
    }

    function terminalHeight(){
      var termHeight = $(".terminal-height");
      var value = termHeight.text();
      value = parseInt(value);
      setTimeout(function(){
          if (value > 10){
              value = value-1;
              this.txtValue = value.toString();
              termHeight.text(this.txtValue);
              self.terminalHeight();
          }
          else{
              clearTimeout();
          }
      }, 10);
    }