onload = () => {
    const elementosAll = document.getElementsByClassName('cards');
    elementosAll[0].classList.add('si-vision');
    elementosAll[0].style.zIndex = '3';
    elementosAll[0].style.position = 'relative';

    elementosAll[1].classList.add('si-vision');
    elementosAll[1].style.transform = 'translate(85%)';


    for (i = 2; i < elementosAll.length; i++) {
        elementosAll[1].style.transform = 'translate(200%)';
        elementosAll[i].classList.add('si-vision');
    }
}



let actual = 0;
let elementosAll = document.getElementsByClassName('cards');
document.getElementById('next').onclick = () => {

    if (actual != elementosAll.length - 1) {

        /* if (actual == 0) {
            elementosAll[elementosAll.length - 1].classList.remove('no-vision');
            elementosAll[elementosAll.length - 1].classList.add('si-vision');
            elementosAll[elementosAll.length - 1].style.transform = 'translate(+95%)';
        } */

        /* setTimeout(() => {
            elementosAll[actual].classList.remove('si-vision');
            elementosAll[actual].classList.add('no-vision');
        }, 1000); */

        elementosAll[actual].classList.remove('hacia-derecha');
        elementosAll[actual].style.transform = 'translate(-90%)';
        elementosAll[actual].style.zIndex = '2';

        actual++;
        elementosAll[actual + 1].style.transform = 'translate(100%)';

        elementosAll[actual].style.transform = 'translate(0)';
        elementosAll[actual].classList.remove('hacia-izquierda');
        elementosAll[actual].style.zIndex = '3';



        elementosAll[actual + 1].style.transform = 'translate(85%)';
        elementosAll[actual + 1].style.position = 'absolute';
        elementosAll[actual + 1].style.zIndex = '0';



        /* elementosAll[actual].classList.remove('hacia-izquierda');
        elementosAll[actual].classList.remove('no-vision');
        elementosAll[actual].classList.add('si-vision'); */

    } else {

        elementosAll[actual].classList.remove('si-vision');
        elementosAll[actual].classList.add('no-vision');
        actual = 0;
        elementosAll[actual].classList.remove('no-vision');
        elementosAll[actual].classList.add('si-vision');
    }
}

document.getElementById('prev').onclick = () => {

    if (actual > 0) {
        elementosAll[actual].classList.remove('si-vision');
        elementosAll[actual].classList.add('no-vision');
        actual--;
        elementosAll[actual].classList.remove('no-vision');
        elementosAll[actual].classList.add('si-vision');

    } else {
        elementosAll[actual].classList.remove('si-vision');
        elementosAll[actual].classList.add('no-vision');
        actual = elementosAll.length - 1;
        elementosAll[actual].classList.remove('no-vision');
        elementosAll[actual].classList.add('si-vision');
    }
}