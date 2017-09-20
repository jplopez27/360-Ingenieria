var prmConfig,
	client,
	retPing;
var fiixCmmsClient = new FiixCmmsClient();
fiixCmmsClient.setBaseUri( 'https://360ing.macmms.com/api/' );
fiixCmmsClient.setAppKey('macmmsackp3849b33eab626a72ab4d845f5df036b78aa22c903428f982b501d31');
fiixCmmsClient.setAuthToken('macmmsaakp384591ee81bd6ce28cc47fd2391f87e3959d28a834d9f3cd8d91a');
fiixCmmsClient.setPKey('macmmsaskp384fdc63b5efb18e7efc10f3d59dca0ce43e3a8e22e53d08277f938649939dd3a56');

function search() {
	fiixCmmsClient.findById({
		"className": "Asset",
		"id": document.getElementById('criterio').value,
		"fields": "id, strName, strDescription, intAssetLocationID, intCategoryID",
		"callback": function(ret) {
			if (!ret.error) {
				document.getElementById('1').innerHTML = (ret['object'])['className'];
				document.getElementById('2').innerHTML = (ret['object'])['id'];
				document.getElementById('3').innerHTML = (ret['object'])['strName'];
				document.getElementById('4').innerHTML = (ret['object'])['strDescription'];
				document.getElementById('5').innerHTML = (ret['object'])['strAddressParsed'];
				document.getElementById('criterio').innerHTML = " ";
				return(ret.object);
			} else return (ret.error);
		}
	});
}


function change() {
	var obj = {"id": 1539047, "strDescription": document.getElementById('Descripcion').value};
	
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
	});
	alert("Se a modificado la descripcion");
}

//Id:	1539047

function measure(){
	fiixCmmsClient.change({
		"className": "MeterReading",
		"changeFields": "intWorkOrderID, intSubmittedByUserID, intMeterReadingUnitsID, dblMeterReading, intAssetID, dtmDateSubmitted",
		"object": {
		"id": 0,
		"intWorkOrderID": 0,
		"intSubmittedByUserID": 0,
		"intMeterReadingUnitsID": 0,
		"dblMeterReading": 0,
		"intAssetID": 0,
		"dtmDateSubmitted": 0
		},"fields": "id, intWorkOrderID, intSubmittedByUserID, intMeterReadingUnitsID, dblMeterReading, dv_intWorkOrderID, dv_intMeterReadingUnitsID, dv_intAssetID, dv_intSubmittedByUserID, intAssetID, dtmDateSubmitted"
	});

	fiixCmmsClient.find({
		"className": "MeterReading",
		"fields": "id, intWorkOrderID, intSubmittedByUserID, intMeterReadingUnitsID, dblMeterReading, dv_intWorkOrderID, dv_intMeterReadingUnitsID, dv_intAssetID, dv_intSubmittedByUserID, intAssetID, dtmDateSubmitted"
	});
}

document.getElementById('buttonSearch').onclick = function () {
    search();
};

document.getElementById('buttonChange').onclick = function () {
    change();
};


