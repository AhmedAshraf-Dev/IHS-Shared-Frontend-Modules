import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { updateClient } from "../reducers/ShopReducer";

// import demoLogo from "../../assets/display/demo-logo.jpeg";
// import logoHum from "../../assets/logoHum.png";

function PartnerSection() {
  const partners = {
    "BM_E-Food": {
      "Famous-Burger": "https://famous-burger.com/",
      Tasty_Pizza: "https://www.bm-e-food.com/img/logo.png",
    },
  };
  // {
  //   CompanyID: "d3804355-a09c-46ec-910c-dc024a4bae1b",
  //   ProfileImage: demoLogo,
  // },
  // {
  //   CompanyID: "d3804355-a09c-46ec-910c-dc024a4bae2b",
  //   ProfileImage: logoHum,
  // },
  // {
  //   CompanyID: "d3804355-a09c-46ec-910c-dc024a4bae3b",
  //   ProfileImage: logoHum,
  // },
  // const clientID = useSelector((state) => state.shop.clientID);
  const [projectName, brandName] = window.location.pathname.split("/").slice(1);
  const [iframeSrc, setIframeSrc] = useState("");
  // const dispatch = useDispatch();

  return (
    <div className="w-screen h-screen overflow-hidden">
      <iframe
        src={
          partners[projectName]
            ? partners[projectName][brandName]
            : "https://www.youtube.com/embed/dQw4w9WgXcQ"
        }
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full border-0"
      />
    </div>
  );
}

export default PartnerSection;
