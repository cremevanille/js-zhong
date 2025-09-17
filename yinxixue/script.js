import { syllabary } from "./syllabary.js"

syllabary.finals = (i) => syllabary.reduce((acc,syl) => syl.initial == i ? acc.concat(syl.final) : acc, []);
syllabary.initials = (f) => syllabary.reduce((acc,syl) => syl.final == f && syl.initial != -1 ? acc.concat(syl.initial) : acc, []);

const search = document.getElementById("search");
const display = document.querySelector("#tones .cells");
const corner = document.querySelector("#initials .cell");
const initials = document.querySelectorAll("#initials .row .cell");
const finals = document.querySelectorAll("#finals .cell");
const specials = document.querySelectorAll("#specials .cell");

const diatrics = ['\u0304', '\u0301', '\u030C', '\u0300', ''];
function show(syl) {
    display.innerHTML = "";
    if (!syl) return;
    for (let t=0; t<5; t++) {
        const scs = syl.characters[t];
        if (!scs.length) {
            const tone = display.appendChild(document.createElement("RUBY"));
            tone.appendChild(document.createElement("RT"));
            continue;
        }

        const tone = display.appendChild(document.createElement("DIV"));

        const char = tone.appendChild(document.createElement("SPAN"));
        let scit = 0;
        char.innerText = scs[scit];
        char.addEventListener("click", () => {
            navigator.clipboard.writeText(scs[scit]);
            if (++scit == scs.length) scit = 0;
            char.innerText = scs[scit];
            // tone.childNodes[0].nodeValue = scs[scit];
        })

        const pinyin = tone.appendChild(document.createElement("SPAN"));
        pinyin.innerText = syl.pinyin.replace(
            /(ch|zh|sh|[mpbfntdczslrqjxkghwy])?(i|u)?([aeiou])(.*)/,
            (_, i, m, n, c) => (i||"") + (m||"") + n + diatrics[t] + c
        );
    }
}

function unlock(table) {
    if (!table.locked) return;
    table.locked.cell.locked = false;
    table.locked.cell.classList.remove("locked");
    table.locked = null;
}

function lock(table, cell, id) {
    unlock(table);
    cell.locked = true;
    table.locked = {cell, id};
    cell.classList.add("locked");
}

function shadow(table, execptions=[]) {
    let j = 0;
    execptions.forEach(f => {
        while (j<f) table[j++].classList.add("shadow");
        table[j++].classList.remove("shadow");
    });
    while (j<table.length) table[j++].classList.add("shadow");
}

corner.addEventListener("click", () => {
    search.value = "";
    if (corner.locked) {
        show(null);
        unlock(initials);
        finals.forEach(fin => fin.classList.remove("shadow"));

        unlock(specials);
        return;
    }

    specials.forEach(spe => spe.classList.remove("shadow"));

    let syl = undefined;
    if (finals.locked) {
        syl = syllabary.find(s => {
            if (s.initial != -1) return false;
            return s.final == finals.locked.id;
        });
    }
    if (!syl) {
        unlock(finals);
        corner.classList.remove("shadow");
        initials.forEach(ini => ini.classList.remove("shadow"));
    }

    lock(initials, corner, -1);
    show(syl);
    shadow(finals, syllabary.finals(-1));
});
initials.forEach((cell, i) => {
    if (!cell.innerHTML) return;
    cell.addEventListener("click", () => {
        search.value = "";
        if (cell.locked) {
            show(null);
            unlock(initials);
            finals.forEach(fin => fin.classList.remove("shadow"));
            specials.forEach(spe => spe.classList.remove("shadow"));
            return;
        }

        unlock(specials);
        specials.forEach(spe => spe.classList.add("shadow"));

        let syl = undefined;
        if (finals.locked) {
            syl = syllabary.find(s => {
                if (s.initial != i) return false;
                return s.final == finals.locked.id;
            });
        }
        if (!syl) {
            unlock(finals);
            corner.classList.remove("shadow");
            initials.forEach(ini => ini.classList.remove("shadow"));
        }

        lock(initials, cell, i);
        show(syl);

        shadow(finals, syllabary.finals(i));
    });
});
finals.forEach((cell, f) => {
    if (!cell.innerHTML) return;
    cell.addEventListener("click", () => {
        search.value = "";
        if (cell.locked) {
            show(null);
            unlock(finals);
            corner.classList.remove("shadow");
            initials.forEach(ini => ini.classList.remove("shadow"));
            return;
        }

        unlock(specials);

        let syl = undefined;
        if (initials.locked) {
            syl = syllabary.find(s => {
                if (s.final != f) return false;
                return s.initial == initials.locked.id;
            });
            if (syl) {
                if (syllabary.finals(-1).includes(f)) corner.classList.remove("shadow");
                else corner.classList.add("shadow");
            }
        }
        if (!syl) {
            syl = syllabary.find(s => {
                if (s.final != f) return false;
                return s.initial == -1;
            });
            if (syl) {
                lock(initials, corner, -1);
                corner.classList.remove("shadow");

                shadow(finals, syllabary.finals(-1));
            } else {
                unlock(initials);
                finals.forEach(fin => fin.classList.remove("shadow"));
                corner.classList.add("shadow");
            }
        }

        lock(finals, cell, f);
        show(syl);

        shadow(initials, syllabary.initials(f));
    });
});
specials.forEach((cell, s) => {
    cell.addEventListener("click", () => {
        search.value = "";
        if (cell.locked) {
            unlock(specials);
            unlock(initials);

            initials.forEach(ini => ini.classList.remove("shadow"));
            return;
        }

        lock(specials, cell, -s-1);
        lock(initials, corner, -1);
        unlock(finals);

        corner.classList.remove("shadow");
        initials.forEach(ini => ini.classList.add("shadow"));

        shadow(finals, syllabary.finals(-1));

        specials.forEach(spe => spe.classList.remove("shadow"));

        show(syllabary.find(syl => syl.final == -s-1))
    });
});

search.addEventListener("keyup", () => {
    if (!search.value) {
        show(null);
        unlock(initials);
        unlock(finals);
        unlock(specials);
        corner.classList.remove("shadow");
        initials.forEach(ini => ini.classList.remove("shadow"));
        finals.forEach(fin => fin.classList.remove("shadow"));
        specials.forEach(spe => spe.classList.remove("shadow"));
        return;
    }

    const syl = syllabary.find(s => s.pinyin == search.value);
    if (!syl) {
        show(null);
        unlock(initials);
        unlock(finals);
        unlock(specials);
        corner.classList.remove("shadow");
        initials.forEach(ini => ini.classList.remove("shadow"));
        finals.forEach(fin => fin.classList.remove("shadow"));
        specials.forEach(spe => spe.classList.remove("shadow"));
        return;
    }
    show(syl);
    if (syl.final < 0) {
        unlock(finals);
        lock(initials, corner, -1);
        lock(specials, specials[-syl.final-1], syl.final);
        return;
    }

    unlock(specials);
    if (syl.initial == -1) {
        lock(initials, corner, -1);
        shadow(finals, syllabary.finals(-1));
    }
    else {
        lock(initials, initials[syl.initial], syl.initial);
        shadow(finals, syllabary.finals(syl.initial));
        specials.forEach(spe => spe.classList.add("shadow"));
    }

    lock(finals, finals[syl.final], syl.final);

    shadow(initials, syllabary.initials(syl.final));
    if (syllabary.finals(-1).includes(syl.final)) corner.classList.remove("shadow");
    else corner.classList.add("shadow");
});
