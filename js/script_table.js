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

        let pattern = /^\d+$/

        console.log(pattern.test(area));

        if (!(pattern.test(area) & pattern.test(rooms) & pattern.test(floor) & pattern.test(floors))) {
            alert("В поля введены не числа");
        }
        else {
            let apartment = {
                area,
                rooms,
                floors,
                floor
            };

            let apartmentList = JSON.parse(localStorage.getItem("apartmentList")) || [];
            apartmentList.push(apartment);
            localStorage.setItem("apartmentList", JSON.stringify(apartmentList));
        }
        displayApartments();
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

            let area_val = apartmentList[i].area;
            let rooms_val = apartmentList[i].rooms;
            let floors_val = apartmentList[i].floors;
            let floor_val = apartmentList[i].floor;

            td[0].textContent  = area_val;
            td[1].textContent  = rooms_val;
            td[2].textContent  = floors_val;
            td[3].textContent  = floor_val;

            table.appendChild(сlonedNode);

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

    function checkString(string){
        if(typeof string === "string"){
            return isNaN(string);
        } 
    }
});