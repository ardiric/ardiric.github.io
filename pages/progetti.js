// Creazione dell'oggetto JSON
// le tecnologie devono essere separate da virgola e spazio
const datiProgetti = [
    { 
        "nome": "TC - Online", 
        "fotoPrincipale": "link_foto_2" ,
        "tecnologie": "PHP, SQL, HTML, CSS, Apache, MySQL, phpMyAdmin, MongoDB"
    }
    ,
    { 
        "nome": "Squealer", 
        "fotoPrincipale": "link_foto_3" ,
        "tecnologie": "React, Node JS, jQuery, MySQL, JavaScript, HTML, CSS"
    }
    ,
    { 
        "nome": "Naboo", 
        "fotoPrincipale": "link_foto_1" ,
        "tecnologie": "Java, FXML, CSS, JavaFX, SceneBuilder, JSON, Telegram Bot"
    }
    ,
    { 
        "nome": "Android Signal Map", 
        "fotoPrincipale": "link_foto_3" ,
        "tecnologie": "Java, Android Studio, XML, Google Maps, MGRS"
    }
    ,
    { 
        "nome": "Role Prevision", 
        "fotoPrincipale": "link_foto_3" ,
        "tecnologie": "Python, Machine Learning, AI"
    }
    ,
    { 
        "nome": "Client-Server Message", 
        "fotoPrincipale": "link_foto_3" ,
        "tecnologie": "Java, Concorrenza, Thread"
    }
    ,
    { 
        "nome": "Card Gestor", 
        "fotoPrincipale": "link_foto_3" ,
        "tecnologie": "Java, GWT, MapDB, JSON, JUnit, Maven"
    }
];

function generaBloccoProgetti() {

    let blocks = `
        <div class="main-content">
            <h2 class="main-content-title">Work in progress</h2>
    `;
    
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