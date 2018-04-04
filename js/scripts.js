class BankAccount {
  constructor (initialAmount){
    this.initialAmount = initialAmount;
  }

  deposit(amount){
    return this.initialAmount += amount;
  }

  withdrawl(amount){
    return this.initialAmount -= amount;
  }
}

const capitalize = (aString) => {
  return aString[0].toUpperCase() + aString.slice(1).toLowerCase();
}


//
// var b = new BankAccount(34);
// var c = b.deposit(10);
// var d = b.withdrawl(4);
// alert(d);

$().ready(function(){
  $(".account-form").submit(function(e){
    e.preventDefault();
    let name = $("#name").val();

    if (name){
      name = capitalize(name);
    }
    let initial = parseInt($("#initial").val());
    let withdrawlAmount = parseInt($("#withdrawl").val());
    let depositAmount = parseInt($("#deposit").val());
    if (isNaN(initial)){
      let balanceElement = `<p class='lead'>Hi, ${name}, please enter a numeric value`;
        $(".balance").html(balanceElement);
    }else{
      let balance = initial;
      let account = new BankAccount(balance); //creating an instance - calling it from the backend
      if(withdrawlAmount){ //run the withdrawl method to subtract from the total
        balance = account.withdrawl(withdrawlAmount);
      }
      if(depositAmount){
        balance = account.deposit(depositAmount);
      }
      let balanceElement = `<p class='lead'>Hi, ${name}, Your Current Balance: $${balance}`;
      $(".balance").html(balanceElement);
    }

    $("input").val('');
  });

  $("#reset").click(function(){
    window.location.reload();
  })
});
