---
layout: default
title: Home
---




{% assign techImages = "" | split: "" %}
{% for image in site.static_files %}
  {% if image.path contains 'assets/images/technologies' %}
    {% assign techImages = techImages | push: image.path %}
  {% endif %}
{% endfor %}
{% assign firstTechImage = techImages.first %}
{% assign restOfTechImages = techImages | shift %}

<div class="container">

  <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item text-center active">
        <img class="inline-block w-15 img-fluid" src="{{ site.baseurl }}{{ firstTechImage }}">
      </div>
      {% for image in restOfTechImages %}
        <div class="carousel-item text-center">
          <img class="inline-block w-15 img-fluid" src="{{ site.baseurl }}{{ image }}">
        </div>
      {% endfor %}
    </div>
    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon carousel-control-dark" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
      <span class="carousel-control-next-icon carousel-control-dark" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</div>