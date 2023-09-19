const nameInput = document.querySelector('#nameInput'),
passwordInput = document.querySelector('#passwordInput'),
checkbox = document.querySelector('#checkbox'),
signInBtn = document.querySelector('#signInBtn'),
entre = document.querySelector('#entre'),

account = document.querySelector('#account'),
currentBalance = document.querySelector('#currentBalance'),
cardTitle = document.querySelector('#cardTitle'),
amountInput = document.querySelector('#amountInput'),
addBtn = document.querySelector('#addBtn'),
withdrawBtn = document.querySelector('#withdrawBtn');

 function BankTransactions(BankName) {
    this.bankName = BankName
    this.name = null;
    this.password = null;
    this.balance = 0;

    this.entry = function () {
        entre.classList.add('d-none');
        account.classList.remove('d-none');
    };

    this.addBalance = function (value) {
        if (value == '') {
            alert("Please enter the amount!")
        } else if ((value < 0)) {
            alert('Please enter a positive number!')
        }
        else {this.balance += value;
            currentBalance.innerHTML = `Your balance: ${this.balance} `;
        }
        
    };

    this.withdraw = function (wdvalue){
        if ((wdvalue == '') || (wdvalue < 0) || (wdvalue > this.balance)) {
            alert('Please, enter correct amount!')
        } else {
           this.balance -= wdvalue;
           currentBalance.innerHTML = `Your balance: ${this.balance} `;
        }
    };

    this.accountfunc = function (user, password) {
        this.name = user;
        this.password = password;
        cardTitle.innerHTML = `Dear ${this.name}, welcome your bank account!`
    }
};

const myBank = new BankTransactions('MyBank');

signInBtn.addEventListener('click', function(){
    const username = nameInput.value;
    const userpassword = passwordInput.value;
    myBank
    myBank.accountfunc(username, userpassword);
    myBank.entry();
});

addBtn.addEventListener('click', function(){
    const value = +(amountInput.value);
    myBank.addBalance(value);
    amountInput.value = '';
});

withdrawBtn.addEventListener('click', function(){
    const value = +(amountInput.value);
    myBank.withdraw(value);
    amountInput.value = '';
});

checkbox.addEventListener("change", function () {
    passwordInput.type = checkbox.checked ? "text" : "password";
});

console.log(myBank);
