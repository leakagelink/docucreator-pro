
import { FacebookAudienceNetwork, BannerAdOptions, InterstitialAdOptions } from 'capacitor-facebook-audience-network';
import { Capacitor } from '@capacitor/core';

export class FacebookAdsService {
  private static isInitialized = false;
  
  // Your Facebook Audience Network IDs
  static readonly AD_UNITS = {
    APP_ID: '1447731806550936',
    BANNER: '1447731806550936_BANNER_PLACEMENT_ID', // You'll need to create banner placement
    INTERSTITIAL: '1447731806550936_1447740396550077'
  };

  static async initialize(): Promise<void> {
    if (!Capacitor.isNativePlatform() || this.isInitialized) {
      return;
    }

    try {
      await FacebookAudienceNetwork.initialize({
        appId: this.AD_UNITS.APP_ID,
        testMode: false
      });
      this.isInitialized = true;
      console.log('Facebook Audience Network initialized successfully');
    } catch (error) {
      console.error('Failed to initialize Facebook Audience Network:', error);
    }
  }

  static async showBanner(): Promise<void> {
    if (!Capacitor.isNativePlatform()) return;

    try {
      const options: BannerAdOptions = {
        placementId: this.AD_UNITS.BANNER,
        size: 'BANNER_320_50'
      };

      await FacebookAudienceNetwork.showBanner(options);
      console.log('Facebook banner ad shown');
    } catch (error) {
      console.error('Failed to show Facebook banner ad:', error);
    }
  }

  static async hideBanner(): Promise<void> {
    if (!Capacitor.isNativePlatform()) return;

    try {
      await FacebookAudienceNetwork.hideBanner();
      console.log('Facebook banner ad hidden');
    } catch (error) {
      console.error('Failed to hide Facebook banner ad:', error);
    }
  }

  static async showInterstitial(): Promise<void> {
    if (!Capacitor.isNativePlatform()) return;

    try {
      const options: InterstitialAdOptions = {
        placementId: this.AD_UNITS.INTERSTITIAL
      };

      await FacebookAudienceNetwork.loadInterstitial(options);
      await FacebookAudienceNetwork.showInterstitial();
      console.log('Facebook interstitial ad shown');
    } catch (error) {
      console.error('Failed to show Facebook interstitial ad:', error);
    }
  }
}
