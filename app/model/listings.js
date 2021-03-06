//sample model
function Listings(){
    "use strict";

    this.id = -1;
    this.neighborhoodsId = -1;
    this.lat = "22.2";
    this.long = "22.2";
    this.name = "";
    this.type = 0;  //[0,1,2] <shared, single room, apartment>
    this.price = "20.5";
    this.address = "";
    this.walkScore = 1;

    //constructor

    this.createListing = function(id,name,lat,long,type,price,address){
        this.id = id;
        this.lat = lat;
        this.long = long;
        this.name = name;
        this.type = type;
        this.price = price;
        this.address = address;
    }

    //BLOCK: setters

    //Assigned To: Aravind
    this.setNeighborhood = function () {
        
    };

    //Assigned To: Hung Wen
    let self = this;
    this.setWalkScore = function(){
        $.ajax({
            type:"GET",                       
            url:"app/model/walkscore.php",
            data: {
                "address" : self.address,
                "lat" : parseFloat(self.lat), 
                "lon" : parseFloat(self.long)                               
            },
            success: function(response){  
                var resp = $.parseJSON(response);
                self.walkScore =  resp.walkscore ;
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) { 
                console.log("Status: " + textStatus); 
                console.log("Error: " + errorThrown); 
            }
        });
    }

    

    //BLOCK: getters

    this.getWalkScore = function(){
        return this.walkScore;
    }


    //BLOCK: utility functions

}