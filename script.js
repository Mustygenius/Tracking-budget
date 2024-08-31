let expenses = [];
let TotalAmount = 0;

const categorySelect = document.getElementById('category-select');
const amountInput = document.getElementById('amount-input');
const dateInput = document.getElementById('date-input');
const addbtn = document.getElementById('add-btn');
const expensesTableBody = document.getElementById('Expense-table-body');
const TotalAmountCell = document.getElementById('total-amount');

addbtn.addEventListener('click', function() {
    const category = categorySelect.Value;
    const amount = Number(amountInput.value);
    const date = dateInput.value;

    if ( category===''){
        alert('please select a category');
        return;
    }
    if( isNaN (amount)|| amount <=0){
        alert('please enter a valid amount')
        return;
    }
    if(date===''){
        alert('please select a date')
        return;
    }
    expenses.push({category,amount,date});

    TotalAmount +=amount;
    TotalAmountCell.textContent =TotalAmount;

    const newRow = expensesTableBody.insertRow();

    const categoryCell = newRow.insertCell();
    const amountCell = newRow.insertCell();
    const dateCell = newRow.insertCell();
    const deleteCell = newRow.insertCell();
    const deleteBtn = document.createElement('button');

    deleteBtn.textContent ='Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', function() {
        expenses.splice(expenses.indexOf(expenses),1);

        totalAmount -= expense.amount;
        TotalAmountCell.textContent = totalAmount;

        expensesTableBody.removeChild(newRow);
    });

    const expense =expenses[expenses.length - 1];
    categoryCell.textContent = expense.category;
    amountCell.textContent=expense.amount;
    dateCell.textContent = expense.date;
   deleteCell.appendChild(deleteBtn);

});

for (const expense of expenses) {
    totalAmount += expense.amount;
    TotalAmountCell.textContent=totalAmount;

    const newRow =expensesTableBody.insertRow();
    const categoryCell = newRow.insertCell();
    const amountCell = newRow.insertCell();
    const dateCell = newRow.insertCell();
    const deleteCell = newRow.insertCell();
    const deleteBtn = document.createElement('button');

    deleteBtn.textContent ='Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', function(){
        expenses.splice(expenses.indexOf(expenses), 1);

        totalAmount -= expense.amount;
        TotalAmountCell.textContent = totalAmount;

        expensesTableBody.removeChild(newRow);
    });

    categoryCell.textContent = expense.category;
    amountCell.textContent=expense.amount;
    dateCell.textContent = expense.date;
    deleteCell.appendChild(deleteBtn);


}




                                                 