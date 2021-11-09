function clickHandler(e) {
    console.log(e);
    chrome.runtime.sendMessage({directive: e.srcElement.value}, function(response) {
        //this.close(); close the popup when the background finishes processing request
    });
}

console.log('aaa');
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('turn-off').addEventListener('click', clickHandler);
    document.getElementById('turn-on').addEventListener('click', clickHandler);
    console.log(document.getElementById('off'));
})