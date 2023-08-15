document.getElementById('btn-deposit').addEventListener('click',function(){
    const depositElement=document.getElementById('user-deposit');
    const depositValue=depositElement.value;
    
    const currentTotal=document.getElementById('deposit-total');
    const currentTotalDepositValue=currentTotal.innerText;
    currentTotal.innerText=parseFloat(depositValue)+parseFloat(currentTotalDepositValue);

    const currentBalance=document.getElementById('current-balance');
    const currentBalanceValue=currentBalance.innerHTML;
    currentBalance.innerText=parseFloat(currentBalanceValue)+parseFloat(depositValue);

})

document.getElementById('btn-withdraw').addEventListener('click',function(){
    const currentBalance=document.getElementById('current-balance');
    const currentBalanceValue=currentBalance.innerText;

    const withdrawAmount=document.getElementById('user-withdraw');
    const withdrawAmountValue=withdrawAmount.value;
    const withdrawTotal=document.getElementById('w-total');
    const withdrawTotalValue=withdrawTotal.innerText;
    console.log(document.getElementById('w-total').innerText);
    if (parseFloat(currentBalanceValue)>=parseFloat(withdrawAmountValue)){
        withdrawTotal.innerText=parseFloat(withdrawTotalValue)+parseFloat(withdrawAmountValue);
        currentBalance.innerText=parseFloat(currentBalanceValue)-parseFloat(withdrawAmountValue);
    }
})