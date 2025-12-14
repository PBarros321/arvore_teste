function openPersonModal(name, extra) {
    const modal = document.getElementById('person-modal');
    const photo = document.getElementById('person-photo');

    // Funções auxiliares para evitar "undefined"
    const getDetail = (key) => extra[key] || 'Não Informado';

    // Preenche os campos do modal
    document.getElementById('person-name').innerText = name;
    document.getElementById('person-nickname').innerText = getDetail('nickname');
    document.getElementById('person-birth').innerText = getDetail('birthDate');
    document.getElementById('person-death').innerText = getDetail('deathDate');
    document.getElementById('person-location').innerText = getDetail('location');
    document.getElementById('person-occupation').innerText = getDetail('occupation');
    document.getElementById('person-bio').innerText = getDetail('bio');

    // Foto (usa a URL do extra, ou um placeholder)
    // CERTIFIQUE-SE DE QUE 'img/placeholder.jpg' EXISTE OU MUDE PARA UMA URL VÁLIDA.
    photo.src = extra.photoURL || 'img/placeholder.jpg';

    // Exibe o modal
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