---
title: Sitemap
subtitle: "This one goes out to all the robots 🤖"
layout: archive
permalink: /sitemap/
author_profile: false
---

This is a list of *every* page and post on the site.  It's perfect for your friendly neighborhood web-crawler and people who would rather hit ctrl+F here than click around.  Here's the [sitemap as XML]({{ "sitemap.xml" | relative_url }}).

<h2>All Pages</h2>
{% for post in site.pages %}
  {% include archive-single.html %}
{% endfor %}

<h2>All Posts</h2>
{% for post in site.posts %}
  {% include archive-single.html %}
{% endfor %}

{% capture written_label %}'None'{% endcapture %}

{% for collection in site.collections %}
{% unless collection.output == false or collection.label == "posts" %}
  {% capture label %}{{ collection.label }}{% endcapture %}
  {% if label != written_label %}
  <h2>{{ label }}</h2>
  {% capture written_label %}{{ label }}{% endcapture %}
  {% endif %}
{% endunless %}
{% for post in collection.docs %}
  {% unless collection.output == false or collection.label == "posts" %}
  {% include archive-single.html %}
  {% endunless %}
{% endfor %}
{% endfor %}