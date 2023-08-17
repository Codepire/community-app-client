import "./HomePage.css";

import Layout from "../../components/layout/Layout";
import Button from "../../components/Button/Button";

export default function HomePage() {
  return (
    <>
      <Layout>
        <div className="HomePage">
          <div className="HomePage__header">
            <h1 className="HomePage__header-h1">
              IMAGINE A{" "}
              <span className="txt-linear-gradient-pink">PLACE...</span>
            </h1>
            <p className="HomePage__header-p">
              ...where you can belong to a{" "}
              <span style={{ color: "yellow" }}>school club,</span> a{" "}
              <span style={{ color: "#F53216" }}>gaming group,</span> or a{" "}
              <span style={{ color: "#6D4EFA" }}>worldwide art community.</span>{" "}
              Where just you and a handful of friends can spend time together. A
              place that makes it easy to talk every day and hang out more
              often.
            </p>
            <Button
              buttonText="GET STARTED"
              buttonClassName="btn btn-large btn-black-shadow btn-purple-hover "
            />
          </div>
          <div style={{ height: "100vh", backgroundColor: "red" }}></div>
        </div>
      </Layout>
    </>
  );
}
