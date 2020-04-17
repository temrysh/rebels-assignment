import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import PageWrapper from "../components/page-wrapper";
import ImageWrapper from "../components/image-wrapper";
import MetaWrapper from "../components/meta-wrapper";
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
    <PageWrapper>
      <ImageWrapper>
        <CoverImage src={image} alt={`${title} cover image`} />
      </ImageWrapper>
      <MetaWrapper>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </MetaWrapper>
    </PageWrapper>
  );
};
