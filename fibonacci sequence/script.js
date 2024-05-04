function generateSequence() {
    var numTermsInput = document.getElementById('numTerms');
    var numTerms = parseInt(numTermsInput.value);
  
    // Check if the input is valid
    if (isNaN(numTerms) || numTerms <= 0 || numTerms >= 100) {
      document.getElementById('sequence').innerHTML = '';
      document.getElementById('error').innerHTML = 'Please enter a valid integer between 1 and 99.';
      return;
    }
  
    // Clear error message
    document.getElementById('error').innerHTML = '';
  
    // Generate Fibonacci sequence
    var sequence = [0, 1];
    for (var i = 2; i < numTerms; i++) {
      sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
  
    // Display sequence
    document.getElementById('sequence').innerHTML = 'Fibonacci Sequence: ' + sequence.join(', ');
  }
  