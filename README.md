##Air Ticket Booking



##Register User
Endpoint: /api/register
Method: POST
Description: Allows users to register.
Request Body:
name: User's name
email: User's email address
password: User's password

##User Login
Endpoint: /api/login
Method: POST
Description: Allows users to log in.
Request Body:
email: User's email address
password: User's password

##Get All Flights
Endpoint: /api/flights
Method: GET
Description: Returns a list of all available flights.

##Get Flight by ID
Endpoint: /api/flights/:id
Method: GET
Description: Returns the details of a specific flight identified by its ID.

##Add New Flight
Endpoint: /api/flights
Method: POST
Description: Allows users to add new flights to the system.
Request Body:
airline: Airline name
flightNo: Flight number
departure: Departure city
arrival: Arrival city
departureTime: Departure time (Date format)
arrivalTime: Arrival time (Date format)
seats: Number of available seats
price: Price of the flight

##Update Flight
Endpoint: /api/flights/:id
Method: PUT or PATCH
Description: Allows users to update the details of a specific flight identified by its ID.
Delete Flight
Endpoint: /flights/:id
Method: DELETE
Description: Allows users to delete a specific flight identified by its ID.

##Book Flight
Endpoint: /api/booking
Method: POST
Description: Allows users to book flights.
Request Body:
flightId: ID of the flight to book


##Dashboard
Endpoint: /api/dashboard
Method: GET
Description: Lists all the bookings made so far with user and flight details.