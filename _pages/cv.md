---
layout: page
title: cv
permalink: /cv/
description: Education, research experience, manuscripts in preparation, honors and technical skills.
nav: true
nav_order: 4
cv_pdf: /assets/pdf/yash_purswani_cv.pdf
---

{% assign cv_url = page.cv_pdf | relative_url %}

<p class="cv-actions">
  <a class="card-link" href="{{ cv_url }}" target="_blank" rel="noopener">View CV</a>
  <a class="card-link" href="{{ cv_url }}" download>Download CV</a>
</p>

<div class="cv-embed">
  <object data="{{ cv_url }}#view=FitH&amp;navpanes=0" type="application/pdf" aria-label="Curriculum vitae of Yash Purswani">
    <p>
      Your browser cannot display the embedded PDF.
      <a href="{{ cv_url }}">Open the CV in a new tab</a> instead.
    </p>
  </object>
</div>
