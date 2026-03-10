import React from 'react';
const About = () => {
  return (
    <div style={{ paddingTop: "100px", background: "#F9F9F9" }}>

      {/* HERO TITLE */}
      <section style={{ textAlign: "center", marginBottom: "70px" }}>
        <h1 style={{
          fontFamily: "'Lora', serif",
          fontWeight: 700,
          fontSize: "36px",
          lineHeight: "1.3",
          color: "#2D2D2D"
        }}>
          At Grassroot Policies we design policy where it matters most
          <br /> at the grassroots.
        </h1>
      </section>


      {/* ABOUT GRID */}
      <section style={{
        maxWidth: "1100px",
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "60px",
        padding: "0 20px"
      }}>

        {/* LEFT */}
        <div>
          <p style={{
            fontFamily: "'Lora', serif",
            fontSize: "16px",
            lineHeight: "1.8"
          }}>
            We work at the intersection of community realities and institutional
            decision-making, ensuring that policies are not only drafted but
            grounded in lived experience. Our approach challenges top-down
            development models by centering voices often excluded from formal
            governance processes.
          </p>

          <div style={{
            width: "320px",
            height: "200px",
            borderRadius: "28px",
            background: "#ddd",
            marginTop: "40px",
            boxShadow: "0 10px 20px rgba(0,0,0,0.1)"
          }} />
        </div>


        {/* RIGHT */}
        <div>

          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <h2 style={{
              fontFamily: "'Lora', serif",
              fontSize: "90px",
              margin: 0
            }}>
              WE
            </h2>

            <div style={{ fontFamily: "'Lora', serif", fontSize: "16px" }}>
              don’t assume.
              <br /> don’t guess.
              <br />listen first.
            </div>
          </div>

          <p style={{
            fontFamily: "'Lora', serif",
            marginTop: "20px",
            lineHeight: "1.8"
          }}>
            Through field engagement, research-backed frameworks, and
            collaborative implementation, we translate local knowledge into
            actionable policy solutions. Whether addressing governance gaps,
            social inequities, or development inefficiencies, we focus on
            solutions that are participatory, scalable, and measurable.
          </p>

          <p style={{
            fontFamily: "'Lora', serif",
            fontWeight: 700,
            marginTop: "12px"
          }}>
            We believe resilience already exists within communities. Our role
            is to structure it, amplify it, and connect it to systems of power.
          </p>

        </div>
      </section>


      {/* VISION & MISSION */}
      <section style={{
        maxWidth: "1100px",
        margin: "90px auto",
        display: "flex",
        justifyContent: "space-between",
        padding: "0 20px"
      }}>

        <div style={{ maxWidth: "420px" }}>
          <h2 style={{
            fontFamily: "'Lora', serif",
            fontWeight: 700,
            fontSize: "30px"
          }}>
            Our Vision
          </h2>

          <p style={{ fontFamily: "'Lora', serif", lineHeight: "1.7" }}>
            To build a world where policies are shaped by real people,
            reflect real struggles, and create fair opportunities
            for every community.
          </p>
        </div>


        <div style={{ maxWidth: "420px", textAlign: "right" }}>
          <h2 style={{
            fontFamily: "'Lora', serif",
            fontWeight: 700,
            fontSize: "30px"
          }}>
            Our Mission
          </h2>

          <p style={{ fontFamily: "'Lora', serif", lineHeight: "1.7" }}>
            To listen to real people, study real problems, and design
            practical policies that bring fair opportunities to
            every community.
          </p>
        </div>

      </section>


      {/* WHY WE EXIST */}
      <section style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "60px 20px"
      }}>

        <h2 style={{
          fontFamily: "'Lora', serif",
          fontWeight: 700,
          fontSize: "34px",
          textAlign: "center",
          marginBottom: "50px"
        }}>
          Why We Exist
        </h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "60px",
          alignItems: "center"
        }}>

          <div style={{ fontFamily: "'Lora', serif", lineHeight: "1.8" }}>

            <p>
              For many years, policies have been made in a <b>top-down way</b> —
              decided by leaders who are far from the daily struggles of
              <b> common people</b>.
            </p>

            <p style={{ marginTop: "18px", fontWeight: 700 }}>
              The result?
            </p>

            <p>
              <b>Good intentions</b>, but <b>poor results.</b>
              Many vulnerable communities never receive the full
              benefits because their real problems were never
              truly understood.
            </p>

            <p style={{ fontWeight: 700, fontSize: "22px" }}>
              We are here to change that.
            </p>

          </div>

          <img
            src="public\images\center.png"
            alt="community"
            style={{
              width: "100%",
              borderRadius: "28px",
              boxShadow: "0 10px 20px rgba(0,0,0,0.15)"
            }}
          />

        </div>

      </section>


      {/* WHERE WE WORK */}
      <section style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '40px 20px', gap: '42px' }}>

        <h2 style={{
          fontFamily: "'Lora', serif",
          fontWeight: 700,
          fontSize: 'clamp(22px, 2.2vw, 26px)',
          lineHeight: '34px',
          textAlign: 'center',
          color: '#2D2D2D',
        }}>
          Where We Work
        </h2>

        <div style={{ display: 'flex', gap: '85px', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center', maxWidth: '960px', width: '100%' }}>

          {/* Branches */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', width: '310px' }}>
            {[
              { branch: 'Branch 1', detail: 'Vrindavan\n(add whole address)' },
              { branch: 'Branch 2', detail: 'Mathura\n(add whole address)' },
              { branch: 'Branch 3', detail: 'Ayodhya\n(add whole address)' },
              { branch: 'Branch 4', detail: 'Kashi\n(add whole address)' },
            ].map((item, i) => (

              <div key={i} style={{
                padding: '14px',
                width: '148px',
                height: '88px',
                background: 'rgba(45,45,45,0.1)',
                borderRadius: '14px'
              }}>
                <p style={{ fontFamily: "'Lora', serif", fontWeight: 700, margin: 0 }}>
                  {item.branch}
                </p>

                <p style={{
                  fontFamily: "'Lora', serif",
                  fontSize: '13px',
                  whiteSpace: 'pre-line',
                  margin: 0
                }}>
                  {item.detail}
                </p>

              </div>

            ))}
          </div>


          {/* MAP */}
          <div style={{
            width: '440px',
            height: '370px',
            borderRadius: '14px',
            overflow: 'hidden'
          }}>
            <img
              src="/images/map.png"
              alt="map"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>

        </div>

      </section>


      {/* CTA */}
      <section style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '40px 20px', gap: '42px' }}>

        <div style={{ textAlign: "center", maxWidth: "670px" }}>
          <h2 style={{
            fontFamily: "'Lora', serif",
            fontWeight: 700,
            fontSize: '26px'
          }}>
            Join us in building policies that listen before they lead
          </h2>

          <p style={{
            fontFamily: "'Lora', serif",
            fontSize: '15px'
          }}>
            Grassroot Policies is not just about studying policy.
            We co-create it, test it, and strengthen it —
            from the ground up.
          </p>
        </div>


        <div style={{ display: "flex", gap: "36px", flexWrap: "wrap" }}>
          {[
            { title: 'Internships', text: 'Join our research-driven grassroots policy team.' },
            { title: 'Partner With Us', text: 'Collaborate to create impact-driven policy solutions.' },
          ].map((item, i) => (

            <div key={i} style={{
              width: "200px",
              height: "88px",
              background: "#4E8B42",
              borderRadius: "14px",
              color: "white",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center"
            }}>
              <h3 style={{ margin: 0 }}>{item.title}</h3>
              <p style={{ fontSize: "13px", textAlign: "center" }}>
                {item.text}
              </p>
            </div>

          ))}
        </div>

      </section>

    </div>
  );
};

export default About;