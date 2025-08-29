
import React from 'react';
import { Helmet } from 'react-helmet-async';

const AppAds = () => {
  return (
    <>
      <Helmet>
        <title>app-ads.txt</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div className="min-h-screen bg-white p-4">
        <pre className="font-mono text-sm whitespace-pre-wrap">
facebook.com, 309768402213081, DIRECT, c3e20eee3f780d68
        </pre>
      </div>
    </>
  );
};

export default AppAds;
