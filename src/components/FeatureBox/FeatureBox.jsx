import "./FeatureBox.css";

export default function FeatureBox(props) {
  return (
    <div className="FeatureBox">
      <h1 className="FeatureBox-Title">{props.featureTitle}</h1>
      <p className="FeatureBox-Content">
        {props.featureDescription}
      </p>
    </div>
  )
}