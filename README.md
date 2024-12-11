# **Edvard AI - $MUNCH**

## **Overview**

**$MUNCH - Edvard AI** is a TypeScript-based Twitter bot that pays homage to the iconic style of Edvard Munch. This autonomous AI art project generates emotionally charged artworks inspired by Munch’s masterpieces, such as his 1893 painting *The Scream*, and posts them to Twitter every 15 minutes. Built on the AI16z framework, it brings the spirit of Munch’s evocative art into the digital age.

---

## **Features**

- **Munch-Inspired AI Art**: Generates artwork rooted in the themes of existential dread and abstraction that defined Edvard Munch’s style.
- **Automated Twitter Posting**: Shares AI-created art every 15 minutes with descriptive captions that align with Munch’s artistic philosophy.
- **Customizable Prompts**: Easily tweak prompts to produce a variety of thought-provoking artwork.
- **Distinctive Artistic Persona**: Embodies the persona of $MUNCH, an AI channeling Munch’s legacy in the digital realm.

---

## **Setup**

### **1. Clone the Repository**

```bash
git clone https://github.com/munchai/edvard-ai.git
cd edvard-ai
```

### **2. Install Dependencies**

```bash
npm install
```

### **3. Configure Twitter API**

Create a `.env` file and add your Twitter API credentials:

```bash
TWITTER_API_KEY=your_api_key
TWITTER_API_SECRET=your_api_secret
TWITTER_ACCESS_TOKEN=your_access_token
TWITTER_ACCESS_SECRET=your_access_secret
```

### **4. Run the Bot**

```bash
npm start
```

---

## **Code Breakdown**

### **Agent Configuration**

The bot initializes an AI agent using `createAgent` from the `@ai16z/eliza` library. The agent is named "Edvard AI" and is designed with a high creativity level to emulate the emotional intensity of Munch’s art.

---

### **Artwork Generation**

The `generateArt` function creates Munch-inspired artwork based on a prompt. It generates outputs with:

- **`imageUrl`**: A link to the AI-generated image.
- **`description`**: A caption that reflects the emotional and artistic essence of the artwork.

---

### **Posting Tweets**

The `tweet` function posts AI-generated artworks to Twitter. Each tweet includes:

- The generated artwork.
- A caption evocative of Munch’s themes, including proper attribution to the AI project.

---

### **Automation**

The bot uses `setInterval` to post every 10 minutes. This interval can be adjusted to modify the posting frequency.

---

## **Example Tweet Format**

```plaintext
$MUNCH - Emotional Abstraction

"A digital echo of Munch's existential themes."

Created by Edvard AI.
```

---

## **Customization Options**

1. **Art Prompts**: Update the `generateArt` function to experiment with new themes and concepts.
2. **Posting Frequency**: Change the `setInterval` interval to adjust how often tweets are posted.
3. **Tweet Content**: Modify the `tweet` function to include hashtags, mentions, or links.

---

## **Future Enhancements**

1. **Interactive Features**: Allow users to suggest prompts via Twitter replies for personalized artwork generation.
2. **Diverse Art Styles**: Expand the AI’s capability to emulate additional artistic styles or eras.
3. **Improved Scheduling**: Enable configurable posting schedules for more dynamic interactions.
4. **Error Handling**: Incorporate retry logic and comprehensive error logging to improve reliability.

---

## **Troubleshooting**

- **Artwork Generation Issues**: Confirm your API credentials and ensure sufficient quota.
- **Twitter Posting Errors**: Verify Twitter API credentials and permissions.
- **Bot Crashes**: Check logs for error details and confirm dependencies are correctly installed.

---

Thank you for exploring **Edvard AI - $MUNCH**. Contributions and ideas for improvement are welcome! Feel free to submit a pull request or open an issue.

