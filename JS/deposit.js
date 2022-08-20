    // step 01
    document.getElementById('btn-deposit').addEventListener('click',function(){
    // step 02 
    const depositFeild=document.getElementById('deposit');
    const depositAmountString=depositFeild.value;
    const newDepositAmmount=parseFloat(depositAmountString);
    depositFeild.value='';
    if(isNaN(newDepositAmmount)){
      alert('Provide Number Of amount')
      return
   }

    //    step 03
    const depositTotal=document.getElementById('diposit-total');
    const depositSubTotalString=depositTotal.innerText;
    const newDepositSubtotal=parseFloat(depositSubTotalString);
    const subTotaldeposit=newDepositSubtotal+newDepositAmmount;
      depositTotal.innerText=subTotaldeposit;  
      // total balance updating vai +++++

    const totalAmountString=document.getElementById('total-amount');
    const totalAmount=totalAmountString.innerText;
    const totalbalance=parseFloat(totalAmount);
    const subtotalBalance=totalbalance+newDepositAmmount;
    totalAmountString.innerText=subtotalBalance;
    
    
})