const trigger = document.getElementById('sendbtn');
const header = document.getElementById('popup');

trigger.addEventListener('click', () => {
    let close = buildContainer();
    close.addEventListener('click', () => {
        window.location.reload();
    });
});

function buildContainer() {
    const popup = createEl('', 'div', 'bg-[#DCDCDC] bg-opacity-70 w-full fixed z-50 h-[200vh] flex');
    const box = createEl('', 'div', 'bg-offwhite h-[32rem] top-[10rem] absolute w-full py-4 px-5');
    const x = createEl('x', 'p', 'text-5xl cursor-pointer text-end');
    const questionBox = createEl('', 'div', 'flex justify-center flex-col py-8');
    let question = createEl('Are you sure that you want to call an engineer?' , 'p' , 'text-xl text-center w-[90%] py-4 mx-auto');
    const qDiv = createEl('', 'div', 'flex gap-6 justify-center py-2');
    let yes = createEl('Yes', 'button' , 'text-lg border-lightgrey border-[3px] w-[20%] py-1');
    let no = createEl('No', 'button', 'text-lg border-lightgrey border-[3px] w-[20%] py-1');

    header.appendChild(popup);
    popup.appendChild(box);
    box.appendChild(x);
    box.appendChild(questionBox);
    questionBox.appendChild(question);
    questionBox.appendChild(qDiv);
    qDiv.appendChild(yes);
    qDiv.appendChild(no);

    yes.addEventListener('click', () => {
        answer(question, yes, no, "We'll send an engineer your way!");
    });

    no.addEventListener('click', () => window.location.reload());

    return x;
}

function answer(a, b, c, message) {
    a.innerText = message;
    b.className = 'hidden';
    c.className = 'hidden';

    setInterval(() => {
        window.location.reload();
    }, 3000);
}

function createEl(input, element, cName = null) {
    const e = document.createElement(element);
    e.innerText = input;
    e.className = cName;
    return e;
}

