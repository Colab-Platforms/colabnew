# CTA Background Video Setup Guide

## Current Setup
Maine CTA section mein background video add kar diya hai with:
- Auto-play, loop, muted video
- Dark overlay for text readability
- Gradient effects on top

## Demo Video
Currently using: `https://cdn.coverr.co/videos/coverr-futuristic-technology-background-9142/1080p.mp4`

## To Use Your Own Video

### Option 1: Local Video File
1. Apni video file ko `src/assets/` folder mein rakho (e.g., `cta-video.mp4`)
2. CTA.tsx mein import karo:
   ```tsx
   import ctaVideo from "../assets/cta-video.mp4";
   ```
3. Video source update karo:
   ```tsx
   <source src={ctaVideo} type="video/mp4" />
   ```

### Option 2: External URL
Simply replace the current URL with your video URL:
```tsx
<source src="YOUR_VIDEO_URL_HERE" type="video/mp4" />
```

## Recommended Video Specs
- **Resolution**: 1920x1080 (Full HD) minimum
- **Format**: MP4 (H.264 codec)
- **Duration**: 10-30 seconds (for smooth loop)
- **File Size**: Under 5MB for fast loading
- **Content**: Tech/futuristic visuals, abstract patterns, or business scenes

## Free Video Resources
- Coverr.co - Free stock videos
- Pexels Videos - High quality free videos
- Pixabay Videos - Free stock footage

## Performance Tips
- Compress video using HandBrake or similar tools
- Use lazy loading for better performance
- Consider adding a poster image for initial load
