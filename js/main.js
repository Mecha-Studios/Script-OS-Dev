﻿dragElement(document.getElementById(("mydiv")));

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }


}

dragElement(document.getElementById(("usersettings")));

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }


}

dragElement(document.getElementById(("backgroundsettings")));

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }


}

dragElement(document.getElementById(("settings")));

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }


}


dragElement(document.getElementById(("browser")));

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }


}

dragElement(document.getElementById(("filesapp")));

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }


}

dragElement(document.getElementById(("htmlview")));

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }


}

dragElement(document.getElementById(("scriptstore")));

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }


}

dragElement(document.getElementById(("textapp")));

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }


}

dragElement(document.getElementById(("discord")));

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }


}

dragElement(document.getElementById(("imagesapp")));

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }


}

var input = document.getElementById('input');
var form = document.getElementById('commands');

function processForm(e) {

    if (e.preventDefault) e.preventDefault();
    start(input.value, out)
    return false;

}

if (form.attachEvent) {
    form.attachEvent("submit", processForm)
}
else {
    form.addEventListener("submit", processForm)
}

var output = document.getElementById('output');

var out = function (outtext) {

    console.log(outtext);
    var newPara = document.createElement('p');
    var paraText = document.createTextNode(outtext);
    newPara.appendChild(paraText);
    output.appendChild(newPara);

}


function start(invar, outvar) {
    if (invar == "") {
        outvar("Sorry I didn't get that");
    }
    if (invar == "hi") {
        outvar("Hey!");
    }
    if (invar == "hello") {
        outvar("Hi there!")
    }
    if (invar == "how are you") {
        outvar("I'm doing pretty good, you?");
    }
    if (invar == "what time is it") {
        outvar("I'm sorry, I cannot currently tell time. That will be coming in a future update.");
    }
    if (invar == "do you have voice controll") {
        outvar("Yes!");
    }
    if (invar == "whats your name") {
        outvar("My name is Zec. I am your digital assistant.");
    }
    if (invar == "who is Cortana") {
        outvar("Cortana is a virtual assistant created by Microsoft Inc.");
    }
    if (invar == "fuck you") {
        outvar("That's not very nice!");
    }
    if (invar == "launch settings") {
        outvar("Sure thing!");
        document.getElementById('settings').style.display = 'inline';
    }
    if (invar == "launch browser") {
        outvar("Okay!");
        document.getElementById('browser').style.display = 'inline';
    }

    var searchWeb = document.getElementById('input').value;
    if (invar == "search for"){
        outvar("Okay, searching the web for " + searchWeb);
    }

    if (invar == "launch text editor") {
        outvar("Launching Text Editor!");
        document.getElementById('textapp').style.display = 'inline';
    }
    if (invar == "clear") {
        document.getElementById('output').innerHTML = '';
    }      
}

function darkMode() {
    document.getElementById('mydivheader').style.backgroundColor = 'black';
    document.getElementById('usersettingsheader').style.backgroundColor = 'black';
    document.getElementById('browserheader').style.backgroundColor = 'black';
    document.getElementById('textappheader').style.backgroundColor = 'black';
    document.getElementById('scriptstoreheader').style.backgroundColor = 'black';
    document.getElementById('settingsheader').style.backgroundColor = 'black';
    document.getElementById('filesappheader').style.backgroundColor = 'black';
    document.getElementById('backgroundsettingsheader').style.backgroundColor = 'black';
    document.getElementById('notificationcenterheader').style.backgroundColor = 'black';
    document.getElementById('discordheader').style.backgroundColor = 'black';
}

function lightMode() {
    document.getElementById('mydivheader').style.backgroundColor = 'orangered';
    document.getElementById('usersettingsheader').style.backgroundColor = 'orangered';
    document.getElementById('browserheader').style.backgroundColor = 'orangered';
    document.getElementById('textappheader').style.backgroundColor = 'orangered';
    document.getElementById('scriptstoreheader').style.backgroundColor = 'orangered';
    document.getElementById('settingsheader').style.backgroundColor = 'orangered';
    document.getElementById('filesappheader').style.backgroundColor = 'orangered';
    document.getElementById('backgroundsettingsheader').style.backgroundColor = 'orangered';
    document.getElementById('notificationcenterheader').style.backgroundColor = 'orangered';
    document.getElementById('discordheader').style.backgroundColor = 'orangered';
}

function save() {
    var filetext = document.getElementById('text-box').textContent;
    var textfileicon = '<input type="image" id="textfilename" src="https://img11.androidappsapk.co/300/2/2/7/com.JellyBeanUser.apk.app.editor.png" style="width:50px; height=50px" onclick="openFile()"/>';
    document.getElementById('filesbox').innerHTML += textfileicon;
}
function openFile() {
    document.getElementById('textapp').style.display = 'inline';
    document.getElementById('text-box').value = filetext;
}

function startDictation() {

    if (window.hasOwnProperty('webkitSpeechRecognition')) {

        var recognition = new webkitSpeechRecognition();

        recognition.continuous = false;
        recognition.interimResults = false;

        recognition.lang = "en-US";
        recognition.start();

        recognition.onresult = function (e) {
            document.getElementById('input').value
                = e.results[0][0].transcript;
            recognition.stop();
            document.getElementById('input').submit();
        };

        recognition.onerror = function (e) {
            recognition.stop();
        }

    }
}

function login() {
    var username = document.getElementById('username').value;

    document.getElementById('userloginname').innerHTML = username;
    document.getElementById('usernameuser').value = username;
}

function openExampleFolder() {
    document.getElementById('filesbox').innerHTML = '<input type="image" title="Chicken.html" src="http://icons.iconarchive.com/icons/pelfusion/flat-file-type/256/html-icon.png" onclick="openChickenHtml()" style="width: 50px; height: 50px;"/>'
}

function openChickenHtml() {
    document.getElementById('htmlview').style.display = 'inline'
    document.getElementById('htmlviewer').src = 'Chicken.html'
}

function openScriptOSFolder() {
    document.getElementById('filesbox').innerHTML = '<input type="image" name="images/Script OS Logo.png" title="Script OS Logo.png" src="images/Script OS Logo.png" onclick="openScriptOSImage()" style="width: 50px; height: 50px;"/>'
}

function openScriptOSImage(){
    document.getElementById('imagesapp').style.display = 'inline';
    document.getElementById('imageviewer').src = 'images/Script OS Logo.png';
}

document.getElementById('imagesapp').style.display = 'none';
document.getElementById('imagesapp').style.width = '250px';
document.getElementById('imagesapp').style.height = '250px';

document.getElementById('discord').style.display = 'none';
document.getElementById('notificationcenter').style.display = 'none';