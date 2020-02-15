import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  // state = {
  //   isLoading: true,
  //   data: null
  // };
  // static contextType = AuthContext;
  // componentDidMount() {
  //   this.fetchDetails();
  // }
  // fetchDetails = () => {
  //   this.setState({ isLoading: true });
  //   fetch("/api/footer")
  //     .then(res => {
  //       if (res.status !== 200 && res.status !== 201) {
  //         throw new Error("Failed!");
  //       }
  //       return res.json();
  //     })
  //     .then(resData => {
  //       this.setState({ data: resData.footer, isLoading: false });
  //       this.props.adminEmail(resData.footer[3].text4);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //       this.setState({ isLoading: false });
  //     });
  // };
  // editingPage = () => {
  //   this.setState(prevState => {
  //     return { isEditing: !prevState.isEditing };
  //   });
  // };

  render() {
    return (
      <div className="footer-main-w3_agile">
        <div className="footer-dot">
          <div className="container">
            <div className="footer-bottom">
              <div className="col-md-4 col-sm-6 col-xs-6 footer-grid1 address">
                <h4>Contact Info</h4>
                <ul>
                  <li>
                    <span className="fa fa-home" aria-hidden="true" />
                    <p>1234k Avenue,block-4,New York City.</p>
                  </li>
                  <li>
                    <span className="fa fa-envelope-o" aria-hidden="true" />
                    <a href="mailto:info@example.com">info@example.com</a>
                  </li>
                  <li>
                    <span className="fa fa-phone" aria-hidden="true" />
                    <p>+1234 567 892</p>
                  </li>
                </ul>
              </div>
              <div className="col-md-3 col-sm-6 col-xs-6 footer-grid1 res">
                <h4>services</h4>
                <ul>
                  <li>
                    <a href="#">appliance repair</a>
                  </li>
                  <li>
                    <a href="#">home improvement</a>
                  </li>
                  <li>
                    <a href="#">home maintenance</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-3 col-sm-6 col-xs-6 footer-grid1 ftr-img">
                <h4>latest Posts</h4>
                <ul>
                  <li>
                    <a href="single.html">
                      <img
                        src="images/t1.jpg"
                        alt=" "
                        className="img-responsive"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="single.html">
                      <img
                        src="images/t2.jpg"
                        alt=" "
                        className="img-responsive"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="single.html">
                      <img
                        src="images/t3.jpg"
                        alt=" "
                        className="img-responsive"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="single.html">
                      <img
                        src="images/t4.jpg"
                        alt=" "
                        className="img-responsive"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="single.html">
                      <img
                        src="images/t1.jpg"
                        alt=" "
                        className="img-responsive"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="single.html">
                      <img
                        src="images/t2.jpg"
                        alt=" "
                        className="img-responsive"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="single.html">
                      <img
                        src="images/t3.jpg"
                        alt=" "
                        className="img-responsive"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="single.html">
                      <img
                        src="images/t2.jpg"
                        alt=" "
                        className="img-responsive"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="single.html">
                      <img
                        src="images/t4.jpg"
                        alt=" "
                        className="img-responsive"
                      />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-2 col-sm-6 col-xs-6 footer-grid1">
                <h4>legal</h4>
                <ul>
                  <li>
                    <a href="privacy.html">privacy policy</a>
                  </li>
                  <li>
                    <a href="#">licence info</a>
                  </li>
                  <li>
                    <a href="terms.html">terms of use</a>
                  </li>
                </ul>
              </div>
              <div className="clearfix" />
            </div>
            <div className="agileinfo-subscribe-grid text-center">
              <img src="images/mail.png" alt="" />
              <h4>stay upto date with our newsletter!</h4>
              <p>
                Sign up to receive helpful Q&amp;A, info on upcoming services
                and more.
              </p>
              <form action="#" method="post">
                <input
                  type="email"
                  placeholder="Enter your email.."
                  name="Subscribe"
                  required
                />
                <button className="btn1">sign up</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      // <div>
      //   {!this.state.isLoading && (
      //     <MDBFooter className='font-small pt-4 mt-4'>
      //       <MDBContainer fluid className='container text-center text-md-left'>
      //         <MDBRow>
      //           <FooterMenu data={this.state.data[0]} />
      //           <FooterMenu data={this.state.data[1]} />
      //           <FooterMenu data={this.state.data[2]} />
      //           <MDBCol md='3' sm='6' className='text-left'>
      //             <ContactInfo data={this.state.data[3]} />
      //           </MDBCol>
      //         </MDBRow>

      //         <hr className='border-secondary' />
      //       </MDBContainer>
      //       <div className='footer-copyright text-center py-3'>
      //         <MDBContainer fluid>
      //           &copy; {new Date().getFullYear()} Copyright:{" "}
      //           <a href='/'>{this.state.data[4].groupName}</a>
      //         </MDBContainer>
      //         <div className='container d-lg-flex justify-content-end'>
      //           <nav className='navbar navbar-light col-lg-3'>
      //             <ul className='navbar-nav margin-0-auto flex-row '>
      //               <li className='nav-item mx-3'>
      //                 <a className='nav-link' href={this.state.data[4].link1}>
      //                   <img
      //                     src='/images/youtube.png'
      //                     alt='social media'
      //                     className='social-icon'
      //                   />
      //                 </a>
      //               </li>
      //               <li className='nav-item mx-3'>
      //                 <a className='nav-link' href={this.state.data[4].link2}>
      //                   <img
      //                     src='/images/insta.png'
      //                     alt='social media'
      //                     className='social-icon'
      //                   />
      //                 </a>
      //               </li>
      //               <li className='nav-item mx-3'>
      //                 <a className='nav-link' href={this.state.data[4].link3}>
      //                   <img
      //                     src='/images/google.png'
      //                     alt='social media'
      //                     className='social-icon'
      //                   />
      //                 </a>
      //               </li>
      //             </ul>
      //           </nav>
      //         </div>
      //       </div>
      //       {this.context.token && (
      //         <div className='container'>
      //           <button
      //             className='btn btn-sm btn-warning'
      //             onClick={this.editingPage}
      //           >
      //             Edit footer
      //           </button>
      //         </div>
      //       )}
      //       {this.state.isEditing && (
      //         <div>
      //           <EditFooter data={this.state.data[0]} />
      //           <EditFooter data={this.state.data[1]} />
      //           <EditFooter data={this.state.data[2]} />
      //           <EditFooter data={this.state.data[3]} />
      //           <EditFooter data={this.state.data[4]} />
      //         </div>
      //       )}
      //     </MDBFooter>
      //   )}
      // </div>
    );
  }
}

export default Footer;
