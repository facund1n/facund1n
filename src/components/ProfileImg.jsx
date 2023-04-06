import Image from "react-bootstrap/Image";

const ProfileImg = () => {
  return (
    <>
      <div className="centerDiv">
        <Image
          src="https://tinypic.host/images/2023/04/05/profile.jpg"
          alt="facund1n"
          rounded
          height={"350px"}
          style={{
            border: "solid 1px #865DFF80",
          }}
        />
      </div>
    </>
  );
};

export default ProfileImg;
