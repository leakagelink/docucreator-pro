
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.4dbe91a8956e41c2a3f98655ed26f4e2',
  appName: 'docucreator-pro',
  webDir: 'dist',
  server: {
    url: 'https://4dbe91a8-956e-41c2-a3f9-8655ed26f4e2.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  plugins: {
    AdMob: {
      // Updated to your new Android App ID
      appId: 'ca-app-pub-8658337038682012~3040147524',
      initializeForTesting: false
    }
  }
};

export default config;

