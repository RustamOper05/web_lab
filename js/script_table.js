// Получение данных из формы и добавление в таблицу
// Загрузка данных из LocalStorage и добавление в таблицу

window.addEventListener("load", function() {
    let table = document.getElementById('ap_table_head');
    let template = document.getElementById('apartmentTemplate');

// Получение данных из формы и добавление в список
    function addApartment(event) {
        event.preventDefault();

        let area = document.getElementById("area").value;
        let rooms = document.getElementById("rooms").value;
        let floors = document.getElementById("floors").value;
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

function isNumber(value) {
    if (typeof value === "string") {
        return !isNaN(value);
    }
}

    function displayApartments() {
        let apartmentList = JSON.parse(localStorage.getItem("apartmentList")) || [];
        
        if (table.children.length != 0) {
            while (table.firstChild) {
                if (table.children.length == 1) {
                    break;
                }
                table.removeChild(table.lastChild);
            }
        }

        for (let i = 0; i < apartmentList.length; i++) {

            let сlonedNode = template.content.cloneNode(true);
            let td = сlonedNode.querySelectorAll("td");
            if (
                (apartmentList[i].area) & (apartmentList[i].rooms) & (apartmentList[i].floors) & (apartmentList[i].floor)
            ) {
                if (
                    (!isNumber(apartmentList[i].area)) || (!isNumber(apartmentList[i].rooms)) || (!isNumber(apartmentList[i].floors)) || (!isNumber(apartmentList[i].floor))
                    ) {
                    alert("В поля введены не числа")
                }
                else{
                    td[0].textContent  = apartmentList[i].area;
                    td[1].textContent  = apartmentList[i].rooms;
                    td[2].textContent  = apartmentList[i].floors;
                    td[3].textContent  = apartmentList[i].floor;
        
                    table.appendChild(сlonedNode);
                }
            }
        }
    }

    document.getElementById("apartmentForm").addEventListener("submit", addApartment);
    document.getElementById("apartmentForm").addEventListener("submit", clearOutput);
    displayApartments();

    function clearOutput() {
        document.getElementById("area").value = "";
        document.getElementById("rooms").value = "";
        document.getElementById("floors").value = "";
        document.getElementById("floor").value = "";
    }
});