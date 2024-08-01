import "../App.css";

function Header(props) {
  return (
    <div className="flex-shopping-card">
      <div onClick={() => props.handleShow(false)}></div>

      <div class="StreamsHero-image">
        <div class="StreamsHero-content">
          <div class="StreamsHero-buttonContainer">

            <a class="Button StreamsSignUp js-signup" href="https://twitter.com/signup" data-component="hero" data-element="buttons">Twitter Handle</a>
            <a class="Button StreamsLogin js-login" href="/login">About Us</a>
          </div>
          <h1 class="StreamsHero-header-2">GlobalFarm.in</h1>
          <h3 class="StreamsHero-header">Welcome to Global Farm. Explore Wide range of Farming Products.</h3>
          <p class="StreamsHero-blurb">GlobalFarm E-commerce helps you innovate Farming. Our products are very efficent in eleminating pests and producing healthy crops.</p>
        </div>
      </div>
    </div>

  );
}

export default Header;
