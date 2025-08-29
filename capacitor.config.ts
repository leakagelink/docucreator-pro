
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.docucreator.com',
  appName: 'DocuCreator Pro',
  webDir: 'dist',
  server: {
    url: 'https://4dbe91a8-956e-41c2-a3f9-8655ed26f4e2.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  plugins: {
    FacebookAudienceNetwork: {
      appId: '1447731806550936',
      testMode: false
    }
  }
};

export default config;
