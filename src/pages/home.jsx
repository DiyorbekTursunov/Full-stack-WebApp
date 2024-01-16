import Hero from "../components/Hero";
import "../styles/sass/home.sass/home.scss";
import bg from "../assets/hero-bg.png";
import Reacomended from "../components/Reacomended";

const listings = [
  {
    id: 1,
    name: "Skyper Pool Partment",
    imageUrl: bg,
    address: "112 Glenwood Ave Hyde Park, Boston, MA",
    price: "$500,000",
    beds: 3,
    baths: 2,
    sqFt: 1500,
    garage: 3,
  },
  {
    id: 2,
    name: "New Apartment Nice Wiew",
    imageUrl: bg,
    address: "34 London St",
    price: "$1,000,000",
    beds: 4,
    baths: 2,
    sqFt: 1500,
    garage: 3,
  },
  {
    id: 3,
    name: "New Apartment Nice Wiew",
    imageUrl: bg,
    address: "34 London St",
    price: "$1,000,000",
    beds: 4,
    baths: 2,
    sqFt: 1500,
    garage: 3,
  },
  {
    id: 4,
    name: "New Apartment Nice Wiew",
    imageUrl: bg,
    address: "34 London St",
    price: "$1,000,000",
    beds: 4,
    baths: 2,
    sqFt: 1500,
    garage: 3,
  },
  {
    id: 5,
    name: "New Apartment Nice Wiew",
    imageUrl: bg,
    address: "34 London St",
    price: "$1,000,000",
    beds: 4,
    baths: 2,
    sqFt: 1500,
    garage: 3,
  },
];

const Home = () => {
  return (
    <div>
      <Hero listings={listings} />
      <Reacomended products={listings} />
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
