---
layout: page
title: Events
excerpt: "What's Happening with the PSA?"
search_omit: true
image:
   feature: SocialHeader.jpg
head_scripts:
  - /assets/js/_popup.js
---

<link href="assets/css/popup.css" rel="stylesheet"></link>

<ul class="post-list">
{% for post in site.categories.blog %} 
  <li><article><a href="{{ site.url }}{{ post.url }}">{{ post.title }} <span class="entry-date"><time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%B %d, %Y" }}</time></span>{% if post.excerpt %} <span class="excerpt">{{ post.excerpt | remove: '\[ ... \]' | remove: '\( ... \)' | markdownify | strip_html | strip_newlines | escape_once }}</span>{% endif %}</a></article></li>
{% endfor %}
</ul>

<div id="myModal" class="modal">
  <!-- Modal content -->
  <div class="modal-content">
    <div class="modal-header">
      <span class="close">&times;</span>
      <h2>Heads Up!</h2>
    </div>
    <div class="modal-body">
      <p>For an up-to-date list of all events running, please check out 
	  our UFV mycampuslife page as well as follow our social media accounts 
	  at the handle @ufvpsa.</p>
    </div>
    <div class="modal-footer">
     <!--<h3>Modal Footer</h3>-->
      <button class="myBtn" onclick="window.location.href='https://ufv.campuslabs.ca/engage/organization/ufvpsa'">Join Us</button>
    </div>
  </div>
</div>