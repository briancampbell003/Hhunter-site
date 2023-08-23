import React from 'react';
import { InstagramEmbed, TikTokEmbed } from 'react-social-media-embed';

export default function Home() {
  return (
    <div className="home-page">

      <div className="social-embeds">

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <InstagramEmbed url="https://www.instagram.com/p/CwF9bZJszaw/" width={328} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <TikTokEmbed url="https://www.tiktok.com/@__hhunter__/video/7270173160815824171" width={325} />
        </div>
      </div>

    </div>
  );
}
