// Creazione dell'oggetto JSON
const datiEsperienza = [
    { 
        "date": "ott 2023 - nov 2023<br>gen 2023 - mar 2023", 
        "descrizione": "Sviluppatore Web (tirocinio)" ,
        "info": "Centro Software S.p.A."
    },
    { 
        "date": "mag 2019 - giu 2019<br>gen 2018 - feb 2018", 
        "descrizione": "Impiegato ufficio mutui (stage)" ,
        "info": "Cassa di Risparmio di Cento"
    }
];

function generaBloccoEsperienza() {

    let blocks = `
        <div class="main-content">
            <h2 class="main-content-title">Esperienza lavorativa</h2>
    `;
    
    datiEsperienza.forEach((item, index) => {

        const isLastItem = index === datiEsperienza.length - 1;

        blocks += `
        <div class="esp-content">
            <p class="data">${item.date}</p>
            <div id="dot-line">
                <span class="dot"></span>
                ${isLastItem ? '' : '<div class="line"></div>'}
            </div>
            <div>
                <h3 class="esp-des">${item.descrizione}</h3>
                <p class="altre-info">${item.info}</p>
            </div>
        </div>
        `;

    });
    
    blocks += `</div>`;
    
    main.innerHTML = blocks;

}
