import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='https://twitter.com/Preston_176' className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='https://www.linkedin.com/in/preston-mayieka-308b2b24a' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='https://github.com/preston176' className='me-4 text-reset'>
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="user-alt" className="me-3" />
                Pres_176
              </h6>
              <p>
              REACT developer
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Servicing
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Sell
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Buy
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Contact
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Other Projects</h6>
              <p>
                <a href='https://preston176.github.io/instagram-clone/' className='text-reset'>
                  Instagram Clone
                </a>
              </p>
              <p>
                <a href='https://preston176.github.io/Movie-site/' className='text-reset'>
                  Movie Site
                </a>
              </p>
              <p>
                <a href='https://preston176.github.io/QR-Code-Generator' className='text-reset'>
                QR Code Generator using JavaScript
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Kenya 00100, KE
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                pres176@gmail.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 254 (79907-8848)
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2021 Copyright: <span>&nbsp;</span>
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          preston176
        </a>
      </div>
    </MDBFooter>
  );
}