/**
 * Created by Patrick on 4/29/2016.
 */
var poem = "";
window.onload = function() {
    var buttons = document.getElementsByClassName("T-I J-J5-Ji T-I-KE L3");
    button = buttons.item(0);
    populatePoems();
    button.addEventListener("click", function () {

        setTimeout(
            function () {
                console.log("mayb");
                document.getElementsByClassName("Am Al editable LW-avf").item(0).innerHTML = poem + "Got it?";
            }, 1000);
    });
}
var urls = [];
var poems = [];
var poets = ["frost"];

function populatePoems(){
    poets.forEach(function(item){
       poems[item] = [];
    });
    var lines = readTextFile("frost.txt").split('\n');
    for(var line = 0; line < lines.length; line++){
        if (line == 0){
            urls.push(lines[line]);
        }else{
            poems["frost"].push(lines[line]);
        }
    }
    var randomPoet = poets[Math.floor(Math.random() * poets.length)];
    var randomPoem = poems[randomPoet][Math.floor(Math.random() * poems[randomPoet].length)];
    poem = readTextFile("frost/" + randomPoem + ".txt");
    console.log(poems[randomPoet].length);
}

function readTextFile(file)
{
    console.log("ReadText");
    var xmlhttp;
    xmlhttp = new XMLHttpRequest();
    xmlhttp.open('GET', chrome.extension.getURL(file) , false);
    xmlhttp.send();
    return xmlhttp.responseText;
}




