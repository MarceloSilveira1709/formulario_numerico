const form = document.getElementById('form-confirm');

let formValid = false;

function numbervalid (CampA,CampB){
    return CampB > CampA;
}

form.addEventListener('submit', function(e){
    e.preventDefault();
    let CampA = parseFloat(document.getElementById('valor-a').value);
    let CampB = parseFloat(document.getElementById('valor-b').value);

    const messagesucess = "Valido: B maior que A";
    const containermessagesucess = document.querySelector('.success-message');
    
    formValid = numbervalid(CampA,CampB);
    
    if (formValid){
        document.querySelector('.error-message').style.display = 'none';
        containermessagesucess.innerHTML = messagesucess;
        containermessagesucess.style.display = 'block';
        } else {
        containermessagesucess.style.display = '';
        document.querySelector('.error-message').style.display = 'block';
        
    }    
});