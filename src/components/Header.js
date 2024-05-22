import Nav from "./Nav";

export default function Header() {
  return (
    <header className="header">
      <Nav />

      <div className="header__info">
        <div className="header__info-content">
          <h1>Virtual healthcare for you</h1>
          <p>
            Trafalgar provides progressive, and affordable healthcare,
            accessible on mobile and online for everyone
          </p>
          <button className="btn">Consult today</button>
        </div>

        <div className="header__info-img">
          <img
            src="images/illustration.png"
            alt="illustration of users discussing the product"
          />
        </div>
      </div>
    </header>
  );
}
