window.purechatApi = {
  l: [],
  t: [],
  on: function() {
    this.l.push(arguments);
  }
};
purechatApi.on('chatbox:ready', function (args) {
    // Do any of your manipulation to settings here!
    // console.log(args.chatboxId); // Prints the ID of the chatbox to the console window
    setTimeout(function(){jQuery("img.purechat-collapsed-image").prop("alt","Chat with BYU Info")},2000);
});
purechatApi.on('chatbox:minimize', function (args) {
    //  console.log('Chatbox was minimized');
    //  console.log(args.chatboxId) // Prints the ID of the chatbox to the console window
});
purechatApi.on('chatbox:collapse', function (args) {
    //  console.log('Chatbox was collapsed');
    //  console.log(args.chatboxId) // Prints the ID of the chatbox to the console window
});
purechatApi.on('chatbox:expand', function (args) {
    //  console.log('Chatbox was expanded!');
    //  console.log(args.chatboxId) // Prints the ID of the chatbox to the console window
    jQuery("a.purechat-toggle-audio-notifications i.fa").prop("title","Mute Chat Sounds");
    jQuery("input#purechat-name-submit").prop("title","Send Chat Request");
});
purechatApi.on('chatbox:poppedOut', function (args) {
    //  console.log('Chatbox was popped out into a new window.');
    //  console.log(args.chatboxId) // Prints the ID of the chatbox to the console window
});

(function() {
    var done = false;
    var script = document.createElement('script');
    script.async = true;
    script.type = 'text/javascript';
    script.src = 'https://app.purechat.com/VisitorWidget/WidgetScript';
    document.getElementsByTagName('HEAD').item(0).appendChild(script);
    script.onreadystatechange = script.onload = function(e) {
        if (!done && (!this.readyState || this.readyState == 'loaded' || this.readyState == 'complete')) {
            var w = new PCWidget({
                c: 'a9ffc17d-a06d-4496-a702-59fb989aade5',
                f: true
            });
            done = true;
        }
    };
})();
