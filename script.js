document.getElementById('billTotal').addEventListener('input', validateInput);
document.getElementById('tipPercentage').addEventListener('input', function() {
    updateDisplayTipPercentage(this.value);
    updateCalculation();
});

function validateInput() {
    const billTotalInput = document.getElementById('billTotal');
    const billTotal = billTotalInput.value;
    
    if (isNaN(billTotal) || billTotal < 0 || !/^\d*\.?\d*$/.test(billTotal)) {
        billTotalInput.setCustomValidity("Please enter a valid positive number.");
        billTotalInput.reportValidity();
    } else {
        billTotalInput.setCustomValidity("");
        updateCalculation();
    }
}

function updateDisplayTipPercentage(value) {
    document.getElementById('displayTipPercentage').value = value + '%';
}

function updateCalculation() {
    const billTotalInput = document.getElementById('billTotal');
    const billTotal = parseFloat(billTotalInput.value) || 0;
    const tipPercentage = parseInt(document.getElementById('tipPercentage').value) || 0;
    
    const tipAmount = billTotal * (tipPercentage / 100);
    const totalBillWithTip = billTotal + tipAmount;
    
    document.getElementById('tipAmount').value = tipAmount.toFixed(2);
    document.getElementById('totalBillWithTip').value = totalBillWithTip.toFixed(2);
}
