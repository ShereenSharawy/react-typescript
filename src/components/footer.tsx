import React, { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className="footer-06">
      <div className="container">
        <div className="row align-items-center align-items-stretch mb-5">
          <div className="col-md-4 pl-md-5 aside-stretch d-flex align-items-center">
            <div className="w-100">
              <span className="subheading">Subscribe to our</span>
              <h3 className="heading-section">Newsletter</h3>
            </div>
          </div>
          <div className="col-md-8 d-flex align-items-center pl-md-5 aside-stretch-right">
            <form action="#" className="subscribe-form w-100">
              <div className="form-group d-flex">
                <input
                  type="text"
                  className="form-control rounded-left"
                  placeholder="Enter email address"
                />
                <button type="submit" className="btn btn-primary mb-3">
                  <span>Submit</span>
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="row pt-4">
          <div className="col-md-3 col-lg-6 order-md-last">
            <div className="row justify-content-end">
              <div className="col-md-12 col-lg-9 text-md-right mb-md-0 mb-4">
                <p className="copyright">Copyright ©2022 All rights reserved</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
