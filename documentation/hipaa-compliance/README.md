# HIPAA Compliance Documentation

Upload every HTML file in this package to:

`documentation/hipaa-compliance/`

All internal HIPAA links use:

`/documentation/hipaa-compliance/index.html`

The official 30-module vertical menu is included on every page, with module 17 HIPAA active.

The package intentionally keeps the existing `images/` folder unchanged.


## Screenshot mapping

- `index.html` → `images/hipaa-menu.jpg`
- `dashboard.html` → `images/hipaa-dashboard.jpg`
- `phi-access.html` → `images/hipaa-phi-access-monitoring.jpg`
- `login-history.html` → `images/hipaa-phi-login-history.jpg`
- `audit-logs.html` → `images/hipaa-audit-logs.jpg`
- `audit-log-detail.html` → `images/hipaa-audit-logs-detail.jpg`

The existing `images/` directory should remain at:
`documentation/hipaa-compliance/images/`


## HIPAA image width fix

All HTML pages in this package include a scoped CSS block named:

`hipaa-image-width-fix`

It constrains `.doc-figure` and screenshot images to the right edge of the article.
No global `documentation.css` changes are required.
