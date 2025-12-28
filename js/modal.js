const ModalManager = {
    // Cache de elementos para melhor performance
    elements: {
        modal: document.getElementById('person-modal'),
        name: document.getElementById('person-name'),
        photo: document.getElementById('person-photo'),
        nickname: document.getElementById('person-nickname'),
        deathContainer: document.getElementById('container-morte'),
        bio: document.getElementById('person-bio')
    },

    open(name, extra) {
        const { elements } = this;

        // Helper interno para preencher campos
        const fill = (id, value, fallback = "---") => {
            const el = document.getElementById(id);
            if (el) el.innerText = (value && value !== "DD/MM/AAAA") ? value : fallback;
        };

        // Nome e Apelido
        elements.name.innerText = name || "Sem Nome";
        if (extra.nickname && extra.nickname !== "Apelido") {
            elements.nickname.innerText = `(${extra.nickname})`;
            elements.nickname.style.display = "block";
        } else {
            elements.nickname.style.display = "none";
        }

        // Datas e Campos Gerais
        fill('person-birth', extra.birthDate);
        fill('person-location', extra.location);
        fill('person-occupation', extra.occupation);
        fill('person-bio', extra.bio, "Nenhuma biografia disponível.");

        // Lógica de Morte (Esconde se estiver vivo ou data padrão)
        if (extra.deathDate && extra.deathDate.trim() !== "" && extra.deathDate !== "DD/MM/AAAA") {
            fill('person-death', extra.deathDate);
            elements.deathContainer.style.display = "block";
        } else {
            elements.deathContainer.style.display = "none";
        }

        // Imagem com Placeholder
        elements.photo.src = extra.photoURL || 'img/placeholder.jpg';
        elements.photo.onerror = () => {
            elements.photo.src = 'img/placeholder.jpg';
        };

        elements.modal.style.display = "block";
    },

    close() {
        this.elements.modal.style.display = "none";
    }
};

// Event Listeners
document.getElementById('close-modal').onclick = () => ModalManager.close();

window.onclick = (event) => {
    if (event.target === ModalManager.elements.modal) {
        ModalManager.close();
    }
};

// Expondo a função globalmente para o dTree
window.openPersonModal = (name, extra) => ModalManager.open(name, extra);