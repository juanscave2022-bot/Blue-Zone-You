#!/bin/bash
# ═══════════════════════════════════════════════════════════
# Blue Zone You — Frame Extraction Script
# Extracts 120 evenly-spaced frames from source video as WebP
# ═══════════════════════════════════════════════════════════

set -e

SOURCE="hero-video.mp4"
OUTPUT_DIR="frames"
TOTAL_FRAMES=120
WIDTH=1920
QUALITY=75

# Check ffmpeg
if ! command -v ffmpeg &> /dev/null; then
  echo "ERROR: ffmpeg is not installed."
  echo "  macOS:   brew install ffmpeg"
  echo "  Ubuntu:  sudo apt install ffmpeg"
  exit 1
fi

# Check source video
if [ ! -f "$SOURCE" ]; then
  echo "ERROR: Source video not found at $SOURCE"
  echo "  Place your video file at: $(pwd)/$SOURCE"
  exit 1
fi

# Create output directory
mkdir -p "$OUTPUT_DIR"

# Get video duration and frame count
DURATION=$(ffprobe -v error -show_entries format=duration -of csv=p=0 "$SOURCE")
FPS=$(ffprobe -v error -select_streams v -show_entries stream=r_frame_rate -of csv=p=0 "$SOURCE")

# Calculate the select filter interval
# We want TOTAL_FRAMES frames evenly spread across the duration
echo "═══════════════════════════════════════════════════"
echo "  Source: $SOURCE"
echo "  Duration: ${DURATION}s"
echo "  Target frames: $TOTAL_FRAMES"
echo "  Output size: ${WIDTH}px wide, WebP quality $QUALITY"
echo "═══════════════════════════════════════════════════"
echo ""

# Use fps filter to get exactly the right number of frames
TARGET_FPS=$(echo "scale=6; $TOTAL_FRAMES / $DURATION" | bc)

echo "Extracting at ${TARGET_FPS} fps..."
echo ""

ffmpeg -i "$SOURCE" \
  -vf "fps=$TARGET_FPS,scale=${WIDTH}:-1" \
  -q:v 4 \
  -frames:v $TOTAL_FRAMES \
  "${OUTPUT_DIR}/frame_%04d.jpg" \
  -y -loglevel warning -stats

# Count actual frames extracted
ACTUAL=$(ls -1 "$OUTPUT_DIR"/frame_*.jpg 2>/dev/null | wc -l | tr -d ' ')

# Total size
TOTAL_SIZE=$(du -sh "$OUTPUT_DIR" | cut -f1)

echo ""
echo "═══════════════════════════════════════════════════"
echo "  Done! Extracted $ACTUAL frames"
echo "  Total size: $TOTAL_SIZE"
echo "  Location: $(pwd)/$OUTPUT_DIR/"
echo "═══════════════════════════════════════════════════"
