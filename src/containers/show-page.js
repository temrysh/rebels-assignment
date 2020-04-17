import React from "react";

import PageWrapper from "../components/page-wrapper";
import ImageWrapper from "../components/image-wrapper";
import MetaWrapper from "../components/meta-wrapper";
import Title from "../components/title";
import Description from "../components/description";
import CoverImage from "../components/cover-image";
import EpisodeList from "../components/episode-list";
import EpisodeListItem from "../components/episode-list-item";

import { show$ } from "../streams/state";
import { useStream } from "../utils/hooks";

export default () => {
  const [show] = useStream(show$);
  const { title, description, image, episodeList } = show || {};

  return (
    <PageWrapper>
      <ImageWrapper>
        <CoverImage src={image} alt={`${title} cover image`} />
      </ImageWrapper>
      <MetaWrapper>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <EpisodeList
          list={episodeList}
          renderItem={(item) => (
            <EpisodeListItem item={item} to={`/episode/${item.id}`} />
          )}
        />
      </MetaWrapper>
    </PageWrapper>
  );
};
