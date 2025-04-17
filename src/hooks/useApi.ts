import { useEffect, useState } from "react";

interface ResponsePromise<T> {
  data: T | null;
  error: boolean;
  loading: boolean;
}
interface PromiseType<T> {
  data: T | null;
  error: unknown;
}
export const useApi = <T>(request: () => Promise<PromiseType<T>>) => {
  const [state, setState] = useState<ResponsePromise<T>>({
    data: null,
    error: false,
    loading: false,
  });

  useEffect(() => {
    const getResponse = async () => {
      setState({
        data: null,
        error: false,
        loading: true,
      });

      try {
        const { data, error } = await request();
        if (!error && data) {
          setState({ data: data, loading: false, error: false });
        } else {
          setState({ data: data, loading: false, error: true });
        }
      } catch (e) {
        console.log(e);
        setState({ data: null, loading: false, error: true });
      }
    };
    getResponse();
  }, []);

  return state;
};
