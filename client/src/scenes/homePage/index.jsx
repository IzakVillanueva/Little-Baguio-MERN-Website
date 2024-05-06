import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import Navbar from "scenes/navbar";
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
            
            <section>
            <div className="about">
                <img className="image-placeholder" alt="Image placeholder" src="image-placeholder.png" />
                <div className="text-wrapper">What is Little Baguio?</div>
                <p className="div">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris rutrum.</p>
            </div>
            </section>
        </Box>
    );
};


export const About = () => {
    return (
        <div className="about">
            <img className="image-placeholder" alt="Image placeholder" src="image-placeholder.png" />
            <div className="text-wrapper">What is Little Baguio?</div>
            <p className="div">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris rutrum.</p>
        </div>
    );
};

export const News = () => {
    return (
      <div className="news">
        <div className="news-updates">News &amp; Updates</div>
        <div className="image-card">
          <div className="overlap-group">
            <img className="button" alt="Button" src="button.svg" />
            <p className="text-wrapper">Fiesta in Barangay Little Baguio</p>
          </div>
          <img className="image-placeholder" alt="Image placeholder" src="image-placeholder.png" />
        </div>
        <div className="div">
          <img className="img" alt="Button" src="image.svg" />
          <img className="image-placeholder" alt="Image placeholder" src="image.png" />
          <div className="text-wrapper-2">BIDA Program Anniversary Celebration</div>
        </div>
        <div className="image-card-2">
          <div className="overlap">
            <img className="button" alt="Button" src="button-2.svg" />
            <p className="text-wrapper">San Juan Para Games 2024</p>
          </div>
          <img className="image-placeholder" alt="Image placeholder" src="image-placeholder-2.png" />
        </div>
        <div className="image-card-3">
          <div className="overlap">
            <img className="button" alt="Button" src="button-3.svg" />
            <p className="text-wrapper">
              Ermitaño Creek <br />
              Clean Up Operation
            </p>
          </div>
          <img className="image-placeholder" alt="Image placeholder" src="image-placeholder-3.png" />
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
    return (
      <div className="footer">
        <div className="overlap">
          <div className="line" />
          <div className="text-wrapper">© Little Baguio 2024</div>
          <div className="services">
            <div className="overlap-group">
              <div className="div">Resources</div>
              <div className="events">Directory</div>
              <div className="text-wrapper-2">Feedback</div>
            </div>
            <div className="overlap-2">
              <div className="forms">Requests</div>
              <div className="text-wrapper-3">Services</div>
            </div>
          </div>
          <div className="community">
            <div className="feedback">Forum</div>
            <div className="overlap-3">
              <div className="forms">News</div>
              <div className="text-wrapper-4">Community</div>
            </div>
          </div>
          <div className="contacts">
            <img className="insta-logo" alt="Insta logo" src="insta-logo-1.png" />
            <img className="email" alt="Email" src="email-1.png" />
            <a href="https://www.facebook.com/littlebaguio" rel="noopener noreferrer" target="_blank">
              <img className="FB-logo" alt="Fb logo" src="FB-logo-1.png" />
            </a>
            <p className="address">Jose Abad Santos cor. Gen. Gutierrez St., Little Baguio, San Juan, Philippines</p>
            <div className="text-wrapper-5">Contact Us</div>
          </div>
          {/*<LittlebaguioLogo className="littlebaguio-logo-white-1" />*/}
        </div>
      </div>
    );
  };
  

export default HomePage;

