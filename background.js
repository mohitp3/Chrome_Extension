// chrome.tabs.onCreated.addListener(function(tab){
//     console.log(tab.url);
//     console.log(tab.id);
// });

// // Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
    // No tabs or host permissions needed!
    console.log(tab.url);
    chrome.tabs.executeScript({
      file: 'content.js'
    });
  });