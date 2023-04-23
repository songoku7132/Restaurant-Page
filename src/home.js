function loadHome(){
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
        box.textContent = 'Some dish!';
        box.classList.add('dish')
        // topDesc.id = 'top';
        menuBox.appendChild(box);
    }
    // const bottomDesc = document.createElement('p');
    // bottomDesc.textContent = 'Home!';
    // bottomDesc.id = 'bottom';
    // mainDesc.appendChild(bottomDesc);
}
export default loadHome;