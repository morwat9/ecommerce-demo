export default function StarRating({ value }) {
  if (value === 1) {
    return (
      <span style={{ color: "#FF9900" }}>
        <span className={"fa fa-star"}></span>
        <span className={"fa fa-star-o"}></span>
        <span className={"fa fa-star-o"}></span>
        <span className={"fa fa-star-o"}></span>
        <span className={"fa fa-star-o"}></span>
      </span>
    );
  } else if (value === 2) {
    return (
      <span style={{ color: "#FF9900" }}>
        <span className={"fa fa-star"}></span>
        <span className={"fa fa-star"}></span>
        <span className={"fa fa-star-o"}></span>
        <span className={"fa fa-star-o"}></span>
        <span className={"fa fa-star-o"}></span>
      </span>
    );
  } else if (value === 3) {
    return (
      <span style={{ color: "#FF9900" }}>
        <span className={"fa fa-star"}></span>
        <span className={"fa fa-star"}></span>
        <span className={"fa fa-star"}></span>
        <span className={"fa fa-star-o"}></span>
        <span className={"fa fa-star-o"}></span>
      </span>
    );
  } else if (value === 4) {
    return (
      <span style={{ color: "#FF9900" }}>
        <span className={"fa fa-star"}></span>
        <span className={"fa fa-star"}></span>
        <span className={"fa fa-star"}></span>
        <span className={"fa fa-star"}></span>
        <span className={"fa fa-star-o"}></span>
      </span>
    );
  } else {
    return (
      <span style={{ color: "#FF9900" }}>
        <span className={"fa fa-star"}></span>
        <span className={"fa fa-star"}></span>
        <span className={"fa fa-star"}></span>
        <span className={"fa fa-star"}></span>
        <span className={"fa fa-star"}></span>
      </span>
    );
  }
}
