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

| What | Where |
|---|---|
| Final thesis title | `_data/research.yml` → `stuttgart-thesis.title` (currently `[MASTER'S THESIS TITLE — TO BE CONFIRMED]`, shown tagged "placeholder") |
| Thesis description bullets | `_data/research.yml` → `stuttgart-thesis.description` (no results are claimed on purpose) |

The same title is still `[TITLE for MS THESIS]` in `robotics.tex`, and its four
bullet points there are empty (`\item 1` … `\item 4`) — update the CV too, then
recompile and replace `assets/pdf/yash_purswani_cv.pdf`.

## 3. Media

Drop files in at these exact paths and the cards pick them up automatically —
no template changes needed. Until a file exists, the card shows a neutral
"Media pending" block instead of a broken image.

| Project | Image | Video |
|---|---|---|
| Master's thesis | `assets/img/projects/stuttgart-thesis.jpg` | `assets/video/projects/stuttgart-thesis.mp4` |
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

| Project | Missing |
|---|---|
| Master's thesis | `paper`, `code`, `project` |
| ETH adversarial scenarios | `paper`, `code`, `project` |
| Swarm control | `paper`, `code`, `project` (the CV has a `\href{put link}` stub) |
| 3D reconstruction | ✅ `code` set; `demo`, `project` missing |
| Road dust collector | `code`, `demo`, `project` |
| UAV–UGV rendezvous | `code`, `demo`, `project` |
| BOLT | `code`, `demo`, `project` |
| Vidyut | `code`, `demo`, `project` |

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

## 6. CV PDF

`assets/pdf/yash_purswani_cv.pdf` is a copy of the `Yash_CV.pdf` you supplied
(2 pages). Replace that file whenever you recompile `robotics.tex`.

## 7. Content differences worth reconciling

- The site says **30+** Team Abhiyaan members, matching `robotics.tex`. Your
  brief said 40+ — if 40+ is right, update both.
- The swarm project runs **Sep 2025 – Sep 2026** per the CV. Your brief said
  "Sep 2025 – Present".
- The site says Vidyut's stack is **ROS2** per the CV; your brief listed both
  ROS and ROS2 as tags (both tags are shown).

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
