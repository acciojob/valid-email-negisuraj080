function validEmail(mail) {
  //your JS code here.
	// Check for the presence of '@' and '.'
    if (mail.indexOf('@') === -1 || mail.indexOf('.') === -1) {
        return false;
    }

    // Check for consecutive dots or @ symbols
    if (mail.includes('..') || mail.includes('@@')) {
        return false;
    }

    // Check that '@' comes before '.'
    if (mail.indexOf('@') > mail.lastIndexOf('.')) {
        return false;
    }

    // Check that the domain has at least one character
    if (mail.lastIndexOf('.') - mail.indexOf('@') < 2) {
        return false;
    }

    return true;
}

// Do not change the code below.
const mail = prompt("Enter an email address.");
alert(validEmail(mail));
