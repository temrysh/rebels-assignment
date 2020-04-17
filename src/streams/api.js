import { BehaviorSubject } from "rxjs";
import { map } from "rxjs/operators";

import { fetchPipe, mapMeta } from "../utils/pipes";

export const getShowByID$ = new BehaviorSubject(6771); // initial show id

export const showMeta$ = getShowByID$.pipe(
  map((id) => `http://api.tvmaze.com/shows/${id}`),
  fetchPipe,
  map(mapMeta)
);

export const episodeList$ = getShowByID$.pipe(
  map((id) => `http://api.tvmaze.com/shows/${id}/episodes`),
  fetchPipe
);
