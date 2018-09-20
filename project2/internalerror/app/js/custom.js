// function initializeWidget()
// // {
// // 	/*
// //  * initialize widget
// //  */
// // 	ZOHO.embeddedApp.init()
// // 		/*
// //  * fetch current users data
// //  */
// // 		.then(ZOHO.CRM.CONFIG.getCurrentUser)
// // 		/*
// //  * insert the response into the dom
// //  */
// // 		.then(function(response)
// // 		{
// // 			document.getElementById("userInfo").innerHTML = JSON.stringify(response,null,2);
// // 		})
// // 		/*
// //  * fetch current record data 
// //  */
// // 		/*
// // 		.then(ZOHO.CRM.INTERACTION.getPageInfo)
// // 		/*
// //  * insert the response into the dom
// //  */
// // 		/*
// // 		.then(function(response)
// // 		{
// // 			document.getElementById("recordInfo").innerHTML = JSON.stringify(response,null,2);
// // 		});
// // 		*/
// // 		ZOHO.embeddedApp.on("PageLoad",function(data){
// // 		console.log(JSON.stringify(data));
// // 		module = data.Entity;
// // 		id = data.EntityId;
// // 		ZOHO.CRM.API.getRecord({Entity:module,RecordID:id}).then(function(data){
// //     console.log(data);
// //     document.getElementById("recordInfo").innerHTML = JSON.stringify(data,null,2);
// // 			})
// // 		})


// // }
// // document.onreadystatechange = initializeWidget;
// // Actions

// // */

// //function initializeWidget()
// {
	
// //ZOHO.embeddedApp.init().then(function(){

// //var data =	{}
// ZOHO.CRM.CONNECTOR.invokeAPI("thirdpartyextension.googlecontactsyncconnector.googleconnector", data).then(function(contact){
// 	//console.log("=== Response ==="+JSON.stringify(contact));
// 	document.getElementById("recordInfo").value=contact.response;
// 	//String to JSON
// 	contactObj = JSON.parse(contact.response);
// 	//console.log("==== ContactObj ====="+contactObj)
// 	entry = contactObj.feed.entry;
// 	for(var i=0 ;i<entry.length ; i++){
// 		entryObj = entry[i];
// 		//entryObj2 = entry[i];
// 		if(entryObj.hasOwnProperty('title')){
// 			titleObj = entryObj.title;
// 			oldValue = document.getElementById("BasicInfo").value;
// 			document.getElementById("BasicInfo").innerHTML=oldValue +"\n"+titleObj.$t;
// 			//console.log("===== title Obj === "+titleObj.$t);
// 		}

// 		//if(entryObj2.hasOwnProperty('gd$email')){
// 		//	titleObj2 = entryObj2.gd$email;
// 		//	console.log("===== title Obj2 === "+titleObj2.address);
// 		//}
// 	}
// 	//document.getElementById("BasicInfo").innerHTML=JSON.stringify(titleObj.$t);
// })
// })
// }
// document.onreadystatechange = initializeWidget;



//


function initializeWidget()
{
//var data = {}
ZOHO.embeddedApp.init().then(function(){
	
	var request ={
		url : "https://estated.com/api/property",
		params:{
			city:"Pleasanton",
			state:"CA",
			zipcode: "94566",
			token: "tHoiQ5Ojzu0oQzRthHllz4Pyk0vEmF",
			address: "478 Trebbiano Place"
		}
	}
	ZOHO.CRM.HTTP.get(request)
	.then(function(data){
		console.log(data)
	})
})

}
document.onreadystatechange = initializeWidget;
