Util={};

// function myFunction() {
//     var x = document.getElementById("myDIV");
//     if (x.style.display === "none") {
//         x.style.display = "block";
//     } else {
//         x.style.display = "none";
//     }
// }


Util.saveButtonAction = function(){

    Address = $('#addressId').val();
    City = $('#cityId').val();
    State = $('#stateId').val();
    Zipcode = $('#zipcodeId').val();
    Token = $('#tokenId').val(); 

    var request ={
		url : "https://estated.com/api/property",
		params:{
			city: City,
			state: State,
			zipcode: Zipcode,
			token: Token,
			address: Address
        }

	}
	ZOHO.CRM.HTTP.get(request)
	.then(function(data){
        data1 = JSON.parse(data);
        dataVal = data1.data;
        property = dataVal.property;
        propertyStr = JSON.stringify(property);
        valuation = property.valuation;
        geo = dataVal.geographic;``
        entities = geo.entities;
        police = entities.police_stations[0].feature_name + "\nDistance: " + entities.police_stations[0].distance + " miles\n" ; // nearest police station
        park = entities.parks;
        parks = "";
        for(i = 0; i < park.length; i++){
            parks += park[i].feature_name + "\nDistance: " + park[i].distance + " miles\n" + "\n";
        }
        natural = entities.natural;
        naturals = "";
        for(i = 0; i < natural.length; i++){
            naturals += natural[i].type + "\n" + natural[i].feature_name + "\nDistance: " + natural[i].distance + " miles\n" + "\n";
        }
        sales = property.sales;
        date =  sales[0].date;
        price = sales[0].price;
        value = valuation.value; // value 
        forecast = valuation.forecast_1_year; // 1 year forecast
        //details
        structures = property.structures;

        size = structures[0].total_size; //total size sq ft of home size
        bedrooms = structures[0].beds_count; //# of bedrooms
        bathrooms = structures[0].baths_count; //# of bathrooms
        hospital = 
        site = property.site;
        lotSize = site.size; // lot size
        category = structures[0].category;
        built  = structures[0].year_built;
        lastSold = 
        //console.log("==site== sq ft of lot" + lotSize + "sq ft of home" + size);

        //alert("SIZE PLUS LOT SIZE" +   data);
        
        //console.log("SIZE PLUS LOT SIZE" +   value);


        //alert("== Success===="+data);
        
        
        document.getElementById("totalSize").innerHTML=(size + " " + "sq ft.");
        document.getElementById("lotSize").innerHTML=(lotSize + " " + "sq ft.");
        document.getElementById("rooms").innerHTML=("# of Bedrooms: " + "\n" + bedrooms + "\n" + "# of Bathrooms: " + "\n" + bathrooms);
        document.getElementById("forecast").innerHTML=( "$" + forecast);
        document.getElementById("houseValue").innerHTML=("$" + value);
        document.getElementById("date").innerHTML=(date);
        document.getElementById("summary").innerHTML=(Address + ", " + City + ", " + State + " is a " + category + " home that contains " + size + " sq ft and was built in " + built + ". It contains " + bedrooms + " bedrooms and " + bathrooms + " bathrooms. This home last sold for $" + price + " on " + date + ".");
        document.getElementById("police").innerHTML=(police);
        document.getElementById("parks").innerHTML=(parks);
        document.getElementById("natural").innerHTML=(naturals);
	})      
    
}
Util.closeAction = function(){

}
