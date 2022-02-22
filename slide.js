onload = moverDer();

function moverDer() {
    const elementosAll = document.getElementsByClassName('cards');
    for (i = 2; i < elementosAll.length; i++) {
        elementosAll[i].style.transform = 'translate(105%)';
    }

    elementosAll[elementosAll.length - 1].style.transform = 'translate(-105%)';
    elementosAll[elementosAll.length - 1].style.zIndex = '0';

    elementosAll[0].style.zIndex = '5';
    elementosAll[0].style.position = 'relative';

    elementosAll[1].style.transform = 'translate(105%)';


}


function moverIzq() {
    const elementosAll = document.getElementsByClassName('cards');
    for (i = 1; i < elementosAll.length - 1; i++) {
        elementosAll[i].style.zIndex = '0';
        elementosAll[i].style.transform = 'translate(-105%)';
    }




}


let actual = 0;
let elementosAll = document.getElementsByClassName('cards');
document.getElementById('next').onclick = () => {

    if (actual != elementosAll.length - 1) {

        elementosAll[actual].style.transform = 'translate(-105%)';
        elementosAll[actual].style.zIndex = '1';
        actual++;


        elementosAll[actual].style.transform = 'translate(0)';
        elementosAll[actual].style.zIndex = '5';

        console.log(actual);
        if ((actual + 1) == elementosAll.length - 1) {

            elementosAll[actual + 1].style.zIndex = '0';

            elementosAll[actual + 1].style.transform = 'translate(105%)';

            elementosAll[0].style.transform = 'translate(105%)';

        }

    } else {

        console.log(actual);
        elementosAll[actual].style.transform = 'translate(-105%)';
        actual = 0;
        elementosAll[actual].style.transform = 'translate(0)';
        moverDer();

    }
}


document.getElementById('prev').onclick = () => {

    if (actual - 1 === -1) {

        elementosAll[actual].style.zIndex = '5';
        elementosAll[actual].style.transform = 'translate(105%)';
        actual = elementosAll.length - 1;
        elementosAll[actual].style.zIndex = '5';
        elementosAll[actual].style.transform = 'translate(0)';
        /* moverIzq(); */
        console.log(actual);

    } else {
        elementosAll[actual].style.transform = 'translate(105%)';
        elementosAll[actual].style.zIndex = '2';
        actual--;
        elementosAll[actual].style.transform = 'translate(0)';
        elementosAll[actual].style.zIndex = '5';
        if (actual == 1) {

            elementosAll[0].style.zIndex = '0';
            elementosAll[0].style.transform = 'translate(-105%)';
            elementosAll[elementosAll.length - 1].style.zIndex = '0';
            elementosAll[elementosAll.length - 1].style.transform = 'translate(-105%)';
        }

    }

}