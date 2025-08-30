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

// set to handle toggle
function handleToggle(id) {
  const allsections = document.getElementsByClassName('form');
  for (const section of allsections) {
    section.style.display = 'none';
  }
  document.getElementById(id).style.display = 'block';
}

function handleToggleBtn(id) {
  const btns = document.getElementsByClassName('form-btn');
  for (const btn of btns) {
    btn.classList.remove('border-blue-500', 'bg-blue-50');
    btn.classList.add('border-gray-400');
  }
  document.getElementById(id).classList.remove('border-gray-400');
  document
    .getElementById(id)
    .classList.add('border-blue-500', 'bg-blue-50', 'text-[#080808b3]');
}

// Toggling feature section

// add money
document
  .getElementById('add-money-section')
  .addEventListener('click', function (e) {
    handleToggle('add-money-parent');
    handleToggleBtn('add-money-section');
  });

//  Cash out
document
  .getElementById('cash-out-section')
  .addEventListener('click', function (e) {
    handleToggle('cash-out-parent');
    handleToggleBtn('cash-out-section');
  });

//  Transfer Money
document
  .getElementById('transfer-money-section')
  .addEventListener('click', function (e) {
    handleToggle('transfer-money-parent');
    handleToggleBtn('transfer-money-section');
  });

// Get Bonus
document
  .getElementById('get-bonus-section')
  .addEventListener('click', function (e) {
    handleToggle('get-bonus-parent');
    handleToggleBtn('get-bonus-section');
  });

// pay bill
document
  .getElementById('pay-bill-section')
  .addEventListener('click', function (e) {
    handleToggle('pay-bill-parent');
    handleToggleBtn('pay-bill-section');
  });

// Transation Money
document
  .getElementById('transaction-history-section')
  .addEventListener('click', function (e) {
    handleToggle('transaction-history-parent');
    handleToggleBtn('transaction-history-section');
  });

// ======================================
const pinDigit = 1234;
const transactionData = [];

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

    const data = {
      name: 'Add Mony',
      date: new Date().toLocaleTimeString(),
    };
    transactionData.push(data);
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

  const data = {
    name: 'Cash Out',
    date: new Date().toLocaleTimeString(),
  };
  transactionData.push(data);
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

  const data = {
    name: 'Transfer Money',
    date: new Date().toLocaleTimeString(),
  };
  transactionData.push(data);
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

  const data = {
    name: 'Get Bonus',
    date: new Date().toLocaleTimeString(),
  };
  transactionData.push(data);
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

  const data = {
    name: 'Pay Bill',
    date: new Date().toLocaleTimeString(),
  };
  transactionData.push(data);

  //  uncomplete
});

// transaction functionality

document
  .getElementById('transaction-history-section')
  .addEventListener('click', function () {
    const transactionContainer = document.getElementById(
      'transaction-container'
    );
    transactionContainer.innerText = '';
    for (const data of transactionData) {
      const div = document.createElement('div');
      div.innerHTML = `
    <div
          class="flex justify-between items-center px-4 py-3 bg-white rounded-xl mb-3"
        >
          <div class="flex gap-3 items-center">
            <div class="p-2 rounded-full bg-[#f4f5f7]">
              <img src="./assets/wallet1.png" alt="" />
            </div>
            <div>
              <h3 class="text-base font-semibold text-[#080808b3]"
                >${data.name}</h3
              >
              <p class="text-sm font-normal text-[#080808b3]">${data.date}</p>
            </div>
          </div>

          <i class="fa-solid fa-ellipsis-vertical"></i>
        </div>
    `;
      transactionContainer.appendChild(div);
    }
  });
