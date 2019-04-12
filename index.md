---
layout: default
title: Home
---





<div class="container">
  <!--- Mission Statement. --->
  <div class="py-5">
    <div class="row">
      <div class="col-3"></div>
      <div class="col-6 text-center">
        <p style="font-size: 1.25rem">
          Benningfield Group partners with small and medium-sized businesses to create personalized software that's easy to learn, simple to launch, and tailored specifically to your unique needs.
        </p>
      </div>
      <div class="col-3"></div>
    </div>
  </div>

  <br>


  <!--- Services. --->
  <div id="services" class="py-5">
    <h1 class="text-center">Services</h1>
    <div class="d-flex flex-row justify-content-between">
      {% for service in site.data.services %}
        <div class="card" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title text-center">{{ service.name }}</h5>
            <ul>
            {% for point in service.points %}
              <li class="card-text">{{ point }}</li>
            {% endfor %}
            </ul>
          </div>
        </div>
      {% endfor %}
    </div>
  </div>

  <br>


  <!--- Capabilities. --->
  {% assign techImages = "" | split: "" %}
  {% for image in site.static_files %}
    {% if image.path contains 'assets/images/technologies' %}
      {% assign techImages = techImages | push: image.path %}
    {% endif %}
  {% endfor %}
  {% assign firstTechImagePath = techImages.first %}
  {% assign restOfTechImagePaths = techImages | shift %}

  <div id="capabilities" class="py-5">
    <h1 class="text-center">Capabilities</h1>
    <div id="capabilities-carousel" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item text-center active">
          <img class="inline-block w-15 img-fluid" src="{{ site.baseurl }}{{ firstTechImagePath }}">
        </div>
        {% for imagePath in restOfTechImagePaths %}
          <div class="carousel-item text-center">
            <img class="inline-block w-15 img-fluid" src="{{ site.baseurl }}{{ imagePath }}">
          </div>
        {% endfor %}
      </div>
      <a class="carousel-control-prev" href="#capabilities-carousel" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon carousel-control-dark" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#capabilities-carousel" role="button" data-slide="next">
        <span class="carousel-control-next-icon carousel-control-dark" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>


</div>