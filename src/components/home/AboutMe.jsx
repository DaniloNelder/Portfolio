import React from "react";
import Pdf_EN from "../../editable-stuff/resume_EN.pdf";
import config from "../../editable-stuff/config.js";
import axios from "axios";

const pictureLinkRegex = new RegExp(
  /[(http(s)?):(www.)?a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/
);

const AboutMe = () => {
  const [resumeURL] = React.useState(Pdf_EN);
  const { aboutHeading, aboutDescription, profilePictureLink } = config;
  const [profilePicUrl, setProfilePicUrl] = React.useState("");
  const [showPic, setShowPic] = React.useState(Boolean(profilePictureLink));

  React.useEffect(() => {
    if (profilePictureLink && !pictureLinkRegex.test(profilePictureLink)) {
      handleRequest();
    } else {
      setProfilePicUrl(profilePictureLink);
    }
  }, [profilePictureLink]);

  const handleRequest = async () => {
    const instaLink = "https://www.instagram.com/";
    const instaQuery = "/?__a=1";
    try {
      const response = await axios.get(
        instaLink + profilePictureLink + instaQuery
      );
      setProfilePicUrl(response.data.graphql.user.profile_pic_url_hd);
    } catch (error) {
      setShowPic(false);
      console.error(error.message);
    }
  };

  return (
    <div id="aboutme" className="jumbotron jumbotron-fluid m-0">
      <div className="container container-fluid p-5">
        <div className="row">
          <div className="col-5 d-none d-lg-block align-self-center">
            {showPic && (
              <img
                className="border border-secondary rounded-circle"
                src={profilePicUrl}
                alt="profilepicture"
              />
            )}
          </div>

          <div className={`col-lg-${showPic ? "7" : "12"}`}>
            <h2 className="display-4 mb-5 text-center">{aboutHeading}</h2>
            <p className="lead text-center">{aboutDescription}</p>
            {resumeURL && (
              <p className="lead text-center">
                <a
                  className="btn btn-outline-dark btn-lg"
                  href="https://docs.google.com/document/d/1vBEH6xzIcDwdo1BPjl2NSWG5Fg9sVCbxo1MYtLTD6kY/edit?usp=sharing"
                  target="_blank"
                  rel="noreferrer noopener"
                  role="button"
                  aria-label="Resume/CV"
                >
                  Resume
                </a>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
