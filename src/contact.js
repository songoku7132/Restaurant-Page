function loadContact(){
    function refreshBox(){   
        let del = document.querySelector('.main-page');
        del.remove()
    }
    refreshBox()
    const Container = document.getElementById('content')

    const mainPage = document.createElement('div');
    mainPage.classList.add('main-page');
    Container.appendChild(mainPage);

    const mainDesc = document.createElement('div');
    mainDesc.classList.add('description');
    mainPage.appendChild(mainDesc);

    const topDesc = document.createElement('p');
    topDesc.textContent = '+375 555 55 55';
    topDesc.id = 'top';
    mainDesc.appendChild(topDesc);

    const bottomDesc = document.createElement('p');
    bottomDesc.textContent = '41 E 20th St, New York, NY 10003, United States';
    bottomDesc.id = 'bottom';
    mainDesc.appendChild(bottomDesc);
}
export default loadContact;