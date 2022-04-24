import React from 'react';
import { useState } from "react";
//import './App.css';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css'
import { gapi } from 'gapi-script';

function GoogleCalendar() {

    var gapi = window.gapi
    console.log(window.gapi)
    /* 
      Update with your own Client Id and Api key 
    */
    var CLIENT_ID = "122084071596-h2gq226ndg4daaiq6625j57769g2k7t8.apps.googleusercontent.com"
    var API_KEY = "AIzaSyDLtwCemuZwKFn6iXbAbW21b2qWuViHb9A"
    var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"]
    var SCOPES = "https://www.googleapis.com/auth/calendar.events"

    var timeStart
    var timeEnd

    const [date, setSelectedDate] = useState(null)
    const [inputs, setInputs] = useState({});

    const handleDateChange = (date) => {
        setSelectedDate(date);
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs.email);

        const time = inputs.time.split("-")
        time[0] = time[0] + ":00"
        time[1] = time[1] + ":00"

        timeStart = time[0]
        timeEnd = time[1]
        
        console.log(timeStart)
        handleClick(timeStart, timeEnd);
    }

    const handleClick = (timeStart,timeEnd) => {
        gapi.load('client:auth2', () => {
            console.log('loaded client')

            gapi.client.init({
                apiKey: API_KEY,
                clientId: CLIENT_ID,
                discoveryDocs: DISCOVERY_DOCS,
                scope: SCOPES,
            })

            gapi.client.load('calendar', 'v3', () => console.log('bam!'))

            gapi.auth2.getAuthInstance().signIn()
                .then(() => {

                    var event = {
                        'summary': (inputs.name),
                        'location': (inputs.location),
                        'description': (inputs.description),
                        'start': {
                            'dateTime': (document.getElementById("start-date").value) + 'T'  + (timeStart) ,
                            'timeZone': 'Asia/Bangkok'
                        },
                        'end': {
                            'dateTime': (document.getElementById("start-date").value) + 'T'  + (timeEnd) ,
                            'timeZone': 'Asia/Bangkok'
                        },
                        'attendees': [
                            { 'email': (inputs.email) },
                        ],
                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    };

                    var request = gapi.client.calendar.events.insert({
                        'calendarId': 'primary',
                        'resource': event,
                    })

                    request.execute(event => {
                        console.log(event)
                        window.open(event.htmlLink)
                    })


                    /*
                        Uncomment the following block to get events
                    */
                    /*
                    // get events
                    gapi.client.calendar.events.list({
                      'calendarId': 'primary',
                      'timeMin': (new Date()).toISOString(),
                      'showDeleted': false,
                      'singleEvents': true,
                      'maxResults': 10,
                      'orderBy': 'startTime'
                    }).then(response => {
                      const events = response.result.items
                      console.log('EVENTS: ', events)
                    })
                    */


                })
        })
    }


    return (
        <div>
            <p>Click to add event to Google Calendar</p>
            <p style={{ fontSize: 18 }}>Uncomment the get events code to get events</p>
            <p style={{ fontSize: 18 }}>Don't forget to add your Client Id and Api key</p>

            <form onSubmit={handleSubmit}>
                <label>Event Name:
                    <input
                        type="text"
                        name="name"
                        value={inputs.name || ""}
                        onChange={handleChange}
                    />
                </label>

                <br></br>

                <label>Location:
                    <input
                        type="text"
                        name="location"
                        value={inputs.location || ""}
                        onChange={handleChange}
                    />
                </label>

                <br></br>

                <label>Description:
                    <input
                        type="text"
                        name="description"
                        value={inputs.description || ""}
                        onChange={handleChange}
                    />
                </label>

                <br></br>

                <label> Start Date:
                    <DatePicker
                        id="start-date"
                        placeholder=""
                        selected={date}
                        onChange={handleDateChange}
                        dateFormat='yyyy-MM-dd'
                    />
                </label>

                <br></br>

                <label> Start Time - End Time:
                    <input
                        type="text"
                        name="time"
                        value={inputs.time || ""}
                        onChange={handleChange}
                    />
                    <label> (เริ่ม-จบ 0-24 ชม. (HH = ชั่วโมง, MM=นาที) ตัวอย่าง input: HH:MM-HH:MM)</label>
                </label>

                <br></br>

                <label> Teacher Email:
                    <input
                        type="text"
                        name="email"
                        value={inputs.email || ""}
                        onChange={handleChange}
                    />
                </label>

                <br></br>

                <input type="submit" />
            </form>
        </div>
    );
}

export default GoogleCalendar;