export function menuLoad() {
    const content = document.querySelector('#content');
    const menuDiv = document.createElement('div');
    menuDiv.className = 'menu';
    content.appendChild(menuDiv);
    
    const title = document.createElement('h1');
    title.id = 'title';
    title.textContent = 'Menu';
    menuDiv.appendChild(title);


    const list = document.createElement('ul');
    list.id = 'list';
    menuDiv.appendChild(list);

    const itemOne = document.createElement('li');
    itemOne.id = 'itemOne';
    itemOne.textContent = 'Margherita';
    list.appendChild(itemOne);

    const itemTwo = document.createElement('li');
    itemTwo.id = 'itemTwo';
    itemTwo.textContent = 'Marinara';
    list.appendChild(itemTwo);

    const itemThree = document.createElement('li');
    itemThree.id = 'itemThree';
    itemThree.textContent = 'Diavola';
    list.appendChild(itemThree);

    const margheImg = document.createElement('img');
    margheImg.src = '../images/margherita.jpg';
    itemOne.appendChild(margheImg);

    const mariImg = document.createElement('img');
    mariImg.src = '../images/marinara.webp';
    itemTwo.appendChild(mariImg);

    const diavImg = document.createElement('img');
    diavImg.src = '../images/diavola.jpg';
    itemThree.appendChild(diavImg);
}


