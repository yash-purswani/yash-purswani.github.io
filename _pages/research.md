---
layout: page
title: research
permalink: /research/
description: Research problems I have formulated and investigated in multi-robot control, autonomous-vehicle safety validation and learning-based coordination.
nav: true
nav_order: 2
---

<div class="work-list">
{% for item in site.data.research %}
  {% include research-card.liquid item=item %}
{% endfor %}
</div>

<h2 id="manuscripts">manuscripts</h2>

<p class="section-note">
  The following manuscripts are in preparation. They are not yet published, and no
  preprint or DOI is available at this time.
</p>

{% include manuscripts.liquid %}
