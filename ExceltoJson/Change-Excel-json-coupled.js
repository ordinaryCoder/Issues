

	// var testDatainfo = JSON.parse(fs.readFileSync('./' + 'A.json', 'utf8'));

	// testDatainfo['SurchargeInfo'].selectfuelSurcharge = 'Y';
	// testDatainfo['SurchargeInfo'].Callme = 'Yess';
	// console.log(testDatainfo)

	// let data = JSON.stringify(testDatainfo);
	// fs.writeFileSync('A.json', data);

	//import {Workbook, Row, Cell} from 'exceljs';
	const ExcelJS = require('exceljs');
	const wb = new ExcelJS.Workbook();
	const fs = require('fs')

	wb.xlsx.readFile("./testdata.xlsx").then(function(){
		
		var testDataJson = {
		"Profile": {
			"First Name": "",
			"Last Name": "",
			"Weight": "",
			"Age": "",
		},
		"Profession": {
			"Company": "",
			"Experience": "",
			"Role": "",
			"Salary": "",
		
		},
		"Behaviour": {
			"Anger": "",
			"Kind": "",
			"Patience": "",

		},
		"Characteristic": {
			"Skills": "",
			"Communication": "",
			"Stamina": "",
		}
	}
		
		
		
		const sheet = wb.getWorksheet("Profile");
		const totalRows = sheet.rowCount
		const totalCols = sheet.columnCount
		console.log("total nuumber of rows : ",totalRows, "total nuumber of Cols : ",totalCols );

		for(var i=2;i<=totalRows;i++){
			console.log(":::::Row Value::: ", i )
			let fName = sheet.getRow(i).getCell(1).toString();
			console.log("FileName:", fName)
				testDataJson.Profile["First Name"] = sheet.getRow(i).getCell(2).toString();
				testDataJson.Profile["Last Name"] = sheet.getRow(i).getCell(3).toString();
				testDataJson.Profile.Weight = sheet.getRow(i).getCell(4).toString();
				//testDataJson[`${sheet.name}`][`${cellHeader}`]
				//testDataJson[`${sheet.name}`][`${cellHeader}`] = `${cellValue}`;	
				let fileName = fName + '.json'
				console.log("FileName:", fileName)
				let data = JSON.stringify(testDataJson);
				fs.writeFileSync(fileName, data);
			}
			
		}).then(() => {
			console.log('File is written');
		}).catch(err => console.error(err));
