/**
 * Created by jkala on 24-Apr-16.
 */
//Fist way to create an object:
var hotel = new Object();

 hotel.name= 'Park';
 hotel.rooms = 120;
 hotel.booked= 77;
 hotel.checkAvailability = function(){
    return this.rooms-this.booked;
};
 

//Second way to create an object:
/**
 function Hotel(name,rooms,roomsBooked){
    this.name = name;
    this.rooms = rooms;
    this.booked = roomsBooked;

    this.checkAvailability = function(){
        return this.rooms - this.booked;
    }
}

 parkHotel = new Hotel('Park',120,77);
 **/

//Third way to create an object:
/**
    var parkHotel = {
    
    name: 'Park',
    rooms: 120,
    booked: 77,
    
    checkAvailability: function(){
        return this.rooms - this.booked;
    }
};
 **/



var elName = document.getElementById('hotelName');
elName.textContent = parkHotel.name;

var elRooms = document.getElementById('rooms');
elRooms.textContent = parkHotel.checkAvailability();

