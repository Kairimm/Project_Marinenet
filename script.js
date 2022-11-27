const trigger = document.getElementById('triggerAlarm');
const triggerdiv = document.getElementById('triggerdiv');

trigger.addEventListener('click', () => {
    let close = buildContainer();
    close.addEventListener('click', () => {
        window.location.reload();
    });
});

function buildContainer() {
    const popup = createEl('', 'div', 'bg-[#DCDCDC] bg-opacity-70 w-full fixed z-50 h-[200vh] flex');
    const box = createEl('', 'div', 'bg-offwhite h-[32rem] md:h-[38rem] md:top-[5rem] top-[10rem] absolute w-full py-4 px-5');
    const x = createEl('x', 'p', 'text-5xl cursor-pointer text-end');
    const message = createEl('Temperature level too high.', 'p', 'text-2xl font-semibold text-center');
    const graph = createEl('', 'img', 'h-[20rem] md:h-[28rem] w-[100%] md:w-[80%] mx-auto');
    graph.src = './images/tl.png';

    triggerdiv.appendChild(popup);
    popup.appendChild(box);
    box.appendChild(x);
    box.appendChild(message)
    box.appendChild(graph);

    return x;
}

function createEl(input, element, cName = null) {
    const e = document.createElement(element);
    e.innerText = input;
    e.className = cName;
    return e;
}