function a(){
    const userName = document.querySelector('#username').value;
    const userEndereco = document.querySelector('#address').value;
    const loginContainer = document.getElementsByClassName('login')[0];
    const addressDisplay = document.querySelector('#addressDisplay');

    if(userName == "" || userEndereco == ""){
        alert("digite algo valido nos campos");
        return;
    }else{

    }

    loginContainer.style.display = "none"
    addressDisplay.innerHTML = userEndereco;
}

function toggleLike(element) {
    const heartIcon = element.querySelector('.heart-icon');
    const likeDiv = document.getElementsByClassName('like-container')[0];
    heartIcon.style.color = heartIcon.style.color === 'red' ? 'currentcolor' : 'red';
    
    likeDiv.style.display = "block";
    likeDiv.classList.remove('fade-out');
    
    setTimeout(function() {
        likeDiv.classList.add('fade-out');
        
        setTimeout(function() {
            likeDiv.style.display = "none";
        }, 500); // Tempo da animação de fade-out
    }, 3000);
}

const iconNewAddres = document.getElementsByClassName('newInput')[0];
const NewAddressBox = document.querySelector('#trocar-endereco');

function openNewAddress() {
    if (NewAddressBox.style.display === "none" || NewAddressBox.style.display === "") {
        NewAddressBox.style.display = "flex";
        NewAddressBox.classList.remove('close'); // Garante que a classe de fechamento seja removida
        iconNewAddres.style.transform = "rotate(180deg)";
    } else {
        closeAddressBox();
    }
}

function closeAddressBox() {
    setTimeout(function() {
        NewAddressBox.classList.add('close');
        setTimeout(function() {
            NewAddressBox.style.display = "none";
            NewAddressBox.classList.remove('close');
        }, 200); 
    }, 250);
    iconNewAddres.style.transform = "rotate(0deg)";
}

function trocarEndereco() {
    const addressDisplay = document.querySelector('#addressDisplay');
    const addresUser = document.querySelector('#newAddress').value;

    if (addresUser === "") {
        closeAddressBox();
        return;
    }

    addressDisplay.innerHTML = addresUser;
    NewAddressBox.style.display = "flex";
    NewAddressBox.classList.remove('close'); // Garante que a classe de fechamento seja removida

    closeAddressBox();
}
