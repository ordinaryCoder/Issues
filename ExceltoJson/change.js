// const fs = require('fs')

// var testDatainfo = JSON.parse(fs.readFileSync('./' + 'A.json', 'utf8'));

// testDatainfo['SurchargeInfo'].selectfuelSurcharge = 'Y';
// testDatainfo['SurchargeInfo'].Callme = 'Yess';
// console.log(testDatainfo)

// let data = JSON.stringify(testDatainfo);
// fs.writeFileSync('A.json', data);

const ExcelJS = require('exceljs');
//import {Workbook, Row, Cell} from 'exceljs';
const wb = new ExcelJS.Workbook();

wb.xlsx.readFile("./test.xlsx").then(function(){
	
	
	const sheet = wb.getWorksheet("Rerate");
	const totalRows = sheet.rowCount
	const totalCols = sheet.columnCount
	console.log("total nuumber of rows : ",totalRows, "total nuumber of Cols : ",totalCols );

	for(var i=2;i<=totalRows;i++){
		console.log(":::::Row Value::: ", i )
		for(var j=1;j<= totalCols;j++){
			var cellValue = sheet.getRow(i).getCell(j).toString();
			console.log("Col Value: ", cellValue)
		}
		
	}
	
	
})