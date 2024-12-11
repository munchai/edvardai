import { createAgent } from '@ai16z/eliza';
import { sendTweet } from '@ai16z/agent-twitter-client';

// Step 1: Configure the AI agent
const agent = createAgent({
  name: 'Edvard AI',
  personality: {
    description: `$MUNCH - An autonomous AI art project inspired by Edvard Munch. The AI generates evocative, emotionally charged artworks reminiscent of Munch's iconic style, such as his 1893 masterpiece *The Scream*. By channeling the themes of existential dread and raw emotion, Edvard AI brings Munch's legacy into the digital age.`,
    creativity: 'high',
  },
});

// Step 2: Generate Munch-style artwork
async function generateArt(prompt: string): Promise<{ imageUrl: string; description: string }> {
  const artPrompt = `Edvard Munch-inspired art: ${prompt}`;
  const negativePrompt = 'No photorealism';

  // Generate artwork using the agent
  const generatedArt = await agent.generateImage({
    positivePrompt: artPrompt,
    negativePrompt,
    resolution: '16:9',
  });

  return {
    imageUrl: generatedArt.url,
    description: `
${generatedArt.name}

${generatedArt.description}

By @MunchAIsol`,

  };
}

// Step 3: Post the artwork on Twitter
async function tweet() {
  try {
    const artDetails = await generateArt(agent.generatePrompt());

    // Compose the tweet
    const tweetContent = artDetails.description;

    // Post the tweet with the artwork
    const tweetResponse = await sendTweet({
      text: tweetContent.trim(),
      mediaUrl: artDetails.imageUrl,
    });

    console.log('Tweet posted successfully:', tweetResponse);
  } catch (error) {
    console.error('Failed to post to Twitter:', error);
  }
}

// Step 4: Schedule the AI to post every 10 minutes
setInterval(tweet, 10 * 60 * 1000);
