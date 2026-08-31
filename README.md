# yash-purswani.github.io

Academic website of Yash Purswani — robotics researcher, IIT Madras.
Built with [al-folio](https://github.com/alshedivat/al-folio) v0.16.3 (Jekyll).

Live at <https://yash-purswani.github.io/>.

## Structure

| Page | Source | Content from |
|---|---|---|
| About (`/`) | `_pages/about.md` | `_data/profile.yml`, `_news/*.md` |
| Research (`/research/`) | `_pages/research.md` | `_data/research.yml`, `_data/manuscripts.yml` |
| Projects (`/projects/`) | `_pages/projects.md` | `_data/projects.yml` |
| CV (`/cv/`) | `_pages/cv.md` | `assets/pdf/yash_purswani_cv.pdf` |

Cards are rendered from YAML by `_includes/work-card.liquid` (via the
`research-card` / `project-card` wrappers) and `_includes/card-media.liquid`.
To add or edit a project, edit the YAML — never the card markup.

`robotics.tex` is the moderncv source for the CV and is excluded from the build.

See [PLACEHOLDERS.md](PLACEHOLDERS.md) for everything still to be filled in.

## Local development

```bash
bundle install
bundle exec jekyll serve
# http://127.0.0.1:4000
```

Requires Ruby with development headers (`ruby-dev` / `ruby-devel`) so native
gems can compile.

## Deployment

`.github/workflows/deploy.yml` builds the site on every push to `main` and
publishes `_site/` to the `gh-pages` branch.

**One-time setup:** in the repository's *Settings → Pages*, set the source to
the **`gh-pages` branch**, root folder.
