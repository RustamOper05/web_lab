(function() {
    var startTime = new Date().getTime();

    window.addEventListener('load', function() {
        var endTime = new Date().getTime();
        var loadTime = endTime - startTime;
        document.getElementById('loadTime').innerHTML = 'Page loaded in ' + loadTime + 'ms';
    });
})();