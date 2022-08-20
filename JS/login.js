// step 01  get element and function call btn submit
document.getElementById('btn-submit').addEventListener('click',function(){
//    step 02 inpuut email 
    const emailFeild=document.getElementById('email-feild');
    const email=emailFeild.value;

    // step 03  set  password 
    const passwordfeild=document.getElementById('password-feild');
    const getPassword=passwordfeild.value;
    console.log(email,getPassword)
    // step 4 verify email & password 

    if(email==='mahedihasandu1@gmail.com'&& getPassword === 'mahedihasan'){
        window.location.href='bank.html';
    }

    else{
        alert('invalid User ,Plesae chake Youre Username or Password');
    }
    
    email.value=''
})