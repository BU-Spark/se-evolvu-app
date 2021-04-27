import React, { useState } from 'react';

import Carousel from 'react-bootstrap/Carousel';
// import Image from 'react-bootstrap/Image';

const DashCarousel = () => {

    let props = [
        {
            "name": "Julio",
            "time": "11:00 AM"
        },
        {
            "name": "Julia",
            "time": "12:00 PM"
        },
        {
            "name": "Julius",
            "time": "1:00 PM"
        },
        {
            "name": "Julian",
            "time": "2:00 PM"
        },
        {
            "name": "Jeff",
            "time": "11:00 AM"
        },
        {
            "name": "Geoff",
            "time": "12:00 PM"
        },
        {
            "name": "Jef",
            "time": "1:00 PM"
        },
        {
            "name": "Jeffy",
            "time": "2:00 PM"
        },
    ]

    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

    const splitSessions = (sessionList) => {

        let res = []
        let count = 0
        let tmp = []

        sessionList.forEach( (session) => {

            if (count === 4) {
                res.push(tmp)
                tmp = [session]
                count = 1
            } else {
                tmp.push(session)
                count++
            }
        })
        res.push(tmp)

        return res
    }

    let idx = 0;
    return (
      <Carousel activeIndex={index} onSelect={handleSelect} style={{ background: "#F6F6F6"}}>
          {
              splitSessions(props).map((sessionListing) => (
                <Carousel.Item key={idx++}>
                    <div style={{ display: 'flex', justifyContent: "space-between", alignContent: "center"}}>
                        {sessionListing.map((client) => (
                            <div style={{ height: '15vh', width: '15vh'}} key={client.name}>  
                                with {client.name} at <br/> {client.time}
                            </div>
                        ))}`
                    </div>
                </Carousel.Item>
              ))
              
          }
      </Carousel>
    );
  }
  
export default DashCarousel;