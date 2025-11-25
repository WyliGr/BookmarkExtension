# BookmarkExtension

A simple Chrome/Chromium extension that opens your favorite link with a single click.

When the extension icon is pinned, just click it and your configured URL will open instantly.

## Installation & Setup

1. **Download the code**

   * Clone this repository or download it as a ZIP and extract it.

2. **Configure your link**

   * Open `background.js`.
   * Replace the existing URL with the link you want the extension to open.

3. **Customize the icon (optional)**

   * Replace `icon.png` with your own image (keep the same file name and format).

4. **Load the extension in Chrome (or any Chromium-based browser)**

   * Open your browser and go to: `chrome://extensions/`
   * Enable **Developer mode** (toggle in the top right).
   * Click **Load unpacked**.
   * Select the folder where you extracted/cloned this repository.

5. **Pin and use**

   * Click the puzzle icon in the toolbar and pin **BookmarkExtension**.
   * Now, a single click on the icon will open your configured link.

## Notes

* This extension is designed for any Chromium-based browser (Chrome, Edge, Brave, etc.).
* If you change the URL or icon later, just refresh the extension from `chrome://extensions/`.
