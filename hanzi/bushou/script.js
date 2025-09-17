import { dictionary } from "../../dictionary.js"
import { radicals } from "./radicals.js"

const radicalsdiv = document.getElementById("radicals")
let display = document.getElementById("display");
display.character = display.querySelector(".character")
display.variants = display.querySelector(".variants");
display.meaning = display.querySelector(".meaning");
const characters = document.getElementById("characters");

let locked = { element: null, i: null };

window.addEventListener("beforeunload", () => {
    localStorage.setItem("bushou-rad-y", radicalsdiv.scrollTop);
    localStorage.setItem("bushou-rad-i", locked.i ?? 0);
    localStorage.setItem("bushou-char-y", characters.scrollTop);
});

radicalsdiv.addEventListener("click", e => {
    const target = e.target.tagName == "SPAN" ? e.target.parentElement : e.target;
    if (locked.element) locked.element.classList.remove("locked");
    target.classList.add("locked");
    locked.element = target;
    locked.i = target.id.match(/\d+/)[0];

    const radical = radicals[locked.i];
    const variants = [radical.character].concat(radical.variants);

    display.character.innerHTML = "";
    display.variants.innerHTML = "";
    if (!radical.variants.length) {
        display.character.textContent = radical.character;

        const span = display.variants.appendChild(document.createElement("SPAN"));
        span.className = "none";
        span.innerText = "none";
    } else {
        variants.forEach((variant, v) => {
            const span = display.character.appendChild(document.createElement("SPAN"));
            span.classList.add("var"+v);
            span.textContent = variant;

            const label = display.variants.appendChild(document.createElement("LABEL"));
            label.textContent = variant;
            const input = label.appendChild(document.createElement("INPUT"));
            input.id = "var"+v
            input.type = "radio";
            input.name = "variant";
            if (!v) input.checked = "checked";
            // label.addEventListener("click", () => { display.character.textContent = variant; });
        });
    }
    display.meaning.innerText = radical.definition;

    characters.innerHTML = "";
    dictionary.forEach(entry => {
        variants.forEach((variant, v) => {
            if (entry.decomposition.includes(variant)) {
                // const div = characters.appendChild(document.createElement("DIV"));
                // div.textContent = char.character;
                // div.classList.add("var"+v);
                const a = characters.appendChild(document.createElement("A"));
                a.classList.add("var"+v);
                a.textContent = entry.character;
                a.href = "/js-zhong/hanzi/cihai?"+entry.id;
            }
        });
    })
});

radicalsdiv.scrollTop = parseInt(localStorage.getItem("bushou-rad-y") || 0);
locked.i = parseInt(localStorage.getItem("bushou-rad-i") || 0);
document.getElementById("rad"+locked.i).click();
characters.scrollTop = parseInt(localStorage.getItem("bushou-char-y") || 0);