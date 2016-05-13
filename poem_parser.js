/**
 * Created by Patrick on 4/29/2016.
 */
var poem = "";
var maximumLines = 20;

function getMaxLines(callback){
    chrome.storage.sync.get({'maxLines' : 20}, function (items) {
        callback(items.maxLines);

    });
}

window.onload = function() {

    var buttons = document.getElementsByClassName("T-I J-J5-Ji T-I-KE L3");

    var button = buttons.item(0);
    getMaxLines(populatePoems);
    button.addEventListener("click", function () {

        setTimeout(
            function () {
                document.getElementsByClassName("Am Al editable LW-avf").item(0).innerHTML = poem;
            }, 1000);
    });
}
var urls = [];
var poems = [];
var poets = ["frost"];

function populatePoems(maxL){
    poets.forEach(function(item){
       poems[item] = [];
    });
    var lines = readTextFile("frost.txt").split('\n');
    for(var line = 0; line < lines.length; line++){
        if (line == 0){
            urls.push(lines[line]);
        }else{
            if(readTextFile("frost/" + lines[line] + ".txt").split("\n").length <= maxL) {
                poems["frost"].push(lines[line]);
            }
        }
    }
    var randomPoet = poets[Math.floor(Math.random() * poets.length)];
    var randomPoem = poems[randomPoet][Math.floor(Math.random() * poems[randomPoet].length)];
    var poemlines = readTextFile("frost/" + randomPoem + ".txt").split('\n');
    poem += "<br>--<br>";
    poem += "<b style='font-size: 8pt'>" + randomPoem.replace(/_/g, " ") + "</b>";
    poem += "<i style='color: #444;: dimgray; font-size: 7pt'>";
    for(var line = 0; line < poemlines.length; line++){
        poem += poemlines[line] + "<br>";
    }
    poem += "</i>";
}

function readTextFile(file)
{
    var xmlhttp;
    xmlhttp = new XMLHttpRequest();
    xmlhttp.open('GET', chrome.extension.getURL(file) , false);
    xmlhttp.send();
    return xmlhttp.responseText;
}




