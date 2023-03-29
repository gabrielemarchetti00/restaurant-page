export function initialLoad(){
    const content = document.querySelector('#content');

    const home = document.createElement('div');
    home.className = 'home';
    content.appendChild(home);

    const title = document.createElement('h1');
    title.id = 'title';
    title.textContent = 'Pizzeria da Ciro';
    home.appendChild(title);

    const img = document.createElement('img');
    img.id = 'pizzaImg';
    img.src = '../images/pizza.jpg';
    home.appendChild(img);

    const quote = document.createElement('p');
    quote.id = 'quote';
    quote.textContent = 'Fatte \'na pizza c\'a pummarola \'ncoppa, vedrai che il mondo poi ti sorriderà - Pino Daniele';
    home.appendChild(quote);
}