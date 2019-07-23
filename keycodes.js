var _Which, _Code, _Key, _Location;
var keyCodeViewer = document.getElementById('id-keyCode');
var keyCodeAlert = document.getElementById('id-alert');
var keyCodeBox = document.getElementById('id-keyCodeBox')
var whichViewer = document.getElementById('id-which');
var keyViewer = document.getElementById('id-key');
var locationViewer = document.getElementById('id-location');
var codeViewer = document.getElementById('id-code');

keyCodeBox.style.visibility = "hidden";

document.onkeydown = keyControl;

function keyControl(key) {
    _Which = key.which;
    _Code = key.code;
    
    if (_Code == "Space"){
        _Key = "Space Key"
    }
    else {
        _Key = key.key;

    }
    _Location = key.location;
    keyCodeAlert.innerHTML = "";
    keyCodeViewer.innerHTML = _Which;
    keyCodeBox.style.visibility = "visible";
    whichViewer.innerHTML = _Which;
    keyViewer.innerHTML = _Key;
    locationViewer.innerHTML = _Location;
    codeViewer.innerHTML = _Code;
}
