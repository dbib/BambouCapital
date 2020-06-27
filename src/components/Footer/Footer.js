import React, { Component } from "react";
import "./footer.css";
import twitter from "../../assets/iconmonstr-twitter-1.svg";
import instagram from "../../assets/iconmonstr-instagram-11.svg";
import facebook from "../../assets/iconmonstr-facebook-1.svg";

export default class extends Component {
  render() {
    return (
      <div className="footer-root">
        <footer>
          <div className="social-cont">
            <a
              href="https://twitter.com/Moisembusa5"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={twitter} alt="twitter icon" />
            </a>
            <a href="instagram.com" target="_blank" rel="noopener noreferrer">
              <img src={instagram} alt="twitter icon" />
            </a>
            <a href="facebook.com" target="_blank" rel="noopener noreferrer">
              <img src={facebook} alt="twitter icon" />
            </a>
          </div>
          <div className="infos-cont">
            <div className="references">
              <div className="illustrations">
                <p>
                  Les illustrations utilisées sur ce site web viennent de
                  <a
                    href="https://undraw.co"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    undraw
                  </a>
                </p>
              </div>
              <div className="icons">
                <p>
                  Les illustrations utilisées sur ce site web viennent de
                  <a
                    href="https://iconmonstr.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    iconmonstr
                  </a>
                </p>
              </div>
              <div className="fonts">
                <p>
                  Les polices utilisées sur ce site web viennent de
                  <a
                    href="https://onlinewebfonts.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    onlinewebfonts
                  </a>{" "}
                  et de
                  <a
                    href="https://fonts.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    google fonts
                  </a>
                </p>
              </div>
            </div>
            <div className="developer">
              <div className="founder">
                <p>Created by Moise MBUSA</p>
              </div>
              <div className="designer-coder">
                <p>
                  Code/ Design by{" "}
                  <a
                    href="https://twitter.com/bcbg_d"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Don Bach
                  </a>
                </p>
              </div>
              <p>&copy; 2020 Bambou Capital</p>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
