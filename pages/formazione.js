/*
let formazione = `
<div class="main-content">

    <div class="form-content">
        <p class="data">yyyy - yyyy</p>
        <div id="dot-line">
            <span class="dot"></span>
            <div class="line"></div>
        </div>
        <div>
            <h3 class="form-des">Form des</h3>
            <p class="altre-info">Altre info</p>
        </div>
    </div>

    <div class="form-content">
        <p class="data">yyyy - yyyy</p>
        <div id="dot-line">
            <span class="dot"></span>
            <div class="line"></div>
        </div>
        <div>
            <h3 class="form-des">Form des</h3>
            <p class="altre-info">Altre info</p>
        </div>
    </div>

    <div class="form-content">
        <p class="data">yyyy - yyyy</p>
        <div id="dot-line">
            <span class="dot"></span>
        </div>
        <div>
            <h3 class="form-des">Form des</h3>
            <p class="altre-info">Altre info</p>
        </div>
    </div>

</div>
`;
*/

// Creazione dell'oggetto JSON
const datiFormazione = [
    { 
        "date": "2024 - oggi", 
        "descrizione": "Laurea Magistrale in Informatica" ,
        "info": "Università degli studi di Bologna.<br>Dipartimento di Informatica - Scienza e Ingegneria."
    },
    { 
        "date": "2020 - 2024", 
        "descrizione": "Laurea in Informatica per il Management" ,
        "info": "Università degli studi di Bologna.<br>Dipartimento di Informatica - Scienza e Ingegneria."
    },
    { 
        "date": "2015 - 2020", 
        "descrizione": "Diploma in Sistemi Informativi Aziendali" ,
        "info": "ISIT Bassi-Burgatti, Cento"
    }
];

function generaBloccoFormazione() {

    let blocks = `<div class="main-content">`;
    
    datiFormazione.forEach((item, index) => {

        const isLastItem = index === datiFormazione.length - 1;

        blocks += `
        <div class="form-content">
            <p class="data">${item.date}</p>
            <div id="dot-line">
                <span class="dot"></span>
                ${isLastItem ? '' : '<div class="line"></div>'}
            </div>
            <h3 class="form-des">${item.descrizione}</h3>
            <p class="altre-info">${item.info}</p>
        </div>
        `;

    });
    
    blocks += `</div>`;
    
    main.innerHTML = blocks;

}
