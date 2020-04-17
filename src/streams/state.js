import { BehaviorSubject } from "rxjs";
import { map, combineLatest, switchMap } from "rxjs/operators";

import { showMeta$, episodeList$ } from "./api";
import { mapMeta, findEpisodeByID } from "../utils/pipes";

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
