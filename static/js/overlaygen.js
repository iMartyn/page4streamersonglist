function importURL() {
    
    function paramsToObject(entries) {
        const result = {}
        for(const [key, value] of entries) { // each 'entry' is a [key, value] tupple
            result[key] = value;
        }
        return result;
    }

    let existing = document.getElementById('existing').value;
    let obj = null;
    if (existing.indexOf('#') > 0) {
        const paramsString = existing.substring(existing.indexOf("#")+1);
        const searchParams = new URLSearchParams(paramsString);
        const entries = searchParams.entries();
        obj = paramsToObject(entries);
    }
    if (typeof obj.streamer != "undefined") {
        document.getElementById('streamername').value = obj.streamer;  
    }
    if (typeof obj.basedirForImages != "undefined") {
        document.getElementById('basedirForImages').value = obj.basedirForImages; 
    }
    if (typeof obj.onlyTags != "undefined") {
        document.getElementById('onlytags').value = obj.onlyTags; 
    }
    if (typeof obj.interval != "undefined") {
        document.getElementById('interval').value = obj.interval; 
    }
    if (typeof obj.addSongImages != "undefined") {
        document.getElementById('addSongImages').value = atob(obj.addSongImages); 
    }
}

function generateURL() {
    finalurl = window.location.href.replace("/index.html","")+'/overlay.html';
    finalurl += "#streamer="+document.getElementById('streamername').value;
    if (document.getElementById('basedirForImages').value.length > 0) {
        finalurl += "&basedirForImages="+document.getElementById('basedirForImages').value
    }
    if (document.getElementById('onlytags').value.length > 0) {
        finalurl += "&onlyTags=["+document.getElementById('onlytags').value+"]"
    }
    if (document.getElementById('addSongImages').value.length > 0) {
        finalurl += "&addSongImages="+btoa(document.getElementById('addSongImages').value.replace(/\s+/g, ' ').replace(/[\n|\r]/g,'').trim())
    }
    if (document.getElementById('interval').value.length > 0) {
        finalurl += "&interval="+document.getElementById('interval').value
    }
    document.getElementById("overlayUrl").innerHTML = '<a href="'+finalurl+'">'+finalurl+'</a>';
}
