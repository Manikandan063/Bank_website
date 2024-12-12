document.getElementById('depositForm').addEventListener('submit', function(event) {
    event.preventDefault(); 


    const depositAmount = document.getElementById('deposit-amount').value;
    const paymentMethod = document.getElementById('payment-method').value;

   
    const currentDate = new Date().toLocaleDateString();


    const depositDetails = {
        date: currentDate,
        amount: depositAmount,
        paymentMethod: paymentMethod
    };

   
    let depositHistory = JSON.parse(localStorage.getItem('depositHistory')) || [];

    
    depositHistory.push(depositDetails);


    localStorage.setItem('depositHistory', JSON.stringify(depositHistory));


    document.getElementById('depositForm').reset();
});
