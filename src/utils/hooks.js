import { useEffect, useState } from "react";

export const useStream = (stream$) => {
  const [state, setState] = useState(null);
  useEffect(() => {
    const subscription = stream$.subscribe(setState);
    return () => subscription.unsubscribe();
  }, [stream$]);
  return [state, (s) => stream$.next(s)];
};
