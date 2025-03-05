// Creazione dell'oggetto JSON
const datiFormazione = [
    { 
        "date": "2024 - oggi", 
        "descrizione": "Laurea Magistrale in Informatica" ,
        "info": "Università degli studi di Bologna"
    },
    { 
        "date": "2020 - 2024", 
        "descrizione": "Laurea in Informatica per il Management" ,
        "info": "Università degli studi di Bologna"
    },
    { 
        "date": "2015 - 2020", 
        "descrizione": "Diploma in Sistemi Informativi Aziendali" ,
        "info": "ISIT Bassi-Burgatti, Cento"
    }
];

function generaBloccoFormazione() {

    let blocks = `
        <div class="main-content">
            <h2 class="main-content-title">Formazione</h2>
    `;
    
    datiFormazione.forEach((item, index) => {

        const isLastItem = index === datiFormazione.length - 1;

        blocks += `
        <div class="form-content">
            <p class="data">${item.date}</p>
            <div id="dot-line">
                <span class="dot"></span>
                ${isLastItem ? '' : '<div class="line"></div>'}
            </div>
            <div>
                <h3 class="form-des">${item.descrizione}</h3>
                <p class="altre-info">${item.info}</p>
            </div>
        </div>
        `;

    });
    
    blocks += `</div>`;
    
    main.innerHTML = blocks;

}
