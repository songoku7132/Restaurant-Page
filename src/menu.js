function loadMenu(){
    function refreshBox(){   
        let del = document.querySelector('.main-page');
        del.remove()
    }
    refreshBox()
    const Container = document.getElementById('content')

    const mainPage = document.createElement('div');
    mainPage.classList.add('main-page');
    Container.appendChild(mainPage);

    const menuBox = document.createElement('div');
    menuBox.classList.add('menu-box');
    mainPage.appendChild(menuBox);

    for(let i=1;i<=8;i++){
        const box = document.createElement('div');
        box.classList.add('dish');
        menuBox.appendChild(box);

        const picture = document.createElement('div');
        picture.classList.add('img-box');
        picture.id = `img-${i}`
        box.appendChild(picture);

        const text = document.createElement('p');
        text.classList.add('text');
        text.id = `text-${i}`
        // text.textContent = 'Filet Mignon 10oz / 14oz'
        box.appendChild(text);
    }
    const text1 = document.getElementById('text-1');
    const text2 = document.getElementById('text-2');
    const text3 = document.getElementById('text-3');
    const text4 = document.getElementById('text-4');
    const text5 = document.getElementById('text-5');
    const text6 = document.getElementById('text-6');
    const text7 = document.getElementById('text-7');
    const text8 = document.getElementById('text-8');

    text1.textContent = 'New York Sirloin'
    text2.textContent = 'Filet Mignon 10oz / 14oz'
    text3.textContent = 'Rib Steak'
    text4.textContent = 'Chopped Steak'
    text5.textContent = 'Caesar'
    text6.textContent = 'Green Salad'
    text7.textContent = 'French Onion Soup'
    text8.textContent = 'Jumbo Maine Lobster'
}
export default loadMenu;