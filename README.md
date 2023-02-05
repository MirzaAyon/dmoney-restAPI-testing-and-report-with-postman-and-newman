
# Testcase scenarios
1. Admin creates an agent and random 2 customers
2. Deposit some money from SYSTEM account to the agent
3. Agent deposit to any of 1 customer
4. The customer checks balance
5. Then withdraw any amount from the agent
6. And send money to the other customer
7. Then the customer will check statement
8. For each transaction, assert expected balance

## How to run this project
### 1st system with dmoney API collection link
- open cmd on your system
- Newman Install command - ```npm install -g newman```
- HTML extra install command - ```npm install -g newman-reporter-html```
- Run command - ```newman run https://api.postman.com/collections/21363025-8c83f80e-c26f-4750-b82a-8ce0cb5fd59e?access_key=PMAT-01GQQPF4S2N721X7JYR0A63V7H&fbclid=IwAR3nVgzONwmTn5Esj_1brhCh4NQKgD4bg9LGd1hyo4mCQdH_J3JRWIGIkbk```

- Run command for report - ```newman run https://api.postman.com/collections/21363025-8c83f80e-c26f-4750-b82a-8ce0cb5fd59e?access_key=PMAT-01GQQPF4S2N721X7JYR0A63V7H&fbclid=IwAR3nVgzONwmTn5Esj_1brhCh4NQKgD4bg9LGd1hyo4mCQdH_J3JRWIGIkbk -r cli,htmlextra```

### 2nd system with dmoney API json file
- open cmd on your system
- Newman Install command - ```npm install -g newman```
- HTML extra install command - ```npm install -g newman-reporter-html```
- Run command - ```newman run Dmoney-Transaction-API-Validation.postman_collection.json```





## Technology used:
- Postman
- Newman

## Dmoney API collection accordingly testcases
- Link - https://api.postman.com/collections/21363025-8c83f80e-c26f-4750-b82a-8ce0cb5fd59e?access_key=PMAT-01GQQPF4S2N721X7JYR0A63V7H&fbclid=IwAR3nVgzONwmTn5Esj_1brhCh4NQKgD4bg9LGd1hyo4mCQdH_J3JRWIGIkbk


## Test Cases on dmoney restAPI:
  - Google sheet link - https://docs.google.com/spreadsheets/d/1dtrxukVS4UYx_oB2X2h_5MA4gupsdP0OuGUDpjMPcnk/edit?fbclid=IwAR2-50R-0kCOtOWx1ES3ol9evxN7W4n2x2WcxWTojX8DvMnsj2nNvlR5OZI#gid=1948463617
 
![testcase](https://user-images.githubusercontent.com/68238652/215250913-f0587a02-446f-4864-85c0-e54304d779fa.PNG)
 

## Documentation:
  - https://documenter.getpostman.com/view/21363025/2s8ZDeSy1V
  

  ![documentation](https://user-images.githubusercontent.com/68238652/215250938-e4b6b3af-bb05-42a0-a0a4-80c296c31893.PNG)


## Newman report screenshot: 

![updated report](https://user-images.githubusercontent.com/68238652/216757097-1b5a547c-be4a-435a-922c-cb53e2d11d44.PNG)

![updated report2](https://user-images.githubusercontent.com/68238652/216757110-9c3daf2c-eacc-4bfc-8bd0-101bab436546.PNG)




## Issue report on dmoney restAPI
- Google sheet link - https://docs.google.com/spreadsheets/d/1zEx1pdk_a6Amt8OGv-pBoeNimYtYWHJkkW7fJnsnacM/edit?fbclid=IwAR2umGsOevDIiKQ79qlbM09GfWr6y3kEHKhtCehYGMVH3z0ReBbAqs9N7u4#gid=1861580978 


![issue report](https://user-images.githubusercontent.com/68238652/215250959-8b209278-5c5d-4e7a-be25-7b7b4d9a3a18.PNG)



