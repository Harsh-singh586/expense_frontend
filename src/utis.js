import { baseUrl } from "./settings"
import axios from "axios"


var date = new Date()
var currMonth = parseInt(date.getMonth())
var currYear = parseInt(date.getFullYear())

export var format = (datestr) => {
    if ((datestr / 10) > 1) {
        return datestr
    }
    return "0" + datestr
}


export var dateFormat = (date) => {
    console.log("date", date.getDate())
    var datestr = `${date.getFullYear()}-${format(date.getMonth() + 1)}-${format(date.getDate())}`
    console.log('datestr---', datestr)
    return datestr
}

export async function postData(data, endpoint) {
    var token = await localStorage.getItem('token')
    var config = {
        headers: {
            "Authorization": "Bearer " + token
        }
    }
    let url = baseUrl + endpoint
    console.log(url)
    var income = await axios.post(url, data, config)
    return income.data
}

export async function getIncome() {
    var token = await localStorage.getItem('token')
    var config = {
        headers: {
            "Authorization": "Bearer " + token
        },
        params: {
            month: currMonth + 1,
            sumField: "amount"
        }
    }

    let url = baseUrl + '/income'
    var income = await axios.get(url, config)
    return income.data
}

export async function getMonthlyIncome() {
    var token = await localStorage.getItem('token')
    var config = {
        headers: {
            "Authorization": "Bearer " + token
        },
        params: {
            groupSum: "month",
            sumField: "amount"
        }
    }

    let url = baseUrl + '/income'
    var income_month = await axios.get(url, config)
    console.log(income_month.data)
    return income_month.data
}

export async function getExpense(month = currMonth + 1, year = currYear) {
    var token = await localStorage.getItem('token')
    var config = {
        headers: {
            "Authorization": "Bearer " + token
        },
        params: {
            month: month,
            year: year,
            sumField: "amount",
            sort: "createdTime",
            sortMethod: "desc"
        }
    }

    let url = baseUrl + '/expense'
    var expense = await axios.get(url, config)
    return expense.data
}

export async function getBudget() {
    var token = await localStorage.getItem('token')
    var config = {
        headers: {
            "Authorization": "Bearer " + token
        },
        params: {
            month: currMonth + 1,
            sumField: "amount"
        }
    }

    let url = baseUrl + '/budget'
    var budget = await axios.get(url, config)
    return budget.data

}

export async function getCategoryData(month = currMonth + 1, year = currYear) {
    var token = localStorage.getItem('token')
    console.log('t1----------', month)
    var config = {
        headers: {
            "Authorization": "Bearer " + token
        },
        params: {
            month: month,
            year: year,
            groupSum: "category"
        }
    }

    let url = baseUrl + '/expense'
    var categoryData = await axios.get(url, config)
    return categoryData.data

}

export function getYearMonthList() {
    var currYear = date.getFullYear()
    var previousYear = currYear - 1
    var monthList = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    var yearMonthList = []
    for (let i = previousYear; i <= currYear; i++) {
        var rangeMonthLast = currMonth
        var startMonth = 0
        if (i === previousYear) {
            rangeMonthLast = 11
            startMonth = currMonth
        }

        for (let j = startMonth; j <= rangeMonthLast; j++) yearMonthList.push({ value: `${i + "-" + j}`, content: `${monthList[j] + " " + i}` })

    }
    return yearMonthList

}


export async function getDateGroup(month = currMonth + 1, year = currYear) {
    var token = localStorage.getItem('token')
    console.log('t1----------', token)
    var config = {
        headers: {
            "Authorization": "Bearer " + token
        },
        params: {
            month: month,
            year: year,
            groupSum: "createdOn"
        }
    }

    let url = baseUrl + '/expense'
    var response = await axios.get(url, config)
    return response.data

}

export async function getCategoryBudget(month = currMonth + 1) {
    var token = localStorage.getItem('token')
    var config = {
        headers: {
            "Authorization": "Bearer " + token
        },
        params: {
            month: month,
            groupSum: "category"
        }
    }
    let url = baseUrl + '/budget'
    var response = await axios.get(url, config)
    return response.data

}