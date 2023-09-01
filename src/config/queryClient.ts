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
