import "./about.styles.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-section">
        <h1>About WARM UPS</h1>
        <div className="hunter-section">
          <img src="hunter.jpg" />
          <h2>Hunterogeneous</h2>
          <h3>Artist / Philadephia / 26</h3>
          <p>
            Hunterogeneous, aka Bobby Hunter, is a self taught artist based in
            Philadelphia. In 2021 he quit his day job to focus solely on his
            craft, and he’s never looked back. The central elements in Bobby’s
            work include: bright color, aesthetically pleasing patterns, and his
            little friends. The aim of his work is to positively influence the
            mood of those who view it. His practice includes works on canvas,
            large scale murals, bespoke clothing, NFTs, and manufactured
            products. By owning a piece from the Warm Ups collection, you will
            be granted access to mint any NFT projects he drops in the future
            (there will be more). Think of it as a bet on a truly committed and
            driven artist. This is about legacy, and it’s just the beginning.
          </p>
        </div>
        <div className="keller-section">
          <img src="keller.jpg" />
          <h2>Keller Johnson</h2>
          <h3>Developer / San Diego / 33</h3>
          <p>
            Keller Johnson is a junior Web Developer with a passion for
            technology and all things digital. He has a strong interest in
            cryptocurrency and non-fungible tokens (NFTs), and enjoys exploring
            the intersection of technology and art. In his free time, Keller can
            often be found tinkering with the latest developments in web and
            programming, as well as spending time with his beloved dog, Loki. He
            is always looking for new ways to combine his love for technology
            and creativity, making him a valuable asset to any team.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
