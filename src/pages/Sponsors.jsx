import React from 'react';
import { Award, TrendingUp, Users, Download, Mail } from 'lucide-react';

const Sponsors = () => {
  const titleSponsors = [
    {
      name: "Principal Sponsor",
      logo: "LOGO",
      tier: "Title"
    }
  ];

  const officialSponsors = [
    { name: "Sponsor 1", logo: "LOGO" },
    { name: "Sponsor 2", logo: "LOGO" },
    { name: "Sponsor 3", logo: "LOGO" },
    { name: "Sponsor 4", logo: "LOGO" }
  ];

  const partners = [
    { name: "Partner 1", logo: "LOGO" },
    { name: "Partner 2", logo: "LOGO" },
    { name: "Partner 3", logo: "LOGO" },
    { name: "Partner 4", logo: "LOGO" },
    { name: "Partner 5", logo: "LOGO" },
    { name: "Partner 6", logo: "LOGO" }
  ];

  const benefits = [
    {
      icon: Award,
      text: "Brand visibility to 5,000+ athletes"
    },
    {
      icon: TrendingUp,
      text: "Exclusive activation zones on race day"
    },
    {
      icon: Users,
      text: "Digital marketing across all socials"
    }
  ];

  return (
    <div style={{ 
      fontFamily: "'Playfair Display', serif",
      backgroundColor: '#0a4a42',
      color: '#f5f1e8',
      minHeight: '100vh',
      paddingTop: '100px'
    }}>
      {/* Hero Section */}
      <section style={{
        padding: '80px 40px 60px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: '#0a4a42'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: '#0a4a42'
        }}></div>

        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 1
        }}>
          <div style={{
            position: 'relative',
            height: '400px',
            borderRadius: '30px',
            overflow: 'hidden',
            marginBottom: '50px',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)',
            border: '8px solid #f4d35e'
          }}>
            <div style={{
              width: '100%',
              height: '100%',
              background: 'linear-gradient(135deg, rgba(245, 241, 232, 0.9) 0%, rgba(200, 90, 62, 0.9) 100%)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#f5f1e8',
              padding: '40px'
            }}>
              <h1 style={{
                fontSize: '72px',
                fontWeight: '900',
                margin: '0 0 20px 0',
                lineHeight: '1',
                letterSpacing: '-1px',
                color: '#f4d35e'
              }}>
                OUR SPONSORS
              </h1>
              <p style={{
                fontSize: '20px',
                maxWidth: '700px',
                margin: '0 auto',
                lineHeight: '1.6',
                fontFamily: "'Inter', sans-serif",
                opacity: 0.95
              }}>
                The strength of Tepuy Race comes from our partners. Meet the organizations helping us push the limits of trail running.
              </p>
              
              <button style={{
                marginTop: '35px',
                backgroundColor: '#f4d35e',
                color: '#f5f1e8',
                border: 'none',
                padding: '14px 35px',
                borderRadius: '30px',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: '700',
                letterSpacing: '1px',
                transition: 'all 0.3s ease',
                boxShadow: '0 5px 20px rgba(244, 211, 94, 0.4)',
                fontFamily: "'Inter', sans-serif"
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = '#f5f1e8';
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 8px 25px rgba(244, 211, 94, 0.5)';
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = '#f4d35e';
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 5px 20px rgba(244, 211, 94, 0.4)';
              }}>
                VIEW TIER BENEFITS
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Title Sponsor Section */}
      <section style={{
        padding: '80px 40px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '15px',
          marginBottom: '50px'
        }}>
          <div style={{
            width: '60px',
            height: '3px',
            backgroundColor: '#c85a3e'
          }}></div>
          <h2 style={{
            fontSize: '42px',
            fontWeight: '900',
            color: '#f5f1e8',
            margin: 0,
            letterSpacing: '2px'
          }}>
            TITLE SPONSOR
          </h2>
        </div>

        <div style={{
          display: 'flex',
          justifyContent: 'center'
        }}>
          <div style={{
            width: '500px',
            padding: '80px 60px',
            backgroundColor: 'rgba(200, 90, 62, 0.08)',
            borderRadius: '25px',
            textAlign: 'center',
            border: '3px solid #f4d35e',
            boxShadow: '0 15px 40px rgba(0, 0, 0, 0.08)',
            transition: 'all 0.3s ease',
            cursor: 'pointer'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 20px 50px rgba(200, 90, 62, 0.15)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 15px 40px rgba(0, 0, 0, 0.08)';
          }}>
            <div style={{
              width: '100%',
              height: '200px',
              backgroundColor: '#0a4a42',
              borderRadius: '15px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '28px',
              fontWeight: '700',
              color: '#c85a3e',
              fontFamily: "'Inter', sans-serif",
              border: '2px dashed rgba(200, 90, 62, 0.3)'
            }}>
              SPONSOR LOGO
            </div>
          </div>
        </div>
      </section>

      {/* Official Sponsors Section */}
      <section style={{
        padding: '80px 40px',
        backgroundColor: '#0a4a42',
        borderTop: '1px solid rgba(200, 90, 62, 0.1)',
        borderBottom: '1px solid rgba(200, 90, 62, 0.1)'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '15px',
            marginBottom: '50px'
          }}>
            <div style={{
              width: '60px',
              height: '3px',
              backgroundColor: '#c85a3e'
            }}></div>
            <h2 style={{
              fontSize: '42px',
              fontWeight: '900',
              color: '#f5f1e8',
              margin: 0,
              letterSpacing: '2px'
            }}>
              OFFICIAL SPONSORS
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '30px'
          }}>
            {officialSponsors.map((sponsor, index) => (
              <div key={index} style={{
                padding: '60px 40px',
                backgroundColor: '#0a4a42',
                borderRadius: '20px',
                textAlign: 'center',
                border: '2px solid transparent',
                boxShadow: '0 5px 20px rgba(0, 0, 0, 0.05)',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.borderColor = '#f4d35e';
                e.currentTarget.style.boxShadow = '0 15px 35px rgba(200, 90, 62, 0.12)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'transparent';
                e.currentTarget.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.05)';
              }}>
                <div style={{
                  width: '100%',
                  height: '140px',
                  backgroundColor: '#0a4a42',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '18px',
                  fontWeight: '600',
                  color: '#c85a3e',
                  fontFamily: "'Inter', sans-serif",
                  border: '2px dashed rgba(200, 90, 62, 0.2)'
                }}>
                  LOGO
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section style={{
        padding: '80px 40px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '15px',
          marginBottom: '50px'
        }}>
          <div style={{
            width: '60px',
            height: '3px',
            backgroundColor: '#c85a3e'
          }}></div>
          <h2 style={{
            fontSize: '42px',
            fontWeight: '900',
            color: '#f5f1e8',
            margin: 0,
            letterSpacing: '2px'
          }}>
            PARTNERS
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(6, 1fr)',
          gap: '25px'
        }}>
          {partners.map((partner, index) => (
            <div key={index} style={{
              padding: '40px 20px',
              backgroundColor: '#0a4a42',
              borderRadius: '15px',
              textAlign: 'center',
              border: '2px solid rgba(200, 90, 62, 0.1)',
              boxShadow: '0 3px 15px rgba(0, 0, 0, 0.04)',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.borderColor = '#f4d35e';
              e.currentTarget.style.backgroundColor = '#f5f1e8';
              e.currentTarget.style.boxShadow = '0 10px 25px rgba(200, 90, 62, 0.1)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = 'rgba(200, 90, 62, 0.1)';
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.6)';
              e.currentTarget.style.boxShadow = '0 3px 15px rgba(0, 0, 0, 0.04)';
            }}>
              <div style={{
                width: '100%',
                height: '80px',
                backgroundColor: 'rgba(245, 241, 232, 0.05)',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '14px',
                fontWeight: '600',
                color: '#f5f1e8',
                fontFamily: "'Inter', sans-serif",
                border: '1px dashed rgba(245, 241, 232, 0.2)'
              }}>
                LOGO
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Become a Partner Section */}
      <section style={{
        padding: '100px 40px',
        backgroundColor: '#0a4a42',
        color: '#f5f1e8'
      }}>
        <div style={{
          maxWidth: '1100px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          alignItems: 'center'
        }}>
          <div>
            <h2 style={{
              fontSize: '56px',
              fontWeight: '900',
              marginBottom: '30px',
              lineHeight: '1.1',
              fontStyle: 'italic',
              color: '#f4d35e'
            }}>
              BECOME A PARTNER
            </h2>
            
            <p style={{
              fontSize: '18px',
              lineHeight: '1.8',
              marginBottom: '40px',
              opacity: 0.9,
              fontFamily: "'Inter', sans-serif"
            }}>
              Join our network of industry leaders and connect with thousands of trail running enthusiasts from around the world.
            </p>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px'
            }}>
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '15px'
                  }}>
                    <div style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      backgroundColor: '#0a4a42',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: '2px solid #f4d35e',
                      flexShrink: 0
                    }}>
                      <Icon size={20} color="#f4d35e" strokeWidth={2.5} />
                    </div>
                    <span style={{
                      fontSize: '16px',
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: '500'
                    }}>
                      {benefit.text}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <div style={{
            backgroundColor: 'rgba(200, 90, 62, 0.15)',
            padding: '50px',
            borderRadius: '25px',
            border: '2px solid rgba(244, 211, 94, 0.3)',
            backdropFilter: 'blur(10px)'
          }}>
            <div style={{
              textAlign: 'right',
              marginBottom: '30px'
            }}>
              <div style={{
                fontSize: '16px',
                fontWeight: '700',
                color: '#f4d35e',
                marginBottom: '8px',
                fontFamily: "'Inter', sans-serif",
                letterSpacing: '1px'
              }}>
                Ready to support the climb?
              </div>
              <div style={{
                fontSize: '14px',
                opacity: 0.8,
                fontFamily: "'Inter', sans-serif"
              }}>
                Download our 2024 Sponsorship Prospectus
              </div>
            </div>

            <div style={{
              display: 'flex',
              gap: '15px'
            }}>
              <button style={{
                flex: 1,
                backgroundColor: '#c85a3e',
                color: '#f5f1e8',
                border: 'none',
                padding: '18px 30px',
                borderRadius: '15px',
                cursor: 'pointer',
                fontSize: '15px',
                fontWeight: '700',
                fontFamily: "'Inter', sans-serif",
                letterSpacing: '0.5px',
                transition: 'all 0.3s ease',
                boxShadow: '0 5px 20px rgba(200, 90, 62, 0.4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px'
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = '#b04935';
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 8px 25px rgba(200, 90, 62, 0.5)';
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = '#c85a3e';
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 5px 20px rgba(200, 90, 62, 0.4)';
              }}>
                <Mail size={18} />
                CONTACT PARTNERSHIPS
              </button>

              <button style={{
                flex: 1,
                backgroundColor: 'transparent',
                color: '#f4d35e',
                border: '2px solid #f4d35e',
                padding: '18px 30px',
                borderRadius: '15px',
                cursor: 'pointer',
                fontSize: '15px',
                fontWeight: '700',
                fontFamily: "'Inter', sans-serif",
                letterSpacing: '0.5px',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px'
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = '#f4d35e';
                e.target.style.color = '#f5f1e8';
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = '#f4d35e';
                e.target.style.transform = 'translateY(0)';
              }}>
                <Download size={18} />
                DOWNLOAD PDF
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sponsors;