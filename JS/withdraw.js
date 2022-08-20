
document.getElementById('btn-withdraw').addEventListener('click',function(){
const totalwithdrowFeild=document.getElementById('withdraw');
const totalwithdrowString=totalwithdrowFeild.value;
const totalWithdrow=parseFloat(totalwithdrowString);

totalwithdrowFeild.value='';

if(isNaN(totalWithdrow)){
   alert('Provide Number Of amount')
   return
}

const withdraw=document.getElementById('withdraw-total');
const subWithdrow=withdraw.innerText;
const withdrowAmount=parseFloat(subWithdrow);


const balanceFeild=document.getElementById('total-amount');
const balanceString=balanceFeild.innerText;
const balanceTotal=parseFloat(balanceString);



if(totalWithdrow > balanceTotal){
    alert('Tor Baper bank Naki');
   return; 
}
const bankWithdrow=totalWithdrow+ withdrowAmount;
withdraw.innerText=bankWithdrow;

const subBalance=balanceTotal-totalWithdrow;
balanceFeild.innerText=subBalance;



})