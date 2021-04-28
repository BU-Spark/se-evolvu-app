import './index.css'

const Testimonial = () => {
    return(
        <div id = "TestimonialPage">
            <div id = "buffer"></div>

            <div id= "TestimonialHeader">Testimonials</div>

            <div id = "Body">

                <div id= "subHeader">Here's What Our Community Has to Say</div>

                <br/>
                
                <div>
                    Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                     Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et 
                </div>

                <br/>
                <br/>
                <br/>

                <div id = "centerBlockShadow" className = "col" style = {{width: "90%"}}>

                    <h3>
                        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy 
                        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                        At vero eos et accusam et justo duo dolores et ea rebum.  Stet clita kasd gubergren, 
                        no sea takimata sanctus est Lorem ipsum dolor sit amet."
                    </h3>

                    <div id = "quoteSayer"> John Keny - Head Health Coach at NDA</div>
                
                </div>

                <div id = "centerBlockShadow" className = "col" style = {{width: "90%"}}>

                    <h3>
                        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy 
                        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                        At vero eos et accusam et justo duo dolores et ea rebum.  Stet clita kasd gubergren, 
                        no sea takimata sanctus est Lorem ipsum dolor sit amet."
                    </h3>

                    <div id = "quoteSayer"> Julie P. Ceo of Health is Wealth</div>

                </div>

                <div id = "centerBlockShadow" className = "col" style = {{width: "90%"}}>

                    <h3>
                        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy 
                        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                        At vero eos et accusam et justo duo dolores et ea rebum.  Stet clita kasd gubergren, 
                        no sea takimata sanctus est Lorem ipsum dolor sit amet."
                    </h3>

                    <div id = "quoteSayer"> Gracie G. Founder of Hip Yoga</div>

                </div>


            </div>

        </div> 
    )
}


export default Testimonial;