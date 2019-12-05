# REST-API Duduk.in

### `Using: ExpressJS, MongoDB`
<hr>

## Usage
```
sudo service mongod start
npm install
npm start

Access : http://localhost:8081/api
```
<br>

## List of routes

- **Auth**
| Route | HTTP Method | Description | Required Field |
| :---- | :---------: | :---------- | :------------- |
| `/api/login` | POST | User login | `email,password` |
| `/api/register` | POST | User register | `email,password` default role : user |

- **User**
| Route | HTTP Method | Description | Required Field |
| :---- | :---------: | :---------- | :------------- |
| `/api/users/getAllUser` | GET | Get all the users | - |
| `/api/users/find/key/value` | GET | Find with key and value parameters | - |
| `/api/users/delete/id` | DELETE | Delete spesific user by id | - |
| `/api/users/update/id` | PUT | Update spesific user data by id | `nama_lengkap, jk, alamat, no_telp` |
| `/api/users/update/role/id` | PUT | Update spesific user role by id | `role : admin,user` |
| `/api/users/update/pwd/id` | PUT | Update spesific user passsword by id | `oldPwd, confirm_oldPwd, newPwd` |

- **Merchant**
| Route | HTTP Method | Description | Required Field |
| :---- | :---------: | :---------- | :------------ |
| `/api/merchant/getAll` | GET | Get all the merchant | - |
| `/api/merchant/find/key/value` | GET | Find with the key and value parameters | - |
| `/api/merchant/add` | POST | Add new merchant | `nama,deskripsi,alamat,waktu_buka,waktu_tutup` |
| `/api/merchant/update/id` | PUT | Update spesific merchant by id | `nama,deskripsi,alamat,waktu_buka,waktu_tutup` |
| `/api/merchant/delete/id` | DELETE | Delete spesific merchant by id | - |

- **To be Continued** <br>
`...`
