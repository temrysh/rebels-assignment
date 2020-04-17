import React, { Fragment } from "react";

import Title from "../components/title";
import Description from "../components/description";
import CoverImage from "../components/cover-image";
import EpisodeList from "../components/episode-list";
import EpisodeListItem from "../components/episode-list-item";

import { show$ } from "../streams/api";
import { useStream } from "../utils/hooks";

export default () => {
  const [show] = useStream(show$);
  const { title, description, image, episodeList } = show || {};

  return (
    <Fragment>
      <Title>{title}</Title>
      <CoverImage src={image} alt={`${title} cover image`} />
      <Description>{description}</Description>
      <EpisodeList
        list={episodeList}
        renderItem={(item) => (
          <EpisodeListItem item={item} to={`/episode/${item.id}`} />
        )}
      />
    </Fragment>
  );
};
