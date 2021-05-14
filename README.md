# The task
Build a screen with a grid(list with columns) and a detail panel using React. 
Set up a databind using a dataobject class using an api class to load the json. 

Results:
* 1 Page __(must)__
* 2 Components __(must)__
* 1 API loading an fixed json __(low prio)__
* 1 or more classes that represent named json __(optional)__
* written in:
  * with typed objects (OOP) __easy re-use and less maintaince issues, less samples__
  * __NOT__ with inline object (FP) __more samples, hard to maintain or re-use __
  
# UI Designs:
Sample1.png => start view
Sample2.png => hide account type filter
Sample3.png => Larger Detail panel

The filter works on the known AccountTypes in the jsons
The search text will search Name (Including Firstname and Lastname), email and website

# Endpoints
## Account -> get account
get account summary: 
Jsonblock Out => Account

## Account -> get accounts
Jsonblock Out => Account[]

#Jsonblocks
A jsonblock is a base structure that defines attributes available. It is for communication and documentation.

##AccountType

| Name | IsOption | Type | Comment
| ----------- | ----------- | ----------- | ----------- |
| id | True | int
| is | Text | string | Fixed "AccountType"
| name | True | string

##Account

| Name | IsOption | Type | Comment
| ----------- | ----------- | ----------- | ----------- |
| code | True | string
| id | True | int
| is | Text | string | Fixed "Account"
| is_buyer | True | bool
| is_organisor | True | bool
| is_reseller | True | bool
| is_supplier | True | bool
| type | True | accounttype(no array)
| type_detail   | True | Company(no array) or Person(no array)

##Company

| Name | IsOption | Type | Comment
| ----------- | ----------- | ----------- | ----------- |
| account | True | Account
| coc | True | string | Chamber of Commerce
| code | True | string
| id | True | int
| is | Text | string | Fixed "Company"
| legalname | True | string
| name | True | string
| phonenumber | True | string
| vat | True | string
| website | True | string

##Person

| Name | IsOption | Type | Comment
| ----------- | ----------- | ----------- | ----------- |
| account | True | Account
| birthdate | True | string | 
| email | True | string
| facebook | True | string
| firstname | True | int
| is | Text | string | Fixed "Company"
| lastname | True | string
| phonenumber | True | string

##Sample json
This is a sample an may be extended if needed to show of functionality
```json
{
  "items": [
    {
      "is": "Account",
      "id": 1,
      "code": "CO0001",
      "is_buyer": true,
      "is_supplier": true,
      "type": {
        "is": "AccountType",
        "id": 1,
        "name": "Company"
      },
      "type_detail": {
        "is": "Comnpany",
        "id": 1,
        "name": "Somecompany",
        "phonenumber": "010-1010101"
      }
    },
    {
      "is": "Account",
      "id": 2,
      "code": "CO0002",
      "is_buyer": true,
      "is_supplier": false,
      "type": {
        "is": "AccountType",
        "id": 1,
        "name": "Company"
      },
      "type_detail": {
        "is": "Comnpany",
        "id": 2,
        "name": "Anothercompany",
        "phonenumber": "010-1010102"
      }
    },
    {
      "is": "Account",
      "id": 3,
      "code": "PO0001",
      "is_buyer": true,
      "is_supplier": false,
      "type": {
        "is": "AccountType",
        "id": 2,
        "name": "Person"
      },
      "type_detail": {
        "is": "Person",
        "id": 1,
        "firstname": "John",
        "lastname": "Smith",
        "phonenumber": "010-1010103"
      }
    },
    {
      "is": "Account",
      "id": 4,
      "code": "PO0001",
      "is_buyer": true,
      "is_supplier": false,
      "type": {
        "is": "AccountType",
        "id": 2,
        "name": "Person"
      },
      "type_detail": {
        "is": "Person",
        "id": 2,
        "firstname": "Chris",
        "lastname": "Johnson",
        "phonenumber": "010-1010104"
      }
    }

  ]
}
```