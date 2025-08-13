
import { AdMob, BannerAdOptions, BannerAdSize, BannerAdPosition, InterstitialAdOptions, RewardAdOptions } from '@capacitor-community/admob';
import { Capacitor } from '@capacitor/core';

export class AdMobService {
  private static isInitialized = false;
  
  // AdMob Unit IDs from your data
  static readonly AD_UNITS = {
    APP_ID: 'ca-app-pub-2211398170597117~6610457953',
    BANNER: 'ca-app-pub-2211398170597117/2312152116',
    INTERSTITIAL: 'ca-app-pub-2211398170597117/8678249919',
    APP_OPEN: 'ca-app-pub-2211398170597117/9037342562'
  };

  static async initialize(): Promise<void> {
    if (!Capacitor.isNativePlatform() || this.isInitialized) {
      return;
    }

    try {
      await AdMob.initialize({
        requestTrackingAuthorization: true,
        testingDevices: [],
        initializeForTesting: false
      });
      this.isInitialized = true;
      console.log('AdMob initialized successfully');
    } catch (error) {
      console.error('AdMob initialization failed:', error);
    }
  }

  static async showBanner(position: BannerAdPosition = BannerAdPosition.BOTTOM_CENTER): Promise<void> {
    if (!Capacitor.isNativePlatform()) return;

    try {
      const options: BannerAdOptions = {
        adId: this.AD_UNITS.BANNER,
        adSize: BannerAdSize.BANNER,
        position: position,
        margin: 0,
        isTesting: false
      };

      await AdMob.showBanner(options);
      console.log('Banner ad shown');
    } catch (error) {
      console.error('Failed to show banner ad:', error);
    }
  }

  static async hideBanner(): Promise<void> {
    if (!Capacitor.isNativePlatform()) return;

    try {
      await AdMob.hideBanner();
      console.log('Banner ad hidden');
    } catch (error) {
      console.error('Failed to hide banner ad:', error);
    }
  }

  static async showInterstitial(): Promise<void> {
    if (!Capacitor.isNativePlatform()) return;

    try {
      const options: InterstitialAdOptions = {
        adId: this.AD_UNITS.INTERSTITIAL,
        isTesting: false
      };

      await AdMob.prepareInterstitial(options);
      await AdMob.showInterstitial();
      console.log('Interstitial ad shown');
    } catch (error) {
      console.error('Failed to show interstitial ad:', error);
    }
  }

  static async showAppOpen(): Promise<void> {
    if (!Capacitor.isNativePlatform()) return;

    try {
      const options: RewardAdOptions = {
        adId: this.AD_UNITS.APP_OPEN,
        isTesting: false
      };

      // Note: App Open ads require different handling, this is a basic implementation
      console.log('App Open ad would be shown here');
    } catch (error) {
      console.error('Failed to show app open ad:', error);
    }
  }
}
