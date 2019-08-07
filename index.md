---
layout: default
title: Home
description: BG Software Homepage
tags: [BG Software]
---

<div>
  <!--- Headline. --->
  <div id="headline">
    <video
      class="headline__video"
      playsinline="playsinline"
      autoplay="autoplay"
      muted="muted"
      loop="loop"
    >
      <source src="/assets/videos/hero_video.mp4" type="video/mp4">
    </video>
  </div>
  <!--- End of Headline. --->


  <!--- Create a nested array for blog posts to group carousel. --->
  {% assign subArrSize = 4 %}
  {% assign posts = "" | split: "/" %}

  {% for post in site.posts %}
    {% assign needsNewSubArr = forloop.index | modulo: subArrSize %}

    {% if needsNewSubArr == 1 %}
      {% comment %} Create a new empty sub array. {% endcomment %}
      {% assign subArr = "" | split: "/" %}
    {% endif %}

    {% comment %} Push the current image in sub array. {% endcomment %}
    {% assign subArr = subArr | push: post %}

    {% if needsNewSubArr == 0 or forloop.last %}
      {% comment %} push subArr in posts if subArr length is. {% endcomment %}
      {% assign posts = posts | push: subArr %}
    {% endif %}
  {% endfor %}
  <!--- Blogs. --->
  <div
    id="homepage-blogs"
    class="py-4"
    data-ride="carousel"
    data-aos="fade-right"
    data-aos-offset="200"
  >
    <h1 class="text-center">Recent Blogs</h1>
     <div
        class="homepage-blogs__carousel carousel slide py-4 mx-auto"
      >
        <div class="carousel-inner h-100">
          {% for postGroup in posts %}
            <!--- If first group, set class have active class. --->
            {% if forloop.first %}
              <div class="h-100 homepage-blogs__carousel-item carousel-item text-center active">
                {% for post in postGroup %}
                  {% include blog-card.html %}
                {% endfor %}
              </div>
            {% endif %}
            {% if forloop.first == false %}
              <div class="homepage-blogs__carousel-item carousel-item text-center">
                {% for post in postGroup %}
                  {% include blog-card.html %}
                {% endfor %}
              </div>
            {% endif %}
          {% endfor %}
        </div>
        <a
          class="carousel-control-prev w-1rem"
          href=".homepage-blogs__carousel"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon carousel-control-dark" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next w-1rem"
          href=".homepage-blogs__carousel"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon carousel-control-dark" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    {% for post in posts %}
      <!--- If first group, set class have active class. --->
      {% if forloop.first %}
        <div class="homepage-blogs__carousel-item carousel-item text-center active">
          {% for blog in post %}
          <span>{{ post.author }}</span>
          {% endfor %}
        </div>
      {% endif %}
    {% endfor %}
  </div>
  <!--- End of Blogs. --->


  <!---  Custom Software. --->
  <div id="custom-software" class="bg-color-blue py-5">
    <div
      class="opener w-100"
      data-aos="fade-right"
      data-aos-offset="200"
    >
      <h1 class="text-center color-white mb-0">Why Custom Software</h1>
    </div>
    <div
      class="d-flex justify-content-center"
      data-aos="fade-right"
      data-aos-offset="200"
    >
      <p class="custom-software__text color-white text-center pt-5 font-weight-lighter font-size-md line-height-2">
        Custom software is a tailor-made solution built with a client’s insight and business
        requirements from the onset, enabling it to meet a company’s specific business
        needs, processes, and security requirements.
      </p>
    </div>
  </div>
  <!--- End of Custom Software. --->


  <!--- Services. --->
  <div id="services" class="py-6">
    <div class="d-flex align-items-center flex-column">
      <div class="services__cards d-flex justify-content-center m-0">
        {% for service in site.data.services %}
          {% if forloop.index <= 3 %}
            {% include service-card.html %}
          {% endif %}
        {% endfor %}
      </div>
      <div class="services__cards d-flex justify-content-center m-0">
        {% for service in site.data.services %}
          {% if forloop.index > 3 %}
            {% include service-card.html %}
          {% endif %}
        {% endfor %}
      </div>
    </div>
  </div>
  <!--- End of Services. --->


  <!--- Survey. --->
  <div id="survey" class="pt-4 bg-color-blue d-flex flex-column">
    <div class="survey__groups d-flex justify-content-center align-items-center color-white mx-auto">
      <div class="survey__group d-flex">
      {% for survey in site.data.surveys %}
        {% if forloop.index <= 2 %}
          {% include survey-card.html %}
        {% endif %}
      {% endfor %}
      </div>
      <div class="survey__group d-flex">
      {% for survey in site.data.surveys %}
        {% if forloop.index > 2 %}
          {% include survey-card.html %}
        {% endif %}
      {% endfor %}
      </div>
    </div>
    <a
      href="https://learn.g2.com/state-of-software-happiness-report-2019"
      class="font-size-md color-white text-center"
      data-aos="fade-right"
      data-aos-offset="200"
    >
      <span class="hover-color-dark-blue">State of Software Happiness Report 2019. G2.com</span>
    </a>
    <!--- Temporarily putting this header here until we get the testimonials in between
          these sections. --->
    <div class="bg-color-blue w-100 pt-10 pb-2">
      <h1
        class="text-center color-white"
        data-aos="fade-right"
        data-aos-offset="200"
      >Capabilities</h1>
    </div>
  </div>
  <!--- End of Survey. --->



  <!--- Capabilities. --->
  {% assign techImages = "" | split: "" %}
  {% for image in site.static_files %}
    {% if image.path contains 'assets/images/technologies' %}
      {% assign techImages = techImages | push: image.path %}
    {% endif %}
  {% endfor %}

  <!--- Create a nested array for Capabilities to group carousel. --->
  {% assign subArrSize = 4 %}
  {% assign capabilities = "" | split: "/" %}

  {% for element in techImages %}
    {% assign needsNewSubArr = forloop.index | modulo: subArrSize %}

    {% if needsNewSubArr == 1 %}
      {% comment %} Create a new empty sub array. {% endcomment %}
      {% assign subArr = "" | split: "/" %}
    {% endif %}

    {% comment %} Push the current image in sub array. {% endcomment %}
    {% assign subArr = subArr | push: element %}

    {% if needsNewSubArr == 0 or forloop.last %}
      {% comment %} push subArr in capabilities if subArr length is. {% endcomment %}
      {% assign capabilities = capabilities | push: subArr %}
    {% endif %}
  {% endfor %}

  <div id="capabilities" class="bg-color-white pb-4">
    <div class="d-flex flex-column align-items-center">
      <div
        class="capabilities__carousel carousel slide py-4"
        data-ride="carousel"
        data-aos="fade-right"
        data-aos-offset="200"
      >
        <div class="carousel-inner">
          {% for imageGroup in capabilities %}
            <!--- If first group, set class have active class. --->
            {% if forloop.first %}
              <div class="capabilities__carousel-item carousel-item text-center active">
                {% for imagePath in imageGroup %}
                  <div class="capabilities__carousel-image-container d-inline-block my-1">
                    <img
                      class="w-100 h-auto"
                      src="{{ imagePath }}"
                      alt="{{ imagePath }}"
                    >
                  </div>
                {% endfor %}
              </div>
            {% endif %}
            {% if forloop.first == false %}
              <div class="capabilities__carousel-item carousel-item text-center">
                {% for imagePath in imageGroup %}
                  <div class="capabilities__carousel-image-container d-inline-block my-1">
                    <img
                      class="w-100 h-auto"
                      src="{{ imagePath }}"
                      alt="{{ imagePath }}"
                    >
                  </div>
                {% endfor %}
              </div>
            {% endif %}
          {% endfor %}
        </div>
        <a
          class="carousel-control-prev w-1rem"
          href=".capabilities__carousel"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon carousel-control-dark" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next w-1rem"
          href=".capabilities__carousel"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon carousel-control-dark" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
  </div>
  <!--- End of Capabilities. --->


  <!--- Clients. --->
  <div id="clients" class="pb-4">
    <div class="d-flex flex-column align-items-center">
      <div class="bg-color-blue w-100 py-2">
        <h1
          class="text-center color-white"
          data-aos="fade-right"
          data-aos-offset="200"
        >Case Studies</h1>
      </div>
      <div
        class="clients__content py-4 text-center"
        data-aos="fade-right"
        data-aos-offset="200"
      >
      {% include case-studies.html %}
      </div>
    </div>
  </div>
  <!--- End of Clients. --->


</div>