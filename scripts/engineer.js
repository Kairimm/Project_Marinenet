let buttons_div = document.querySelector('.buttons_js');
let amountButtons = 5;
let buttons_arr = [];

let suggestions = ['Part broken nearside engine',
    'Spark-plugs are worn out',
    "Broken drive belt",
    "Propeller broke",
    "Out of coolant so engine overheats"];

let srcArr = [
    '../icons/checkboxEng.svg',
    '../icons/checkEng.svg',
    '../icons/CrossEng.svg'
];

let add_idea = document.querySelector('.add_idea');
let main = document.querySelector('main');

const hendrik = document.getElementById('hendrik');
const mack = document.getElementById('mack');
let owner = document.getElementById('owner');
const standard = "flex bg-[#FFFFFF] shadow-lg p-3  items-center cursor-pointer";
const selected = "flex bg-[#F0F0F0] shadow-lg p-3  items-center cursor-pointer";

mack.addEventListener('click', () => {
    owner.innerText = 'Mack';
    hendrik.className = standard;
    mack.className = selected
});

hendrik.addEventListener('click', () => {
    owner.innerText = 'Hendrik';
    mack.className = standard;
    hendrik.className = selected;
});

add_idea.addEventListener('click', () => {
    let coverUp = createElementWClass('div', ['bg-[#DCDCDC]', 'bg-opacity-70', 'w-full', 'fixed', 'z-50', 'h-[200vh]', 'flex', '-top-[25rem]', 'justify-center', 'items-center']);
    let popup = createElementWClass('div', ['bg-offwhite', 'h-[30%]', 'w-[70%]', 'rounded-2xl', 'flex', 'flex-col', 'justify-center', 'items-center']);
    let header = createAndInnerText('h2', ['text-2xl'], 'Type here your suggestion:');
    let input = createElementWClass('input', ['h-[10%]', 'w-[70%]', 'shadow-lg', 'rounded-lg', 'outline-none', 'text-center']);
    let button = createAndInnerText('button', ['h-[10%]', 'w-[30%]', 'bg-[#DCDCDC]', 'mt-5', 'shadow-lg', 'rounded-lg'], 'Submit');
    input.setAttribute('type', 'input');
    coverUp.append(popup);
    popup.append(header, input, button);
    main.append(coverUp);

    button.addEventListener('click', () => {
        let suggestion_div = createElementWClass('div', ['ben', 'flex', 'bg-[#FFFFFF]', 'mt-[0.85rem]', 'p-1', 'rounded-lg', 'w-[95%]', 'mx-auto', 'shadow-lg', 'items-center', 'justify-between']);
        let suggestion_text = createAndInnerText('h3', ['ml-2', 'text-[#313131]'], input.value);
        let checkBox = createImgWSrc(['mr-2', 'button_added', '0'], '../icons/checkboxEng.svg');
        suggestion_div.append(suggestion_text, checkBox);
        buttons_arr.push(checkBox);
        buttons_div.append(suggestion_div);
        coverUp.remove();
        test(buttons_arr);
    });
});

for (let i = 0; i < amountButtons; i++) {
    let suggestion_div = createElementWClass('div', ['ben', 'flex', 'bg-[#FFFFFF]', 'mt-[0.85rem]', 'p-1', 'rounded-lg', 'w-[95%]', 'mx-auto', 'shadow-lg', 'items-center', 'justify-between']);
    let suggestion_text = createAndInnerText('h3', ['ml-2', 'text-[#313131]'], suggestions[i]);
    let checkBox = createImgWSrc(['mr-2', `button_${i}`, '0'], '../icons/checkboxEng.svg');
    suggestion_div.append(suggestion_text, checkBox);
    buttons_arr.push(checkBox);
    test(buttons_arr);
    buttons_div.append(suggestion_div);
}

function createElementWClass(type, classArr) {
    let element1 = document.createElement(type);
    classArr.forEach(element => {
        element1.classList.add(element);
    });
    return element1;
}

function createAndInnerText(type, classArr, text) {
    let element = createElementWClass(type, classArr);
    element.innerText = text;
    return element;
}

function createImgWSrc(classArr, src) {
    let img = createElementWClass('img', classArr);
    img.src = src;
    return img;
}

function test(buttons_arr) {
    buttons_arr.forEach(button => {
        button.addEventListener('click', () => {
            console.log(button);
            switch (button.classList[2]) {
                case '0':
                    button.src = srcArr[1];
                    button.classList.remove('0');
                    button.classList.add('1');
                    break;
                case '1':
                    button.src = srcArr[2];
                    button.classList.remove('1');
                    button.classList.add('2');
                    break;
                case '2':
                    button.src = srcArr[0];
                    button.classList.remove('2');
                    button.classList.add('0');
                    break;
            }
        });
    });
}
