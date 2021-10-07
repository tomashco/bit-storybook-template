import React from "react";

import {
  mockPersonalProjectsList,
  mockBootcampProjectsList,
} from "@tomashco/minibit-ui.mock.projects";
import { colors } from "@tomashco/minibit-ui.styles.colors";
import { typography } from "@tomashco/minibit-ui.styles.typography";
import classNames from "classnames";

import PortfolioProjects from "./portfolio-projects";

export const BasicPortfolioProjects = () => (
  <div className={classNames(colors, typography)}>
    <PortfolioProjects
      title="Projects"
      primaryProjects={mockPersonalProjectsList}
      secondaryProjects={mockBootcampProjectsList}
      primaryProjectsTitle="Personal Projects"
      secondaryProjectsTitle="Bootcamp Projects"
    />
  </div>
);
