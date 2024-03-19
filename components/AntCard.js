
import React, { useState } from 'react';
import { Avatar, Card, Skeleton, Switch } from 'antd';
const { Meta } = Card;
const AntCard = () => {
  
  return (
    <>
      <Card
        style={{
          width: 1000,
          marginTop: 16,
        }}
      >
        <Meta
          avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />}
          title="Audio Transcript"
          description="[00:00:00] Speaker: Today, I want to talk about the concept of perseverance. Perseverance is the ability to persist in the face of challenges, obstacles, and setbacks. It's about staying committed to your goals and continuing to push forward, even when things get tough.

          [00:00:15] It's easy to feel discouraged when things don't go as planned, but it's important to remember that setbacks are a natural part of any journey. They provide an opportunity for growth and learning. Without perseverance, it's easy to give up at the first sign of difficulty.
          
          [00:00:30] One of the key ingredients of perseverance is resilience. Resilience is the ability to bounce back from adversity, to adapt to change, and to keep going despite setbacks. Developing resilience takes time and effort, but it's a skill that can be cultivated through practice and experience.
          
          
          "
        />
      </Card>
    </>
  );
};
export default AntCard;
// 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