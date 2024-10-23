document.addEventListener('DOMContentLoaded', function () {
    (function () {
        var els = document.getElementsByTagName('a');
        for (var index = 0; index < els.length; index++) {
            var element = els[index];
            var target = element.getAttribute('target');
            if (typeof target === 'undefined' || (target != '' && target != '_self')) {
                element.setAttribute('target', '_blank');
            }
        }
    })();
});