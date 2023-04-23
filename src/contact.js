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
    topDesc.textContent = 'Contact!';
    topDesc.id = 'top';
    mainDesc.appendChild(topDesc);

    const bottomDesc = document.createElement('p');
    bottomDesc.textContent = 'Contact!';
    bottomDesc.id = 'bottom';
    mainDesc.appendChild(bottomDesc);
}
export default loadContact;