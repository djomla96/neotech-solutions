import {
  QueryClient,
  QueryErrorResetBoundaryProps,
  UseMutationOptions,
  UseQueryOptions,
} from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: (_, error) => {
        if (error) {
          const isUnauthenticated =
            // @ts-ignore
            error?.response?.status === 401 ||
            // @ts-ignore
            error?.response?.statusText === 'Unauthorized';

          // Do not retry query if user is not authenticated
          return !isUnauthenticated;
        }

        return true;
      },
    },
  },
});

export type UseQueryLocalOptions<Data, Payload = string> = Omit<
  UseQueryOptions<
    Data,
    QueryErrorResetBoundaryProps,
    Data,
    (string | Payload)[]
  >,
  'queryKey' | 'queryFn' | 'initialData'
>;

export type UseMutationLocalOptions<Data, Payload> = Omit<
  UseMutationOptions<Data, QueryErrorResetBoundaryProps, Payload>,
  'mutationFn'
>;
export default queryClient;
