# NeuroBridge 🧠

AI-Powered Communication for Nonverbal Users (Free-Tier Edition)

## 🌟 Project Overview

NeuroBridge is a web application that helps nonverbal users communicate using facial expression recognition, image input, and text-to-speech, all powered by free-tier AWS services and public APIs.

## 🧰 Tech Stack

- **Frontend**: React.js + Tailwind CSS
- **Backend**: AWS Lambda + API Gateway
- **AI Services**: Amazon Rekognition, Amazon Polly, DeepAI API
- **Storage**: Amazon S3
- **APIs**: Giphy API, Web Speech API

## 🚀 Development Phases

### Phase 1 ✅ (Current)
- [x] Basic React app setup
- [x] Drawing canvas functionality
- [x] Browser text-to-speech
- [x] Emergency button

### Phase 2 (Upcoming)
- [ ] Camera integration
- [ ] AWS Rekognition for facial emotion detection
- [ ] Emotion-to-phrase mapping

### Phase 3 (Upcoming)
- [ ] AWS Polly integration
- [ ] DeepAI API for image-to-text
- [ ] Giphy API for visual responses

### Phase 4 (Upcoming)
- [ ] AWS deployment
- [ ] PWA features
- [ ] Performance optimization

## 🛠️ Development Setup

```bash
# Install dependencies for all packages
npm run install-all

# Start frontend development server
npm run dev

# Build for production
npm run build
```

## 📁 Project Structure

```
neurobridge-project/
├── frontend/          # React.js application
├── backend/           # AWS Lambda functions
├── docs/              # Documentation
└── README.md
```

## 🎯 Core Features

1. **Facial Emotion to Phrase**: Detect emotions and convert to speech
2. **Draw to Speak**: Draw icons/objects and get voice output
3. **Emergency Button**: Quick emergency communication
4. **GIF Reply**: Visual communication with animated GIFs

## 🔒 Privacy & Accessibility

- All processing respects user privacy
- Designed for accessibility-first experience
- Works offline with browser-based TTS fallback

---

Built with ❤️ for improving accessibility through AI
