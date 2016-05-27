/**
 * Created by jkala on 24-Apr-16.
 */
var hotel = {
    name: "Quay",
    rooms: 40,
    booked: 25,
    checkAvailability: function(){
        return this.rooms - this.booked;
    }
};
hotel['name'] = "Park";

var elName = document.getElementById('hotelName');
elName.textContent = hotel.name;

var elRooms = document.getElementById('rooms');
elRooms.textContent = hotel.checkAvailability();
