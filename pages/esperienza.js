/*
let esperienza = `
<div class="main-content">

    <div class="esp-content">
        <p class="data">yyyy - yyyy</p>
        <div id="dot-line">
            <span class="dot"></span>
            <div class="line"></div>
        </div>
        <div>
            <h3 class="esp-des">Esp des</h3>
            <p class="altre-info">Altre info</p>
        </div>
    </div>

    <div class="esp-content">
        <p class="data">yyyy - yyyy</p>
        <div id="dot-line">
            <span class="dot"></span>
            <div class="line"></div>
        </div>
        <div>
            <h3 class="esp-des">Esp des</h3>
            <p class="altre-info">Altre info</p>
        </div>
    </div>

    <div class="esp-content">
        <p class="data">yyyy - yyyy</p>
        <div id="dot-line">
            <span class="dot"></span>
        </div>
        <div>
            <h3 class="esp-des">Esp des</h3>
            <p class="altre-info">Altre info</p>
        </div>
    </div>

</div>
`;
*/

// Creazione dell'oggetto JSON
const datiEsperienza = [
    { 
        "date": "ott 2023 - nov 2023<br>gen 2023 - mar 2023", 
        "descrizione": "Sviluppatore Web (tirocinio) presso Centro Software S.p.A." ,
        "info": "Mansioni:<br>- sviluppo sito web<br>- creazione applicazione web per Smart TV e del relativo backend"
    },
    { 
        "date": "mag 2019 - giu 2019<br>gen 2018 - feb 2018", 
        "descrizione": "Impiegato ufficio mutui (stage) presso Cassa di Risparmio di Cento" ,
        "info": "Mansioni:<br>- inserimento dati relativi ai mutui nel sistema interno<br>- rapporti con i notai per richiedere copie digitali dei contratti"
    }
];

function generaBloccoEsperienza() {

    let blocks = `<div class="main-content">`;
    
    datiEsperienza.forEach((item, index) => {

        const isLastItem = index === datiEsperienza.length - 1;

        blocks += `
        <div class="esp-content">
            <p class="data">${item.date}</p>
            <div id="dot-line">
                <span class="dot"></span>
                ${isLastItem ? '' : '<div class="line"></div>'}
            </div>
            <h3 class="esp-des">${item.descrizione}</h3>
            <p class="altre-info">${item.info}</p>
        </div>
        `;

    });
    
    blocks += `</div>`;
    
    main.innerHTML = blocks;

}
