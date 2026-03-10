import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={{ paddingTop: '80px', background: '#F9F9F9' }}>
      {/* ===== HERO SECTION + IMAGE GALLERY ===== */}
      <section style={{ position: 'relative', overflow: 'hidden' }}>
        {/* Background Color Blurs */}
        <div style={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0, opacity: 0.5, pointerEvents: 'none' }}>
          <div style={{ position: 'absolute', width: '300px', height: '300px', left: '0%', top: '30%', background: '#1B75BB', filter: 'blur(220px)' }} />
          <div style={{ position: 'absolute', width: '300px', height: '300px', left: '25%', top: '60%', background: '#4E8B42', filter: 'blur(220px)' }} />
          <div style={{ position: 'absolute', width: '300px', height: '300px', left: '50%', top: '60%', background: '#F39221', filter: 'blur(220px)' }} />
          <div style={{ position: 'absolute', width: '300px', height: '300px', left: '75%', top: '30%', background: '#FFCB05', filter: 'blur(220px)' }} />
        </div>

        {/* Hero Content */}
        <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '1100px', margin: '0 auto', padding: '32px 20px 0' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '40px', maxWidth: '780px', width: '100%' }}>
            {/* Title & Subtitle */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '14px', width: '100%' }}>
              <h1 style={{
                fontFamily: "'Lora', serif",
                fontWeight: 700,
                fontSize: 'clamp(26px, 3.2vw, 40px)',
                lineHeight: '1.28',
                textAlign: 'center',
                color: '#2D2D2D',
                margin: 0,
                maxWidth: '780px',
              }}>
                Making Policies That Solve Problems for Overlooked Communities
              </h1>
              <p style={{
                fontFamily: "'Lora', serif",
                fontWeight: 400,
                fontSize: 'clamp(14px, 1.4vw, 18px)',
                lineHeight: '1.4',
                textAlign: 'center',
                color: '#2D2D2D',
                margin: 0,
                maxWidth: '620px',
              }}>
                Working directly with communities to understand real challenges and turn them into practical policy solutions.
              </p>
            </div>

            {/* CTA Buttons */}
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Link
                to="/contact"
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: '15px 30px',
                  width: '211px',
                  height: '55px',
                  backgroundColor: '#4E8B42',
                  borderRadius: '50px',
                  fontFamily: "'Open Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: '18px',
                  lineHeight: '25px',
                  color: '#F9F9F9',
                  textDecoration: 'none',
                  boxSizing: 'border-box',
                }}
              >
                Get Involved
              </Link>
              <Link
                to="/research"
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: '12px 26px',
                  minWidth: '180px',
                  height: '46px',
                  backgroundColor: 'transparent',
                  border: '1px solid #2D2D2D',
                  borderRadius: '50px',
                  fontFamily: "'Open Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: '15px',
                  lineHeight: '22px',
                  color: '#2D2D2D',
                  textDecoration: 'none',
                  boxSizing: 'border-box',
                }}
              >
                Research
              </Link>
            </div>
          </div>

          {/* Image Gallery */}
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '24px', marginTop: '50px', paddingBottom: '24px', width: '100%', justifyContent: 'center', flexWrap: 'wrap' }}>
            <div style={{ width: '260px', height: '174px', borderRadius: '24px', overflow: 'hidden', flexShrink: 0, boxShadow: '1px 1px 10px rgba(0,0,0,0.2)' }}>
              <img src="/images/left.png" alt="Community work" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ width: '480px', height: '320px', borderRadius: '40px', overflow: 'hidden', flexShrink: 0, boxShadow: '1px 1px 10px rgba(0,0,0,0.2)' }}>
              <img src="/images/center.png" alt="Community gathering" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ width: '260px', height: '174px', borderRadius: '24px', overflow: 'hidden', flexShrink: 0, boxShadow: '1px 1px 10px rgba(0,0,0,0.2)' }}>
              <img src="/images/right.png" alt="Community event" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </section>

      {/* ===== HOW WE WORK ===== */}
      <section style={{ padding: '60px 20px', maxWidth: '1150px', margin: '0 auto' }}>
        <h2 style={{
          fontFamily: "'Lora', serif",
          fontWeight: 700,
          fontSize: 'clamp(24px, 2.5vw, 30px)',
          lineHeight: '1.3',
          textAlign: 'center',
          color: '#2D2D2D',
          margin: '0 0 40px',
        }}>
          How We Work
        </h2>

        <div style={{ display: 'flex', gap: '16px', width: '100%', maxWidth: '1100px', margin: '0 auto', alignItems: 'flex-end', position: 'relative', flexWrap: 'wrap', justifyContent: 'center' }}>
          {/* Observe - Blue */}
          <div style={{ flex: '1 1 240px', maxWidth: '270px', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '56px' }}>
            <div style={{
              boxSizing: 'border-box',
              padding: '16px',
              background: 'rgba(27, 117, 187, 0.5)',
              border: '1px solid #1B75BB',
              borderRadius: '24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', paddingBottom: '8px' }}>
                <svg width="32" height="18" viewBox="0 0 40 22" fill="none">
                  <ellipse cx="20" cy="11" rx="20" ry="11" fill="#F0915A"/>
                  <ellipse cx="20" cy="11" rx="18" ry="9.5" fill="#D7E6F0"/>
                  <ellipse cx="20" cy="11" rx="7.5" ry="7.5" fill="#0F4F78"/>
                  <ellipse cx="20" cy="11" rx="6" ry="6" fill="#2387C3"/>
                  <ellipse cx="20" cy="11" rx="3.5" ry="3.5" fill="#207AB0"/>
                  <circle cx="20" cy="11" r="1.5" fill="#555A6E"/>
                  <circle cx="22" cy="10" r="1" fill="#FFFFFF"/>
                </svg>
                <span style={{ fontFamily: "'Lora', serif", fontWeight: 600, fontSize: '17px', lineHeight: '22px', color: '#2D2D2D' }}>Observe</span>
              </div>
              <p style={{ fontFamily: "'Lora', serif", fontWeight: 400, fontSize: '14px', lineHeight: '20px', color: '#2D2D2D', margin: 0 }}>
                We carefully notice the real problems people face in their daily lives.
              </p>
            </div>
            <div style={{ width: '100%', height: '0px', borderBottom: '4px solid #1B75BB' }} />
          </div>

          {/* Listen - Yellow */}
          <div style={{ flex: '1 1 240px', maxWidth: '270px', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '38px' }}>
            <div style={{
              boxSizing: 'border-box',
              padding: '16px',
              background: 'rgba(255, 203, 5, 0.5)',
              border: '1px solid #FFCB05',
              borderRadius: '24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', paddingBottom: '8px' }}>
                <svg width="14" height="24" viewBox="0 0 17 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_listen)">
                    <path d="M0.00121725 24.2793V8.7515C0.00121725 8.1074 0.00233754 8.27307 0.00200145 8.21363C-0.0106018 6.23312 -0.0123943 5.95619 1.59433 4.08373C3.57574 1.77354 6.92004 -0.0574429 9.97709 0.00189055C12.7478 0.0555284 15.0122 1.72317 16.1243 4.14362C16.8929 5.81485 17.0943 7.90701 16.9626 10.0381C16.7963 12.7269 16.0982 15.4999 15.352 17.5355C14.5636 19.6864 13.116 22.0568 11.3696 24.164C9.66487 26.221 7.6592 28.0455 5.68553 29.1912C5.06074 29.5538 4.47119 29.8011 3.92129 29.9184C3.30339 30.0502 2.72812 30.0256 2.20041 29.8271C0.0923531 29.0336 0.00687473 26.7668 0.00424204 25.0541C0.00401798 24.7935 0.00121725 24.5406 0.00121725 24.2793Z" fill="#2D2D2D"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M0.766172 24.7347V8.75093C0.766172 6.50743 0.615157 6.39003 2.17701 4.56988C2.92072 3.70283 3.73293 3.0119 4.60995 2.46578C7.70997 0.535816 11.4569 -0.219317 14.2194 2.6523C14.7032 3.15534 15.1072 3.75426 15.4283 4.45271C17.0615 8.0042 15.9222 13.7668 14.635 17.2783C13.1373 21.364 9.1286 26.3194 5.30017 28.5418C4.19556 29.1829 3.24051 29.4105 2.47232 29.1215C0.725618 28.4641 0.766172 26.2558 0.766172 24.7347Z" fill="#FFCAA1"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M13.4542 7.99592C10.7554 6.14906 8.13416 6.19153 5.56516 7.50499C6.29094 6.09443 7.40754 5.28278 8.58738 5.02808C9.2619 4.88254 9.95738 4.91727 10.6115 5.12474C11.2691 5.33327 11.8878 5.71686 12.4052 6.26773C12.8378 6.72829 13.1991 7.3057 13.4542 7.99592ZM5.71086 13.1089C6.26036 15.3486 6.0349 17.35 4.55258 18.7848C4.53948 18.822 4.52061 18.857 4.49663 18.8886C4.21549 19.4569 3.67758 19.9014 3.00904 20.1861C2.89214 20.4071 2.80106 20.6494 2.73788 20.8999C2.62579 21.345 2.60288 21.8104 2.68041 22.2247C2.70668 22.3654 2.73681 22.4278 2.77014 22.4199C2.98378 22.3692 3.31164 22.1118 3.74048 21.671C4.23834 21.1591 4.8275 20.6103 5.44579 20.0342C7.34844 18.2616 9.53621 16.2234 9.95749 14.4291C10.3303 12.8414 9.2195 11.3711 5.00513 10.3266C5.09733 11.0634 5.37858 11.8124 5.86198 12.5745C5.89001 12.6188 5.90839 12.6683 5.91593 12.72C5.92348 12.7717 5.92003 12.8243 5.90581 12.8746C5.89159 12.9249 5.86691 12.9717 5.83334 13.012C5.79978 13.0524 5.75806 13.0853 5.71086 13.1089ZM7.53464 26.9612C6.79614 27.5738 6.04476 28.1096 5.30016 28.5419C4.19555 29.183 3.2405 29.4106 2.47231 29.1216C0.948602 28.5481 0.784983 26.7947 0.768066 25.3464C1.96885 28.9772 4.56284 29.0367 7.53464 26.9612Z" fill="#F7B081"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M3.03488 18.4557L2.8255 19.1401C2.78682 19.1818 2.74925 19.2245 2.71285 19.2682C2.37458 19.6735 2.13159 20.1847 1.9967 20.7199C1.85958 21.2642 1.83286 21.8402 1.93021 22.3603C2.05569 23.0311 2.40203 23.2806 2.94626 23.1515C3.31019 23.0652 3.76156 22.7366 4.29017 22.1932C4.77374 21.696 5.35669 21.1529 5.96853 20.5829C7.94966 18.7372 10.2276 16.6149 10.7013 14.5973C11.1791 12.5625 9.91762 10.7256 4.97769 9.54399C5.00727 9.01121 5.13481 8.4819 5.35518 7.95598C6.06331 6.26611 7.28684 5.30881 8.58722 5.02807C9.26175 4.88253 9.95723 4.91725 10.6114 5.12473C11.269 5.33325 11.8877 5.71684 12.4051 6.26771C13.5507 7.4875 14.1973 9.52635 13.6905 12.3122C13.4829 13.4539 13.078 14.4405 12.5261 15.3576C11.9688 16.2835 11.2582 17.1429 10.4476 18.0205C10.1034 18.3931 9.74975 18.7495 9.39529 19.1068C9.24399 19.2593 9.09225 19.4122 8.94639 19.561L8.81817 19.6915C7.9435 20.58 6.10151 22.4514 6.13669 23.5011C6.14052 23.6004 6.18397 23.6942 6.25757 23.762C6.33117 23.8298 6.42895 23.866 6.52955 23.8629C6.63016 23.8598 6.72544 23.8175 6.79459 23.7453C6.86374 23.6731 6.90115 23.5768 6.89866 23.4775C6.87424 22.747 8.56308 21.0311 9.36493 20.2165L9.49314 20.0861C9.64405 19.9322 9.79182 19.7834 9.93913 19.6348C10.3069 19.2641 10.674 18.8942 11.0124 18.5278C11.8538 17.6169 12.5943 16.7199 13.1834 15.741C13.7778 14.7533 14.2148 13.6862 14.4406 12.445C14.9952 9.39552 14.2578 7.13211 12.9638 5.75439C12.3561 5.10742 11.6248 4.65537 10.8445 4.40791C10.0606 4.15924 9.22954 4.11711 8.42579 4.29057C6.89547 4.62097 5.46407 5.72691 4.64989 7.66987C4.28804 8.53366 4.14391 9.40984 4.23443 10.2992C4.32439 11.1828 4.64625 12.0738 5.21637 12.9727C5.26986 13.0572 5.35516 13.1172 5.45351 13.1396C5.55185 13.162 5.65519 13.145 5.74078 13.0922C5.82637 13.0394 5.88721 12.9552 5.90991 12.8581C5.93261 12.761 5.91532 12.659 5.86183 12.5745C5.37842 11.8124 5.09717 11.0634 5.00497 10.3266C9.21935 11.3711 10.3301 12.8414 9.95734 14.4291C9.53605 16.2233 7.34829 18.2616 5.44564 20.0342C4.82735 20.6103 4.23819 21.1591 3.74033 21.671C3.31148 22.1118 2.98363 22.3692 2.76999 22.4199C2.73666 22.4278 2.70652 22.3654 2.68025 22.2247C2.60273 21.8104 2.62564 21.345 2.73772 20.8999C2.80091 20.6494 2.89199 20.407 3.00889 20.1861C3.67742 19.9014 4.21533 19.4569 4.49647 18.8885C4.5323 18.8415 4.55656 18.787 4.56733 18.7291C4.73134 18.313 4.76232 17.8372 4.61589 17.3142C3.81836 14.4661 1.14735 16.1085 3.03488 18.4557Z" fill="#2D2D2D"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_listen">
                      <rect width="17" height="30" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
                <span style={{ fontFamily: "'Lora', serif", fontWeight: 600, fontSize: '17px', lineHeight: '22px', color: '#2D2D2D' }}>Listen</span>
              </div>
              <p style={{ fontFamily: "'Lora', serif", fontWeight: 400, fontSize: '14px', lineHeight: '20px', color: '#2D2D2D', margin: 0 }}>
                We talk to people directly and collect real stories through surveys and interviews.
              </p>
            </div>
            <div style={{ width: '100%', height: '0px', borderBottom: '4px solid #FFCB05' }} />
          </div>

          {/* Analyze - Orange */}
          <div style={{ flex: '1 1 240px', maxWidth: '270px', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '18px' }}>
            <div style={{
              boxSizing: 'border-box',
              padding: '16px',
              background: 'rgba(243, 146, 33, 0.5)',
              border: '1px solid #F39221',
              borderRadius: '24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', paddingBottom: '8px' }}>
                <svg width="32" height="26" viewBox="0 0 40 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_analyze)">
                    <path fillRule="evenodd" clipRule="evenodd" d="M2.28703 0H31.4905C32.7495 0 33.7775 1.03504 33.7775 2.30268V23.6536C33.7775 24.9184 32.7495 25.9564 31.4905 25.9564H2.28703C1.02813 25.9564 0 24.9184 0 23.6536V2.30268C0 1.03504 1.02813 0 2.28703 0Z" fill="#263036"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M32.2546 6.4458H1.62744V23.8778C1.62744 24.2318 1.90799 24.5142 2.25971 24.5142H31.6114C31.6946 24.5147 31.777 24.4986 31.8539 24.4668C31.9309 24.435 32.0007 24.3881 32.0596 24.3289C32.1184 24.2697 32.1649 24.1994 32.1965 24.1219C32.2281 24.0445 32.2442 23.9615 32.2437 23.8778V6.4458H32.2546Z" fill="white"/>
                    <path d="M28.5143 11.0415C29.7146 11.0409 30.9032 11.2787 32.012 11.7413C33.1209 12.2038 34.1282 12.8821 34.9764 13.7372C37.3466 16.1236 38.2283 19.6421 37.2737 22.8735C37.0542 23.6152 36.7422 24.3259 36.3452 24.9886L39.8847 28.8728C39.9631 28.9588 40.0045 29.0726 39.9996 29.1893C39.9948 29.306 39.9441 29.4159 39.8588 29.495L37.2604 31.8848C37.2182 31.9238 37.1687 31.9539 37.1149 31.9736C37.061 31.9933 37.0039 32.0021 36.9466 31.9995C36.8894 31.997 36.8332 31.9831 36.7814 31.9587C36.7295 31.9342 36.6829 31.8998 36.6442 31.8572L33.2583 28.1079C31.8245 28.987 30.1936 29.4461 28.5143 29.4461C26.0872 29.4461 23.7683 28.4785 22.0522 26.7502C21.2027 25.8949 20.5289 24.8796 20.0691 23.7622C18.6524 20.3271 19.4576 16.3505 22.053 13.7381C22.9015 12.8821 23.9094 12.2032 25.019 11.7403C26.097 11.2898 27.2783 11.0415 28.5143 11.0415Z" fill="#263036"/>
                    <path d="M34.0558 14.6635C31.8192 12.411 28.4284 11.7339 25.5155 12.9488C20.2878 15.1282 19.0862 21.9152 22.97 25.8234C25.2113 28.0741 28.595 28.7544 31.5116 27.5387C34.4445 26.3124 36.351 23.4406 36.351 20.2434C36.351 18.1382 35.5342 16.1523 34.0558 14.6635Z" fill="#90CAF8"/>
                    <path d="M24.4557 19.13C24.2921 19.4791 23.8782 19.6285 23.5314 19.4638C23.1846 19.2992 23.0363 18.8823 23.1998 18.5332C23.4504 17.9992 23.7551 17.4928 24.1089 17.0218C24.4604 16.5541 24.8672 16.1144 25.3298 15.7035C25.6164 15.4482 26.0549 15.4751 26.3085 15.7637C26.5621 16.0523 26.5353 16.4937 26.2487 16.7491C25.8689 17.0854 25.5236 17.4592 25.2181 17.865C24.9214 18.2591 24.6659 18.683 24.4557 19.13Z" fill="white"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M25.4873 2.58765C26.1112 2.58765 26.617 3.09691 26.617 3.72526C26.617 4.35354 26.1112 4.86272 25.4873 4.86272C24.8633 4.86272 24.3574 4.35354 24.3574 3.72526C24.3574 3.09691 24.8633 2.58765 25.4873 2.58765Z" fill="#FFD150"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M21.6606 2.58765C22.2845 2.58765 22.7903 3.09691 22.7903 3.72526C22.7903 4.35354 22.2845 4.86272 21.6606 4.86272C21.0366 4.86272 20.5308 4.35354 20.5308 3.72526C20.5308 3.09691 21.0366 2.58765 21.6606 2.58765Z" fill="#F26A64"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M29.3134 2.58765C29.9374 2.58765 30.4431 3.09691 30.4431 3.72526C30.4431 4.35354 29.9374 4.86272 29.3134 4.86272C28.6895 4.86272 28.1836 4.35354 28.1836 3.72526C28.1864 3.09691 28.6921 2.58765 29.3134 2.58765Z" fill="#0CB2ED"/>
                    <path d="M17.4149 16.999L12.5409 16.9144L15.1327 21.3509C15.8321 20.8796 16.407 20.2348 16.8055 19.4749C17.204 18.715 17.4135 17.864 17.4149 16.999Z" fill="#1B75BB"/>
                    <path d="M13.6885 21.2461L10.9075 16.4038L10.6793 10.8143C9.96549 10.8207 9.26002 10.974 8.6038 11.2654C7.94758 11.5568 7.35366 11.9804 6.85649 12.5116C6.35932 13.0429 5.9688 13.6712 5.70757 14.3602C5.44634 15.0492 5.3196 15.7852 5.3347 16.5254C5.34981 17.2656 5.50646 17.9953 5.79557 18.6722C6.08467 19.3491 6.50048 19.9598 7.01888 20.4687C7.53728 20.9777 8.14795 21.3749 8.81547 21.6372C9.483 21.8995 10.1941 22.0217 10.9075 21.9967C11.8808 21.9946 12.8377 21.7363 13.6885 21.2461Z" fill="#2D2D2D"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M12.2866 15.4131L12.2148 9.7255V9.33325L12.5898 9.36368C13.0447 9.39492 13.4957 9.47193 13.9362 9.59362C14.362 9.71323 14.7749 9.87751 15.1686 10.0839C16.1599 10.5995 17.0026 11.3771 17.6116 12.3382C18.2207 13.2994 18.5745 14.4102 18.6375 15.5585L18.6668 15.9338H18.2952L12.6452 15.7614H12.3192L12.2638 15.4232L12.2866 15.4131ZM12.9614 15.0783L12.906 10.0636C12.9952 10.0817 13.0808 10.0998 13.1664 10.1178C13.3531 10.1573 13.5399 10.1967 13.7635 10.2361C14.1372 10.3495 14.5013 10.4942 14.8524 10.6689C15.6852 11.1082 16.4008 11.7537 16.9359 12.5481C17.471 13.3425 17.8091 14.2615 17.9202 15.2237L12.9614 15.0783Z" fill="#2D2D2D"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_analyze">
                      <rect width="40" height="32" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
                <span style={{ fontFamily: "'Lora', serif", fontWeight: 600, fontSize: '17px', lineHeight: '22px', color: '#2D2D2D' }}>Analyze</span>
              </div>
              <p style={{ fontFamily: "'Lora', serif", fontWeight: 400, fontSize: '14px', lineHeight: '20px', color: '#2D2D2D', margin: 0 }}>
                We study the collected information using research and simple evidence-based thinking.
              </p>
            </div>
            <div style={{ width: '100%', height: '0px', borderBottom: '4px solid #F39221' }} />
          </div>

          {/* Action - Green */}
          <div style={{ flex: '1 1 240px', maxWidth: '270px', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '0px' }}>
            <div style={{
              boxSizing: 'border-box',
              padding: '16px',
              background: 'rgba(78, 139, 66, 0.5)',
              border: '1px solid #4E8B42',
              borderRadius: '24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', paddingBottom: '8px' }}>
                <svg width="28" height="28" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_action)">
                    <path fillRule="evenodd" clipRule="evenodd" d="M1.18361 27.0589C1.04386 23.9258 4.65737 19.9724 9.41169 21.3253C8.02846 23.0913 7.1757 24.5183 6.87054 25.5978C6.42277 27.1957 7.50369 28.503 9.17782 28.1328C10.3842 27.865 11.9443 26.8937 13.6469 25.6348C14.8819 29.6224 11.6049 33.7411 7.92293 33.8607C8.26232 32.6103 9.66837 29.8104 7.70047 31.0978C6.3201 32.0036 3.81602 33.4192 1.96221 33.0233C1.28343 29.4857 5.82955 25.7145 3.07165 26.3811C2.42248 26.5476 1.79038 26.7746 1.18361 27.0589Z" fill="#D8182B"/>
                    <path d="M10.373 16.7707C13.8382 6.4199 22.8849 -0.752135 34.176 0.062481C34.3721 0.0760157 34.5559 0.162553 34.6911 0.304967C34.8263 0.447382 34.903 0.635296 34.9061 0.831524C35.9386 12.3387 28.318 20.9092 18.2161 24.9026V31.1688C18.2164 31.3151 18.1757 31.4585 18.0985 31.5829C18.0214 31.7072 17.911 31.8075 17.7797 31.8724L12.9313 34.8716C12.8193 34.9402 12.6919 34.9797 12.5607 34.9865C12.4295 34.9933 12.2986 34.9672 12.1801 34.9106C12.0616 34.854 11.9592 34.7686 11.8821 34.6623C11.8051 34.556 11.756 34.4321 11.7392 34.302C10.6525 26.1046 9.50888 25.7115 2.78381 23.3873L0.52501 22.604C0.328441 22.5344 0.167576 22.3897 0.0777398 22.2017C-0.0120961 22.0137 -0.0235581 21.7978 0.0458707 21.6014C0.0751962 21.5151 0.118558 21.4343 0.174212 21.3621L3.37988 16.8048C3.45539 16.6961 3.55725 16.6083 3.67594 16.5495C3.79464 16.4907 3.92631 16.4629 4.05866 16.4687L10.373 16.7678V16.7707Z" fill="#262626"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M21.1992 4.63132C24.6465 2.26031 28.8007 1.13495 32.9752 1.44122C33.1369 1.45261 33.2885 1.52419 33.3999 1.6418C33.5113 1.75941 33.5745 1.91449 33.577 2.07639C33.9649 6.40012 32.6872 10.3991 30.3941 13.8114L21.1992 4.63132Z" fill="#CE2700"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M10.7949 19.7616C12.2124 14.6575 15.0901 9.71281 19.1086 6.24072L28.8054 15.925C25.2512 19.9798 20.5819 22.9018 15.3781 24.3275L12.8541 21.8181L10.7949 19.7616Z" fill="#DDD4D4"/>
                    <path d="M22.26 12.5868C21.8683 12.1951 21.3528 11.9511 20.8013 11.8961C20.2497 11.8412 19.6961 11.9787 19.2346 12.2852C18.7731 12.5918 18.4322 13.0486 18.2698 13.5779C18.1074 14.1071 18.1336 14.6762 18.3438 15.1884C18.5541 15.7006 18.9355 16.1242 19.4232 16.3873C19.9109 16.6504 20.4747 16.7367 21.0189 16.6315C21.5631 16.5263 22.054 16.2361 22.4082 15.8103C22.7623 15.3845 22.9579 14.8493 22.9616 14.2957C22.9644 13.9786 22.9037 13.6641 22.7833 13.3706C22.6628 13.0772 22.4849 12.8107 22.26 12.5868Z" fill="#262626"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_action">
                      <rect width="35" height="35" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
                <span style={{ fontFamily: "'Lora', serif", fontWeight: 600, fontSize: '17px', lineHeight: '22px', color: '#2D2D2D' }}>Action</span>
              </div>
              <p style={{ fontFamily: "'Lora', serif", fontWeight: 400, fontSize: '14px', lineHeight: '20px', color: '#2D2D2D', margin: 0 }}>
                We create practical policies and share clear reports based on real needs.
              </p>
            </div>
            <div style={{ width: '100%', height: '0px', borderBottom: '4px solid #4E8B42' }} />
          </div>
        </div>
      </section>

      {/* ===== REAL CHANGE REAL IMPACT ===== */}
      <section style={{ padding: '60px 20px', maxWidth: '1100px', margin: '0 auto' }}>
        <h2 style={{
          fontFamily: "'Lora', serif",
          fontWeight: 700,
          fontSize: 'clamp(24px, 2.5vw, 30px)',
          lineHeight: '1.3',
          textAlign: 'center',
          color: '#2D2D2D',
          margin: '0 0 24px',
        }}>
          Real Change. Real Impact.
        </h2>

        {/* Case Study Title + Line */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', marginBottom: '36px' }}>
          <h3 style={{
            fontFamily: "'Lora', serif",
            fontWeight: 600,
            fontSize: '16px',
            lineHeight: '22px',
            textAlign: 'center',
            color: '#2D2D2D',
            margin: 0,
          }}>
            Pandharpur Water Access Reform
          </h3>
          <div style={{ width: '100%', maxWidth: '1000px', borderBottom: '1px solid #c0c0c0' }} />
        </div>

        {/* Impact Contents - 3 columns row */}
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'center', gap: '36px', marginBottom: '32px', flexWrap: 'wrap' }}>
          {/* The Problem */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', width: '320px', maxWidth: '100%' }}>
            <div style={{
              boxSizing: 'border-box',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '8px 16px',
              gap: '6px',
              width: '134px',
              height: '86px',
              background: 'rgba(128, 128, 128, 0.5)',
              border: '1px solid #808080',
              borderRadius: '16px',
            }}>
              <svg width="40" height="36" viewBox="0 0 54 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M26.9844 1.5C29.0452 1.48405 30.8865 2.66463 32.2402 4.61133L32.5039 5.01074L32.5195 5.03516L32.5352 5.06152L51.5264 38.0947L51.5488 38.1338L51.5693 38.1748C52.4662 39.9796 52.7759 42.2505 51.9326 44.165C51.0516 46.1652 49.0905 47.3941 46.292 47.4131L46.0186 47.4111H7.3418V47.4102C5.2665 47.4504 3.41625 46.5446 2.36523 44.8623C1.31616 43.1829 1.2165 40.9838 2.08789 38.709L2.12988 38.5986L2.18945 38.4961L21.4893 5.05957L21.5049 5.03223L21.5215 5.00586C22.8704 2.87894 24.7974 1.51707 26.9844 1.5Z" fill="rgba(128,128,128,0.5)" stroke="#2D2D2D" strokeWidth="3"/>
                <path d="M25.4329 36.7627C25.8447 36.3519 26.3887 36.1009 26.9681 36.0545C27.3319 36.0286 27.697 36.0816 28.0384 36.2101C28.3799 36.3385 28.6896 36.5392 28.9465 36.7986C29.3722 37.222 29.6299 37.786 29.6715 38.3855C29.6922 38.5961 29.6862 38.8084 29.6536 39.0175C29.6147 39.2244 29.5516 39.426 29.4657 39.6182C29.2076 40.1937 28.7402 40.6489 28.1587 40.8913C27.8325 41.0232 27.483 41.0873 27.1313 41.0796C26.7797 41.0719 26.4333 40.9926 26.1132 40.8465C25.5415 40.5839 25.0916 40.1124 24.8555 39.5286C24.7783 39.3462 24.7242 39.155 24.6943 38.9593C24.6633 38.7636 24.6543 38.5652 24.6675 38.3675C24.7035 38.0568 24.7897 37.7541 24.9226 37.471C25.0413 37.2044 25.2153 36.966 25.4329 36.7717V36.7627ZM29.0807 32.1725C28.9957 34.3197 25.3612 34.3242 25.2807 32.1725C24.9137 28.4922 23.9737 19.7554 24.0006 16.2947C24.0319 15.2279 24.8957 14.6003 26.0416 14.3582C26.4079 14.2808 26.7817 14.2447 27.1561 14.2506C27.532 14.2479 27.9071 14.2855 28.2751 14.3627C29.4433 14.6093 30.3564 15.2592 30.3564 16.353V16.4606L29.0807 32.1725Z" fill="#2D2D2D"/>
              </svg>
              <span style={{ fontFamily: "'Lora', serif", fontWeight: 600, fontSize: '16px', lineHeight: '20px', color: '#2D2D2D' }}>The Problem</span>
            </div>
            {[
              'Women walked 3–4 km daily for water',
              'Women walked 3–4 km daily for water',
              'Water contamination caused illness',
              'No response from local authorities',
            ].map((item, i) => (
              <div key={i} style={{
                boxSizing: 'border-box',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '14px 16px',
                width: '100%',
                height: '50px',
                background: 'rgba(128, 128, 128, 0.5)',
                border: '1px solid #808080',
                borderRadius: '16px',
              }}>
                <span style={{ fontFamily: "'Lora', serif", fontWeight: 400, fontSize: '14px', lineHeight: '20px', color: '#2D2D2D' }}>{item}</span>
              </div>
            ))}
          </div>

          {/* Our Action */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', width: '320px', maxWidth: '100%' }}>
            <div style={{
              boxSizing: 'border-box',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '8px 16px',
              gap: '6px',
              width: '120px',
              height: '86px',
              background: 'rgba(243, 146, 33, 0.5)',
              border: '1px solid #F39221',
              borderRadius: '16px',
            }}>
              <svg width="44" height="36" viewBox="0 0 60 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M32.0387 10.1772V45.5806H49.4376C49.6232 45.5806 49.7697 45.7315 49.7697 45.9165V49.6642C49.7697 49.8491 49.6183 50 49.4376 50H11.1533C10.9677 50 10.8163 49.8491 10.8163 49.6642V45.9165C10.8163 45.7315 10.9677 45.5806 11.1533 45.5806H28.5521V10.1918C27.0383 9.66611 25.8371 8.47367 25.3097 6.96486H14.3078V8.63428C14.3078 8.81923 14.1564 8.96525 13.9757 8.96525H11.1533C10.9677 8.96525 10.8163 8.81437 10.8163 8.63428V6.96486H8.01823C7.80337 6.96486 7.62757 6.81398 7.62757 6.63389V3.81583C7.62757 3.63088 7.80337 3.48 8.01823 3.48H25.3194C26.0422 1.45527 27.9857 0 30.271 0C32.5564 0 34.4999 1.45527 35.2226 3.48486H52.5726C52.7875 3.48486 52.9633 3.63574 52.9633 3.82069V6.63389C52.9633 6.81885 52.7875 6.96486 52.5726 6.96486H49.4181V8.63428C49.4181 8.81923 49.2667 8.96525 49.086 8.96525H46.2635C46.078 8.96525 45.9266 8.81437 45.9266 8.63428V6.96486H35.2372C34.7147 8.45907 33.533 9.64178 32.0387 10.1772ZM48.6661 10.8537L59.8535 30.5558C59.9512 30.7262 59.9951 30.9111 59.9902 31.0912H60C60 31.1155 60 31.1399 60 31.1642C60 35.8561 54.4576 39.6622 47.6211 39.6622C40.8578 39.6622 35.3642 35.9389 35.247 31.3151C35.2275 31.2372 35.2177 31.1496 35.2177 31.0669C35.2177 30.8527 35.2861 30.6483 35.3984 30.4828L46.8397 10.805C47.1279 10.3086 47.7627 10.1382 48.2608 10.4254C48.4414 10.5373 48.5782 10.6833 48.6661 10.8537ZM48.71 15.1416V30.035H57.1677L48.71 15.1416ZM46.7177 30.0302V15.166L38.0695 30.0302H46.7177ZM13.4484 10.8537L24.6358 30.5558C24.7335 30.7262 24.7774 30.9111 24.7725 31.0912H24.7823C24.7823 31.1155 24.7823 31.1399 24.7823 31.1642C24.7823 35.8561 19.2398 39.6622 12.4034 39.6622C5.64011 39.6622 0.146496 35.9389 0.0292993 31.3151C0.00976642 31.2421 0 31.1593 0 31.0717C0 30.8576 0.0683649 30.6532 0.180679 30.4877L11.622 10.8099C11.9101 10.3134 12.545 10.1431 13.0431 10.4303C13.2237 10.5373 13.3605 10.6833 13.4484 10.8537ZM13.4923 15.1416V30.035H21.95L13.4923 15.1416ZM11.4951 30.0302V15.166L2.85179 30.0302H11.4951ZM30.271 2.95435C31.5358 2.95435 32.5612 3.97644 32.5612 5.23703C32.5612 6.49761 31.5358 7.51971 30.271 7.51971C29.0063 7.51971 27.9808 6.49761 27.9808 5.23703C27.9808 3.97644 29.0063 2.95435 30.271 2.95435Z" fill="black"/>
              </svg>
              <span style={{ fontFamily: "'Lora', serif", fontWeight: 600, fontSize: '16px', lineHeight: '20px', color: '#2D2D2D' }}>Our Action</span>
            </div>
            {[
              'Conducted 47 household surveys',
              'Filed RTI on unused rural water funds',
              'Submitted policy brief to district office',
              'Mobilized local media coverage',
            ].map((item, i) => (
              <div key={i} style={{
                boxSizing: 'border-box',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '14px 16px',
                width: '100%',
                height: '50px',
                background: 'rgba(243, 146, 33, 0.5)',
                border: '1px solid #F39221',
                borderRadius: '16px',
              }}>
                <span style={{ fontFamily: "'Lora', serif", fontWeight: 400, fontSize: '14px', lineHeight: '20px', color: '#2D2D2D' }}>{item}</span>
              </div>
            ))}
          </div>

          {/* The Outcome */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', width: '320px', maxWidth: '100%' }}>
            <div style={{
              boxSizing: 'border-box',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '8px 16px',
              gap: '6px',
              width: '140px',
              height: '86px',
              background: 'rgba(78, 139, 66, 0.5)',
              border: '1px solid #4E8B42',
              borderRadius: '16px',
            }}>
              <svg width="36" height="36" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M25 0C38.8073 0 50 11.1927 50 25C50 38.8073 38.8073 50 25 50C11.1927 50 0 38.8073 0 25C0 11.1927 11.1927 0 25 0ZM13.9396 25.6651C14.275 23.7203 16.4948 22.6375 18.2464 23.6911C18.4052 23.7859 18.5568 23.8984 18.6979 24.0276L18.7115 24.0406C19.4974 24.7937 20.3781 25.5776 21.251 26.3547L22 27.0271L30.887 17.7052C31.4177 17.1495 31.8057 16.7901 32.6021 16.6109C35.3286 16.0094 37.2458 19.3422 35.3135 21.3792L24.2375 33.0031C23.1943 34.1161 21.3297 34.2177 20.2083 33.1547C19.5656 32.5578 18.8667 31.9505 18.1599 31.3375C16.9359 30.274 15.6875 29.1891 14.6698 28.1151C14.0589 27.5047 13.7953 26.5052 13.9396 25.6651Z" fill="#4E8B42"/>
              </svg>
              <span style={{ fontFamily: "'Lora', serif", fontWeight: 600, fontSize: '16px', lineHeight: '20px', color: '#2D2D2D' }}>The Outcome</span>
            </div>
            {[
              'New water pipeline installed',
              '12 public tap points added',
              'Monthly water quality testing started',
              '600+ residents benefited',
            ].map((item, i) => (
              <div key={i} style={{
                boxSizing: 'border-box',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '14px 16px',
                width: '100%',
                height: '50px',
                background: 'rgba(78, 139, 66, 0.5)',
                border: '1px solid #4E8B42',
                borderRadius: '16px',
              }}>
                <span style={{ fontFamily: "'Lora', serif", fontWeight: 400, fontSize: '14px', lineHeight: '20px', color: '#2D2D2D' }}>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tags CS */}
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: '15px', marginBottom: '36px', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <svg width="31" height="33" viewBox="0 0 31 33" fill="none" style={{ flexShrink: 0 }}>
              <path d="M26.1492 22.5659C25.4553 25.7948 23.3711 27.4066 23.3711 29.0211C23.3711 30.6356 24.065 32.25 26.1492 32.25C28.2334 32.25 28.9272 30.6356 28.9272 29.0211C28.9272 27.4066 26.843 25.7922 26.1492 22.5659ZM4.67568 10.5955H10.3955L8.96882 15.9232H4.68607H4.67308V10.5955H4.67568ZM10.6112 9.7935H4.67568V8.6087C4.67568 8.4134 4.59512 8.23373 4.46778 8.10613C4.45738 8.09572 4.44699 8.0853 4.43399 8.07749C4.30925 7.96552 4.14293 7.89782 3.96362 7.89782H0.959461C0.764555 7.89782 0.587839 7.97854 0.457901 8.10613C0.330563 8.23373 0.25 8.4134 0.25 8.6087V18.1053C0.25 18.3006 0.330563 18.4803 0.457901 18.6079C0.468296 18.6183 0.478689 18.6287 0.491684 18.6365C0.616425 18.7485 0.782747 18.8162 0.962061 18.8162H3.96622C4.16112 18.8162 4.33784 18.7355 4.46778 18.6079C4.59512 18.4803 4.67568 18.3006 4.67568 18.1053V16.7226H4.68867H8.89865C9.26767 18.3839 10.3254 19.5479 11.6767 20.2275C12.6435 20.7145 13.7609 20.954 14.881 20.9514C15.9984 20.9514 17.1211 20.7093 18.1034 20.238C19.5379 19.5479 20.6736 18.3683 21.066 16.72H21.2869C21.947 16.7461 22.4356 16.9023 22.7708 17.1783C23.0852 17.4387 23.2698 17.8241 23.3347 18.3267V20.3473C23.3347 20.5687 23.514 20.7483 23.7349 20.7483H29.8498C30.0707 20.7509 30.25 20.5713 30.25 20.3499V15.9727C30.25 15.9492 30.2474 15.9284 30.2448 15.905C29.9511 14.1864 29.3041 12.7828 28.2594 11.7439C27.2199 10.7101 25.7957 10.0487 23.9402 9.80131C23.9116 9.7961 23.8831 9.79089 23.8519 9.79089H19.1923L18.3841 7.0333C18.3321 6.85884 18.1736 6.74687 18.0021 6.74687H16.6663V3.72368H19.9304C20.4085 3.72368 20.8399 3.52838 21.1544 3.2133C21.4688 2.89822 21.6637 2.46336 21.6637 1.98684C21.6637 1.50771 21.4688 1.07545 21.1544 0.760375C20.8399 0.445297 20.4059 0.25 19.9304 0.25H10.2448C9.76663 0.25 9.33524 0.445297 9.02079 0.760375C8.70634 1.07545 8.51143 1.51031 8.51143 1.98684C8.51143 2.46597 8.70634 2.89822 9.02079 3.2133C9.33524 3.52838 9.76923 3.72368 10.2448 3.72368H13.3269V6.74687H11.7313C11.539 6.74687 11.3779 6.88227 11.3389 7.06455L10.6112 9.7935ZM14.1273 6.74687V3.72368H15.8659V6.74687H14.1273ZM20.9828 15.9232L19.4236 10.5955H23.8363C25.5073 10.8195 26.7807 11.4027 27.6954 12.3115C28.6102 13.2203 29.1819 14.465 29.4496 16.0039V19.9489H24.1325V18.3058C24.1325 18.2824 24.1299 18.2616 24.1273 18.2381C24.039 17.5246 23.7609 16.9622 23.2775 16.5638C22.8072 16.1732 22.1523 15.9545 21.2999 15.9232H21.2869V15.9206H20.9828V15.9232ZM20.3072 16.457C19.9953 17.8918 19.013 18.9204 17.7604 19.5219C16.8846 19.9411 15.8815 20.1546 14.881 20.1572C13.8831 20.1572 12.8903 19.9463 12.0353 19.5167C10.8581 18.923 9.94595 17.91 9.65489 16.457L12.0379 7.55149H17.7006L18.5088 10.3091L20.2942 16.4101C20.2968 16.4232 20.302 16.4414 20.3072 16.457ZM10.2422 1.05202H19.9304C20.1876 1.05202 20.4189 1.15618 20.5904 1.32804C20.7594 1.49729 20.8659 1.73165 20.8659 1.98944C20.8659 2.24723 20.7594 2.47899 20.5904 2.65085C20.4215 2.8201 20.1876 2.92687 19.9304 2.92687H10.2448C9.98753 2.92687 9.75624 2.8201 9.58472 2.65085C9.4158 2.48159 9.30925 2.24723 9.30925 1.98944C9.30925 1.73165 9.4158 1.4999 9.58472 1.32804C9.75364 1.15618 9.98753 1.05202 10.2422 1.05202ZM1.05042 8.69723H3.87526V18.0168H1.05042V8.69723Z" fill="#2D2D2D" stroke="#2D2D2D" strokeWidth="0.5"/>
            </svg>
            <span style={{ fontFamily: "'Lora', serif", fontWeight: 600, fontSize: '15px', lineHeight: '20px', color: '#2D2D2D' }}>600+ Residents Benefited</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <svg width="30" height="22" viewBox="0 0 30 22" fill="none" style={{ flexShrink: 0 }}>
              <path d="M0.529785 22C0.236816 22 0 21.7711 0 21.4868C0 21.2026 0.236816 20.9737 0.529785 20.9737H2.76611V5.17928C2.76611 5.01578 2.83203 4.86485 2.93701 4.75669C3.04443 4.64601 3.18848 4.57809 3.34717 4.57809H6.52588C6.68701 4.57809 6.83105 4.64601 6.93604 4.75669C7.04102 4.86485 7.10693 5.01578 7.10693 5.17928V20.9712H9.47266V9.75989C9.47266 9.59639 9.53857 9.44798 9.64355 9.3373C9.74854 9.22913 9.89502 9.16122 10.0513 9.16122H13.23C13.3936 9.16122 13.5376 9.22913 13.6401 9.3373C13.7451 9.44546 13.811 9.5989 13.811 9.75989V20.9712H16.1768V0.598674C16.1768 0.43517 16.2427 0.28676 16.3477 0.17608C16.46 0.0679168 16.604 0 16.7651 0H19.9438C20.105 0 20.249 0.0679168 20.354 0.17608C20.459 0.284244 20.5249 0.437686 20.5249 0.598674V20.9712H22.8906V6.48982C22.8906 6.32632 22.9565 6.17539 23.0615 6.06723C23.1665 5.95907 23.313 5.89115 23.4741 5.89115H26.6528C26.814 5.89115 26.9604 5.95907 27.063 6.06723C27.168 6.17539 27.2339 6.32632 27.2339 6.48982V20.9737H29.4702C29.7632 20.9737 30 21.2026 30 21.4868C30 21.7711 29.7632 22 29.4702 22H26.7188C26.7139 22 26.709 22 26.7041 22H23.4229C23.418 22 23.4131 22 23.4082 22H20.0098C20.0049 22 20 22 19.9951 22H16.7139C16.709 22 16.7041 22 16.6992 22H13.3032C13.2983 22 13.2935 22 13.2886 22H10.0049C10 22 9.99512 22 9.99023 22H6.5918H6.57715H3.2959H3.28125H0.529785ZM6.04736 5.67231H3.82568V20.9058H6.04736V5.67231ZM12.7563 10.2529H10.5347V20.9058H12.7563V10.2529ZM19.4653 1.0917H17.2437V20.9058H19.4653V1.0917ZM26.1719 6.98285H23.9502V20.9083H26.1719V6.98285Z" fill="#2D2D2D"/>
            </svg>
            <span style={{ fontFamily: "'Lora', serif", fontWeight: 600, fontSize: '15px', lineHeight: '20px', color: '#2D2D2D' }}>12 Public Tap Points Installed</span>
          </div>
        </div>

        {/* Testimonials - two side by side */}
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '36px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '36px' }}>
          {[1, 2].map((_, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '16px', width: '500px', maxWidth: '100%' }}>
              <div style={{
                width: '160px',
                height: '156px',
                minWidth: '120px',
                background: 'rgba(197, 196, 196, 0.2)',
                boxShadow: '1px 1px 10px rgba(0, 0, 0, 0.2)',
                borderRadius: '22px',
                overflow: 'hidden',
                flexShrink: 0,
              }}>
                <img src={`/images/testimonial-${i + 1}.png`} alt="Testimonial" style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={(e) => { e.target.style.display = 'none'; }} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', maxWidth: '310px' }}>
                <p style={{ fontFamily: "'Lora', serif", fontWeight: 400, fontSize: '14px', lineHeight: '20px', color: '#2D2D2D', margin: 0 }}>
                  "------------------------------------------------------------------------------------------------------------------------------."
                </p>
                <div>
                  <p style={{ fontFamily: "'Lora', serif", fontWeight: 400, fontSize: '16px', lineHeight: '22px', color: '#2D2D2D', margin: 0 }}>
                    — Name
                  </p>
                  <p style={{ fontFamily: "'Lora', serif", fontWeight: 400, fontSize: '14px', lineHeight: '20px', color: '#2D2D2D', margin: 0 }}>
                    Designation, Location------------------------
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* See our Impact CTA */}
        <div style={{ textAlign: 'center' }}>
          <Link
            to="/impact"
            style={{
              display: 'inline-flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '12px 26px',
              minWidth: '200px',
              height: '46px',
              border: '1px solid #2D2D2D',
              borderRadius: '50px',
              fontFamily: "'Open Sans', sans-serif",
              fontWeight: 700,
              fontSize: '15px',
              lineHeight: '22px',
              color: '#2D2D2D',
              textDecoration: 'none',
              boxSizing: 'border-box',
            }}
          >
            View All Case Studies
          </Link>
        </div>
      </section>

      {/* ===== RESEARCH SECTION ===== */}
      <section style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '50px 20px', gap: '30px', maxWidth: '1020px', margin: '0 auto' }}>
        <h2 style={{
          fontFamily: "'Lora', serif",
          fontWeight: 700,
          fontSize: 'clamp(20px, 2vw, 24px)',
          lineHeight: '30px',
          textAlign: 'center',
          color: '#2D2D2D',
          margin: 0,
        }}>
          Research
        </h2>

        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '22px', flexWrap: 'wrap', justifyContent: 'center', width: '100%', maxWidth: '980px' }}>
          {[
            {
              tag: 'Democratic Institutions',
              title: 'Inside Parliament',
              description: "Examining declining deliberation, executive dominance, and institutional accountability within India's Parliament.",
            },
            {
              tag: 'Media & Digital Governance',
              title: 'Digital Privacy & The DPDP Act',
              description: "Examining data protection, state exemptions, and democratic risks in India's digital era.",
            },
            {
              tag: 'Identity & Inequality',
              title: 'Caste, Class & Identity',
              description: 'How electoral mobilisation and social engineering reshape representation and power.',
            },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '0 0 15px',
                gap: '15px',
                isolation: 'isolate',
                position: 'relative',
                width: '300px',
                maxWidth: '100%',
                background: 'rgba(238, 238, 238, 0.54)',
                boxShadow: '-1px -1px 10px rgba(0, 0, 0, 0.1), 1px 1px 10px rgba(0, 0, 0, 0.1)',
                borderRadius: '15px',
                overflow: 'hidden',
              }}
            >
              <div style={{
                width: '100%',
                height: '190px',
                clipPath: "path('M 0 15 C 0 6.7 6.7 0 15 0 H 285 C 293.3 0 300 6.7 300 15 V 175 C 300 183.3 293.3 190 285 190 H 172.5 C 166.6 190 161.2 186.4 158.8 181 L 158.1 179.3 C 155.7 173.8 150.3 170 144.4 170 H 15 C 6.7 170 0 163.5 0 155 V 15 Z')",
              }}>
                <img src={`/images/research/${['left', 'center', 'right'][i]}.png`} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={(e) => { e.target.style.display = 'none'; e.target.parentElement.style.background = '#d0d0d0'; }} />
              </div>
              <div style={{
                position: 'absolute',
                left: '15px',
                top: '176px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '4px 8px',
                background: 'rgba(78, 139, 66, 0.2)',
                border: '0.5px solid rgba(78, 139, 66, 0.2)',
                backdropFilter: 'blur(500px)',
                borderRadius: '15px',
                zIndex: 2,
              }}>
                <span style={{
                  fontFamily: "'Lora', serif",
                  fontWeight: 500,
                  fontSize: '11px',
                  lineHeight: '14px',
                  letterSpacing: '0.02em',
                  color: '#4E8B42',
                  whiteSpace: 'nowrap',
                }}>
                  {item.tag}
                </span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '8px', padding: '0 15px', width: '100%', boxSizing: 'border-box' }}>
                <h3 style={{
                  fontFamily: "'Lora', serif",
                  fontWeight: 600,
                  fontSize: '16px',
                  lineHeight: '20px',
                  color: '#2D2D2D',
                  margin: 0,
                }}>
                  {item.title}
                </h3>
                <p style={{
                  fontFamily: "'Lora', serif",
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: '18px',
                  color: '#2D2D2D',
                  margin: 0,
                }}>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <Link
          to="/research"
          style={{
            display: 'inline-flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '10px 22px',
            minWidth: '160px',
            height: '40px',
            border: '1px solid #2D2D2D',
            borderRadius: '50px',
            fontFamily: "'Open Sans', sans-serif",
            fontWeight: 700,
            fontSize: '13px',
            lineHeight: '18px',
            color: '#2D2D2D',
            textDecoration: 'none',
            boxSizing: 'border-box',
          }}
        >
          View all Researches
        </Link>
      </section>

      {/* ===== OUR BOTTOM-UP APPROACH ===== */}
      <section style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '40px 20px', gap: '32px' }}>
        <h2 style={{
          fontFamily: "'Lora', serif",
          fontWeight: 700,
          fontSize: 'clamp(20px, 2vw, 24px)',
          lineHeight: '30px',
          textAlign: 'center',
          color: '#2D2D2D',
          margin: 0,
        }}>
          Our Bottom-Up Approach
        </h2>

        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 'clamp(30px, 8vw, 110px)', flexWrap: 'wrap', justifyContent: 'center' }}>

          {/* Top-Down Approach (Old Way) - Left Column */}
          <div style={{ width: '270px', maxWidth: '100%', position: 'relative', height: '397px' }}>
            {/* Vertical connector pipe */}
            <div style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', top: 0, width: '100px', height: '14px', background: 'rgba(128, 128, 128, 0.5)', borderWidth: '1px 1px 0 1px', borderStyle: 'solid', borderColor: '#808080', borderRadius: '7px 7px 0 0', boxSizing: 'border-box' }} />
            <div style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', top: '99px', width: '100px', height: '7px', background: 'rgba(128, 128, 128, 0.5)', borderWidth: '0 1px', borderStyle: 'solid', borderColor: '#808080', boxSizing: 'border-box' }} />
            <div style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', top: '191px', width: '100px', height: '7px', background: 'rgba(128, 128, 128, 0.5)', borderWidth: '0 1px', borderStyle: 'solid', borderColor: '#808080', boxSizing: 'border-box' }} />
            <div style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', top: '283px', width: '100px', height: '14px', background: 'rgba(128, 128, 128, 0.5)', borderWidth: '0 1px 1px 1px', borderStyle: 'solid', borderColor: '#808080', borderRadius: '0 0 7px 7px', boxSizing: 'border-box' }} />

            {/* Cards */}
            <div style={{ position: 'absolute', left: 0, top: '14px', width: '270px', display: 'flex', flexDirection: 'column', gap: '7px' }}>
              {[
                { label: 'The Problem', text: 'Decisions are made by top leaders sitting in central offices.' },
                { label: 'The Failure', text: 'These leaders often do not understand rural areas, forests, or urban slums.' },
                { label: 'The Result', text: 'Policies ignore local problems, so vulnerable people miss the benefits.' },
              ].map((item, i) => (
                <div key={i} style={{
                  boxSizing: 'border-box',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                  padding: '14px',
                  gap: '6px',
                  background: 'rgba(128, 128, 128, 0.5)',
                  border: '1px solid #808080',
                  borderRadius: '14px',
                  height: '85px',
                }}>
                  <h4 style={{ fontFamily: "'Lora', serif", fontWeight: 600, fontSize: '13px', lineHeight: '17px', color: '#2D2D2D', margin: 0 }}>{item.label}</h4>
                  <p style={{ fontFamily: "'Lora', serif", fontWeight: 400, fontSize: '11px', lineHeight: '15px', color: '#2D2D2D', margin: 0 }}>{item.text}</p>
                </div>
              ))}
            </div>

            {/* Old Way - downward triangle at bottom */}
            <div style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', top: '297px', width: '100px', height: '100px' }}>
              <svg width="100" height="100" viewBox="0 0 148 149" fill="none" style={{ width: '100%', height: '100%', transform: 'rotate(180deg)' }}>
                <path d="M115.868 148.5H32.132C25.081 148.5 20.487 141.089 23.623 134.774L59.491 18.256C62.984 11.223 85.016 11.223 88.509 18.256L124.377 134.774C127.513 141.089 122.919 148.5 115.868 148.5Z" fill="rgba(128,128,128,0.5)" stroke="#808080" strokeWidth="1"/>
              </svg>
              <span style={{ position: 'absolute', top: '45%', left: '50%', transform: 'translate(-50%, -50%)', fontFamily: "'Lora', serif", fontWeight: 600, fontSize: '12px', lineHeight: '16px', textAlign: 'center', color: '#2D2D2D', whiteSpace: 'pre-line' }}>{'Old\nWay'}</span>
            </div>
          </div>

          {/* Bottom-Up Approach (Grassroot Way) - Right Column */}
          <div style={{ width: '270px', maxWidth: '100%', position: 'relative', height: '397px' }}>
            {/* Grassroot Way - upward triangle at top */}
            <div style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', top: 0, width: '100px', height: '100px' }}>
              <svg width="100" height="100" viewBox="0 0 148 149" fill="none" style={{ width: '100%', height: '100%' }}>
                <path d="M115.868 148.5H32.132C25.081 148.5 20.487 141.089 23.623 134.774L59.491 18.256C62.984 11.223 85.016 11.223 88.509 18.256L124.377 134.774C127.513 141.089 122.919 148.5 115.868 148.5Z" fill="rgba(27,117,187,0.5)" stroke="#1B75BB" strokeWidth="1"/>
              </svg>
              <span style={{ position: 'absolute', bottom: '18%', left: '50%', transform: 'translateX(-50%)', fontFamily: "'Lora', serif", fontWeight: 600, fontSize: '12px', lineHeight: '16px', textAlign: 'center', color: '#2D2D2D', whiteSpace: 'pre-line' }}>{'Grassroot\nWay'}</span>
            </div>

            {/* Vertical connector pipe (blue) */}
            <div style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', top: '100px', width: '100px', height: '14px', background: 'rgba(27, 117, 187, 0.5)', borderWidth: '1px 1px 0 1px', borderStyle: 'solid', borderColor: '#1B75BB', borderRadius: '7px 7px 0 0', boxSizing: 'border-box' }} />
            <div style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', top: '199px', width: '100px', height: '7px', background: 'rgba(27, 117, 187, 0.5)', borderWidth: '0 1px', borderStyle: 'solid', borderColor: '#1B75BB', boxSizing: 'border-box' }} />
            <div style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', top: '291px', width: '100px', height: '7px', background: 'rgba(27, 117, 187, 0.5)', borderWidth: '0 1px', borderStyle: 'solid', borderColor: '#1B75BB', boxSizing: 'border-box' }} />
            <div style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', top: '383px', width: '100px', height: '14px', background: 'rgba(27, 117, 187, 0.5)', borderWidth: '0 1px 1px 1px', borderStyle: 'solid', borderColor: '#1B75BB', borderRadius: '0 0 7px 7px', boxSizing: 'border-box' }} />

            {/* Cards */}
            <div style={{ position: 'absolute', left: 0, top: '114px', width: '270px', display: 'flex', flexDirection: 'column', gap: '7px' }}>
              {[
                { label: 'The Result', text: 'Frontline workers act better, and communities see real change.', bg: 'rgba(78, 139, 66, 0.5)', border: '#4E8B42' },
                { label: 'Our Focus', text: 'Policies are designed for local needs and practical solutions.', bg: 'rgba(243, 146, 33, 0.5)', border: '#F39221' },
                { label: 'Our Approach', text: 'Ideas come from local workers, citizens, and ground-level officials.', bg: 'rgba(255, 203, 5, 0.5)', border: '#FFCB05' },
              ].map((item, i) => (
                <div key={i} style={{
                  boxSizing: 'border-box',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                  padding: '14px',
                  gap: '6px',
                  background: item.bg,
                  border: `1px solid ${item.border}`,
                  borderRadius: '14px',
                  height: '85px',
                }}>
                  <h4 style={{ fontFamily: "'Lora', serif", fontWeight: 600, fontSize: '13px', lineHeight: '17px', color: '#2D2D2D', margin: 0 }}>{item.label}</h4>
                  <p style={{ fontFamily: "'Lora', serif", fontWeight: 400, fontSize: '11px', lineHeight: '15px', color: '#2D2D2D', margin: 0 }}>{item.text}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ===== WHERE WE WORK ===== */}
      <section style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '40px 20px', gap: '42px' }}>
        <h2 style={{
          fontFamily: "'Lora', serif",
          fontWeight: 700,
          fontSize: 'clamp(22px, 2.2vw, 26px)',
          lineHeight: '34px',
          textAlign: 'center',
          color: '#2D2D2D',
          margin: 0,
        }}>
          Where We Work
        </h2>

        <div style={{ display: 'flex', flexDirection: 'row', gap: 'clamp(30px, 6vw, 85px)', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center', maxWidth: '960px', width: '100%' }}>
          {/* Branches - 2x2 grid */}
          <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', alignItems: 'flex-start', alignContent: 'flex-start', gap: '14px', width: '310px', maxWidth: '100%' }}>
            {[
              { branch: 'Branch 1', detail: 'Vrindavan\n(add whole address)' },
              { branch: 'Branch 2', detail: 'Mathura\n(add whole address)' },
              { branch: 'Branch 3', detail: 'Ayodhya\n(add whole address)' },
              { branch: 'Branch 4', detail: 'Kashi\n(add whole address)' },
            ].map((item, i) => (
              <div key={i} style={{
                boxSizing: 'border-box',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                padding: '14px',
                gap: '7px',
                width: '148px',
                height: '88px',
                background: 'rgba(45, 45, 45, 0.1)',
                borderRadius: '14px',
              }}>
                <p style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: '14px', lineHeight: '18px', color: '#000000', margin: 0 }}>{item.branch}</p>
                <p style={{ fontFamily: "'Lora', serif", fontWeight: 400, fontSize: '13px', lineHeight: '17px', color: '#000000', margin: 0, whiteSpace: 'pre-line' }}>{item.detail}</p>
              </div>
            ))}
          </div>

          {/* Map image */}
          <div style={{
            width: '440px',
            maxWidth: '100%',
            height: '370px',
            background: '#e0e0e0',
            filter: 'drop-shadow(-1px -1px 10px rgba(0, 0, 0, 0.1)) drop-shadow(1px 1px 10px rgba(0, 0, 0, 0.1))',
            borderRadius: '14px',
            overflow: 'hidden',
          }}>
            <img src="/images/map.png" alt="Where we work map" style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={(e) => { e.target.style.display = 'none'; }} />
          </div>
        </div>
      </section>

      {/* ===== SEE A LOCAL ISSUE CTA ===== */}
      <section style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '36px 20px',
        gap: '22px',
        background: '#4E8B42',
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '7px' }}>
          <h3 style={{
            fontFamily: "'Lora', serif",
            fontWeight: 700,
            fontSize: 'clamp(22px, 2.5vw, 26px)',
            lineHeight: '34px',
            textAlign: 'center',
            color: '#F9F9F9',
            margin: 0,
          }}>
            See a Local Issue?
          </h3>
          <p style={{
            fontFamily: "'Lora', serif",
            fontWeight: 400,
            fontSize: '15px',
            lineHeight: '19px',
            textAlign: 'center',
            color: '#F9F9F9',
            margin: 0,
          }}>
            Response within 48 hours.
          </p>
        </div>
        <Link
          to="/contact"
          style={{
            display: 'inline-flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '11px 22px',
            minWidth: '155px',
            height: '40px',
            backgroundColor: '#F9F9F9',
            borderRadius: '50px',
            fontFamily: "'Open Sans', sans-serif",
            fontWeight: 700,
            fontSize: '13px',
            lineHeight: '18px',
            color: '#4E8B42',
            textDecoration: 'none',
            boxSizing: 'border-box',
          }}
        >
          Contact us
        </Link>
      </section>

      {/* ===== GET INVOLVED SECTION ===== */}
      <section style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '40px 20px', gap: '42px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '22px', maxWidth: '670px' }}>
          <h2 style={{
            fontFamily: "'Lora', serif",
            fontWeight: 700,
            fontSize: 'clamp(22px, 2.2vw, 26px)',
            lineHeight: '34px',
            textAlign: 'center',
            color: '#2D2D2D',
            margin: 0,
          }}>
            Join us in building policies that listen before they lead
          </h2>
          <p style={{
            fontFamily: "'Lora', serif",
            fontWeight: 400,
            fontSize: '15px',
            lineHeight: '19px',
            textAlign: 'center',
            color: '#2D2D2D',
            margin: 0,
            maxWidth: '430px',
          }}>
            Grassroot Policies is not just about studying policy. We co-create it, test it, and strengthen it — from the ground up.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '36px', flexWrap: 'wrap', justifyContent: 'center' }}>
          {[
            { title: 'Internships', text: 'Join our research-driven grassroots policy team.' },
            { title: 'Partner With Us', text: 'Collaborate to create impact-driven policy solutions.' },
          ].map((item, i) => (
            <div key={i} style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '14px',
              gap: '7px',
              width: '200px',
              height: '88px',
              background: '#4E8B42',
              borderRadius: '14px',
              boxSizing: 'border-box',
            }}>
              <h3 style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: '15px', lineHeight: '19px', textAlign: 'center', color: '#F9F9F9', margin: 0 }}>{item.title}</h3>
              <p style={{ fontFamily: "'Lora', serif", fontWeight: 400, fontSize: '13px', lineHeight: '17px', textAlign: 'center', color: '#F9F9F9', margin: 0 }}>{item.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
