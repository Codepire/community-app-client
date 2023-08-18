import "./HomePage.css";

import Layout from "../../components/layout/Layout";
import Button from "../../components/Button/Button";
import FeatureBox from "../../components/FeatureBox/FeatureBox";

export default function HomePage() {
  return (
    <>
      <Layout>
        <div className="HomePage">
          <section className="HomePage__header">
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
          </section>
          <hr />
          <section className="HomePage__features">
            <h1 className="HomePage__features-h1">🚀 FEATURES</h1>
            <div className="HomePage__features-box">
              <FeatureBox
                featureTitle="⌛ Realtime Chatting"
                featureDescription="some description about feature is here. this is some more description... will write later.. extra testing description.."
              />
              <FeatureBox
                featureTitle="💪 High Performance"
                featureDescription="some description about feature is here. this is some more description... will write later.. extra testing description.."
              />
              <FeatureBox
                featureTitle="👥 Group Discussion"
                featureDescription="some description about feature is here. this is some more description... will write later.. extra testing description.."
              />
              <FeatureBox
                featureTitle="🦄 Easy Invite"
                featureDescription="some description about feature is here. this is some more description... will write later.. extra testing description.."
              />
              <FeatureBox
                featureTitle="🔐 Encrypted Chat"
                featureDescription="some description about feature is here. this is some more description... will write later.. extra testing description.."
              />
              <FeatureBox
                featureTitle="🤖 And More.."
                featureDescription="some description about feature is here. this is some more description... will write later.. extra testing description.."
              />
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
}
