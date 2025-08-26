
import { AdMob, BannerAdOptions, BannerAdSize, BannerAdPosition, RewardAdOptions } from '@capacitor-community/admob';
import { Capacitor } from '@capacitor/core';

export class AdMobService {
  private static isInitialized = false;
  
  // Central place to update your AdMob IDs
  static readonly AD_UNITS = {
    APP_ID: 'ca-app-pub-8658337038682012~3040147524',
    // No banner unit provided yet; leaving empty prevents accidental calls
    BANNER: '',
    INTERSTITIAL: 'ca-app-pub-8658337038682012/8192154433',
    APP_OPEN: ''
  };

  static async initialize(): Promise<void> {
    if (!Capacitor.isNativePlatform() || this.isInitialized) {
      return;
    }

    await AdMob.initialize({
      testingDevices: [],
      initializeForTesting: false
    });
    this.isInitialized = true;
    console.log('AdMob initialized successfully');
  }

  static async showBanner(position: BannerAdPosition = BannerAdPosition.BOTTOM_CENTER): Promise<void> {
    if (!Capacitor.isNativePlatform()) return;
    if (!this.AD_UNITS.BANNER) {
      console.warn('[AdMob] BANNER ad unit is not set. Skipping banner display.');
      return;
    }

    const options: BannerAdOptions = {
      adId: this.AD_UNITS.BANNER,
      adSize: BannerAdSize.BANNER,
      position,
      margin: 0,
      isTesting: false
    };

    await AdMob.showBanner(options);
    console.log('Banner ad shown');
  }

  static async hideBanner(): Promise<void> {
    if (!Capacitor.isNativePlatform()) return;

    await AdMob.hideBanner();
    console.log('Banner ad hidden');
  }

  static async showInterstitial(): Promise<void> {
    if (!Capacitor.isNativePlatform()) return;

    const options: RewardAdOptions = {
      adId: this.AD_UNITS.INTERSTITIAL,
      isTesting: false
    };

    await AdMob.prepareInterstitial(options);
    await AdMob.showInterstitial();
    console.log('Interstitial ad shown');
  }

  static async showAppOpen(): Promise<void> {
    if (!Capacitor.isNativePlatform()) return;
    if (!this.AD_UNITS.APP_OPEN) {
      console.warn('[AdMob] APP_OPEN ad unit is not set. Skipping app open ad.');
      return;
    }

    const options: RewardAdOptions = {
      adId: this.AD_UNITS.APP_OPEN,
      isTesting: false
    };

    // App Open ads require lifecycle handling; placeholder log for now
    console.log('App Open ad would be shown here', options.adId);
  }
}

