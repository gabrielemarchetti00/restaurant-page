export function infoLoad() {
    const content = document.querySelector('#content');
    const infoDiv = document.createElement('div');
    content.appendChild(infoDiv);

    const timetable = document.createElement('div');
    timetable.textContent = 'Lun-Sab 12:00-24:00';
    infoDiv.appendChild(timetable);

    const address = document.createElement('div');
    address.textContent = 'Via dei ciliegi, 32';
    infoDiv.appendChild(address);

    const phone = document.createElement('div');
    phone.textContent = 'Phone number: 0342 218425';
    infoDiv.appendChild(phone);
}