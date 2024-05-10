import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import Navbar from "scenes/navbar";
import { useNavigate } from "react-router-dom";
import './home.css';


const HomePage = () => {
    return (
        <Box>
            <Navbar />
            <section className="hero">
                <div className="container">
                    <div className="hero-text">
                        <h1>Be a part of the Community!</h1>
                        <p>Get the latest updates, connect with others, and benefit from the services we offer.</p>
                    </div>
                </div>
            </section>
            
            <section> {/* ABOUT */}
              <div className="about">
                <div className="aboutText">
                  <div className="text-wrapper">What is Little Baguio?</div>
                  <p className="div">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris rutrum.</p>
                </div>
                <div className="aboutPic">
                  <img className="image-placeholder" alt="RED PEOPLE" src="../../../../assets/redpeople.jpg" />
                </div>
              </div>
            </section>

            <section> {/* NEWS */} 
              <News />
            </section>
            <section>
              
            </section>
            <section> {/* FOOTER */} 
              <Footer />
            </section>
        </Box>
    );
};

export const News = () => {
  const navigate = useNavigate();
    return (
      <div className="news">
        <button className="newsBut" onClick={() => navigate("/news")} style={{ border: 'none', background: 'none', cursor: 'pointer'}}>
          <div className="news-updates">News &amp; Updates</div>
        </button>
        <div className="newsFirstRow">
          <div className="image-card">
            <img className="image-placeholder" alt="Image placeholder" src="../../../../assets/samplenewsimage1.jpg" />
            <div className="overlap">
              <p className="text-wrapper">Fiesta in Barangay Little Baguio</p>
              <img className="button" alt="Button" src="../../../../assets/ButtonLM.png" />
            </div>
          </div>

          <div className="image-card">
            <img className="image-placeholder" alt="Image placeholder" src="../../../../assets/samplenewsimage2.jpg" />
            <div className="overlap">
              <p className="text-wrapper">San Juan Para Games 2024</p>
              <img className="button" alt="Button" src="../../../../assets/ButtonLM.png" />
            </div>
          </div>
        </div>

        <div className="newsFirstRow">
          <div className="image-card">
            <img className="image-placeholder" alt="Image placeholder" src="../../../../assets/samplenewsimage3.jpg" />
            <div className="overlap">
              <p className="text-wrapper">BIDA Program Anniversary Celebration</p>
              <img className="button" alt="Button" src="../../../../assets/ButtonLM.png" />
            </div>
          </div>

          <div className="image-card">
            <img className="image-placeholder2" alt="Image placeholder" src="../../../../assets/samplenewsimage4.png" />
            <div className="overlap">
              <p className="text-wrapper">Ermitaño Creek Clean Up Operation</p>
              <img className="button" alt="Button" src="../../../../assets/ButtonLM.png" />
            </div>
          </div>
        </div>
      </div>
    );
  };

  export const EventsCalendar = () => {
    return (
      <div className="events-calendar">
        {/*<IconRight className="icon-left" color="#303030" />
        <IconComponentNode className="icon-right" />*/}
        <div className="text-wrapper">Event Calendar</div>
        <div className="events">
          <div className="image-card-event">
            <div className="overlap-group">
              <div className="div">
                <div className="month">Apr</div>
                {/* <img className="rectangle" alt="Rectangle" src="rectangle-9.svg" /> */}
              </div>
              <div className="day">01</div>
            </div>
          </div>
          <div className="overlap-wrapper">
            <div className="overlap-group">
              <div className="div">
                <div className="month">May</div>
                {/* <img className="rectangle" alt="Rectangle" src="image.svg" /> */}
              </div>
              <div className="day">12</div>
            </div>
          </div>
          <div className="overlap-group-wrapper">
            <div className="overlap-group">
              <div className="div">
                <div className="month">Jun</div>
                {/* <img className="rectangle" alt="Rectangle" src="rectangle-9-2.svg" /> */}
              </div>
              <div className="day">20</div>
            </div>
          </div>
          <div className="div-wrapper">
            <div className="overlap-group">
              <div className="div">
                <div className="month">Aug</div>
                {/* <img className="rectangle" alt="Rectangle" src="rectangle-9-3.svg" /> */}
              </div>
              <div className="day">30</div>
            </div>
          </div>
          <div className="image-card-event-2">
            <div className="overlap-group">
              <div className="div">
                <div className="month">Sep</div>
                {/* <img className="rectangle" alt="Rectangle" src="rectangle-9-4.svg" /> */}
              </div>
              <div className="day">05</div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export const CommunityForum = () => {
    return (
      <div className="community-forum">
        <div className="overlap-group">
          {/* <img className="rectangle" alt="Rectangle" src="rectangle-17.png" /> */}
          <div className="text-wrapper">Connect with Us!</div>
          <img className="button" alt="Button" src="button.svg" />
          <p className="join-our-community">
            Join our community forum to meet your online neighbors, swap stories, and exchange tips on everything from
            gardening to local events. Whether you&#39;re seeking advice or simply craving a chat over a virtual fence,
            you&#39;ll find a warm welcome here. Come on in and become a part of our close-knit online neighborhood today!
          </p>
        </div>
      </div>
    );
  };

  export const TrackinRequests = () => {
    return (
      <div className="trackin-requests">
        <div className="overlap">
          {/* <img className="rectangle" alt="Rectangle" src="rectangle-5.svg" /> */}
          <div className="div" />
          <div className="text-wrapper">Track Your Requests!</div>
          <div className="forms">
            <img className="button" alt="Button" src="button.svg" />
            <div className="input-field-tracking">
              <div className="overlap-group">
                <p className="p">Enter your Tracking Reference No.</p>
                {/* <img className="enter-your-name" alt="Enter your name" src="enter-your-name.svg" /> */}
              </div>
            </div>
          </div>
          <p className="text-wrapper-2">
            Put your Tracking Reference Number in order to receive the status of your request in your registered email!
          </p>
        </div>
      </div>
    );
  };

  export const ServiceRequest = () => {
    return (
      <div className="service-request">
        <div className="overlap">
          <div className="overlap-group">
            <p className="text-wrapper">Fill out this form to request our services</p>
            <p className="div">Having a Bit of Trouble?</p>
          </div>
          <div className="forms">
            <img className="button" alt="Button" src="button.svg" />
            <div className="input-field-email">
              <div className="overlap-group-2">
                <div className="enter-your-message">Enter your message...</div>
                {/* <img className="img" alt="Enter your message" src="enter-your-message.svg" /> */}
              </div>
            </div>
            <div className="input-field-name">
              <div className="overlap-2">
                <div className="text-wrapper-2">Enter your name</div>
                {/* <img className="enter-your-name" alt="Enter your name" src="enter-your-name.svg" /> */}
              </div>
            </div>
            <div className="overlap-wrapper">
              <div className="overlap-3">
                <div className="text-wrapper-2">Enter your email</div>
                {/* <img className="enter-your-email" alt="Enter your email" src="enter-your-email.svg" /> */}
              </div>
            </div>
            <div className="input-field-contact">
              <div className="overlap-4">
                <div className="text-wrapper-3">Contact No.</div>
                <img className="contact-no" alt="Contact no" src="contact-no.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export const Footer = () => {
    const navigate = useNavigate();
    return (
      <div className="footer">
        <div className="overlap">
          <div className="blocking">
            <img className="libagLogo" alt="Libaglogo" src="../../../../assets/LittleBaguio Logo (White) 1.png" />
          </div>

          <div className="blocking">
            <p className="headings">Community</p>
            <p className="selection" onClick={() => navigate("/news")} style={{ cursor: 'pointer'}}>News</p>
            <p className="selection">Forum</p>
          </div>

          <div className="blocking">
            <p className="headings">Services</p>
            <p className="selection">Requests</p>
            <p className="selection">Feedback</p>
            <p className="selection">Directory</p>
            <p className="selection">Resources</p>
          </div>

          <div className="blocking">
            <p className="headings">Contact Us</p>
            <div className="iamges">
              <img className="conts" alt="Libaglogo" src="../../../../assets/Email 1.png" />
              <img className="conts" alt="Libaglogo" src="../../../../assets/FB Logo 1.png" />
              <img className="conts" alt="Libaglogo" src="../../../../assets/Insta Logo 1.png" />
            </div>
            <p className="selection1">Jose Abad Santos cor. Gen.</p>
            <p className="selection1">Gutierrez St., Little Baguio,</p>
            <p className="selection1">San Juan, Philippines</p>
          </div>
        </div>
        <div className="line" />
        <div className="text-wrapper">© Little Baguio 2024</div>
      </div>
    );
  };
  

export default HomePage;

