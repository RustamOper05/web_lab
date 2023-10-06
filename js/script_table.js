// Получение данных из формы и добавление в таблицу
// Загрузка данных из LocalStorage и добавление в таблицу
window.addEventListener("load", function() {
// Получение данных из формы и добавление в список
    function addApartment(event) {
        // event.preventDefault();

        let area = document.getElementById("area").value;
        let rooms = document.getElementById("rooms").value;
        var floors = document.getElementById("floors").value;
        let floor = document.getElementById("floor").value;

        let apartment = {
            area,
            rooms,
            floors,
            floor
        };

        let apartmentList = JSON.parse(localStorage.getItem("apartmentList")) || [];
        apartmentList.push(apartment);
        localStorage.setItem("apartmentList", JSON.stringify(apartmentList));

        displayApartments();
    }

// Отображение списка квартир
    function displayApartments() {
        let apartmentList = JSON.parse(localStorage.getItem("apartmentList")) || [];
        let html = "<table><tr><th>Площадь</th><th>Комнатность</th><th>Этажность дома</th><th>Этаж квартиры</th></tr>";

        for (let i = 0; i < apartmentList.length; i++) {
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