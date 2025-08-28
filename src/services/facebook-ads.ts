
import { Capacitor, registerPlugin } from '@capacitor/core';

type BannerSize =
  | 'BANNER_320_50'
  | 'BANNER_300_250'
  | 'BANNER_HEIGHT_50'
  | 'BANNER_HEIGHT_90'
  | 'BANNER_HEIGHT_250';

export interface BannerAdOptions {
  placementId: string;
  size?: BannerSize;
}

export interface InterstitialAdOptions {
  placementId: string;
}

interface FacebookAudienceNetworkPlugin {
  initialize(options: { appId: string; testMode?: boolean }): Promise<void>;
  showBanner(options: BannerAdOptions): Promise<void>;
  hideBanner(): Promise<void>;
  loadInterstitial(options: InterstitialAdOptions): Promise<void>;
  showInterstitial(): Promise<void>;
}

// This does not require the npm module to exist for web builds.
// On native, the plugin must be installed and synced to work.
const FacebookAudienceNetwork = registerPlugin<FacebookAudienceNetworkPlugin>('FacebookAudienceNetwork');

export class FacebookAdsService {
  private static isInitialized = false;

  // Your Facebook Audience Network IDs
  static readonly AD_UNITS = {
    APP_ID: '1447731806550936',
    BANNER: '1447731806550936_BANNER_PLACEMENT_ID', // TODO: replace with your real banner placement ID
    INTERSTITIAL: '1447731806550936_1447740396550077',
  };

  static async initialize(): Promise<void> {
    // Only attempt to initialize on native (Android/iOS) and once
    if (!Capacitor.isNativePlatform() || this.isInitialized) return;

    console.log('[FAN] initialize called');
    await FacebookAudienceNetwork.initialize({
      appId: this.AD_UNITS.APP_ID,
      testMode: false,
    });
    this.isInitialized = true;
    console.log('[FAN] initialized successfully');
  }

  static async showBanner(): Promise<void> {
    if (!Capacitor.isNativePlatform()) return;

    console.log('[FAN] showBanner called');
    const options: BannerAdOptions = {
      placementId: this.AD_UNITS.BANNER,
      size: 'BANNER_320_50',
    };
    await FacebookAudienceNetwork.showBanner(options);
    console.log('[FAN] banner shown');
  }

  static async hideBanner(): Promise<void> {
    if (!Capacitor.isNativePlatform()) return;

    console.log('[FAN] hideBanner called');
    await FacebookAudienceNetwork.hideBanner();
    console.log('[FAN] banner hidden');
  }

  static async showInterstitial(): Promise<void> {
    if (!Capacitor.isNativePlatform()) return;

    console.log('[FAN] showInterstitial called');
    const options: InterstitialAdOptions = {
      placementId: this.AD_UNITS.INTERSTITIAL,
    };

    await FacebookAudienceNetwork.loadInterstitial(options);
    await FacebookAudienceNetwork.showInterstitial();
    console.log('[FAN] interstitial shown');
  }
}

