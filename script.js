async function setLang(lang) {
const res = await fetch(`lang/${lang}.json`);
const data = await res.json();

document.getElementById("about-text").innerText = data.about;

const exp = document.getElementById("experience-list");
exp.innerHTML = "";
data.experience.forEach(e => {
let li = document.createElement("li");
li.innerText = e;
exp.appendChild(li);
});

const skills = document.getElementById("skills-list");
skills.innerHTML = "";
data.skills.forEach(s => {
let li = document.createElement("li");
li.innerText = s;
skills.appendChild(li);
});
}

setLang('en');
