(function() {
    let startTime = new Date().getTime();

    window.addEventListener('load', function() {
        let endTime = new Date().getTime();
        let loadTime = endTime - startTime;
        document.getElementById('loadTime').innerHTML = 'Page loaded in ' + loadTime + 'ms';

        let currentUrl = document.location;
        // Получаем все пункты меню
        let menuItems = document.querySelectorAll('.nav_li');
        // Перебираем все пункты меню
        for (let i = 0; i < menuItems.length; i++) {
            // Получаем ссылку пункта меню
            let link = menuItems[i].querySelector('a');
            // Проверяем, содержит ли ссылка текущий URL страницы
            if (currentUrl["href"].includes(link.href)) {
                // Добавляем класс для активного состояния
                menuItems[i].classList.add('nav_active');
            }
        }
    });
})();
