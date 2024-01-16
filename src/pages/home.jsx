import Hero from "../components/Hero";
import "../styles/sass/home.sass/home.scss";
import bg from "../assets/hero-bg.png";

const listings = [
  {
    id: 1,
    imageUrl: bg,
    address: "123 Main St",
    price: "$500,000",
    beds: 3,
    baths: 2,
    sqFt: 1500,
  },
  {
    id: 2,
    imageUrl: bg,
    address: "34 London St",
    price: "$1,000,000",
    beds: 4,
    baths: 2,
    sqFt: 1500,
  },
];

const Home = () => {
  return (
    <div>
      <Hero listings={listings} />
      <section>Izzatilla</section>
      <section>Izzatilla</section>
      <section>Dilmurod</section>
      <section>Dilmurod</section>
      <section>Dilmurod</section>
      <section>Akmal</section>
      <section>Akmal</section>
    </div>
  );
};

export default Home;
