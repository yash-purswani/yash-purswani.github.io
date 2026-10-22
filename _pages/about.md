---
layout: about
title: about
permalink: /
subtitle: Robotics Researcher · <a href="https://www.iitm.ac.in/">Indian Institute of Technology Madras</a>

profile:
  align: right
  image: prof_pic.jpg
  image_circular: false
  more_info: >
    <p>B.Tech. Mechanical Engineering</p>
    <p>M.Tech. Data Science and Artificial Intelligence</p>
    <p>IIT Madras</p>

social: true

announcements:
  enabled: true
  scrollable: false
  limit: 8

honors: true
technical_profile: true
---

I am a robotics researcher at IIT Madras, pursuing an inter-disciplinary dual degree in Mechanical Engineering
and in Data Science & Artificial Intelligence. My research focuses on autonomous robotic systems, particularly 
at the intersection of multi-robot coordination, motion planning and control, robot perception, and reinforcement 
learning. I am interested in developing reliable and scalable methods for robotic autonomy, combining theoretical 
guarantees with learning-based approaches and real-world deployment.

Autonomous robots need to make reliable decisions when operating in uncertain environments, coordinating with other agents, and respecting the constraints of the physical world. My research aims at achieving reliable and scalable autonomy by combining the structure and guarantees offered by control theory with the adaptability of learning-based approaches, especially in the area of multi-robot coordination and decision-making. This requires robots to perceive their surroundings, reason about the interactions involved, and act collectively even in limited information and changing conditions. My three years of experience with [Team Abhiyaan](/projects/#team-abhiyaan), the premier robotics team at IIT Madras, has complemented my research with practical experience with building and deploying complete autonomy systems on real vehicles, ensuring that my work is grounded on the sensing, computing, dynamics, and integration problems encountered in real-world robotic systems.

<h2 id="research-interests">research interests</h2>

<ul class="interest-list">
{% for interest in site.data.profile.interests %}
  <li>
    <span class="interest-name">{{ interest.name }}</span>
    <span class="interest-blurb">{{ interest.blurb }}</span>
  </li>
{% endfor %}
</ul>

<h2 id="education">education</h2>

<ul class="entry-list">
{% for e in site.data.profile.education %}
  <li class="entry">
    <div class="entry-main">
      <span class="entry-title">{{ e.institution }}</span>
      <span class="entry-sub">{{ e.degree }}</span>
      {% if e.detail %}<span class="entry-detail">{{ e.detail }}</span>{% endif %}
    </div>
    <div class="entry-date">{{ e.date }}</div>
  </li>
{% endfor %}
</ul>

<h2 id="affiliations">research affiliations</h2>

<ul class="entry-list">
{% for a in site.data.profile.affiliations %}
  <li class="entry entry--{{ a.status | downcase }}">
    <div class="entry-main">
      <span class="entry-status">{{ a.status }}</span>
      <span class="entry-title">{{ a.institution }}</span>
      <span class="entry-sub">{{ a.unit }}</span>
      <span class="entry-detail">{{ a.role }}{% if a.supervisor %} · {{ a.supervisor }}{% endif %}</span>
    </div>
    <div class="entry-date">{{ a.date }}</div>
  </li>
{% endfor %}
</ul>
