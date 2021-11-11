import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="footerarea">
          <div className="container">
            <div className="topfooter">
              <div className="row">
                <div className="col-lg-4 col-md-10 leftside">
                  <p>
                    <i className="fas fa-map-marker-alt"></i>
                    H#000 (0th Floor), Road #00, New DOHS, Mohakhali, Dhaka,
                    Bangladesh
                  </p>
                </div>
                <div className="col-lg-2  col-md-10 footerlink">
                  <h5>Company</h5>
                  <ul>
                    <li>about</li>
                    <li>project</li>
                    <li>our team</li>
                    <li>team condition</li>
                    <li>submit listing</li>
                  </ul>
                </div>
                <div className="col-lg-2 col-md-10 footerlink">
                  <h5>Quick Links</h5>
                  <ul>
                    <li>Quick Links</li>
                    <li>Rentals</li>
                    <li>Sales</li>
                    <li>Contact</li>
                    <li>Our blog</li>
                  </ul>
                </div>
                <div className="col-lg-4 col-md-10">
                  <h5>About us</h5>
                  <p>
                    consectetur adipiscing elit. Purus commodo ipsum duis
                    laoreet maecenas.
                  </p>
                  <div className="socileicon">
                    <i className="fab fa-facebook-f"></i>
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-linkedin"></i>
                    <i className="fab fa-youtube"></i>
                  </div>
                </div>
              </div>
              <div className="botomfooter   text-start ">
                <p>Copyright &copy; by || jamil rayhan 2021</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
