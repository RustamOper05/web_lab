// Получение данных из формы и добавление в таблицу
// Загрузка данных из LocalStorage и добавление в таблицу
window.addEventListener("load", function() {
// Получение данных из формы и добавление в список
    function addApartment(event) {
        event.preventDefault();

        var area = document.getElementById("area").value;
        var rooms = document.getElementById("rooms").value;
        var floors = document.getElementById("floors").value;
        var floor = document.getElementById("floor").value;

        var apartment = {
            area: area,
            rooms: rooms,
            floors: floors,
            floor: floor
        };

        var apartmentList = JSON.parse(localStorage.getItem("apartmentList")) || [];
        apartmentList.push(apartment);
        localStorage.setItem("apartmentList", JSON.stringify(apartmentList));

        displayApartments();
    }

// Отображение списка квартир
    function displayApartments() {
        var apartmentList = JSON.parse(localStorage.getItem("apartmentList")) || [];
        var html = "<table><tr><th>Площадь</th><th>Комнатность</th><th>Этажность дома</th><th>Этаж квартиры</th></tr>";

        for (var i = 0; i < apartmentList.length; i++) {
            html += "<tr><td>" + apartmentList[i].area + "</td>";
            html += "<td>" + apartmentList[i].rooms + "</td>";
            html += "<td>" + apartmentList[i].floors + "</td>";
            html += "<td>" + apartmentList[i].floor + "</td></tr>";
        }

        html += "</table>";
        document.getElementById("apartmentList").innerHTML = html;
    }

    document.getElementById("apartmentForm").addEventListener("submit", addApartment);
    displayApartments();
});