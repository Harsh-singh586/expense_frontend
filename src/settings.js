const baseUrl = "http://localhost:5000"
const category = { food: "Food", education: "Education", medicine: "Medicine", entertainment: "Entertainment", travel: "Travel", gifts: "Gifts", other: "Other" }
const monthMapping = {
    1: "January",
    2: "February",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
    10: "October",
    11: "November",
    12: "December"
}

module.exports = { baseUrl, category, monthMapping }