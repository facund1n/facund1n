import Image from "react-bootstrap/Image";

const ProfileImg = () => {
  return (
    <>
      <Image
        src="https://tinypic.host/images/2023/04/05/profile.jpg"
        alt="facund1n"
        className="my-2"
        rounded
        fluid
        style={{ border: "solid 1px #865DFF" }}
      />
    </>
  );
};

export default ProfileImg;
