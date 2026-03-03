const policyNode = document.getElementById("policy-content");

async function loadPolicy() {
    if (!policyNode) return;

    try {
        const response = await fetch("./privacypolicy.md", { cache: "no-store" });
        if (!response.ok) {
            throw new Error(`Failed to load policy: ${response.status}`);
        }

        const markdown = await response.text();
        policyNode.innerHTML = marked.parse(markdown);
    } catch (error) {
        policyNode.innerHTML = "<p>Unable to load the privacy policy right now. Please try again later.</p>";
        console.error(error);
    }
}

loadPolicy();
