---
layout: page
title: projects
permalink: /projects/
description: Applied robotics and engineering systems — perception, localisation, navigation and control stacks built and deployed on real platforms.
nav: true
nav_order: 3
---

<div class="work-list">
{% for item in site.data.projects %}
  {% if item.team_context == 'abhiyaan' and abhiyaan_shown != true %}
    {% assign abhiyaan_shown = true %}
    <section class="context-block" id="team-abhiyaan">
      <h2>Team Abhiyaan — IIT Madras</h2>
      <p class="context-meta">Team Lead / Software Module Lead / Robotics Engineer · Apr 2023 – May 2026</p>
      <p>
        The two systems below were built within Team Abhiyaan, IIT Madras' autonomous ground vehicle
        team, rather than as independent academic projects.
      </p>
      <ul>
        <li>Led a 30+ member autonomous robotics team.</li>
        <li>Oversaw software architecture, development, integration and validation.</li>
        <li>Worked across perception, localisation, navigation and control.</li>
        <li>Developed autonomous platforms for international competition and campus deployment.</li>
        <li>Secured 7th overall among 30+ international teams and 6th in the Design Challenge at IGVC 2024.</li>
      </ul>
    </section>
  {% endif %}
  {% include project-card.liquid item=item %}
{% endfor %}
</div>
