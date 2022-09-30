let balance1 = document.querySelector('.balance').textContent;
console.log(balance1);
let numberBalance = balance1.split(',');
console.log(numberBalance);
let NumberBalance = Number(numberBalance.join(''));

let time = new Date().getHours();

if (0 <= time && time <= 12) {
  document.querySelector('.login1').textContent = 'Good Morning Guest';
} else if (12 < time && time <= 17) {
  document.querySelector('.login1').textContent = 'Good Afternoon Guest';
} else if (17 < time && time <= 24) {
  document.querySelector('.login1').textContent = 'Good Evening Guest';
}

let day =
  new Date().getDate() +
  '/' +
  (new Date().getMonth() + 1) +
  '/' +
  new Date().getFullYear() +
  '   ' +
  new Date().getHours() +
  ':' +
  new Date().getMinutes() +
  ':' +
  new Date().getSeconds();
document.querySelector('.h4').textContent = `As of ${day}`;
let NewDay =
  new Date().getDate() +
  '/' +
  (new Date().getMonth() + 1) +
  '/' +
  new Date().getFullYear();
document.querySelector('.withdrawaltime').textContent = NewDay;
document.querySelector('.withdrawaltime1').textContent = NewDay;
document.querySelector('.withdrawaltime2').textContent = NewDay;
document.querySelector('.withdrawaltime3').textContent = NewDay;
let inside = 0;
document.querySelector('.buttoni').addEventListener('click', function () {
  let Loan = Number(document.querySelector('.requestButton').value);

  NumberBalance = NumberBalance + Loan;
  console.log(NumberBalance);
  let finalBalance = NumberBalance.toString().replace(
    /\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g,
    ','
  );

  document.querySelector('.balance').textContent = finalBalance;
  if (!Loan) {
    document.querySelector('.have').classList.remove('NotSelected');
  } else {
    inside = Loan + inside;
    document.querySelector('.have').classList.add('NotSelected');
    document.querySelector('.in').textContent = ' In' + ' ' + '$' + inside;
    document.querySelector('.money3').textContent =
      document.querySelector('.money2').textContent;
    document.querySelector('.money2').textContent =
      document.querySelector('.money1').textContent;
    document.querySelector('.money1').textContent =
      document.querySelector('.money').textContent;
    document.querySelector('.money').textContent = `$${Loan}`;

    document.querySelector('.list5').textContent =
      document.querySelector('.list4').textContent;

    document.querySelector('.list4').textContent =
      document.querySelector('.list3').textContent;
    console.log(document.querySelector('.list4').textContent);

    document.querySelector('.list3').textContent =
      document.querySelector('.list2').textContent;
    document.querySelector('.list2').textContent = 'WITHDRAWAL';
  }
  for (let i = 2; i < 6; i++) {
    if (
      document.querySelector(`.list${i}`).textContent.includes('WITHDRAWAL')
    ) {
      document.querySelector(`.list${i}`).style.background = 'red';
    } else {
      document.querySelector(`.list${i}`).style.background = 'green';
    }
  }
  document.querySelector('.requestButton').value = null;
});
let out = 0;
document.querySelector('.buton').addEventListener('click', function () {
  let Loan1 = Number(document.querySelector('.inputtransfer1').value);

  NumberBalance = NumberBalance - Loan1;
  console.log(NumberBalance);
  let finalBalance = NumberBalance.toString().replace(
    /\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g,
    ','
  );

  if (!document.querySelector('.inputtransfer').value) {
    document.querySelector('.SelectName').classList.remove('please');
  } else if (!Loan1) {
    document.querySelector('.SelectName').classList.remove('please');
  } else {
    out = Loan1 + out;
    document.querySelector('.SelectName').classList.add('please');
    document.querySelector('.out').textContent = 'Out' + ' ' + '$' + out;
    document.querySelector('.balance').textContent = finalBalance;
    document.querySelector('.money3').textContent =
      document.querySelector('.money2').textContent;
    document.querySelector('.money2').textContent =
      document.querySelector('.money1').textContent;
    document.querySelector('.money1').textContent =
      document.querySelector('.money').textContent;
    document.querySelector('.money').textContent = `$${Loan1}`;

    document.querySelector('.list5').textContent =
      document.querySelector('.list4').textContent;

    document.querySelector('.list4').textContent =
      document.querySelector('.list3').textContent;
    console.log(document.querySelector('.list4').textContent);

    document.querySelector('.list3').textContent =
      document.querySelector('.list2').textContent;
    document.querySelector('.list2').textContent = 'DEPOSIT';
  }
  for (let i = 2; i < 6; i++) {
    if (
      document.querySelector(`.list${i}`).textContent.includes('WITHDRAWAL')
    ) {
      document.querySelector(`.list${i}`).style.background = 'red';
    } else {
      document.querySelector(`.list${i}`).style.background = 'green';
    }
  }
  document.querySelector('.inputtransfer1').value = null;
});

document.querySelector('.buton1').addEventListener('click', function () {
  if (!document.getElementById('text123').value) {
    document.querySelector('.fill').classList.remove('boxes');
  } else {
    document.querySelector('.closed123').classList.remove('account');
    document.querySelector('.fill').classList.add('boxes');
  }
});
document.querySelector('.botun').addEventListener('click', function () {
  document.querySelector('.closed123').classList.add('account');
  document.getElementById('text123').value = null;
  document.getElementById('password123').value = '';
});
