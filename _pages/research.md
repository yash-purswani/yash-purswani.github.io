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
