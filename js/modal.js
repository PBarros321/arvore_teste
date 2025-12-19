function openPersonModal(name, extra) {
    const modal = document.getElementById('person-modal');
    const photo = document.getElementById('person-photo');
    const nicknameElement = document.getElementById('person-nickname');
    const containerMorte = document.getElementById('container-morte');

    // Função para preencher o texto ou colocar "---" se estiver vazio
    const setField = (id, value) => {
        document.getElementById(id).innerText = value && value !== "DD/MM/AAAA" ? value : "---";
    };

    // Preenche o nome
    document.getElementById('person-name').innerText = name;

    // Trata o Apelido de forma especial: se não tiver, ele some
    if (extra.nickname && extra.nickname !== "Apelido") {
        nicknameElement.innerText = "(" + extra.nickname + ")";
        nicknameElement.style.display = "block";
    } else {
        nicknameElement.style.display = "none";
    }

    // Trata a data de morte de forma especial: se não tiver, o campo some
    if (extra.deathDate && extra.deathDate.trim() !== "" && extra.deathDate !== "DD/MM/AAAA") {
        document.getElementById('person-death').innerText = extra.deathDate;
        containerMorte.style.display = "block"; // Mostra se tiver data
    } else {
        containerMorte.style.display = "none";  // Esconde se estiver vazio ou padrão
    }

    // Preenche os outros campos usando a função auxiliar
    setField('person-birth', extra.birthDate);
    setField('person-death', extra.deathDate);
    setField('person-location', extra.location);
    setField('person-occupation', extra.occupation);
    setField('person-bio', extra.bio);

    // Lógica da Foto
    photo.onerror = function () {
        photo.src = 'img/placeholder.jpg';
        photo.onerror = null;
    };

    if (extra.photoURL && extra.photoURL.trim().length > 0) {
        photo.src = extra.photoURL;
    } else {
        photo.src = 'img/placeholder.jpg';
    }

    modal.style.display = "block";
}

function closePersonModal() {
    document.getElementById('person-modal').style.display = "none";
}

// Lógica para fechar o modal ao clicar no 'x'
document.getElementById('close-modal').onclick = closePersonModal;

// Lógica para fechar o modal ao clicar fora dele
window.onclick = function (event) {
    const modal = document.getElementById('person-modal');
    if (event.target == modal) {
        closePersonModal();
    }
}
// Exporta a função para que `tree.js` possa usá-la
window.openPersonModal = openPersonModal;