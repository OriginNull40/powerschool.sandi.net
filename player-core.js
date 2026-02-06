/* webRcade Lite Loader */
window.WebRcadePlayer = class {
    constructor(id) {
        this.container = document.getElementById(id);
    }
    loadFeed(url) {
        this.container.innerHTML = `
            <div style="background:#111;color:#0f0;height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;font-family:monospace;text-align:center;">
                <h2 style="border:2px solid #0f0;padding:10px;">SYSTEM READY</h2>
                <p>BOOTING: FINAL FANTASY VII</p>
                <div id="loading-bar" style="width:200px;height:20px;border:1px solid #0f0;margin-top:20px;">
                    <div id="progress" style="width:0%;height:100%;background:#0f0;"></div>
                </div>
                <p id="status-text" style="margin-top:10px;">Checking BIOS...</p>
            </div>
        `;
        this.startBoot(url);
    }
    async startBoot(url) {
        const progress = document.getElementById('progress');
        const status = document.getElementById('status-text');
        
        // Simulating the kernel load
        setTimeout(() => { progress.style.width = "30%"; status.innerText = "BIOS SECURED..."; }, 1000);
        setTimeout(() => { progress.style.width = "60%"; status.innerText = "MOUNTING GOOGLE DRIVE..."; }, 2500);
        setTimeout(() => { 
            progress.style.width = "100%"; 
            status.innerText = "KICKING TO EMULATOR...";
            // This is where we launch the actual WASM
            window.location.href = "https://webrcade.github.io/webrcade-app-psx/?feed=" + encodeURIComponent(url);
        }, 4000);
    }
};
