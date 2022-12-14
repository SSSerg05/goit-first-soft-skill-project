
let btnList = document.querySelectorAll(".btn");

function f1() {
    for (let item of btnList) {
        let id = item.id;
        let file = "./"+id+"/page.html";
        try {
            item.addEventListener('click', () => { document.open(file,"","")});    
        } catch (error) {
            
        }
    }
}

f1();


 