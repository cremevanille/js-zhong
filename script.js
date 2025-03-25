import { dictionary } from "./dictionary.js";

let search = document.getElementById("search");
let display = document.getElementById("display");
let corner = document.querySelector("#initials td");
let initials = document.querySelectorAll("#initials tbody td");
let finals = document.querySelectorAll("#finals tbody td");
let specials = document.querySelectorAll("#specials tbody td");

function show(syl) {
    display.innerHTML = "";
    if (!syl) return;
    for (let t=0; t<5; t++) {
        let sc = syl.simps[t];
        let tc = syl.trads[t];
        if (!sc) continue;
        let tone = document.createElement("DIV");
        let char = document.createElement("SPAN");
        let trad = document.createElement("SPAN");
        let pinyin = document.createElement("SPAN");

        tone.className = "tone";
        char.className = "character simplified";
        trad.className = "character traditional";
        // pinyin.className = "pinyin";

        char.innerText = sc;
        trad.innerText = tc;

        let d = ['\u0304', '\u0301', '\u030C', '\u0300', ''][t];
        pinyin.innerText = syl.pinyin.replace(/(ch|zh|sh|[mpbfntdczslrqjxkghwy])?(i|u)?([aeiou])(.*)/, (_, i, m, n, c) => (i||"") + (m||"") + n + d + c);

        tone.appendChild(char);
        tone.appendChild(trad);
        tone.appendChild(pinyin);
        display.appendChild(tone);
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
        syl = dictionary.find(s => {
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

    let j = 0;
    dictionary.n2f.forEach(f => {
        while (j<f) finals[j++].classList.add("shadow");
        finals[j++].classList.remove("shadow");
    });
    while (j<finals.length) finals[j++].classList.add("shadow");
});
initials.forEach((cell, i) => {
    cell.addEventListener("click", () => {
        search.value = "";
        if (cell.locked) {
            show(null);
            unlock(initials);
            finals.forEach(fin => fin.classList.remove("shadow"));
            return;
        }

        unlock(specials);
        specials.forEach(spe => spe.classList.add("shadow"));

        let syl = undefined;
        if (finals.locked) {
            syl = dictionary.find(s => {
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

        let j = 0;
        dictionary.i2f[i].forEach(f => {
            while (j<f) finals[j++].classList.add("shadow");
            finals[j++].classList.remove("shadow");
        });
        while (j<finals.length) finals[j++].classList.add("shadow");
    });
});
finals.forEach((cell, f) => {
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

        let syl = dictionary.find(s => {
            if (s.final != f) return false;
            return s.initial == (initials.locked?.id ?? -1);
        });
        if (initials.locked && syl) {
            if (dictionary.n2f.includes(f)) corner.classList.remove("shadow");
            else corner.classList.add("shadow");
        } else if (syl) {
            lock(initials, corner, -1);
            corner.classList.remove("shadow");

            let j = 0;
            dictionary.n2f.forEach(f => {
                while (j<f) finals[j++].classList.add("shadow");
                finals[j++].classList.remove("shadow");
            });
            while (j<finals.length) finals[j++].classList.add("shadow");
        } else {
            unlock(initials);
            finals.forEach(fin => fin.classList.remove("shadow"));
            corner.classList.add("shadow");
        }

        lock(finals, cell, f);
        show(syl);

        let j = 0;
        dictionary.f2i[f].forEach(i => {
            while (j<i) initials[j++].classList.add("shadow");
            initials[j++].classList.remove("shadow");
        });
        while (j<initials.length) initials[j++].classList.add("shadow");
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

        let j = 0;
        dictionary.n2f.forEach(f => {
            while (j<f) finals[j++].classList.add("shadow");
            finals[j++].classList.remove("shadow");
        });
        while (j<finals.length) finals[j++].classList.add("shadow");

        specials.forEach(spe => spe.classList.remove("shadow"));

        show(dictionary.find(syl => syl.final == -s-1))
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

    let syl = dictionary.find(s => s.pinyin == search.value);
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

        let j = 0;
        dictionary.n2f.forEach(f => {
            while (j<f) finals[j++].classList.add("shadow");
            finals[j++].classList.remove("shadow");
        });
        while (j<finals.length) finals[j++].classList.add("shadow");
    }
    else {
        lock(initials, initials[syl.initial], syl.initial);

        let j = 0;
        dictionary.i2f[syl.initial].forEach(f => {
            while (j<f) finals[j++].classList.add("shadow");
            finals[j++].classList.remove("shadow");
        });
        while (j<finals.length) finals[j++].classList.add("shadow");

        specials.forEach(spe => spe.classList.add("shadow"));
    }

    lock(finals, finals[syl.final], syl.final);

    let j = 0;
    dictionary.f2i[syl.final].forEach(i => {
        while (j<i) initials[j++].classList.add("shadow");
        initials[j++].classList.remove("shadow");
    });
    while (j<initials.length) initials[j++].classList.add("shadow");
    if (dictionary.n2f.includes(syl.final)) corner.classList.remove("shadow");
    else corner.classList.add("shadow");
});
