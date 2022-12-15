
let btnList = document.querySelectorAll(".btn");

// Додаємо обробчик події клік на кнопку та відкриття потрібної строрінки
function addEventClick() {
    for (let item of btnList) {
        let file = "./" + item.id + "/page-" + item.id + ".html";
        try {
            item.addEventListener('click', () => { document.open(file,"","")});    
        } catch (error) {
            console.log(error + "Каталог або сторінка не строрено або має не вірний формат(Приклад - ./04/page-04.html)");
            alert(error + "Каталог або сторінка не строрено або має не вірний формат(Приклад - ./04/page-04.html)");
        }
    }
}

addEventClick();


 