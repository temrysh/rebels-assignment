import { pipe, from } from "rxjs";
import { filter, switchMap, retry, catchError } from "rxjs/operators";

export const fetchPipe = pipe(
  filter(Boolean),
  switchMap((endpoint) =>
    from(fetch(endpoint)).pipe(
      retry(),
      switchMap((res) => from(res.json())),
      catchError((err) => console.log("fetch pipe error:", err))
    )
  )
);

export const mapMeta = (data) => ({
  title: data.name,
  description: data.summary,
  image: data.image.medium,
});

export const findEpisodeByID = (id) => (list) => list.find((e) => e.id === id);
