let input = document.getElementById('menuCheckbox')
const sidebar = document.querySelector('.sidebar')

input.addEventListener('click', () => {
    let style = window.getComputedStyle(sidebar)
    let matrix = new DOMMatrixReadOnly(style.transform)

    if (matrix.m41 == -280) {
        console.log('IN');
        sidebar.style.transform = "translateX(0%)";


    } else {
        console.log('OUT');
        sidebar.style.transform = "translateX(-100%)";
    }

})

window.onresize = () => {
    let style = window.getComputedStyle(sidebar)
    let matrix = new DOMMatrixReadOnly(style.transform)
    if (window.innerWidth >= 792) {
        if (matrix.m41 == -220) {
            sidebar.style.transform = "translateX(0%)";
        }
    } else {

        if (matrix.m41 == 0) {
            sidebar.style.transform = "translateX(-100%)";
        }

    }

}