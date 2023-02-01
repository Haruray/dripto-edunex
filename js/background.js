chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      console.log(JSON.stringify(request));
    }
  );