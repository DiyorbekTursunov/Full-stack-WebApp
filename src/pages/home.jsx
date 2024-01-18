import discordIcon from "../assets/discord.svg";
import houseIcon from "../assets/hosue1.svg";
import calculatorIcon from "../assets/calculator.svg";
import mapIcon from "../assets/maps.svg";
import "../styles/sass/home.sass/home.scss";
const Home = () => {
  return (
    <div>
      <section></section> {/* Izzatilla */}
      <section></section> {/* Izzatilla */}
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
      </section> {/* Dilmurod */}
      <section></section> {/* Dilmurod */}
      <section></section> {/* Akmal */}
      <section></section> {/* Akmal */}
    </div>
  );
};

export default Home;
