function placeholderPic() {
    var w = document.documentElement.offsetWidth;
    document.documentElement.style.fontSize = w / 32 + 'px';
}
placeholderPic();
window.onresize = function() {
    placeholderPic();
}