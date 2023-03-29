export function menuLoad() {
    const content = document.querySelector('#content');
    const menuDiv = document.createElement('div');
    content.appendChild(menuDiv);
    
    const title = document.createElement('h1');
    title.textContent = 'Menu';
    menuDiv.appendChild(title);


    const list = document.createElement('ul');
    menuDiv.appendChild(list);

    const itemOne = document.createElement('li');
    itemOne.textContent = 'Margherita';
    list.appendChild(itemOne);

    const itemTwo = document.createElement('li');
    itemTwo.textContent = 'Bufala';
    list.appendChild(itemTwo);

    const itemThree = document.createElement('li');
    itemThree.textContent = 'Diavola';
    list.appendChild(itemThree);
}


