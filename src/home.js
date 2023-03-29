export function initialLoad(){
    const content = document.querySelector('#content');

    const home = document.createElement('div');
    home.className = 'home';
    content.appendChild(home);

    const title = document.createElement('h1');
    title.textContent = 'Pizzeria da Ciro';
    home.appendChild(title);

    const img = document.createElement('img');
    img.src = '../pizza.jpg';
    home.appendChild(img);

    const quote = document.createElement('p');
    quote.textContent = 'Fatte \'na pizza c\'a pummarola \'ncoppa, vedrai che il mondo poi ti sorriderà';
    home.appendChild(quote);
}