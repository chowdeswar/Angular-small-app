import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  doLogin(data: any) {
    if (data.email == "chow@hotmail.com" && data.password == "admin123") {
      return {
        code: 200,
        message: "Login successful",
        data: data
      }
    } else {
      return {
        code: 503,
        message: "Invalid Credentials",
        data: null
      }
    }
  }

  getAllDataList() {
    if (localStorage.getItem('DataList') && localStorage.getItem('DataList') != '') {
      return {
        code: 200,
        message: 'Data List fetched successfully',
        data: JSON.parse(localStorage.getItem('DataList'))
      }
    } else {
      return {
        code: 503,
        message: 'Data List fetched successfully',
        data: JSON.parse(localStorage.getItem('DataList'))
      }
    }
  }

  fetchData(index) {
    let data = JSON.parse(localStorage.getItem('DataList'));
    if (data) {
      return {
        code: 200,
        message: 'Data fecting successfully',
        data: data[index]
      }
    }
  }

  deleteData(index) {
    let data = JSON.parse(localStorage.getItem('DataList'));
    data.splice(index, 1)
    let remainData = localStorage.setItem('DataList', JSON.stringify(data))
    return {
      code: 200,
      message:'success',
      data: remainData
    }
  }
}
