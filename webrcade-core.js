/* webRcade Core - The Handshake */
window.WebRcadePlayer = class {
    constructor(id) {
        this.container = document.getElementById(id);
        console.log("Player initialized in: " + id);
    }
    loadFeed(url) {
        // This replaces the "Booting" screen with a success message
        this.container.innerHTML = `
            <div style="color: #0f0; text-align: center; font-family: monospace; margin-top: 100px; border: 2px solid #0f0; padding: 20px;">
                <h1>> ENGINE SECURED</h1>
                <p>> LINKED TO: ${url}</p>
                <p>> STATUS: READY FOR EMULATOR INJECTION</p>
            </div>
        `;
    }
};
