import {PrivyClientConfig, PrivyProvider} from '@privy-io/react-auth';
import {WagmiProvider} from '@privy-io/wagmi';
import App from './App';
import { config } from './wagmiConfig';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import { createRoot } from 'react-dom/client';

const privyConfig: PrivyClientConfig = {
  embeddedWallets: {
    createOnLogin: 'users-without-wallets',
    requireUserPasswordOnCreate: true,
    noPromptOnSignature: false,
  },
  loginMethods: ['wallet', 'email', 'sms'],
  appearance: {
    showWalletLoginFirst: true,
  },
};

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
<PrivyProvider appId='cm1kltqtz079lr962cs0mn7hs' config={privyConfig}>
  <QueryClientProvider client={queryClient}>
    <WagmiProvider config={config}>
      <App />
    </WagmiProvider>
  </QueryClientProvider>
</PrivyProvider>
)
