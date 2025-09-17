import { dictionary } from "/js-zhong/dictionary.js"

window.addEventListener("beforeunload", () =>
    localStorage.setItem("cihai-y", document.getElementById("characters").scrollTop));
// characters.scrollTop = parseInt(localStorage.getItem("cihai-y") || 0);

const rem = parseInt(window.getComputedStyle(document.documentElement).getPropertyValue("font-size"));
let search = { input: "", ongoing: false, characters: [] };

document.addEventListener("alpine:init", () => {
    Alpine.store("dictionary", dictionary);
    Alpine.store("rem", rem);
    Alpine.store("search", search);
});
