---
layout: about
title: home
permalink: /
subtitle: <i>An NGF-funded project with a 2.1 million Euro budget applying technical methods to the law with the aim of making the EU's ambitious AI regulation – particularly the GDPR and AI Act – work in practice.</i>

profile:
  align: right
  image: logo.png
  image_circular: false # crops the image to make it circular
#  more_info: >
#    <p>Prompt: Visualize a logo that portrays a pathway, symbolizing the journey from AI innovation to regulatory compliance. This path should start from a stylized AI icon, winding its way through a series of legal symbols (like a document with a seal, a gavel) and leading to a harmonious coexistence symbol represented by a perfectly balanced scale embedded within a digital landscape. Use a color scheme that conveys clarity and optimism, such as light blues and greens.</p>

news: true # includes a list of news items
latest_posts: false # includes a list of the newest posts
selected_papers: false # includes a list of papers marked as "selected={true}"
social: true # includes social icons at the bottom of the page

profiles:
  # if you want to include more than one profile, just replicate the following block
  # and create one content file for each profile inside _pages/
  - align: center
    image: konrad.jpg
    image_circular: true # crops the image to make it circular
    more_info: >
      Konrad Kollnig<br>
      Project Lead, Assistant Professor CS/Law
  - align: center
    image: kamil.jpg
    image_circular: true # crops the image to make it circular
    more_info: >
      Kamil Szostak<br>
      PhD Student
  - align: center
    image: bram.jpg
    image_circular: true # crops the image to make it circular
    more_info: >
      Bram Rijsbosch<br>
      PhD Student
  - align: center
    image: lucas.jpg
    image_circular: true # crops the image to make it circular
    more_info: >
      Lucas Giovanni Uberti-Bona Marin<br>
      PhD Student
  - align: center
    image: ishitaa.jpg
    image_circular: true # crops the image to make it circular
    more_info: >
      Ishitaa Narwane<br>
      PhD Student

supervision:
  - align: center
    image: gijs.jpg
    image_circular: true # crops the image to make it circular
    more_info: >
      Gijs van Dijck<br>
      Professor of Private Law
  - align: center
    image: johanna.jpg
    image_circular: true # crops the image to make it circular
    more_info: >
      Johanna T. Gunawan<br>
      Assistant Professor in CS/HCI/Law
  - align: center
    image: marta.jpg
    image_circular: true # crops the image to make it circular
    more_info: >
      Marta Kołacz<br>
      Assistant Professor in Law
  - align: center
    image: jerry.jpg
    image_circular: true # crops the image to make it circular
    more_info: >
      Jerry Spanakis<br>
      Assistant Professor in NLP and Law
  - align: center
    image: qian.jpg
    image_circular: true # crops the image to make it circular
    more_info: >
      Qian Li<br>
      Postdoctoral Researcher
---

**You can follow the project updates by subscribing to our Substack: <https://regtech4ai.substack.com/>**

The General Data Protection Regulation (GDPR) is a cornerstone of the regulation of AI in the EU. It seeks to facilitate the flow of data across the EU while protecting citizens’ fundamental rights – including data protection and privacy. Even though the GDPR is now more than 7 years old, there remain significant gaps between the law and practice. For example, past research by the project lead showed that less than 10% of mobile apps fulfil the minimum legal requirements regarding *consent* – one of the core principles of GDPR.

As the EU is introducing the *AI Act* (i.e. its first law aimed directly at AI), it is likely that again – like with GDPR – enforcement will be lagging and that businesses will be overwhelmed by the legal obligations. In response, RegTech4AI will research *regulatory technologies* (RegTech) to assist enforcement agencies and businesses with AI regulation, and thereby bolster trust in AI systems among citizens.

The aim of this project is *not* to develop new AI frameworks or laws (as this has been studied much before). Instead, **we focus on the challenge of** **implementation****: making AI-relevant laws like GDPR and the AI Act work in practice**. This topic has received very limited attention as it requires a deep understanding of both CS and law – which is rare.

To be prepared to respond to new AI challenges in the years ahead, we will also actively build bridges across CS and law, including by organising a set of workshops and conferences on the topic.

## team

The RegTech4AI team consists of interdisciplinary researchers in law, machine learning and data science:

{% if page.profiles %}
  <div class="container">
    <div class="row row-cols-5">
      {% for profile in page.profiles %}
        <div class="col mb-4">
          {% if profile.image %}
            <div class="profile-image text-center">
              {% assign profile_image_path = profile.image | prepend: 'assets/img/' %}
              {% if profile.image_circular %}
                {% assign profile_image_class = 'img-fluid z-depth-1 rounded-circle' %}
              {% else %}
                {% assign profile_image_class = 'img-fluid z-depth-1 rounded' %}
              {% endif %}
              <img src="{{ profile_image_path }}" class="{{ profile_image_class }}" alt="Profile image">
            </div>
          {% endif %}
          {% if profile.more_info %}
            <div class="profile-subtitle text-center mt-2">{{ profile.more_info }}</div>
          {% endif %}
        </div>
      {% endfor %}
    </div>
  </div>
{% endif %}

The project is supported by experienced researchers from the Law & Tech Lab of Maastricht University to ensure high-quality research and societal impact:

{% if page.supervision %}
  <div class="container">
    <div class="row row-cols-5">
      {% for profile in page.supervision %}
        <div class="col mb-4">
          {% if profile.image %}
            <div class="profile-image text-center">
              {% assign profile_image_path = profile.image | prepend: 'assets/img/' %}
              {% if profile.image_circular %}
                {% assign profile_image_class = 'img-fluid z-depth-1 rounded-circle' %}
              {% else %}
                {% assign profile_image_class = 'img-fluid z-depth-1 rounded' %}
              {% endif %}
              <img src="{{ profile_image_path }}" class="{{ profile_image_class }}" alt="Profile image">
            </div>
          {% endif %}
          {% if profile.more_info %}
            <div class="profile-subtitle text-center mt-2">{{ profile.more_info }}</div>
          {% endif %}
        </div>
      {% endfor %}
    </div>
  </div>
{% endif %}


<!-- News -->
{% if page.news and site.announcements.enabled %}
  <h2>
    <a href="{{ '/news/' | relative_url }}" style="color: inherit">news</a>
  </h2>
  {% include news.liquid limit=true %}
{% endif %}
