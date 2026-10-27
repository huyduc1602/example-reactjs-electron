// Preload script for Electron (TypeScript)
// You can expose APIs to the renderer here if needed
window.addEventListener('DOMContentLoaded', () => {
  // Example: expose version info
  const replaceText = (selector: string, text: string) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  }
  const versions: Record<string, string> = process.versions as Record<string, string>;
  for (const type of ['chrome', 'node', 'electron']) {
    replaceText(`${type}-version`, versions[type])
  }
})
