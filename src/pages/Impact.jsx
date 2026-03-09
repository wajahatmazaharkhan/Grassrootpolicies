import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

const BarChartIcon = () => (
  <svg width="22" height="16" viewBox="0 0 30 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0.529785 22C0.236816 22 0 21.7711 0 21.4868C0 21.2026 0.236816 20.9737 0.529785 20.9737H2.76611V5.17928C2.76611 5.01578 2.83203 4.86485 2.93701 4.75669C3.04443 4.64601 3.18848 4.57809 3.34717 4.57809H6.52588C6.68701 4.57809 6.83105 4.64601 6.93604 4.75669C7.04102 4.86485 7.10693 5.01578 7.10693 5.17928V20.9712H9.47266V9.75989C9.47266 9.59639 9.53857 9.44798 9.64355 9.3373C9.74854 9.22913 9.89502 9.16122 10.0513 9.16122H13.23C13.3936 9.16122 13.5376 9.22913 13.6401 9.3373C13.7451 9.44546 13.811 9.5989 13.811 9.75989V20.9712H16.1768V0.598674C16.1768 0.43517 16.2427 0.28676 16.3477 0.17608C16.46 0.0679168 16.604 0 16.7651 0H19.9438C20.105 0 20.249 0.0679168 20.354 0.17608C20.459 0.284244 20.5249 0.437686 20.5249 0.598674V20.9712H22.8906V6.48982C22.8906 6.32632 22.9565 6.17539 23.0615 6.06723C23.1665 5.95907 23.313 5.89115 23.4741 5.89115H26.6528C26.814 5.89115 26.9604 5.95907 27.063 6.06723C27.168 6.17539 27.2339 6.32632 27.2339 6.48982V20.9737H29.4702C29.7632 20.9737 30 21.2026 30 21.4868C30 21.7711 29.7632 22 29.4702 22H26.7188C26.7139 22 26.709 22 26.7041 22H23.4229C23.418 22 23.4131 22 23.4082 22H20.0098C20.0049 22 20 22 19.9951 22H16.7139C16.709 22 16.7041 22 16.6992 22H13.3032C13.2983 22 13.2935 22 13.2886 22H10.0049C10 22 9.99512 22 9.99023 22H6.5918H6.57715H3.2959H3.28125H0.529785ZM6.04736 5.67231H3.82568V20.9058H6.04736V5.67231ZM12.7563 10.2529H10.5347V20.9058H12.7563V10.2529ZM19.4653 1.0917H17.2437V20.9058H19.4653V1.0917ZM26.1719 6.98285H23.9502V20.9083H26.1719V6.98285Z" fill="#2D2D2D"/>
  </svg>
);

const WaterTapIcon = () => (
  <svg width="22" height="24" viewBox="0 0 31 33" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M26.1492 22.5659C25.4553 25.7948 23.3711 27.4066 23.3711 29.0211C23.3711 30.6356 24.065 32.25 26.1492 32.25C28.2334 32.25 28.9272 30.6356 28.9272 29.0211C28.9272 27.4066 26.843 25.7922 26.1492 22.5659ZM4.67568 10.5955H10.3955L8.96882 15.9232H4.68607H4.67308V10.5955H4.67568ZM10.6112 9.7935H4.67568V8.6087C4.67568 8.4134 4.59512 8.23373 4.46778 8.10613C4.45738 8.09572 4.44699 8.0853 4.43399 8.07749C4.30925 7.96552 4.14293 7.89782 3.96362 7.89782H0.959461C0.764555 7.89782 0.587839 7.97854 0.457901 8.10613C0.330563 8.23373 0.25 8.4134 0.25 8.6087V18.1053C0.25 18.3006 0.330563 18.4803 0.457901 18.6079C0.468296 18.6183 0.478689 18.6287 0.491684 18.6365C0.616425 18.7485 0.782747 18.8162 0.962061 18.8162H3.96622C4.16112 18.8162 4.33784 18.7355 4.46778 18.6079C4.59512 18.4803 4.67568 18.3006 4.67568 18.1053V16.7226H4.68867H8.89865C9.26767 18.3839 10.3254 19.5479 11.6767 20.2275C12.6435 20.7145 13.7609 20.954 14.881 20.9514C15.9984 20.9514 17.1211 20.7093 18.1034 20.238C19.5379 19.5479 20.6736 18.3683 21.066 16.72H21.2869C21.947 16.7461 22.4356 16.9023 22.7708 17.1783C23.0852 17.4387 23.2698 17.8241 23.3347 18.3267V20.3473C23.3347 20.5687 23.514 20.7483 23.7349 20.7483H29.8498C30.0707 20.7509 30.25 20.5713 30.25 20.3499V15.9727C30.25 15.9492 30.2474 15.9284 30.2448 15.905C29.9511 14.1864 29.3041 12.7828 28.2594 11.7439C27.2199 10.7101 25.7957 10.0487 23.9402 9.80131C23.9116 9.7961 23.8831 9.79089 23.8519 9.79089H19.1923L18.3841 7.0333C18.3321 6.85884 18.1736 6.74687 18.0021 6.74687H16.6663V3.72368H19.9304C20.4085 3.72368 20.8399 3.52838 21.1544 3.2133C21.4688 2.89822 21.6637 2.46336 21.6637 1.98684C21.6637 1.50771 21.4688 1.07545 21.1544 0.760375C20.8399 0.445297 20.4059 0.25 19.9304 0.25H10.2448C9.76663 0.25 9.33524 0.445297 9.02079 0.760375C8.70634 1.07545 8.51143 1.51031 8.51143 1.98684C8.51143 2.46597 8.70634 2.89822 9.02079 3.2133C9.33524 3.52838 9.76923 3.72368 10.2448 3.72368H13.3269V6.74687H11.7313C11.539 6.74687 11.3779 6.88227 11.3389 7.06455L10.6112 9.7935ZM14.1273 6.74687V3.72368H15.8659V6.74687H14.1273ZM20.9828 15.9232L19.4236 10.5955H23.8363C25.5073 10.8195 26.7807 11.4027 27.6954 12.3115C28.6102 13.2203 29.1819 14.465 29.4496 16.0039V19.9489H24.1325V18.3058C24.1325 18.2824 24.1299 18.2616 24.1273 18.2381C24.039 17.5246 23.7609 16.9622 23.2775 16.5638C22.8072 16.1732 22.1523 15.9545 21.2999 15.9232H21.2869V15.9206H20.9828V15.9232ZM20.3072 16.457C19.9953 17.8918 19.013 18.9204 17.7604 19.5219C16.8846 19.9411 15.8815 20.1546 14.881 20.1572C13.8831 20.1572 12.8903 19.9463 12.0353 19.5167C10.8581 18.923 9.94595 17.91 9.65489 16.457L12.0379 7.55149H17.7006L18.5088 10.3091L20.2942 16.4101C20.2968 16.4232 20.302 16.4414 20.3072 16.457ZM10.2422 1.05202H19.9304C20.1876 1.05202 20.4189 1.15618 20.5904 1.32804C20.7594 1.49729 20.8659 1.73165 20.8659 1.98944C20.8659 2.24723 20.7594 2.47899 20.5904 2.65085C20.4215 2.8201 20.1876 2.92687 19.9304 2.92687H10.2448C9.98753 2.92687 9.75624 2.8201 9.58472 2.65085C9.4158 2.48159 9.30925 2.24723 9.30925 1.98944C9.30925 1.73165 9.4158 1.4999 9.58472 1.32804C9.75364 1.15618 9.98753 1.05202 10.2422 1.05202ZM1.05042 8.69723H3.87526V18.0168H1.05042V8.69723Z" fill="#2D2D2D" stroke="#2D2D2D" strokeWidth="0.5"/>
  </svg>
);

const ProblemIcon = () => (
  <svg width="40" height="36" viewBox="0 0 54 49" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M26.9844 1.5C29.0452 1.48405 30.8865 2.66463 32.2402 4.61133L32.5039 5.01074L32.5195 5.03516L32.5352 5.06152L51.5264 38.0947L51.5488 38.1338L51.5693 38.1748C52.4662 39.9796 52.7759 42.2505 51.9326 44.165C51.0516 46.1652 49.0905 47.3941 46.292 47.4131L46.0186 47.4111H7.3418V47.4102C5.2665 47.4504 3.41625 46.5446 2.36523 44.8623C1.31616 43.1829 1.2165 40.9838 2.08789 38.709L2.12988 38.5986L2.18945 38.4961L21.4893 5.05957L21.5049 5.03223L21.5215 5.00586C22.8704 2.87894 24.7974 1.51707 26.9844 1.5Z" fill="rgba(128,128,128,0.5)" stroke="#2D2D2D" strokeWidth="3"/>
    <path d="M25.4329 36.7627C25.8447 36.3519 26.3887 36.1009 26.9681 36.0545C27.3319 36.0286 27.697 36.0816 28.0384 36.2101C28.3799 36.3385 28.6896 36.5392 28.9465 36.7986C29.3722 37.222 29.6299 37.786 29.6715 38.3855C29.6922 38.5961 29.6862 38.8084 29.6536 39.0175C29.6147 39.2244 29.5516 39.426 29.4657 39.6182C29.2076 40.1937 28.7402 40.6489 28.1587 40.8913C27.8325 41.0232 27.483 41.0873 27.1313 41.0796C26.7797 41.0719 26.4333 40.9926 26.1132 40.8465C25.5415 40.5839 25.0916 40.1124 24.8555 39.5286C24.7783 39.3462 24.7242 39.155 24.6943 38.9593C24.6633 38.7636 24.6543 38.5652 24.6675 38.3675C24.7035 38.0568 24.7897 37.7541 24.9226 37.471C25.0413 37.2044 25.2153 36.966 25.4329 36.7717V36.7627ZM29.0807 32.1725C28.9957 34.3197 25.3612 34.3242 25.2807 32.1725C24.9137 28.4922 23.9737 19.7554 24.0006 16.2947C24.0319 15.2279 24.8957 14.6003 26.0416 14.3582C26.4079 14.2808 26.7817 14.2447 27.1561 14.2506C27.532 14.2479 27.9071 14.2855 28.2751 14.3627C29.4433 14.6093 30.3564 15.2592 30.3564 16.353V16.4606L29.0807 32.1725Z" fill="#2D2D2D"/>
  </svg>
);

const OutcomeIcon = () => (
  <svg width="36" height="36" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M25 0C38.8073 0 50 11.1927 50 25C50 38.8073 38.8073 50 25 50C11.1927 50 0 38.8073 0 25C0 11.1927 11.1927 0 25 0ZM13.9396 25.6651C14.275 23.7203 16.4948 22.6375 18.2464 23.6911C18.4052 23.7859 18.5568 23.8984 18.6979 24.0276L18.7115 24.0406C19.4974 24.7937 20.3781 25.5776 21.251 26.3547L22 27.0271L30.887 17.7052C31.4177 17.1495 31.8057 16.7901 32.6021 16.6109C35.3286 16.0094 37.2458 19.3422 35.3135 21.3792L24.2375 33.0031C23.1943 34.1161 21.3297 34.2177 20.2083 33.1547C19.5656 32.5578 18.8667 31.9505 18.1599 31.3375C16.9359 30.274 15.6875 29.1891 14.6698 28.1151C14.0589 27.5047 13.7953 26.5052 13.9396 25.6651Z" fill="#4E8B42"/>
  </svg>
);

const ActionIcon = () => (
  <svg width="44" height="36" viewBox="0 0 60 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M32.0387 10.1772V45.5806H49.4376C49.6232 45.5806 49.7697 45.7315 49.7697 45.9165V49.6642C49.7697 49.8491 49.6183 50 49.4376 50H11.1533C10.9677 50 10.8163 49.8491 10.8163 49.6642V45.9165C10.8163 45.7315 10.9677 45.5806 11.1533 45.5806H28.5521V10.1918C27.0383 9.66611 25.8371 8.47367 25.3097 6.96486H14.3078V8.63428C14.3078 8.81923 14.1564 8.96525 13.9757 8.96525H11.1533C10.9677 8.96525 10.8163 8.81437 10.8163 8.63428V6.96486H8.01823C7.80337 6.96486 7.62757 6.81398 7.62757 6.63389V3.81583C7.62757 3.63088 7.80337 3.48 8.01823 3.48H25.3194C26.0422 1.45527 27.9857 0 30.271 0C32.5564 0 34.4999 1.45527 35.2226 3.48486H52.5726C52.7875 3.48486 52.9633 3.63574 52.9633 3.82069V6.63389C52.9633 6.81885 52.7875 6.96486 52.5726 6.96486H49.4181V8.63428C49.4181 8.81923 49.2667 8.96525 49.086 8.96525H46.2635C46.078 8.96525 45.9266 8.81437 45.9266 8.63428V6.96486H35.2372C34.7147 8.45907 33.533 9.64178 32.0387 10.1772ZM48.6661 10.8537L59.8535 30.5558C59.9512 30.7262 59.9951 30.9111 59.9902 31.0912H60C60 31.1155 60 31.1399 60 31.1642C60 35.8561 54.4576 39.6622 47.6211 39.6622C40.8578 39.6622 35.3642 35.9389 35.247 31.3151C35.2275 31.2372 35.2177 31.1496 35.2177 31.0669C35.2177 30.8527 35.2861 30.6483 35.3984 30.4828L46.8397 10.805C47.1279 10.3086 47.7627 10.1382 48.2608 10.4254C48.4414 10.5373 48.5782 10.6833 48.6661 10.8537ZM48.71 15.1416V30.035H57.1677L48.71 15.1416ZM46.7177 30.0302V15.166L38.0695 30.0302H46.7177ZM13.4484 10.8537L24.6358 30.5558C24.7335 30.7262 24.7774 30.9111 24.7725 31.0912H24.7823C24.7823 31.1155 24.7823 31.1399 24.7823 31.1642C24.7823 35.8561 19.2398 39.6622 12.4034 39.6622C5.64011 39.6622 0.146496 35.9389 0.0292993 31.3151C0.00976642 31.2421 0 31.1593 0 31.0717C0 30.8576 0.0683649 30.6532 0.180679 30.4877L11.622 10.8099C11.9101 10.3086 12.545 10.1431 13.0431 10.4303C13.2237 10.5373 13.3605 10.6833 13.4484 10.8537ZM13.4923 15.1416V30.035H21.95L13.4923 15.1416ZM11.4951 30.0302V15.166L2.85179 30.0302H11.4951ZM30.271 2.95435C31.5358 2.95435 32.5612 3.97644 32.5612 5.23703C32.5612 6.49761 31.5358 7.51971 30.271 7.51971C29.0063 7.51971 27.9808 6.49761 27.9808 5.23703C27.9808 3.97644 29.0063 2.95435 30.271 2.95435Z" fill="black"/>
  </svg>
);

const Impact = () => {
  const impactStats = [
    {
      title: '14 Policy Interventions & 5 District-Level Reforms',
      description: 'Turning research into real administrative change.',
      bg: 'rgba(27, 117, 187, 0.5)',
      border: '#1B75BB',
    },
    {
      title: '2,350+ Lives Directly Impacted',
      description: 'Across water, education, and public welfare systems.',
      bg: 'rgba(255, 203, 5, 0.5)',
      border: '#FFCB05',
    },
    {
      title: '22 Community Consultations Conducted',
      description: 'Ensuring every recommendation begins with people.',
      bg: 'rgba(243, 146, 33, 0.5)',
      border: '#F39221',
    },
    {
      title: '9 Research Reports & 6 Government Representations Filed',
      description: 'Structured policy briefs submitted to decision-makers.',
      bg: 'rgba(78, 139, 66, 0.5)',
      border: '#4E8B42',
    },
  ];

  const problemItems = [
    'Women walked 3–4 km daily for water',
    'Existing borewells dried up in summer',
    'Water contamination caused illness',
    'No response from local authorities',
  ];

  const actionItems = [
    'Conducted 47 household surveys',
    'Filed RTI on unused rural water funds',
    'Submitted policy brief to district office',
    'Mobilized local media coverage',
  ];

  const outcomeItems = [
    'New water pipeline installed',
    '12 public tap points added',
    'Monthly water quality testing started',
    '600+ residents benefited',
  ];

  return (
    <div style={{ paddingTop: '80px', background: '#F9F9F9', position: 'relative', overflow: 'hidden' }}>

      {/* ===== IMPACT STATS WITH BLUR BACKGROUND ===== */}
      <section style={{ position: 'relative', padding: '32px 20px 40px' }}>
        {/* Colorful Blur Background */}
        <div className="hidden md:block" style={{
          position: 'absolute',
          width: '100%',
          maxWidth: '1100px',
          left: '50%',
          transform: 'translateX(-50%)',
          top: '0',
          height: '100%',
          opacity: 0.5,
          pointerEvents: 'none',
        }}>
          <div style={{ position: 'absolute', width: '300px', height: '300px', left: '0%', top: '0', background: '#1B75BB', filter: 'blur(220px)' }} />
          <div style={{ position: 'absolute', width: '300px', height: '300px', left: '25%', top: '50%', background: '#4E8B42', filter: 'blur(220px)' }} />
          <div style={{ position: 'absolute', width: '300px', height: '300px', left: '50%', top: '50%', background: '#F39221', filter: 'blur(220px)' }} />
          <div style={{ position: 'absolute', width: '300px', height: '300px', left: '75%', top: '0', background: '#FFCB05', filter: 'blur(220px)' }} />
        </div>

        {/* Impact Cards Grid */}
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '1100px', margin: '0 auto' }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {impactStats.map((stat, i) => (
              <div key={i} style={{
                boxSizing: 'border-box',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start',
                padding: '16px',
                gap: '6px',
                background: stat.bg,
                border: `1px solid ${stat.border}`,
                borderRadius: '24px',
              }}>
                <h3 style={{
                  fontFamily: "'Lora', serif",
                  fontWeight: 600,
                  fontSize: 'clamp(15px, 1.4vw, 18px)',
                  lineHeight: '1.3',
                  color: '#2D2D2D',
                  margin: 0,
                }}>
                  {stat.title}
                </h3>
                <p style={{
                  fontFamily: "'Lora', serif",
                  fontWeight: 400,
                  fontSize: 'clamp(13px, 1.1vw, 15px)',
                  lineHeight: '1.4',
                  color: '#2D2D2D',
                  margin: 0,
                }}>
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SEPARATOR ===== */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 20px' }}>
        <hr style={{ border: 'none', borderTop: '1px solid rgba(45, 45, 45, 0.2)', margin: 0 }} />
      </div>

      {/* ===== CASE STUDIES HEADER ===== */}
      <div style={{ textAlign: 'center', padding: '36px 20px 16px' }}>
        <h2 style={{
          fontFamily: "'Lora', serif",
          fontWeight: 700,
          fontSize: 'clamp(24px, 2.5vw, 30px)',
          lineHeight: '1.3',
          color: '#2D2D2D',
          margin: 0,
        }}>
          Case Studies
        </h2>
      </div>

      {/* ===== CASE STUDY SELECTOR ===== */}
      <div style={{ display: 'flex', justifyContent: 'center', paddingBottom: '32px' }}>
        <button style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          padding: '8px 16px',
          gap: '8px',
          background: 'rgba(78, 139, 66, 0.7)',
          borderRadius: '16px',
          border: 'none',
          cursor: 'pointer',
        }}>
          <span style={{
            fontFamily: "'Lora', serif",
            fontWeight: 500,
            fontSize: 'clamp(14px, 1.2vw, 16px)',
            lineHeight: '1.4',
            color: '#2D2D2D',
          }}>
            Pandharpur Water Access Reform
          </span>
          <ChevronDown size={14} color="#2D2D2D" strokeWidth={2} />
        </button>
      </div>

      {/* ===== CASE STUDY DETAILS ===== */}
      <section style={{
        maxWidth: '1100px',
        margin: '0 auto',
        padding: '0 20px 60px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '36px',
      }}>
        {/* Case Study Title + Line */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '10px',
          width: '100%',
        }}>
          <h3 style={{
            fontFamily: "'Lora', serif",
            fontWeight: 600,
            fontSize: '20px',
            lineHeight: '26px',
            textAlign: 'center',
            color: '#2D2D2D',
            margin: 0,
            alignSelf: 'stretch',
          }}>
            Pandharpur Water Access Reform <span style={{ color: '#F39221' }}>(Ongoing)</span>
          </h3>
          <hr style={{ width: '100%', border: 'none', borderTop: '1px solid rgba(45, 45, 45, 0.2)', margin: 0 }} />
        </div>

        {/* ===== IMPACT & TAGS ===== */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '30px', width: '100%' }}>

          {/* ===== IMPACT CONTENTS: Problem / Action / Outcome ===== */}
          <div className="grid grid-cols-1 md:grid-cols-3" style={{ width: '100%', gap: '32px' }}>

            {/* The Problem Column */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
              <div style={{
                boxSizing: 'border-box',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '8px 16px',
                gap: '6px',
                height: '80px',
                background: 'rgba(128, 128, 128, 0.5)',
                border: '1px solid #808080',
                borderRadius: '16px',
              }}>
                <ProblemIcon />
                <span style={{
                  fontFamily: "'Lora', serif",
                  fontWeight: 600,
                  fontSize: '15px',
                  lineHeight: '20px',
                  color: '#2D2D2D',
                }}>
                  The Problem
                </span>
              </div>
              {problemItems.map((text, i) => (
                <div key={i} style={{
                  boxSizing: 'border-box',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: '14px 16px',
                  alignSelf: 'stretch',
                  background: 'rgba(128, 128, 128, 0.5)',
                  border: '1px solid #808080',
                  borderRadius: '16px',
                }}>
                  <span style={{
                    fontFamily: "'Lora', serif",
                    fontWeight: 400,
                    fontSize: 'clamp(13px, 1.1vw, 15px)',
                    lineHeight: '20px',
                    color: '#2D2D2D',
                    textAlign: 'center',
                  }}>
                    {text}
                  </span>
                </div>
              ))}
            </div>

            {/* Our Action Column */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
              <div style={{
                boxSizing: 'border-box',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '8px 16px',
                gap: '6px',
                height: '80px',
                background: 'rgba(243, 146, 33, 0.5)',
                border: '1px solid #F39221',
                borderRadius: '16px',
              }}>
                <ActionIcon />
                <span style={{
                  fontFamily: "'Lora', serif",
                  fontWeight: 600,
                  fontSize: '15px',
                  lineHeight: '20px',
                  color: '#2D2D2D',
                }}>
                  Our Action
                </span>
              </div>
              {actionItems.map((text, i) => (
                <div key={i} style={{
                  boxSizing: 'border-box',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: '14px 16px',
                  alignSelf: 'stretch',
                  background: 'rgba(243, 146, 33, 0.5)',
                  border: '1px solid #F39221',
                  borderRadius: '16px',
                }}>
                  <span style={{
                    fontFamily: "'Lora', serif",
                    fontWeight: 400,
                    fontSize: 'clamp(13px, 1.1vw, 15px)',
                    lineHeight: '20px',
                    color: '#2D2D2D',
                    textAlign: 'center',
                  }}>
                    {text}
                  </span>
                </div>
              ))}
            </div>

            {/* The Outcome Column */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
              <div style={{
                boxSizing: 'border-box',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '8px 16px',
                gap: '6px',
                height: '80px',
                background: 'rgba(78, 139, 66, 0.5)',
                border: '1px solid #4E8B42',
                borderRadius: '16px',
              }}>
                <OutcomeIcon />
                <span style={{
                  fontFamily: "'Lora', serif",
                  fontWeight: 600,
                  fontSize: '15px',
                  lineHeight: '20px',
                  color: '#2D2D2D',
                }}>
                  The Outcome
                </span>
              </div>
              {outcomeItems.map((text, i) => (
                <div key={i} style={{
                  boxSizing: 'border-box',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: '14px 16px',
                  alignSelf: 'stretch',
                  background: 'rgba(78, 139, 66, 0.5)',
                  border: '1px solid #4E8B42',
                  borderRadius: '16px',
                }}>
                  <span style={{
                    fontFamily: "'Lora', serif",
                    fontWeight: 400,
                    fontSize: 'clamp(13px, 1.1vw, 15px)',
                    lineHeight: '20px',
                    color: '#2D2D2D',
                    textAlign: 'center',
                  }}>
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ===== TAGS ===== */}
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <WaterTapIcon />
              <span style={{
                fontFamily: "'Lora', serif",
                fontWeight: 600,
                fontSize: 'clamp(14px, 1.2vw, 16px)',
                lineHeight: '20px',
                color: '#2D2D2D',
              }}>
                600+ Residents Benefited
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <BarChartIcon />
              <span style={{
                fontFamily: "'Lora', serif",
                fontWeight: 600,
                fontSize: 'clamp(14px, 1.2vw, 16px)',
                lineHeight: '20px',
                color: '#2D2D2D',
              }}>
                12 Public Tap Points Installed
              </span>
            </div>
          </div>
        </div>

        {/* ===== TESTIMONIALS ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8" style={{ width: '100%' }}>
          {/* Testimonial 1 */}
          <div className="flex flex-col sm:flex-row items-center" style={{ gap: '16px' }}>
            <div className="shrink-0" style={{
              width: '170px',
              height: '166px',
              background: 'rgba(197, 196, 196, 0.2)',
              boxShadow: '1px 1px 10px rgba(0, 0, 0, 0.25)',
              borderRadius: '24px',
            }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <p style={{
                fontFamily: "'Lora', serif",
                fontWeight: 400,
                fontSize: 'clamp(13px, 1.1vw, 15px)',
                lineHeight: '1.5',
                color: '#2D2D2D',
                margin: 0,
              }}>
                "Before the pipeline, my daughters walked hours each morning to fetch water. Now, they attend school regularly and our family's health has improved."
              </p>
              <div>
                <p style={{
                  fontFamily: "'Lora', serif",
                  fontWeight: 400,
                  fontSize: 'clamp(14px, 1.2vw, 16px)',
                  lineHeight: '1.4',
                  color: '#2D2D2D',
                  margin: 0,
                }}>
                  — Sunita Jadhav
                </p>
                <p style={{
                  fontFamily: "'Lora', serif",
                  fontWeight: 400,
                  fontSize: 'clamp(13px, 1.1vw, 15px)',
                  lineHeight: '1.4',
                  color: '#2D2D2D',
                  margin: 0,
                }}>
                  Resident, Pandharpur
                </p>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="flex flex-col sm:flex-row items-center" style={{ gap: '16px' }}>
            <div className="shrink-0" style={{
              width: '170px',
              height: '166px',
              background: 'rgba(197, 196, 196, 0.2)',
              boxShadow: '1px 1px 10px rgba(0, 0, 0, 0.25)',
              borderRadius: '24px',
            }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <p style={{
                fontFamily: "'Lora', serif",
                fontWeight: 400,
                fontSize: 'clamp(13px, 1.1vw, 15px)',
                lineHeight: '1.5',
                color: '#2D2D2D',
                margin: 0,
              }}>
                "The RTI filing and survey data gave us the evidence we needed to push for infrastructure funding from the district office."
              </p>
              <div>
                <p style={{
                  fontFamily: "'Lora', serif",
                  fontWeight: 400,
                  fontSize: 'clamp(14px, 1.2vw, 16px)',
                  lineHeight: '1.4',
                  color: '#2D2D2D',
                  margin: 0,
                }}>
                  — Rajesh Patil
                </p>
                <p style={{
                  fontFamily: "'Lora', serif",
                  fontWeight: 400,
                  fontSize: 'clamp(13px, 1.1vw, 15px)',
                  lineHeight: '1.4',
                  color: '#2D2D2D',
                  margin: 0,
                }}>
                  Gram Panchayat Member, Pandharpur
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ===== CTA BUTTON ===== */}
        <Link to="#" style={{
          boxSizing: 'border-box',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '12px 26px',
          border: '1px solid #2D2D2D',
          borderRadius: '50px',
          textDecoration: 'none',
        }}>
          <span style={{
            fontFamily: "'Open Sans', sans-serif",
            fontWeight: 700,
            fontSize: '15px',
            lineHeight: '22px',
            color: '#2D2D2D',
          }}>
            Download Case Brief
          </span>
        </Link>
      </section>
    </div>
  );
};

export default Impact;
