function importURL() {
    alert("unimplemented");
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
    alert(finalurl)
}
