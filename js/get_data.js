function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

window.addEventListener("load", function() {
    const fetchButton = document.getElementById('fetchButton');
    const loadingIndicator = document.getElementById('loadingIndicator');
    const dataList = document.getElementById('dataList');

    fetchButton.addEventListener('click', () => {

    if (dataList.children.length != 0) {
        while (dataList.firstChild) {
            if (dataList.children.length == 0) {
                break;
            }
            dataList.removeChild(dataList.lastChild);
        }
    }

    loadingIndicator.style.display = 'block';

    let randomLimit = getRandomInt(5, 10)

    setTimeout(() => {
        fetch(`https://jsonplaceholder.typicode.com/users?_start=1&_limit=${randomLimit}`)
            .then(response => response.json())
            .then(json => {
                loadingIndicator.style.display = 'none';
                json.forEach(user => {
                    const listItem = document.createElement('li');
                    listItem.textContent = user.name + "    " + user.email;
                    dataList.appendChild(listItem);
                });
            })
            .catch(error => {
                loadingIndicator.style.display = 'none';
                    const listItem = document.createElement('li');
                    listItem.textContent = "«⚠ Что-то пошло не так»"
                    dataList.appendChild(listItem);
            });
        }, 2000);
    });
});