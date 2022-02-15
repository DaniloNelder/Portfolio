import React, { useState, useEffect, useCallback } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "./style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import StarIcon from "@material-ui/icons/Star";
import WorkIcon from "@material-ui/icons/Work";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";

const Experience = () => {
  return (
    <Jumbotron fluid id="experience" className="bg-light m-0">
      <Container className="p-7">
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="2021-"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Java Developer (2021-)
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Bradesco Seguros, São Paulo-SP
            </h4>
            <p>
              Developer of new functionalities with a focus on the
              implementation of Micro services and system updates in the
              Bradesco Insurance sector.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="2020 - 2021"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Java Developer (2020-2021)
            </h3>{" "}
            <h4 className="vertical-timeline-element-subtitle">
              Expresso São Miguel, São Paulo-SP
            </h4>
            <p>
              Development of projects in the transportation branch with
              collections, deliveries and freight.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: "rgb(0,0,128)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(0,0,128)" }}
            date="2019 - 2020"
            iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
            icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              University of Cambridge EAD (2019-2020)
            </h3>
            <p>English Language</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="2019 - 2020"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Analyst and Developer SR (2019-2020)
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              TEx, São Paulo-SP
            </h4>
            <p>
              Analyze and develop, focusing on micro-service implementations and
              correction of the main system, Insurance and Brokerage branch.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="2018-2019"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Full Programmer (2018-2019)
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Onclick Systems, Marilia-SP
            </h4>
            <p>
              Analyze and develop, focusing on implementations and corrections
              of the Commercial Management System and POS.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: "rgb(0,0,128)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(0,0,128)" }}
            date="2013-"
            iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
            icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Caelum - School of Technology, São Paulo-SP (2013-)
            </h3>
            <p>Java for web Development.</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: "rgb(0,0,128)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(0,0,128)" }}
            date="2011-"
            iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
            icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Caelum - School of Technology, São Paulo-SP (2011-)
            </h3>
            <p>Java and Object Oriented.</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: "rgb(0,0,128)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(0,0,128)" }}
            date="2011 - 2013"
            iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
            icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              UNIMAR - University of Marilia, Marilia-SP (2011-2013)
            </h3>
            <p>
              Technology in Analysis and Systems Development, Information
              Technology.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
            icon={<StarIcon />}
          />
        </VerticalTimeline>
      </Container>
    </Jumbotron>
  );
};

export default Experience;
