import React from 'react';
import { InstagramEmbed, EmbedToggler } from 'react-social-media-embed';

export default function Home() {
  return (
    <div className="home-page">

      <div>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <InstagramEmbed url="https://www.instagram.com/p/CwF9bZJszaw/" width={328} />
        </div>
      </div>

    </div>
  );
}
