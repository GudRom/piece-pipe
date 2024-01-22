import LogoIcon from "elements/icons/LogoIcon";

const LoadingFallback = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "80vh",
      }}
    >
      <LogoIcon color="primary" />
    </div>
  );
};

export default LoadingFallback;
