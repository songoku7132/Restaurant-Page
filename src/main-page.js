function loadMain(){
    const Container = document.getElementById('content')

    const mainPage = document.createElement('div');
    mainPage.classList.add('main-page');
    Container.appendChild(mainPage);

    const mainDesc = document.createElement('div');
    mainDesc.classList.add('description');
    mainPage.appendChild(mainDesc);

    const topDesc = document.createElement('p');
    topDesc.textContent = 'INSPIRED FRANCH CUISINE';
    topDesc.id = 'top';
    mainDesc.appendChild(topDesc);

    const bottomDesc = document.createElement('p');
    bottomDesc.textContent = 'Voted New York\'s Best Franch Restaurant';
    bottomDesc.id = 'bottom';
    mainDesc.appendChild(bottomDesc);
}
export default loadMain;