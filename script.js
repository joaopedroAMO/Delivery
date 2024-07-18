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

