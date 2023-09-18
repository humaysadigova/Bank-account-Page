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
 function BankTransactions(name, password) {
    this.name = name;
    this.password = password;
    this.balance = 0;

    this.entry = function () {
        entre.classList.add('d-none');
        account.classList.remove('d-none');
        account.classList.add('d-block');
    };

    this.addBalance = function (value) {
        if (value = '') {
            alert("Please enter the amount!")
        } else if (value <= 0) {
            alert('Please enter a positive number!')
        }else {this.balance += parseFloat(value);
            currentBalance.innerHTML = `Your balance: ${this.balance} `;
        }
        
    };

    this.withdraw = function (wdvalue){
        if (wdvalue = '' || wdvalue < '0' || wdvalue > this.balance) {
            alert('Please, enter correct amount!')
        } else {
            this.balance -= parseFloat(wdvalue);
            currentBalance.innerHTML = `Your balance: ${this.balance} `;
        }
    };

    this.accountfunc = function () {
        account.innerHTML = `Dear ${this.name}, welcome your bank account!`
    }

};

signInBtn.addEventListener('click', function(){
    const username = nameInput.value;
    const userpassword = passwordInput.value;
    const myBank = new BankTransactions(username, userpassword);
    myBank.accountfunc();
    myBank.entry();
});

addBtn.addEventListener('click', function(){
    const value = amountInput.value;
    myBank.addBalance(value);
    amountInput.value = '';
    
})


