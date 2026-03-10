import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={{ padding: '0 100px 40px', background: '#F9F9F9' }}>
      <div style={{
        maxWidth: '1240px',
        margin: '0 auto',
        background: '#EEEEEE',
        borderRadius: '20px',
        padding: '50px 60px 40px',
      }}>
        {/* Main Footer Content */}
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          gap: '40px',
        }}>
          {/* Logo + Tagline */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '25px',
            width: '250px',
            flexShrink: 0,
          }}>
            <Link to="/" style={{ textDecoration: 'none', alignSelf: 'stretch', display: 'flex', justifyContent: 'center' }}>
              <img
                src="/images/logo.png"
                alt="Grassroot Policies"
                style={{ width: '250px', height: '105px', objectFit: 'contain' }}
              />
            </Link>
            <p style={{
              fontFamily: "'Lora', serif",
              fontWeight: 400,
              fontSize: '18px',
              lineHeight: '23px',
              textAlign: 'center',
              color: '#2D2D2D',
              margin: 0,
              alignSelf: 'stretch',
            }}>
              Tagline
            </p>
          </div>

          {/* Footer Link Columns */}
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'flex-start',
            gap: '50px',
          }}>
            {/* Quick Links */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: '10px',
              width: '105px',
            }}>
              <h4 style={{
                fontFamily: "'Open Sans', sans-serif",
                fontWeight: 700,
                fontSize: '18px',
                lineHeight: '25px',
                color: '#2D2D2D',
                margin: 0,
              }}>
                Quick Links
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '15px', alignSelf: 'stretch' }}>
                {[
                  { name: 'Home', path: '/' },
                  { name: 'About', path: '/about' },
                  { name: 'Join Us', path: '/join' },
                  { name: 'Contact', path: '/contact' },
                ].map((item) => (
                  <li key={item.name}>
                    <Link to={item.path} style={{
                      fontFamily: "'Open Sans', sans-serif",
                      fontWeight: 400,
                      fontSize: '16px',
                      lineHeight: '22px',
                      color: '#2D2D2D',
                      textDecoration: 'none',
                    }}>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: '10px',
              width: '119px',
            }}>
              <h4 style={{
                fontFamily: "'Open Sans', sans-serif",
                fontWeight: 700,
                fontSize: '18px',
                lineHeight: '25px',
                color: '#2D2D2D',
                margin: 0,
              }}>
                Connect
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '15px', alignSelf: 'stretch' }}>
                {[
                  { name: 'Get Involved', path: '/get-involved' },
                  { name: 'Internships', path: '/internships' },
                  { name: 'Partner With Us', path: '/partner' },
                  { name: 'Community Reporting', path: '/community-reporting' },
                ].map((item) => (
                  <li key={item.name}>
                    <Link to={item.path} style={{
                      fontFamily: "'Open Sans', sans-serif",
                      fontWeight: 400,
                      fontSize: '16px',
                      lineHeight: '22px',
                      color: '#2D2D2D',
                      textDecoration: 'none',
                    }}>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: '10px',
              width: '124px',
            }}>
              <h4 style={{
                fontFamily: "'Open Sans', sans-serif",
                fontWeight: 700,
                fontSize: '18px',
                lineHeight: '25px',
                color: '#2D2D2D',
                margin: 0,
              }}>
                Legal
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '15px' }}>
                {[
                  { name: 'Privacy Policy', path: '/privacy' },
                  { name: 'Terms of Service', path: '/terms' },
                  { name: 'Cookie Policy', path: '/cookies' },
                ].map((item) => (
                  <li key={item.name}>
                    <Link to={item.path} style={{
                      fontFamily: "'Open Sans', sans-serif",
                      fontWeight: 400,
                      fontSize: '16px',
                      lineHeight: '22px',
                      color: '#2D2D2D',
                      textDecoration: 'none',
                    }}>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Social Links */}
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: '24px',
            flexShrink: 0,
            alignSelf: 'center',
          }}>
            {/* Email */}
            <a href="mailto:info@grassrootpolicies.org" aria-label="Email" style={{ color: '#2D2D2D', display: 'flex' }}>
              <svg width="28" height="20" viewBox="0 0 28 20" fill="none">
                <path d="M1.61 0H26.39C26.84 0 27.24 0.179 27.53 0.466C27.82 0.753 28 1.15 28 1.586V18.413C28 18.742 27.9 19.049 27.72 19.303C27.69 19.385 27.64 19.461 27.57 19.526C27.53 19.569 27.47 19.604 27.42 19.63C27.14 19.86 26.78 20 26.39 20H1.61C1.16 20 0.76 19.822 0.47 19.534C0.18 19.247 0 18.85 0 18.413V1.586C0 1.15 0.18 0.753 0.47 0.466C0.76 0.178 1.16 0 1.61 0ZM1.23 17.746L9.92 9.143L1.23 2.147V17.746ZM10.88 9.914L1.92 18.783H26.01L17.45 9.915L14.62 12.29C14.4 12.477 14.07 12.487 13.84 12.3L10.88 9.914ZM18.38 9.127L26.77 17.815V2.07L18.38 9.127ZM2.02 1.217L14.22 11.039L25.89 1.217H2.02Z" fill="#2D2D2D" stroke="#2D2D2D" strokeWidth="0.8"/>
              </svg>
            </a>
            {/* X / Twitter */}
            <a href="#" aria-label="X" style={{ color: '#2D2D2D', display: 'flex' }}>
              <svg width="22" height="20" viewBox="0 0 24 24" fill="#2D2D2D">
                <path d="M17.64 1.876H21.08L13.57 10.453L22.4 22.123H15.49L10.07 15.045L3.88 22.123H0.44L8.47 12.95L0 1.876H7.09L11.98 8.346L17.64 1.876ZM16.44 20.067H18.34L6.05 3.824H4.01L16.44 20.067Z" />
              </svg>
            </a>
            {/* Facebook */}
            <a href="#" aria-label="Facebook" style={{ color: '#2D2D2D', display: 'flex' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#2D2D2D">
                <path fillRule="evenodd" clipRule="evenodd" d="M5.82 0H18.98C21.96 0 24.4 2.45 24.4 5.444V18.556C24.4 21.55 21.96 24 18.98 24H13.85V15.672H17.1L17.77 11.989H13.85V10.686C13.85 8.739 14.61 7.99 16.58 7.99C17.19 7.99 17.69 8.005 17.97 8.035V4.695C17.43 4.546 16.12 4.396 15.36 4.396C11.35 4.396 9.5 6.298 9.5 10.401V11.989H7.03V15.672H9.5V24H5.82C2.84 24 0.4 21.55 0.4 18.556V5.444C0.4 2.45 2.84 0 5.82 0Z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid rgba(45, 45, 45, 0.2)',
          marginTop: '32px',
          paddingTop: '20px',
          textAlign: 'center',
        }}>
          <p style={{
            fontFamily: "'Lora', serif",
            fontStyle: 'italic',
            fontWeight: 400,
            fontSize: '14px',
            lineHeight: '18px',
            color: '#2D2D2D',
            opacity: 0.6,
            margin: 0,
          }}>
            Grassroot Policies {new Date().getFullYear()}. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
