# Placeholders to fill in

Everything listed here is either missing from the CV (`robotics.tex`) or has no
real URL yet. Nothing on the site invents these values — each one either renders
as a visibly marked placeholder or is omitted entirely (a link button is only
drawn when a real URL exists).

Search the repo for `TODO(placeholder)` to find the exact spots.

## 1. Identity and contact

| What | Where | Notes |
|---|---|---|
| Google Scholar ID | `_data/socials.yml` | Uncomment `scholar_userid:` and add the `user=` value from your Scholar profile URL. The CV's Google Scholar link is also empty. |

## 2. Master's thesis (Universität Stuttgart)

| What | Where | Notes |
|---|---|---|
| Thesis title | `_data/research.yml` → `stuttgart-thesis.title` | Updated: *Synthetic Database Creation and Active Viewpoint Selection for Zebra Re-Identification* |
| Thesis description | `_data/research.yml` → `stuttgart-thesis.description` | Updated with UV texture mapping, uncertainty quantification, and active viewpoint policy exploration |

## 3. Media

Drop files in at these exact paths and the cards pick them up automatically —
no template changes needed. Until a file exists, the card shows a neutral
"Media pending" block instead of a broken image.

| Project | Image | Video |
|---|---|---|
| Master's thesis | ✅ `synth_reid.jpg` | Media pending |
| 3D reconstruction | ✅ `3d-reconstruction.jpg` | ✅ `3d-reconstruction.mp4` |
| Road dust collector | `assets/img/projects/ardc.jpg` | `assets/video/projects/ardc.mp4` |
| UAV–UGV rendezvous | `assets/img/projects/uav-ugv.jpg` | `assets/video/projects/uav-ugv.mp4` |
| BOLT | `assets/img/projects/bolt.jpg` | `assets/video/projects/bolt.mp4` |
| Vidyut | `assets/img/projects/vidyut.jpg` | `assets/video/projects/vidyut.mp4` |

When both exist the image is used as the video's poster frame. Prefer MP4 over
GIF; keep clips short and compressed.

## 4. Links

No fake links exist anywhere. Add real URLs to `_data/research.yml` /
`_data/projects.yml` and the corresponding button appears.

| Project | Status / Missing |
|---|---|
| Master's thesis | `paper`, `code`, `project` |
| ETH adversarial scenarios | ✅ `project_page` set, ✅ `presentation` set |
| Swarm control | `paper`, `code`, `project` (the CV has a `\href{put link}` stub) |
| 3D reconstruction | ✅ `code` set, ✅ `project` (Documentation) set, ✅ `report` set |
| Road dust collector | ✅ `presentation` button set (points to `assets/pdf/ARDC_Presentation.pdf`); `code`, `demo` missing |
| UAV–UGV rendezvous | `code`, `demo`, `project` |
| BOLT | ✅ `project` (Documentation) set; `code`, `demo` missing |
| Vidyut | ✅ `report` set; `code`, `demo` missing |

Manuscripts (`_data/manuscripts.yml`) need `pdf`, `arxiv`, `doi` and `code` for
both entries. Both are labelled **Manuscript in preparation** and must stay that
way until actually accepted.

## 5. Dates the CV does not give

These render with a visible `[confirm …]` note next to them.

| Item | File | Current guess |
|---|---|---|
| BOLT start/end dates | `_data/projects.yml` → `bolt.date` | left empty |

The news items now carry only the month and year supplied directly by you, so
none of them are guesses any more.

Fix the date in the filename **and** the `date:` front matter, then delete the
`[confirm …]` span from the body.

## Adding news later

Drop a new file in `_news/` named `YYYY-MM-DD-slug.md`:

```markdown
---
layout: none
date: 2027-03-15
inline: true
related_posts: false
---

Your one-line update, **bold** where useful.
```

It sorts into place automatically; no layout change needed.
