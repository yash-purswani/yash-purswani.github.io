---
layout: about
title: about
permalink: /
subtitle: Robotics Researcher · <a href="https://www.iitm.ac.in/">Indian Institute of Technology Madras</a>

profile:
  align: right
  image: prof_pic_placeholder.svg # TODO(placeholder): replace with a real photo, e.g. prof_pic.jpg
  image_circular: false
  more_info: >
    <p>B.Tech. Mechanical Engineering</p>
    <p>M.Tech. Data Science</p>
    <p>IIT Madras</p>

social: true

announcements:
  enabled: true
  scrollable: false
  limit: 8

honors: true
technical_profile: true
---

I am an undergraduate researcher at IIT Madras, pursuing a B.Tech. in Mechanical Engineering together
with an inter-disciplinary M.Tech. in Data Science. My work sits at the intersection of **robot
perception**, **multi-robot systems**, **motion planning and control**, and **reinforcement learning**,
with a consistent emphasis on autonomy that is validated on real hardware rather than only in
simulation.

My research has moved from provable control guarantees toward learning-based methods for safety and
coordination. At IIT Madras I developed a hybrid swarm kinematic model with finite-time centroid
tracking and Input-to-State Stability guarantees under bounded disturbances. As a RobotX 2026 Fellow at
ETH Zürich I reformulated adversarial scenario generation for autonomous-vehicle safety validation using
rule-constrained non-ego agents and feasibility-aware reinforcement learning. I am currently at the
Institute of Flight Mechanics and Control, Universität Stuttgart, working on learning distributed
policies for multi-robot coordination via synthetic data and reinforcement learning. Alongside this, four
years with [Team Abhiyaan](/projects/#team-abhiyaan) — IIT Madras' autonomous ground vehicle team — have
given me end-to-end experience deploying perception, localisation, navigation and control stacks on real
vehicles.

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
