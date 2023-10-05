(function() {
    var startTime = new Date().getTime();

    window.addEventListener('load', function() {
        var endTime = new Date().getTime();
        var loadTime = endTime - startTime;
        document.getElementById('loadTime').innerHTML = 'Page loaded in ' + loadTime + 'ms';

        var currentUrl = document.location;
        // Получаем все пункты меню
        var menuItems = document.querySelectorAll('.nav_li');
        // Перебираем все пункты меню
        for (var i = 0; i < menuItems.length; i++) {
            // Получаем ссылку пункта меню
            var link = menuItems[i].querySelector('a');
            // Проверяем, содержит ли ссылка текущий URL страницы
            if (currentUrl["href"].includes(link.href)) {
                // Добавляем класс для активного состояния
                menuItems[i].classList.add('nav_active');
            }
        }
    });
})();
