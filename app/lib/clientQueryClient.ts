import { QueryClient } from '@tanstack/react-query';

//queryClient erstellen
export const queryClient = new QueryClient({ defaultOptions: { queries: { staleTime: 60 * 1000 } } });
