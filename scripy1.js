document.querySelector('.submitLogIn').addEventListener('click', function () {
    if (!document.getElementById('Username').value) {
      document.querySelector('.Name').classList.remove('Please');
    } else {
      document.querySelector('.Name').classList.add('Please');
    }
    if (
      !document.getElementById('Email').value &&
      !!document.getElementById('Username').value
    ) {
      document.querySelector('.Email').classList.remove('Please');
    } else {
      document.querySelector('.Email').classList.add('Please');
    }
    if (
      !document.getElementById('psw').value &&
      !!document.getElementById('Email').value &&
      !!document.getElementById('Username').value
    ) {
      document.querySelector('.Psw').classList.remove('Please');
    } else if (document.getElementById('psw').Value === undefined) {
      document.querySelector('.Psw').classList.add('Please');
    }
    if (
      !document.getElementById('age').value &&
      !document.getElementById('psw').value === false &&
      !!document.getElementById('Email').value &&
      !!document.getElementById('Username').value
    ) {
      document.querySelector('.Birthday').classList.remove('Please');
    } else {
      document.querySelector('.Birthday').classList.add('Please');
    }
    if (
      !!document.getElementById('Username').value &&
      !!document.getElementById('Email').value &&
      !document.getElementById('psw').value === false &&
      !!document.getElementById('age').value
    ) {
      document.querySelector('.submitLogIn').type = 'submit';
    }
  });
