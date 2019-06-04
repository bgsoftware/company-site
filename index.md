---
layout: default
title: Home
---



<div class="container-fluid px-0 overflow-hidden">

  <div
    id="headline"
    class="d-flex flex-column align-items-center justify-content-center min-height-100vh"
  >
    <div class="headline__content">
      <div class="headline__left text-right">
        <h1 class="headline__title text-right font-italic color-white"
          >Because there's only one business like yours.
        </h1>
        <p
          class="text-right font-weight-light color-white font-size-md"
          data-aos="fade-right"
          data-aos-duration="3000"
        >
          BG Software partners with small and medium-sized businesses to create personalized software that’s easy to learn, simple to launch, and tailored specifically to your unique needs.
        </p>
        <div
          class="px-1"
          data-aos="fade-right"
          data-aos-duration="3000"
        >
          <button class="btn cta-button-tertiary font-weight-light">
            How can we help you?
          </button>
        </div>
      </div>
      <div
        class="headline__right video-wrap"
        data-aos="fade-right"
        data-aos-duration="3000"
      >
        <div class="video-container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/nDOKwLf2flg"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  </div>



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



  <!--- Services. --->
  <div id="services" class="py-4">
    <div class="d-flex align-items-center flex-column">
      <div class="services__cards d-flex justify-content-center m-0">
        {% for service in site.data.services %}
          <div
            class="services__card ml-3 mr-3 mb-3"
            data-aos="fade-right"
            data-aos-offset="200"
          >
            <div class="card-body px-1">
              <img
                src="{{site.baseurl}}/assets/images/services/{{ forloop.index }}.png"
                class="mx-auto d-block w-75 max-width-7rem pb-4"
              >
              <h2 class="services__card-title card-title text-center">{{ service.name }}</h2>
              <div class="services__card-content font-size-md">
                <p class="font-weight-lighter line-height-2">
                  {{ service.point }}
                </p>
                <ul class="services__card-points pt-3">
                {% for point in service.points %}
                  <li class="card-text"><p class="font-weight-lighter">{{ point }}</p></li>
                {% endfor %}
                </ul>
              </div>
            </div>
          </div>
        {% endfor %}
      </div>
    </div>
  </div>


  <!--- Survey. --->
  <div id="survey" class="py-4 bg-color-blue">
    <div class="survey__groups d-flex justify-content-center align-items-center color-white mx-auto">
      <div class="survey__group d-flex">
        <div
          class="survey__card card-body text-center"
          data-aos="fade-right"
          data-aos-offset="200"
        >
          <i class="fa fa-heart-o fa-3x color-white" aria-hidden="true"></i>
          <h1 class="card-title text-center font-size-4">96%</h1>
          <p class="font-size-md line-height-2">of employees said that they would be more satisfied at work with access to better software</p>
        </div>
        <div
          class="survey__card card-body text-center"
          data-aos="fade-right"
          data-aos-offset="200"
        >
          <i class="fa fa-eye fa-3x color-white" aria-hidden="true"></i>
          <h1 class="card-title text-center font-size-4">24%</h1>
          <p class="font-size-md line-height-2">of employees said they have considered looking for a new job due to mismatched software</p>
        </div>
      </div>
      <div class="survey__group d-flex">
        <div
          class="survey__card card-body text-center"
          data-aos="fade-right"
          data-aos-offset="200"
        >
          <i class="fa fa-frown-o fa-3x color-white" aria-hidden="true"></i>
          <h1 class="card-title text-center font-size-4">52%</h1>
          <p class="font-size-md line-height-2">of respondents said they have been dissatisfied in their roles due to mismatched software</p>
        </div>
        <div
          class="survey__card card-body text-center"
          data-aos="fade-right"
          data-aos-offset="200"
        >
          <i class="fa fa-floppy-o fa-3x color-white" aria-hidden="true"></i>
          <h1 class="card-title text-center font-size-4">66%</h1>
          <p class="font-size-md line-height-2">of respondents said they do not have control over software decisions at their company</p>
          <br>
          <div class="text-right font-size-md">
            <b>Source: G2.com</b>
          </div>
        </div>
      </div>
    </div>
  </div>


  <!--- About Us. --->
  <div id="about-us" class="pb-4">
    <!--- Why BG Software? --->
    <div id="why-bg-software" class="d-flex about-us__content">
      <div
        class="about-us__image-container about-us__side"
        data-aos="fade-right"
        data-aos-offset="200"
      >
        <img
          id="why-bg-software__team-photo"
          class="max-width-50rem w-100 h-auto"
          src="{{site.baseurl}}/assets/images/BG/team_photo.jpg"
        >
      </div>
      <div
        class="about-us__text text-align-left"
        data-aos="fade-right"
        data-aos-offset="200"
      >
        <h1>Why BG Software?</h1>
        <p class="font-size-md line-height-2">
          This is our family, a team of talented software developers, analysts and customer
          care pros. For over 13 years, we have been building, maintaining, and enhancing
          custom software systems that are both easy to use and scalable to our clients’
          needs.
        </p>
        <p class="font-size-md line-height-2">
          Our process typically involves meeting with your team to learn more about your needs,
          products, and industry. We then formulate a plan to select the appropriate
          technologies, software architects, and quality assurance team to bring your vision
          to life. A custom solution is then created to fit your specific needs.
        </p>
        <button class="btn cta-button-tertiary font-weight-light">
          Speak to an expert
        </button>
      </div>
    </div>
    <!--- Let's talk Software. --->
    <div id="lets-talk-software" class="about-us__content d-flex">
      <div
        class="about-us__text text-right"
        data-aos="fade-right"
        data-aos-offset="200"
      >
        <h1>Let's Talk Software</h1>
        <h2>Robin Wells</h2>
        <h3 class="font-italic">Chief Executive Officer</h3>
        <p class="font-italic font-size-md line-height-2">
          “For me and my team, it’s all about connecting with clients on a one-on-one level,
          getting to know their needs and ensuring they receive the highest-quality support
          and products.”
        </p>
        <button class="btn cta-button-tertiary font-weight-light">Ready to chat?</button>
      </div>
      <div
        class="about-us__image-container about-us__side text-align-left"
        data-aos="fade-right"
        data-aos-offset="200"
      >
        <img
          id="lets-talk-software__robin-image"
          class="max-width-40"
          src="{{site.baseurl}}/assets/images/BG/robin.jpg"
          data-aos="fade-right"
          data-aos-offset="100"
        >
      </div>
    </div>
  </div>



  <!--- Capabilities. --->
  {% assign techImages = "" | split: "" %}
  {% for image in site.static_files %}
    {% if image.path contains 'assets/images/technologies' %}
      {% assign techImages = techImages | push: image.path %}
    {% endif %}
  {% endfor %}

  <!--- Create a nested array for Capabilities to group carousel. --->
  {% assign subArrSize = 5 %}
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
      <div class="bg-color-blue w-100 py-2">
        <h1
          class="text-center color-white"
          data-aos="fade-right"
          data-aos-offset="200"
        >Capabilities</h1>
      </div>
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
              <div class="carousel-item text-center active">
                {% for imagePath in imageGroup %}
                    <img class="inline-block px-3 img-fluid w-10rem" src="{{ site.baseurl }}{{ imagePath }}">
                {% endfor %}
              </div>
            {% endif %}
            {% if forloop.first == false %}
              <div class="carousel-item text-center">
                {% for imagePath in imageGroup %}
                    <img class="inline-block px-3 img-fluid w-10rem" src="{{ site.baseurl }}{{ imagePath }}">
                {% endfor %}
              </div>
            {% endif %}
          {% endfor %}
        </div>
        <a
          class="carousel-control-prev"
          href=".capabilities__carousel"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon carousel-control-dark" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
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



  <!--- Clients. --->
  {% assign clientImages = "" | split: "" %}
  {% for image in site.static_files %}
    {% if image.path contains 'assets/images/clients' %}
      {% assign clientImages = clientImages | push: image.path %}
    {% endif %}
  {% endfor %}

  <!--- Create a nested array for Clients to group carousel. --->
  {% assign subArrSize = 4 %}
  {% assign clients = "" | split: "/" %}

  {% for element in clientImages %}
    {% assign needsNewSubArr = forloop.index | modulo: subArrSize %}

    {% if needsNewSubArr == 1 %}
      {% comment %} Create a new empty sub array. {% endcomment %}
      {% assign subArr = "" | split: "/" %}
    {% endif %}

    {% comment %} Push the current image in sub array. {% endcomment %}
    {% assign subArr = subArr | push: element %}

    {% if needsNewSubArr == 0 or forloop.last %}
      {% comment %} push subArr in clients if subArr length is. {% endcomment %}
      {% assign clients = clients | push: subArr %}
    {% endif %}
  {% endfor %}

  <div id="clients" class="pb-4">
    <div class="d-flex flex-column align-items-center">
      <div class="bg-color-blue w-100 py-2">
        <h1
          class="text-center color-white"
          data-aos="fade-right"
          data-aos-offset="200"
        >Clients</h1>
      </div>
      <div
        class="clients__carousel carousel slide py-4"
        data-ride="carousel"
        data-aos="fade-right"
        data-aos-offset="200"
      >
        <div class="carousel-inner">
          {% for imageGroup in clients %}
            <!--- If first group, set class have active class. --->
            {% if forloop.first %}
              <div class="carousel-item text-center active">
                {% for imagePath in imageGroup %}
                    <img class="inline-block px-3 img-fluid w-10rem" src="{{ site.baseurl }}{{ imagePath }}">
                {% endfor %}
              </div>
            {% endif %}
            {% if forloop.first == false %}
              <div class="carousel-item text-center">
                {% for imagePath in imageGroup %}
                    <img class="inline-block px-3 img-fluid w-10rem" src="{{ site.baseurl }}{{ imagePath }}">
                {% endfor %}
              </div>
            {% endif %}
          {% endfor %}
        </div>
        <a
          class="carousel-control-prev"
          href=".clients__carousel"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon carousel-control-dark" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href=".clients__carousel"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon carousel-control-dark" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
  </div>
</div>