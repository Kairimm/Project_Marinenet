let buttons_div = document.querySelector('.buttons_js');

let suggestions = ['Part broken nearside engine',
    'Spark-plugs are worn out',
    "Broken drive belt",
    "Propeller broke",
    "Out of coolant so engine overheats"];

let srcArr = {
    1 : '../icons/checkboxEng.svg',
    2 : '../icons/checkEng.svg',
    3 :'../icons/CrossEng.svg'
};

let add_idea = document.querySelector('.add_idea');
let main = document.querySelector('main');
let owner = document.getElementById('owner');

const hendrik = document.getElementById('hendrik');
const mack = document.getElementById('mack');
const standard = "flex bg-[#FFFFFF] shadow-lg p-3  items-center cursor-pointer md:flex-row flex-col";
const selected = "flex bg-[#F0F0F0] shadow-lg p-3  items-center cursor-pointer md:flex-row flex-col";

show(suggestions);

mack.addEventListener('click', () => {
    setUser(mack, hendrik);
});

hendrik.addEventListener('click', () => {
    setUser(hendrik, mack)
});

function setUser(a, b) {
    owner.innerText = `${a.id[0].toUpperCase() + a.id.slice(1)}`;
    b.className = standard;
    a.className = selected;
    buttons_div.innerHTML = '';
    show(suggestions);
}

function createEl(input, element, cName = null) {
    const e = document.createElement(element);
    e.innerText = input;
    e.className = cName;
    return e;
}

function show(suggestions) {
    for (let i = 0; i < suggestions.length; i++) {
        const box = createEl('', 'div', 'flex flex-row items-center justify-between')
        const text = createEl(suggestions[i], 'p', 'text-lg');
        let value = parseInt(Object.keys(srcArr)[0]);
        let image = createEl('', 'img', 'h-[10%] w-[10%] cursor-pointer');
        image.src = srcArr[value];
        
        buttons_div.appendChild(box);
        box.appendChild(text);
        box.appendChild(image);
    
        image.addEventListener('click', () => {
            value = value < 3 ? value += 1 : value = 1;
            image.src = srcArr[value];
        });
    }
}

add_idea.addEventListener('click', () => {
    const coverUp = createEl('', 'div', 'bg-opacity-70 w-full fixed z-50 h-[200vh] flex -top-[25rem] justify-center items-center');
    const popup = createEl('', 'div', 'bg-offwhite h-[30%] w-[70%] rounded-2xl flex flex-col justify-center items-center');
    const text = createEl('Your suggestion', 'p', 'text-2xl');
    const input = createEl('', 'input', 'h-[10%] w-[70%] shadow-lg rounded-lg outline-none text-center');
    const suggestbtn = createEl('Send', 'button','h-[10%] w-[30%] bg-[#DCDCDC] mt-5 shadow-lg rounded-lg');

    main.appendChild(coverUp);
    coverUp.appendChild(popup);
    popup.appendChild(text);
    popup.appendChild(input);
    popup.appendChild(suggestbtn);

    suggestbtn.addEventListener('click', () => {
        suggestions.unshift(input.value);
        coverUp.remove();
        buttons_div.innerHTML = '';
        show(suggestions);
    });
});