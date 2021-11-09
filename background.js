chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        switch (request.directive) {
            case "on":
                // execute the content script
                chrome.tabs.executeScript({
                    file: "turnOn.js"
                });
                sendResponse({}); // sending back empty response to sender
                break;
            case "off":
                // execute the content script
                chrome.tabs.executeScript({
                    file: "turnOff.js"
                });
                sendResponse({}); // sending back empty response to sender
                break;
            default:
                // helps debug when request directive doesn't match
                alert("Unmatched request of '" + request + "' from script to background.js from " + sender);
        }
    }
);