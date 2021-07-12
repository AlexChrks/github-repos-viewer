import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'
import { store } from '../store/store';
import {Provider} from 'react-redux';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      retry: false,
      cacheTime: 0
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  

  return (
    <QueryClientProvider client={queryClient}>
        <div className='app_wrapper'>
          <Provider store={store}>
            <Component {...pageProps} />
          </Provider>
        </div>
    </QueryClientProvider>
  )
}
export default MyApp
