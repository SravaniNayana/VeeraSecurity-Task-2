document.getElementById('interestForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const principal = parseFloat(document.getElementById('principal').value);
    const rate = parseFloat(document.getElementById('rate').value);
    const time = parseFloat(document.getElementById('time').value);

    if (isNaN(principal) || isNaN(rate) || isNaN(time) || principal <= 0 || rate <= 0 || time <= 0) {
        document.getElementById('result').innerText = 'Please enter valid inputs.';
        return;
    }

    const interest = (principal * rate * time) / 100;
    document.getElementById('result').innerText = `Simple Interest: ${interest.toFixed(2)}`;
});