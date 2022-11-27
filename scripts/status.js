let fuel = document.getElementById('fuel');
let gas = document.getElementById('gas');
const refresh = document.getElementById('refresh');

gas.innerText  = `${Math.floor(Math.random() * 31) + 70}%`;
fuel.innerText  = `${Math.floor(Math.random() * 31) + 70}%`;

refresh.addEventListener('click' , () => {
    gas.innerText  = `${Math.floor(Math.random() * 31) + 70 }%`;
    fuel.innerText  = `${Math.floor(Math.random() * 31) + 70 }%`;
});