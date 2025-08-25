// Log Out functionality
document.getElementById('log-out').addEventListener('click', function () {
  window.location.href = './index.html';
});

// get input value Converted Number function
function getInputValueNumber(id) {
  return parseInt(document.getElementById(id).value);
}

// get inner Text function
function getInnerTextNumber(id) {
  const element = document.getElementById(id);
  const elementValue = element.innerText;
  const elementNumber = parseInt(elementValue);
  return elementNumber;
}

// set inner text function
function setInnerText(value) {
  const availableBalance = document.getElementById('available-balance');
  availableBalance.innerText = value;
}

// Toggling feature section

// add money
document
  .getElementById('add-money-section')
  .addEventListener('click', function (e) {
    const allsections = document.getElementsByClassName('form');
    for (const section of allsections) {
      section.style.display = 'none';
    }
    document.getElementById('add-money-parent').style.display = 'block';
  });

//  Cash out
document
  .getElementById('cash-out-section')
  .addEventListener('click', function (e) {
    const allsections = document.getElementsByClassName('form');
    for (const section of allsections) {
      section.style.display = 'none';
      section.style.background = 'none';
    }
    document.getElementById('cash-out-parent').style.display = 'block';
    document.getElementById('cash-out-section').style.background = 'red';
  });

//  Transfer Money
document
  .getElementById('transfer-money-section')
  .addEventListener('click', function (e) {
    const allsections = document.getElementsByClassName('form');
    for (const section of allsections) {
      section.style.display = 'none';
    }
    document.getElementById('transfer-money-parent').style.display = 'block';
  });

// Get Bonus
document
  .getElementById('get-bonus-section')
  .addEventListener('click', function (e) {
    const allsections = document.getElementsByClassName('form');
    for (const section of allsections) {
      section.style.display = 'none';
    }
    document.getElementById('get-bonus-parent').style.display = 'block';
  });

// pay bill
document
  .getElementById('pay-bill-section')
  .addEventListener('click', function (e) {
    const allsections = document.getElementsByClassName('form');
    for (const section of allsections) {
      section.style.display = 'none';
    }
    document.getElementById('pay-bill-parent').style.display = 'block';
  });

// Transation Money
document
  .getElementById('transaction-history-section')
  .addEventListener('click', function (e) {
    const allsections = document.getElementsByClassName('form');
    for (const section of allsections) {
      section.style.display = 'none';
    }
    document.getElementById('transaction-history-parent').style.display =
      'block';
  });

// ======================================
const pinDigit = 1234;
// Add Money functionality
document
  .getElementById('add-money-btn')
  .addEventListener('click', function (e) {
    e.preventDefault();
    let availableBalance = getInnerTextNumber('available-balance');
    const bankAccountNumber = getInputValueNumber('bank-account-number');
    if (bankAccountNumber < 11) {
      return alert('Invalid Account');
    }
    const pinNumber = getInputValueNumber('pin-number');
    if (pinNumber !== pinDigit) {
      return alert('invalid Pin');
    }
    const addAmount = getInputValueNumber('add-amount');
    if (addAmount <= 0) {
      return alert('Invalid Amaount');
    }
    const totalAmaount = availableBalance + addAmount;
    setInnerText(totalAmaount);
  });

//  Cash out functionality
document.getElementById('Withdraw-btn').addEventListener('click', function (e) {
  e.preventDefault();
  const availableBalance = getInnerTextNumber('available-balance');
  const agentAccountNumber = getInputValueNumber('agent-account-number');
  if (agentAccountNumber < 11) {
    return alert('Invalid Account');
  }
  const pinNumber = getInputValueNumber('withdraw-pin-number');
  if (pinNumber !== pinDigit) {
    return alert('invalid Pin');
  }
  const withdrawAmount = getInputValueNumber('withdraw-amount');
  if (withdrawAmount <= 0 && withdrawAmount <= availableBalance) {
    return alert('Invalid Amaount');
  }
  const totalAmaount = availableBalance - withdrawAmount;
  setInnerText(totalAmaount);
});

//  Transfer Money functionality
document.getElementById('transfer-btn').addEventListener('click', function (e) {
  e.preventDefault();
  const availableBalance = getInnerTextNumber('available-balance');
  const userAccountNumber = getInputValueNumber('user-account-number');
  if (userAccountNumber < 11) {
    return alert('Invalid User Account');
  }
  const pinNumber = getInputValueNumber('transfer-pin-number');
  if (pinNumber !== pinDigit) {
    return alert('invalid Pin');
  }
  const transferAmount = getInputValueNumber('transfer-amount');
  if (transferAmount <= 0 && transferAmount <= availableBalance) {
    return alert('Invalid Amaount');
  }
  const totalAmaount = availableBalance - transferAmount;
  setInnerText(totalAmaount);
});

// Get Bonus functionality
const coupon = 1212;
const couponBonus = 1000;
document.getElementById('bonus-btn').addEventListener('click', function (e) {
  e.preventDefault();

  const availableBalance = getInnerTextNumber('available-balance');
  const couponNumber = getInputValueNumber('coupon-number');
  if (couponNumber !== 1212) {
    alert('Invalid Coupon');
  }
  const totalAmaount = availableBalance + couponBonus;
  setInnerText(totalAmaount);
});

// Pay Bill functionality
document.getElementById('pay-btn').addEventListener('click', function (e) {
  e.preventDefault();
  const availableBalance = getInnerTextNumber('available-balance');
  const billerAccountNumber = getInputValueNumber('biller-account-number');
  if (billerAccountNumber < 11) {
    return alert('Invalid Account');
  }
  const pinNumber = getInputValueNumber('pay-pin-number');
  if (pinNumber !== pinDigit) {
    return alert('invalid Pin');
  }
  const payAmount = getInputValueNumber('pay-amount');
  if (payAmount <= 0 && payAmount < availableBalance) {
    return alert('Invalid Amaount');
  }
  const totalAmaount = availableBalance - payAmount;
  setInnerText(totalAmaount);
});
