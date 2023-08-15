document.getElementById('btn-submit').addEventListener('click',function(){
    console.log('btn clicked')
    const emailField=document.getElementById('user-email');
    const email=emailField.value;
    const passField=document.getElementById('user-password');
    const password=passField.value;
    
    if (email==='moshiur.mirage@gmail.com' && password==='1234'){
        window.location.href = 'bank.html';
    }else{
        window.alert('wrong password!')
    }
})