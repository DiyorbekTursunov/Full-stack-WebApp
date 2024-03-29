
import '../styles/sass/home.sass/home.scss'
import '../styles/sass/recentRent.sass/recentRent.scss'
import liftArrow from '../assets/left-arrow.svg'
import ellipse1 from '../assets/Ellipse1.png'
import ellipse2 from '../assets/Ellipse2.png'
import ellipse3 from '../assets/Ellipse3.png'
import bedIcons from '../assets/bed.svg'
import bathIcons from '../assets/bath.svg'
import carIcons from '../assets/car.svg'
import rulerIcons from '../assets/ruler.svg'
import resizIcons from '../assets/resize.png'
import heartIcons from '../assets/heart.png'
import rectangle from '../assets/Rectangle.png'
import rightArrow from '../assets/right-arrow.svg'
import discordIcon from "../assets/discord.svg";
import houseIcon from "../assets/hosue1.svg";
import calculatorIcon from "../assets/calculator.svg";
import mapIcon from "../assets/maps.svg";
import "../styles/sass/home.sass/home.scss";


const Home = () => {
  return (
    <div>
      <section className="who-chose">
        <div className="container">
          <h2 className="who-chose__title home-title">Why Choose Us?</h2>
          <p className="who-chose__text home-text">
            Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
          </p>
          <div className="who-chose__cards">
            <div className="who-chose__card">
              <div className="chose-card__icon">
                <img src={discordIcon} alt={discordIcon} />
              </div>
              <div className="chose-card__title">Trusted By Thousands</div>
              <div className="chose-card__text">
                With over 1 million+ homes for sale available on the website,
                Trulia can match you with a house you will want to call home.
              </div>
            </div>
            <div className="who-chose__card">
              <div className="chose-card__icon">
                <img src={houseIcon} alt={houseIcon} />
              </div>
              <div className="chose-card__title">Wide Renge Of Properties</div>
              <div className="chose-card__text">
                With over 1 million+ homes for sale available on the website,
                Trulia can match you with a house you will want to call home.
              </div>
            </div>
            <div className="who-chose__card">
              <div className="chose-card__icon">
                <img src={calculatorIcon} alt={discordIcon} />
              </div>
              <div className="chose-card__title">Financing Made Easy</div>
              <div className="chose-card__text">
                With over 1 million+ homes for sale available on the website,
                Trulia can match you with a house you will want to call home.
              </div>
            </div>
            <div className="who-chose__card">
              <div className="chose-card__icon">
                <img src={mapIcon} alt={discordIcon} />
              </div>
              <div className="chose-card__title">See Neighborhoods</div>
              <div className="chose-card__text">
                With over 1 million+ homes for sale available on the website,
                Trulia can match you with a house you will want to call home.
              </div>
            </div>
          </div>
        </div>
      </section>{" "}
      {/* Dilmurod */}
      <section className="category">
        <div className="container">
            <div className="category-title home-title">
            Category
            </div>
            <div className="category-text home-text">
            Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
            </div>
        </div>
        </section>
      <section className='recent-rent'>
        <button className='btn'><img src={liftArrow} alt="" /></button>
        <div className='contener'>
          {/*  test yozilgan div*/}
          <div className='text'>
            <h1>Recommended</h1>
            <h2>Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.</h2>
            <h3>112 Glenwood Ave Hyde Park, Boston, MA</h3>
          </div>
          {/* rasimlar joylashgan div */}
          <div className='images-houses'>
            <div className='card-contener'>
              {/* rasisim ustida 2 btn bor qismi */}
              <div className='imges1'>
                <button className='btn1'>FEATURED</button>
                <button className='btn2'>FOR SALE</button>
                <img src={ellipse1} alt="" />
              </div>
              {/* ikonkalar joylashgan qismi */}
              <div className='icons-top-text'>
                <h1>New Apartment Nice Wiew</h1>
                <h2>Quincy St, Brooklyn, NY, USA</h2>
                <div className='icons'>
                  <div className='icons-chald'>
                    <img src={bedIcons} alt="" />
                    <h1>4 Beds</h1>
                  </div>
                  <div className='icons-chald'>
                    <img src={bathIcons} alt="" />
                    <h1>5 Baths</h1>
                  </div>
                  <div className='icons-chald'>
                    <img src={carIcons} alt="" />
                    <h1>1 Garage</h1>
                  </div>
                  <div className='icons-chald'>
                    <img src={rulerIcons} alt="" />
                    <h1>1200 Sq Ft</h1>
                  </div>

                </div>
              </div>
              <img src={rectangle} alt="" />
              {/* narx va yurakcha bor qismi */}
              <div className='contener-bottom'>
                <div >
                  <h1>$2,800/mo</h1>
                  <h2>$7,500/mo</h2>
                </div>
                <div className='contener-bottom-icons'>
                  <button><img src={resizIcons} alt="" /></button>
                  <button><img src={heartIcons} alt="" /></button>
                </div>
              </div>
            </div>
            <div className='card-contener'>
              {/* rasisim ustida 2 btn bor qismi */}
              <div className='imges2'>
                <button className='btn1'>FEATURED</button>
                <button className='btn2'>FOR SALE</button>
                <img src={ellipse2} alt="" />
              </div>
              {/* ikonkalar joylashgan qismi */}
              <div className='icons-top-text'>
                <h1>New Apartment Nice Wiew</h1>
                <h2>Quincy St, Brooklyn, NY, USA</h2>
                <div className='icons'>
                  <div className='icons-chald'>
                    <img src={bedIcons} alt="" />
                    <h1>4 Beds</h1>
                  </div>
                  <div className='icons-chald'>
                    <img src={bathIcons} alt="" />
                    <h1>5 Baths</h1>
                  </div>
                  <div className='icons-chald'>
                    <img src={carIcons} alt="" />
                    <h1>1 Garage</h1>
                  </div>
                  <div className='icons-chald'>
                    <img src={rulerIcons} alt="" />
                    <h1>1200 Sq Ft</h1>
                  </div>

                </div>
              </div>
              <img src={rectangle} alt="" />
              {/* narx va yurakcha bor qismi */}
              <div className='contener-bottom'>
                <div >
                  <h1>$2,800/mo</h1>
                  <h2>$7,500/mo</h2>
                </div>
                <div className='contener-bottom-icons'>
                  <button><img src={resizIcons} alt="" /></button>
                  <button><img src={heartIcons} alt="" /></button>
                </div>
              </div>
            </div>
            <div className='card-contener'>
              {/* rasimni ustida 2 btn bor qismi */}
              <div className='imges3'>
                <button className='btn1'>FEATURED</button>
                <button className='btn2'>FOR SALE</button>
                <img src={ellipse3} alt="" />
              </div>
              {/* ikonkalar joylashgan qismi */}
              <div className='icons-top-text'>
                <h1>New Apartment Nice Wiew</h1>
                <h2>Quincy St, Brooklyn, NY, USA</h2>
                <div className='icons'>
                  <div className='icons-chald'>
                    <img src={bedIcons} alt="" />
                    <h1>4 Beds</h1>
                  </div>
                  <div className='icons-chald'>
                    <img src={bathIcons} alt="" />
                    <h1>5 Baths</h1>
                  </div>
                  <div className='icons-chald'>
                    <img src={carIcons} alt="" />
                    <h1>1 Garage</h1>
                  </div>
                  <div className='icons-chald'>
                    <img src={rulerIcons} alt="" />
                    <h1>1200 Sq Ft</h1>
                  </div>

                </div>
              </div>
              <img src={rectangle} alt="" />
              {/* narx va yurakcha bor qismi */}
              <div className='contener-bottom'>
                <div >
                  <h1>$2,800/mo</h1>
                  <h2>$7,500/mo</h2>
                </div>
                <div className='contener-bottom-icons'>
                  <button><img src={resizIcons} alt="" /></button>
                  <button><img src={heartIcons} alt="" /></button>
                </div>
              </div>
            </div>
            <button className='show-more-btn'>Show more</button>
          </div>

        </div>
        <button className='btn'><img src={rightArrow} alt="" /></button>
      </section>
      <section className='testimonials'>
        <button className='btn'><img src={liftArrow} alt="" /></button>
        <div className='contener'>
          <div className='testimonials-text'>
            <h1>Testimonials</h1>
            <h2>Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.</h2>
            <h3>112 Glenwood Ave Hyde Park, Boston, MA</h3>
          </div>
          <div className='testimonials-comments'>
            <div className='comment-text comment'>
              <h1>“ I believe in lifelong learning and Skola is a great place to learn from experts. I've learned a lot and recommend it to all my friends “</h1>
              <img src={ellipse3} alt="" />
              <h3>Marvin McKinney</h3>
              <h4>Designer</h4>
            </div>
            <div className='comment-text'>
              <h1>“ I believe in lifelong learning and Skola is a great place to learn from experts. I've learned a lot and recommend it to all my friends “</h1>
              <img src={ellipse3} alt="" />
              <h3>Marvin McKinney</h3>
              <h4>Designer</h4>
            </div>
            <div className='comment-text'>
              <h1>“ I believe in lifelong learning and Skola is a great place to learn from experts. I've learned a lot and recommend it to all my friends “</h1>
              <img src={ellipse3} alt="" />
              <h3>Marvin McKinney</h3>
              <h4>Designer</h4>
            </div>
          </div>
          <div className='responsive-bottm-btn'>
          <button className='responsive-bottm-btn1'><img src={liftArrow} alt="" /></button>
          <button className='responsive-bottm-btn2'><img src={rightArrow} alt="" /></button>
          </div>
        </div>
        <button className='btn'><img src={rightArrow} alt="" /></button>
      </section>
    </div>
)};


export default Home;
