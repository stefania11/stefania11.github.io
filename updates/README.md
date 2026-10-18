# October 2026 content update

The deployed `gh-pages` branch contains newer content than `main`. This update
starts from published commit `6ee42faebfdba7d38e4dcc712a82ebe6babc6135` to preserve
the current biography, projects, resume, and featured Singapore talk.

`october-2026.json` is the readable content for the replacement featured talk,
four papers, and three conference entries. The two local PDFs are in `/pdf/`.
No mailbox links, contract details, or travel bookings are published.

`apply-update.cjs` applies five narrowly scoped AST edits to the original
published bundle, parses the result, and gives it a new content hash. It retains
the original bundle so existing cached HTML continues to work. To reproduce:

```
node updates/apply-update.cjs /absolute/path/to/published-checkout /absolute/path/to/dependencies
```

The dependency directory must contain a package.json and installed
`@babel/parser` and `@babel/traverse` (available in the existing main-branch
project's npm dependencies). The script reads the fixed base commit and does
not publish. Deployment is a regular fast-forward commit to `gh-pages`.

Before switching publication back to the `main` workflow, reconcile the
pre-existing source/deployment differences to avoid reverting live content.
