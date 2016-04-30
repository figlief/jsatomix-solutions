const fs = require('fs')
const path = require('path')
const parse = require('csv-parse/lib/sync')
const pathToCSV = path.join(__dirname, 'solutions.csv')
const rawCSV = fs.readFileSync(pathToCSV)
const records = parse(rawCSV, {columns: true})

module.exports = records

