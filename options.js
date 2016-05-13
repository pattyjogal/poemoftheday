/**
 * Created by Patrick on 5/12/2016.
 */

function saveOptions() {
    console.log("Setting saved!");
    var maxLines = document.getElementById('maxLines').value;
    chrome.storage.sync.set(
        {maxLines : maxLines}
    );
}
function loadOptions() {
    chrome.storage.sync.get({
        'maxLines' : 20
    }, function (items) {
        document.getElementById('maxLines').value = items.maxLines;
    });

}
document.addEventListener('DOMContentLoaded', loadOptions);
document.getElementById('save').addEventListener('click',
    saveOptions);