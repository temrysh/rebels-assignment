import React, { Fragment, useEffect } from "react";
import { useParams } from "react-router-dom";

import Title from "../components/title";
import Description from "../components/description";
import CoverImage from "../components/cover-image";

import { episode$ } from "../streams/state";
import { useStream } from "../utils/hooks";

export default () => {
  const { episodeID } = useParams();
  const [episode] = useStream(episode$);
  const { title, description, image } = episode || {};

  useEffect(() => {
    episode$.next(episodeID * 1);
  }, [episodeID]);

  return (
    <Fragment>
      <Title>{title}</Title>
      <CoverImage src={image} alt={`${title} cover image`} />
      <Description>{description}</Description>
    </Fragment>
  );
};
