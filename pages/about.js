import styles from '../styles/Home.module.css'

const getEvents = function() {
    
    // fetch(`https://www.eventbriteapi.com/v3/venues/nutty-brown-amphitheatre/events/`, {
    //     method: "GET",
    //     headers: {
    //         Authorization: "Bearer O5ZSGKDYPRVZE5KYBYXF",
    //     },
    // })
    // .then(res => {
    //     if(res.ok) {
    //         console.log("Success");
    //         return res.json()
    //     } else {
    //         console.log("Something went wrong");
    //     }
    // })
    // .then(data =>{
    //     console.log(data, "Here is our Venue data");
    // })
    // .catch(error => console.log(error, "ERROR"))
}

const about = () => {
    return (
        <div>
            <h2>This is My About Page</h2>
            <button onClick={getEvents()}>Click to pull data!</button>
        </div>
    )
}



export default about;