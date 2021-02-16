import React from 'react';
import UsersListContainer from '../users_list/users_list_container';
import CommentsContainer from '../comments/comments_container';
import ItineraryContainer from '../itinerary_items/itinerary';
import FlightItineraryItem from '../itinerary_items/flight/flight_itinerary_item';
import LodgingItineraryItem from '../itinerary_items/lodging/lodging_itinerary_item';
import ItineraryItem from '../itinerary_items/other/itinerary_item';
import FoodItineraryItem from '../itinerary_items/food/food_itinerary_item';

class TripPage extends React.Component {
    componentDidMount() {
        this.props.fetchATrip(this.props.tripId);
    }
    render() {

        if (!this.props.trip) {
            return (
                <div>Loading Trip...</div>
            )
        } else {
            // debugger

            const trip = this.props.trip
            // debugger
            const tabArr = [
                { title: "Flights", content: <FlightItineraryItem tripId={this.props.tripId} flightItineraryItems={Object.values(trip.flightItineraryItems)} deleteFlightItem={this.props.deleteFlightItem} /> },

                { title: "Lodging", content: <LodgingItineraryItem tripId={this.props.tripId} lodgingItineraryItems={Object.values(trip.lodgingItineraryItems)} deleteLodgingItem={this.props.deleteLodgingItem} /> },

                { title: "Food", content: <FoodItineraryItem tripId={this.props.tripId} foodItineraryItems={Object.values(trip.foodItineraryItems)} deleteFoodItem={this.props.deleteFoodItem} /> },

                { title: "Other", content: <ItineraryItem tripId={this.props.tripId} itineraryItems={Object.values(trip.itineraryItems)} deleteItem={this.props.deleteItem} /> }
            ]

            // debugger
            return (
                <div className='trip-page-container'>
                    <div className='trip-sidebar-container'>
                        <div className="trip-sidebar-container-elements">
                        {/* <UsersListContainer users={this.props.trip.users} tripId={this.props.tripId} /> */}
                        <UsersListContainer users={this.props.trip.users} newusers={this.props.users} tripId={this.props.tripId} />
                        </div>
                    </div>
                    <div className='trip-chat-container'>
                        <CommentsContainer tripId={this.props.trip._id} comments={Object.values(this.props.comments)} />
                    </div>
                    <div className="trip-items-container">
                        <header className="trip-items-header">
                            <h1>Next stop, {this.props.trip.destination}!</h1>
                            <br />
                        </header>

                        <div className='trip-items-subcontainer'>
                            <ItineraryContainer tripId={this.props.tripId} tabs={tabArr}/>
                        </div>
                    </div>

                    <div className="filler-queen">
                    </div>
                </div>
            )
        }
    }
}

export default TripPage;