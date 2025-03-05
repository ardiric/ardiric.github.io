// Creazione dell'oggetto JSON
// le tecnologie devono essere separate da virgola e spazio
const datiProgetti = [
    { 
        "nome": "Progetto 1", 
        "fotoPrincipale": "link_foto_1" ,
        "tecnologie": "tec1, tec2, tec3, tec4, tec5, tec6"
    },
    { 
        "nome": "Progetto 2", 
        "fotoPrincipale": "link_foto_2" ,
        "tecnologie": "tec1, tec2, tec3"
    },
    { 
        "nome": "Progetto 3", 
        "fotoPrincipale": "link_foto_3" ,
        "tecnologie": "tec1, tec2"
    }
];

function generaBloccoProgetti() {

    let blocks = `
        <div class="main-content">
            <h2 class="main-content-title">Progetti</h2>
    `;

    blocks += `<p>Work in progress</p>`;
    
    datiProgetti.forEach(item => {

        blocks += `
        <div class="single-project">
            <h3>${item.nome}</h3>
            <img src="${item.fotoPrincipale}" alt="Immagine progetto">
            <ol>
        `;
        
        const tecnologie = item.tecnologie.split(', ');

        tecnologie.forEach(tecnologia => {
            blocks += `<li>${tecnologia}</li>`;
        });
        
        blocks += `</ol></div>`;

    });
    
    blocks += `</div>`;
    
    main.innerHTML = blocks;

}
