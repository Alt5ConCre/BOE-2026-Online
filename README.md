# BOE 2026 Online Intelligence

Premium Next.js dashboard for the existing BOE 2026 scanner.

## Existing system contract
- Source root: `Z:\PROJECT_LOGISTICS\Car Project\Import operation\2026`
- 5-minute Windows scanner
- Month auto-discovery
- CLOSED-aware search rules
- Filename matching: BOE / 305 / DXB
- Existing record/history preservation
- Source files remain read-only

## Architecture
Vercel Next.js frontend + secure API/database + Windows network sync agent. The Vercel app must never attempt to mount the private Z: drive directly.

UI direction: Apple/iOS-inspired calm surfaces, large typography, rounded cards, translucent sticky header, restrained motion, responsive layout.
