var prmConfig,
	client,
	retPing;
var fiixCmmsClient = new FiixCmmsClient();
fiixCmmsClient.setBaseUri( 'https://360ing.macmms.com/api/' );
fiixCmmsClient.setAppKey('macmmsackp3849b33eab626a72ab4d845f5df036b78aa22c903428f982b501d31');
fiixCmmsClient.setAuthToken('macmmsaakp384591ee81bd6ce28cc47fd2391f87e3959d28a834d9f3cd8d91a');
fiixCmmsClient.setPKey('macmmsaskp384fdc63b5efb18e7efc10f3d59dca0ce43e3a8e22e53d08277f938649939dd3a56');

function search() {
	fiixCmmsClient.find({
		//"className":  "Asset",
		"className":  "MeterReading",
		"id": document.getElementById('criterioId').value,
		"fields": "id, strName, strDescription, intAssetLocationID, intCategoryID",
		"callback": function(ret) {
			if (!ret.error) {/*
				document.getElementById('1').innerHTML = (ret['object'])['className'];
				document.getElementById('2').innerHTML = (ret['object'])['id'];
				document.getElementById('3').innerHTML = (ret['object'])['strName'];
				document.getElementById('4').innerHTML = (ret['object'])['strDescription'];
				document.getElementById('5').innerHTML = (ret['object'])['strAddressParsed'];
				document.getElementById('criterioId').innerHTML = " ";
				return(ret.object);*/
			} else return (ret.error);
		}
	});
}



function change(){
	var obj = {"id": document.getElementById('criterioId').value, "strDescription": document.getElementById('Descripcion').value};
	
	var request = fiixCmmsClient.change({
		"fields": "id, strDescription",
		"className": "Asset",
		"changeFields": "strDescription",
		"object": obj,
		"callback": function(ret) {
			if (!ret.error) {
				return(ret.object);
			} else return(ret.error);
		}
		/*
		"className": "MeterReading",
		"changeFields": "intWorkOrderID, intSubmittedByUserID, intMeterReadingUnitsID, dblMeterReading, intAssetID, dtmDateSubmitted",
		"object": {
			"id": 0,
			"intWorkOrderID": 0,
			"intSubmittedByUserID": 0,
			"intMeterReadingUnitsID": '94359',
			"dblMeterReading": '666',
			"intAssetID": '3464663',
			"dtmDateSubmitted": '1506452561'
		},
		
		"fields": "id, intWorkOrderID, intSubmittedByUserID, intMeterReadingUnitsID, dblMeterReading, dv_intWorkOrderID, dv_intMeterReadingUnitsID, dv_intAssetID, dv_intSubmittedByUserID, intAssetID, dtmDateSubmitted"
		*/
	});	
	alert("Se a modificado la descripcion");
};

function crearMeterReading(){
	var obj = {"intMeterReadingUnitsID": "94359", "dblMeterReading": document.getElementById('Descripcion').value, "intAssetID": "3464663", "intSubmittedByUserID": "83117", "dtmDateSubmitted": +new Date()};
	var response = fiixCmmsClient.add({
		"className": "MeterReading",
		"fields": "id, intWorkOrderID, intSubmittedByUserID, intMeterReadingUnitsID, dblMeterReading, dv_intWorkOrderID, dv_intMeterReadingUnitsID, dv_intAssetID, dv_intSubmittedByUserID, intAssetID, dtmDateSubmitted",
		"object": obj,
		"callback": function(ret) {
			if (!ret.error) {
				return(ret.object);
			} else {
				return(ret.error);
			}
		}
	});
}

function measure(){
	fiixCmmsClient.findById({
		"className": "MeterReading",
		"id": "3689397",
		"fields": "id, intWorkOrderID, intSubmittedByUserID, intMeterReadingUnitsID, dblMeterReading, dv_intWorkOrderID, dv_intMeterReadingUnitsID, dv_intAssetID, dv_intSubmittedByUserID, intAssetID, dtmDateSubmitted",
		"callback": function(ret) {
			if (!ret.error) {
				document.getElementById('1').innerHTML = (ret['object'])['className'];
				document.getElementById('2').innerHTML = (ret['object'])['id'];
				document.getElementById('3').innerHTML = (ret['object'])['intSubmittedByUserID'];
				document.getElementById('4').innerHTML = (ret['object'])['intMeterReadingUnitsID'];
				document.getElementById('5').innerHTML = (ret['object'])['dblMeterReading'];
				document.getElementById('criterioId').innerHTML = " ";
				alert(JSON.stringify(ret['object']));
				return(ret.object);
			} else return (ret.error);
		}
	});
	
		/*filters: [
		{
				"ql": "bolIsOnline = ?",
				"parameters": [1]
			},
			{
				"fields": "strBarcode,strSerialNumber,strUnspcCode",
				"fullText": "9099931452"
			}
		]*/
}

//id: 11712
//id: 3464663
//id: 1539047
//id: 3689397
//Horas: 94359
//Kilom: 94359

document.getElementById('buttonSearch').onclick = function () {
    search();
};

document.getElementById('buttonChange').onclick = function () {
    change();
};

document.getElementById('buttonMeasure').onclick = function () {
    measure();
};

document.getElementById('buttonAdd').onclick = function () {
    crearMeterReading();
};