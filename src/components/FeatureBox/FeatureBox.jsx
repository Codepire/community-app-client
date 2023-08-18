import "./FeatureBox.css";

export default function FeatureBox(props) {
  return (
    <div className="FeatureBox">
      <h1>{props.featureTitle}</h1>
      <p>
        {props.featureDescription}
      </p>
    </div>
  )
}