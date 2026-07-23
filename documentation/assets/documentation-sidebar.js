document.addEventListener("DOMContentLoaded", function () {

    const modules = [
        ["01", "Getting Started", "/documentation/getting-started/index.html", "getting-started"],
        ["02", "Services", "/documentation/service-management/index.html", "service-management"],
        ["03", "Individual", "/documentation/individual/index.html", "individual"],
        ["04", "Employees", "/documentation/employees/index.html", "employees"],
        ["05", "Schedule", "/documentation/schedule/index.html", "schedule"],
        ["06", "Medication", "/documentation/medication/index.html", "medication"],
        ["07", "BSS", "/documentation/bss/index.html", "bss"],
        ["08", "Authorizations", "/documentation/authorizations/index.html", "authorizations"],
        ["09", "Reports", "/documentation/reports/index.html", "reports"],
        ["10", "KPI", "/documentation/kpi/index.html", "kpi"],
        ["11", "Time Keeping", "/documentation/time-keeping/index.html", "time-keeping"],
        ["12", "Mobile EVV", "/documentation/mobile-evv/index.html", "mobile-evv"],
        ["13", "Visit Maintenance", "/documentation/visit-maintenance/index.html", "visit-maintenance"],
        ["14", "House Management", "/documentation/house-management/index.html", "house-management"],
        ["15", "Payroll", "/documentation/payroll/index.html", "payroll"],
        ["16", "Billing", "/documentation/billing/index.html", "billing"],
        ["17", "HIPAA", "/documentation/hipaa/index.html", "hipaa"],
        ["18", "Support", "/documentation/support/index.html", "support"],
        ["19", "Admin", "/documentation/admin/index.html", "admin"],
        ["20", "Security", "/documentation/security/index.html", "security"],
        ["21", "Audit Logs", "/documentation/audit-logs/index.html", "audit-logs"],
        ["22", "Developer Guide", "/documentation/developer-guide/index.html", "developer-guide"],
        ["23", "QA Guide", "/documentation/qa-guide/index.html", "qa-guide"],
        ["24", "Test Catalog", "/documentation/test-catalog/index.html", "test-catalog"],
        ["25", "API Documentation", "/documentation/api/index.html", "api"],
        ["26", "AI Agents", "/documentation/ai-agents/index.html", "ai-agents"]
    ];

    const article = document.querySelector(".doc-article");

    if (!article) {
        return;
    }

    /*
     * Prevent duplicate sidebar creation if the script is loaded twice.
     */
    if (document.querySelector(".docs-layout")) {
        return;
    }

    const currentModule =
        document.body.getAttribute("data-doc-module") || "";

    let menuHtml = "";

    modules.forEach(function (moduleItem) {

        const number = moduleItem[0];
        const label = moduleItem[1];
        const href = moduleItem[2];
        const moduleKey = moduleItem[3];

        const activeClass =
            currentModule === moduleKey ? "active" : "";

        menuHtml += `
            <a href="${href}" class="${activeClass}">
                <span class="no">${number}</span>
                <span>${label}</span>
            </a>
        `;
    });

    const layout = document.createElement("div");

    layout.className = "docs-layout";

    layout.innerHTML = `
        <aside class="docs-sidebar">

            <div class="docs-logo">

                <a
                    href="/documentation/index.html"
                    aria-label="True Care System Documentation Home"
                >
                    <img
                        src="/assets/logo/logo.png"
                        alt="True Care System"
                    >
                </a>

            </div>

            <div class="docs-title">
                Documentation
            </div>

            <nav
                class="docs-nav"
                aria-label="Documentation navigation"
            >
                ${menuHtml}
            </nav>

        </aside>

        <main class="docs-content"></main>
    `;

    article.parentNode.insertBefore(layout, article);

    const contentContainer =
        layout.querySelector(".docs-content");

    contentContainer.appendChild(article);

});
