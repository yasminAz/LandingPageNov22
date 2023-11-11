import { Route, Switch } from "react-router-dom";
import "./styling/general.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Error from "./landing-page/pages/error-page";
import CookieConsent from "react-cookie-consent";
import cookie from "./images/cookie.png";
import Page404New from "./landing-page/pages/404new";
import AboutUs from "./landing-page/pages/about-us";
import Community from "./landing-page/pages/community-page";
import RoadMap from "./landing-page/pages/roadmap";
import ClientLanding from "./landing-page/pages/client-landingPage";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/Error">
          <Error />
        </Route>

        <Route exact path="/aboutUs">
          <AboutUs />
        </Route>

        <Route exact path="/">
          <ClientLanding />
        </Route>
        <Route exact path="/Community">
          <Community />
        </Route>
        <Route exact path="/roadmap">
          <RoadMap />
        </Route>
        <Route>
          <Page404New />
        </Route>
      </Switch>
      <CookieConsent>
        This site uses cookies. <img src={cookie} className="img-fluid" />{" "}
        <br />
        <p>
          Once you click "I Understand" you accept the{" "}
          <a href="/termsAndConditions" target="_blank">
            Terms and Conditions
          </a>{" "}
          and{" "}
          <a href="/privacyPolicy" target="_blank">
            privacy policy
          </a>
          .
        </p>
      </CookieConsent>
    </>
  );
};

export default App;
