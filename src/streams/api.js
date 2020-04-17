import { BehaviorSubject } from "rxjs";
import { map, combineLatest, switchMap } from "rxjs/operators";

import { fetchPipe, mapMeta, findEpisodeByID } from "../utils/pipes";

export const getShowByID$ = new BehaviorSubject(6771);

export const showMeta$ = getShowByID$.pipe(
  map((id) => `http://api.tvmaze.com/shows/${id}`),
  fetchPipe,
  map(mapMeta)
);

export const episodeList$ = getShowByID$.pipe(
  map((id) => `http://api.tvmaze.com/shows/${id}/episodes`),
  fetchPipe
);

export const episode$ = new BehaviorSubject(null).pipe(
  switchMap((eID) => episodeList$.pipe(map(findEpisodeByID(eID)))),
  map(mapMeta)
);

export const show$ = new BehaviorSubject(null).pipe(
  combineLatest(showMeta$, episodeList$, (_, showMeta, episodeList) => ({
    ...showMeta,
    episodeList,
  }))
);
