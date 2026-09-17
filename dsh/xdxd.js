function value() {

    let zahl = Math.floor(Math.random() * 7);
    let zufall = ["-3", "-2", "-1", "0", "1", "2", "3"];

    document.getElementById("zufall").textContent = zufall[zahl];
}
value()

function zaehlen() {

    let zaehler = 0

    let zaehlerAnzeige = document.getElementById("zaehlerAnzeige");
    let erhoehenbutton = document.getElementById("erhoehenbutton");
    let verringernbutton = document.getElementById("verringernbutton");

    erhoehenbutton.addEventListener("click", () => {
        zaehler = Math.min(10, zaehler + 1);
        zaehlerAnzeige.textContent = zaehler;
    });

    verringernbutton.addEventListener("click", () => {
        zaehler = Math.max(-10, zaehler - 1);
        zaehlerAnzeige.textContent = zaehler;
    });
}
zaehlen()

function begruessung(){

    let name = eingabe.value;

    ausgabe.textContent = `Hallo ${name}! 👋`;
}

let eingabe = document.getElementById("name");
                eingabe.addEventListener("input", begruessung);
let  ausgabe = document.getElementById("ausgabe");


function neuerSpruch() {

    if(false) {
        fetch("https://api.zitat-service.de/v1/quote?language=de")
            .then(res => res.json())
        .then(data => document.getElementById("spruch").textContent = data.quote)
    }

    let anfang = ["Manchmal muss man einfach", "Nur wer sein Ziel kennt, kann", "Das Leben ist zu kurz, um"];
    let mitte = ["heimlich Kekse im Bett zu essen", "die eigenen Fehler ignorieren", "die Komfortzone komplett verlassen"];
    let ende = ["weil es die Seele wärmt", "ohne Rücksicht auf Verluste", "um die Weltherrschaft zu übernehmen"];
    let emoji = ["✨", "🦄", "😂", "🥇", "🥳"];

    function zufall(array) {
        let position =
            Math.floor(Math.random() * array.length);

        return array[position];
    }

    let text = `${zufall(emoji)} ${zufall(anfang)} ${zufall(mitte)} ${zufall(ende)}`;
                document.getElementById("spruchText").textContent = text;

}
neuerSpruch()

let button = document.getElementById("button");
    button.addEventListener("click", neuerSpruch);


function wechselTheme(theme) {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
}
    let themeDropdown = document.getElementById("dropdown");
    let theme = localStorage.getItem("theme");

    if (theme) {
        document.getElementById("dropdown").value = theme;
    }

    wechselTheme(themeDropdown.value);

    themeDropdown.addEventListener("change", (event) => {
        wechselTheme(event.target.value);
});
