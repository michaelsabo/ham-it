
var url = "";
var _this = this;
chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        var activeTab = tabs[0];
        _this.url = activeTab.url;
});
$(function() {

  $( "#add-gif" ).click(function() {
    if (/imgur/.test(url)) {
        var imgurId = /.*com\/?.*\/(\w*)(\.)?/.exec(url);

      if (imgurId == null) {
        console.log("returning");
        return;
      }
        $.ajax({
            type: 'POST',
            url: "http://ham.life/api/gifs?gif="+imgurId[1],
            success: function(data) {
              console.log(data);
              _this.$("#message").text("Successfully added gif");
            }, error: function(error) {
              _this.$("#message").text("Something went very wrong");
            }
            
        });
      } else {
        _this.$("#message").text("Not on imgur dummy");
      }
  });
});
