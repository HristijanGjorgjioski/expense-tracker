# expense-tracker
Expense Tracker app with React and Speechly!

![alt text](https://i.ibb.co/3BscyCN/expense-tracker.png)

This is Front End React app. In this app you can add Incomes and Expenses so you can track them. The best thing in this app is that you can add income or expense by your voice!
 Yes! I have used 'Speechly' to allow that to user!
 
 ## This is the code for speechly to work how it is susposed to!
 ```javascript
  category_income = [
    Business
    Investments
    Extra income
    Deposits
    Lottery
    Gifts
    Salary
    Savings
    Rental income
]
category_expense = [
    Bills
    Car
    Clothes
    Travel
    Food
    Shopping
    House
    Entertainment
    Phone
    Pets
    Other
]
*create_transaction [Create|Finish|Save] {transaction}
*cancel_transaction [Cancel|Delete|Remove|Clear] {transaction}
*add_category [Set|Change] category {to} [$category_expense|$category_income](category)
*add_category {[i mean|i meant|i said]} {the} ![category {[is|of]} | [$category_expense|$category_income](category)]
*add_date [Set|Change|Add] date {[to|for]} $SPEECHLY.DATE(date)
*add_date {[i mean|i meant|i said]} {[{the} date is|for]} $SPEECHLY.DATE(date)
*add_amount [Set|Change] amount {to} $SPEECHLY.NUMBER(amount) {dollars}
*add_amount {[i mean|i meant|i said]} {{the} amount {[is|of]}} $SPEECHLY.NUMBER(amount) {dollars}
*add_expense {Add} {an} expense ![{[for|of]} $SPEECHLY.NUMBER(amount) {dollars} | {in} | {category} | [$category_expense|$category_income](category) | {[for|in]} $SPEECHLY.DATE(date)]
*add_expense $SPEECHLY.NUMBER(amount) {[dollar|dollars]} expense {in} ![{category} | [$category_expense|$category_income](category)] {[for|in]} $SPEECHLY.DATE(date)
*add_income {Add} {[{an} income|{a} balance]} ![{[for|of]} $SPEECHLY.NUMBER(amount) {dollars} | {in} | {category} | [$category_expense|$category_income](category) | {[for|in]} $SPEECHLY.DATE(date)]
*add_income $SPEECHLY.NUMBER(amount) {[dollar|dollars]} [income|balance] {in} ![{category} | [$category_expense|$category_income](category)] {[for|in]} $SPEECHLY.DATE(date)
 ```
 #
### To build this application I have used next technologies:
  * Front End
    - React
      - Context API
      - Hooks
    - react-chartjs-2(for creating charts)
    - chart.js(for creating charts)
    - uuid(for creating unique ids)
    - material-ui(for styling)
    
  
# Thank you!
