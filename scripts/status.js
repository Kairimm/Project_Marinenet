let fuel = document.getElementById('fuel');
let gas = document.getElementById('gas');
const refresh = document.getElementById('refresh');

let randomFuel = Math.floor(Math.random() * 31) + 70;
let randomGas = Math.floor(Math.random() * 31) + 70; 
gas.innerText  = `${randomGas}%`;
fuel.innerText  = `${randomFuel}%`;

refresh.addEventListener('click' , () => {
    window.location.reload();
});
