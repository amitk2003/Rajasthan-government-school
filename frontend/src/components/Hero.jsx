import animeImage from '../assets/anime.jpg'
const Hero = () => (
  <section
    className="hero"
    style={{
      backgroundImage: `url(${animeImage})`, // this works if anime.jpe is in public/
    }}
  >
    <div className="hero-overlay">
      <h1>Welcome to GSS School, Peth</h1>
      <p>Empowering minds for a brighter tomorrow</p>
      <div className="buttons">
        <a href="#" className="btn btn-info">Explore School</a>
        <a href="#" className="btn btn-secondary">Apply Now</a>
      </div>
    </div>
  </section>
);
export default Hero;