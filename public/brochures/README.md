# Brochures Directory

This directory should contain downloadable PDF brochures for each project.

## Required Files

- `bay.pdf` - The Bay Residences brochure
- `ashwood.pdf` - Ashwood Villas brochure
- `lotus.pdf` - Lotus Commercial Park brochure
- `greenfield.pdf` - Greenfield Plots brochure
- `azure.pdf` - Azure Heights brochure
- `serene.pdf` - Serene Enclave brochure

## Format Requirements

- **File Type**: PDF only
- **Size**: Keep under 5MB for faster downloads
- **Pages**: 2-8 pages recommended
- **Content**: Include floor plans, amenities, pricing, location map

## Adding New Brochures

1. Save your PDF file with a descriptive name (lowercase, hyphen-separated)
2. Drop it into this folder
3. Update the corresponding project in `src/data/projects.json` with the filename
4. Test the download link

Example JSON update:
```json
{
  "brochure_url": "/brochures/your-brochure-name.pdf"
}
```
