# Videos Directory

This directory should contain video files for the website.

## Required Videos

- `hero-video.mp4` (1920x1080, landscape) - Homepage hero background video
  - Duration: 10-30 seconds, looping
  - Format: MP4 (H.264 codec)
  - Size: Keep under 10MB for faster loading
  - Content: Aerial shots of properties, lifestyle scenes, or premium interiors

## Optional Videos

- Property tour videos for individual projects
- Testimonial videos
- Construction progress videos
- Virtual walkthrough videos

## Video Guidelines

1. **Format**: MP4 with H.264 codec (best browser compatibility)
2. **Resolution**: 1920x1080 (Full HD) or 1280x720 (HD)
3. **Aspect Ratio**: 16:9 (landscape)
4. **File Size**: Compress to under 10MB for hero videos
5. **Duration**: 10-30 seconds for background videos (will loop)
6. **Audio**: Muted for background videos (or remove audio track)
7. **Optimization**: Use tools like HandBrake or FFmpeg to compress

## Compression Example (using FFmpeg)

```bash
ffmpeg -i input.mp4 -c:v libx264 -crf 28 -preset slow -vf scale=1920:1080 -an hero-video.mp4
```

## Alternative: Use Image Instead

If video file is too large or causing performance issues:
1. The Hero component will automatically fallback to image
2. Use high-quality hero image: `/images/hero-sample.jpg`
3. Toggle between image/video in Hero component code

## Adding Videos

Simply drop your MP4 files into this directory. The Hero component will automatically use `/videos/hero-video.mp4` if it exists.
