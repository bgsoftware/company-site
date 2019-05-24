---
layout: default
title: Home
---



<div class="container-fluid px-0 overflow-hidden">

  <div
    id="headline"
    class="d-flex flex-column align-items-center justify-content-center min-height-100vh"
  >
    <h1 class="headline__headline pt-10 text-center">Because there's only one business like yours.</h1>
    <h1
      class="headline__text text-center font-weight-lighter font-size-4"
      data-aos="fade-right"
      data-aos-duration="3000"
    >
      BG Software partners with small and medium-sized businesses to create personalized software
      that's easy to learn, simple to launch, and tailored specifically to your unique needs.
    </h1>
    <div
      class="video-wrap"
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
    <div
      class="py-3"
      data-aos="fade-right"
      data-aos-duration="3000"
    >
      <button class="btn cta-button-tertiary">How can we help you?</button>
    </div>

  </div>



  <!---  Custom Software. --->
  <div id="custom-software" class="bg-color-quinary pt-4 pb-15">
    <div
      class="opener w-100"
      data-aos="fade-right"
      data-aos-offset="200"
    >
      <h1 class="text-center color-tertiary mb-0 font-size-4">Why Custom Software?</h1>
    </div>
    <div
      class="d-flex justify-content-center"
      data-aos="fade-right"
      data-aos-offset="200"
    >
      <h2 class="custom-software__text color-tertiary text-center pt-5 font-weight-lighter font-size-3">
        Custom software is a tailor-made solution built with a client’s insight and business
        requirements from the onset, enabling it to meet a company’s specific business needs,
        processes, and security requirements.
      </h2>
    </div>

  </div>



  <!--- About Us. --->
  <div
    id="about-us"
    class="bg-color-primary py-4 pb-15"
  >
    <div
      class="d-flex align-items-center flex-column"
      data-aos="fade-right"
      data-aos-offset="200"
    >
      <div
        class="bg-color-primary w-100"
        data-aos="fade-right"
        data-aos-offset="200"
      >
        <h1 class="text-center color-tertiary font-size-4">Why BG Software?</h1>
      </div>
      <div
        class="about-us__content d-flex"
        data-aos="fade-right"
        data-aos-offset="200"
      >
        <img
          class="about-us__image text-center"
          src="{{site.baseurl}}/assets/images/BG/teamPhoto.jpg"
        >
        <h3 class="about-us__text color-tertiary font-weight-lighter">
          This is our family, a team of talented software developers, analysts and customer care
          pros. For over 13 years, we have been building, maintaining, and enhancing custom software
          systems that are both easy to use and scalable to our clients’ needs.
          <br><br>
          Our process typically involves meeting with your team to learn more about your needs,
          products, and industry. We then formulate a plan to select the appropriate technologies,
          software architects, and quality assurance team to bring your vision to life. A custom
          solution is then created to fit your specific needs.
        </h3>
      </div>

      <div class="pt-5">
        <button class="btn cta-button-primary">Speak to an expert</button>
      </div>

    </div>
  </div>



  <!--- Services. --->
  <div
    id="services"
    class="bg-color-tertiary py-4"
  >
    <div class="d-flex align-items-center flex-column">
      <div
        class="w-100"
        data-aos="fade-right"
        data-aos-offset="200"
      >
        <h1 class="text-center font-size-4">Services</h1>
      </div>

      <div
        class="services__cards d-flex justify-content-center m-0 pb-10"
      >
        {% for service in site.data.services %}
          <div
            class="services__card bg-color-octonary ml-3 mr-3 mb-5 box-shadow"
            data-aos="fade-right"
            data-aos-offset="200"
          >
            <div class="card-body">
              <img
                src="{{site.baseurl}}/assets/images/services/{{ forloop.index }}.png"
                class="mx-auto d-block w-75 max-width-13rem"
              >
              <h2 class="services__card-title card-title text-center">{{ service.name }}</h2>
              <h3 class="font-weight-lighter">
                {{ service.point }}
              </h3>
              <ul>
              {% for point in service.points %}
                <li class="card-text"><h3 class="font-weight-lighter">{{ point }}</h3></li>
              {% endfor %}
              </ul>
            </div>
          </div>
        {% endfor %}
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
      <!--- Create a new empty sub array. --->
      {% assign subArr = "" | split: "/" %}
    {% endif %}

    <!--- Push the current image in sub array. --->
    {% assign subArr = subArr | push: element %}

    {% if needsNewSubArr == 0 or forloop.last %}
      <!--- push subArr in capabilities if subArr length is. --->
      {% assign capabilities = capabilities | push: subArr %}
    {% endif %}
  {% endfor %}

  <div id="capabilities" class="bg-color-white pb-4">
    <div class="d-flex flex-column align-items-center">
      <div class="bg-color-primary w-100 py-4 mb-5">
        <h1
          class="text-center color-tertiary font-size-4"
          data-aos="fade-right"
          data-aos-offset="200"
        >Capabilities</h1>
      </div>

      <div
        id="capabilities-carousel"
        class="carousel slide py-4"
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
                    <img class="inline-block px-3 img-fluid w-7rem" src="{{ site.baseurl }}{{ imagePath }}">

                {% endfor %}
              </div>
            {% endif %}
            {% if forloop.first == false %}
              <div class="carousel-item text-center">
                {% for imagePath in imageGroup %}
                    <img class="inline-block px-3 img-fluid w-7rem" src="{{ site.baseurl }}{{ imagePath }}">

                {% endfor %}
              </div>
            {% endif %}
          {% endfor %}
        </div>
        <a
          class="carousel-control-prev"
          href="#capabilities-carousel"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon carousel-control-dark" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#capabilities-carousel"
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
      <!--- Create a new empty sub array. --->
      {% assign subArr = "" | split: "/" %}
    {% endif %}

    <!--- Push the current image in sub array. --->
    {% assign subArr = subArr | push: element %}

    {% if needsNewSubArr == 0 or forloop.last %}
      <!--- push subArr in clients if subArr length is. --->
      {% assign clients = clients | push: subArr %}
    {% endif %}
  {% endfor %}

  <div id="clients" class="pb-4">
    <div class="d-flex flex-column align-items-center">
      <div class="bg-color-primary w-100 py-4 mb-5">
        <h1
          class="text-center color-tertiary font-size-4"
          data-aos="fade-right"
          data-aos-offset="200"
        >Clients</h1>
      </div>

      <div
        id="clients-carousel"
        class="carousel slide py-4"
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
          href="#clients-carousel"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon carousel-control-dark" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#clients-carousel"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon carousel-control-dark" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
  </div>



  <!--- Let's Talk Software. --->
  <div
    id="lets-talk-software"
    class="bg-color-primary"
  >
    <div class="w-100">
      <h1
        class="text-center color-tertiary font-size-4"
        data-aos="fade-right"
        data-aos-offset="100"
      >Let's Talk Software</h1>
    </div>

    <div class="w-75 mx-auto d-flex flex-column align-items-center pb-8">
      <img
        id="robin-image"
        class="text-center w-15rem"
        src="{{site.baseurl}}/assets/images/BG/robin.jpg"
        data-aos="fade-right"
        data-aos-offset="100"
      >
      <h1
        class="lets-talk-software__name mb-0 pt-2 color-tertiary font-weight-lighter text-center font-size-3"
        data-aos="fade-right"
        data-aos-offset="100"
      >Robin Wells</h1>
      <h2
        class="lets-talk-software__position color-tertiary font-weight-lighter font-italic text-center font-size-2"
        data-aos="fade-right"
        data-aos-offset="100"
      >Chief Executive Officer</h2>

      <h2
        class="lets-talk-software__quote pt-4 text-center font-italic color-tertiary font-weight-lighter"
        data-aos="fade-up"
        data-aos-offset="100"
      >
        “For me and my team, it’s all about connecting with clients on a one-on-one level, getting
        to know their needs and ensuring they receive the highest-quality support and products.”
      </h2>

      <div class="pt-5" data-aos="fade-up">
        <button class="btn cta-button-primary">Ready to chat?</button>
      </div>

    </div>

    <div class="d-flex justify-content-center" data-aos="fade-up">
      <a id="scroll-up-button" class="btn">
        <img src="{{site.baseurl}}/assets/images/misc/up_chevron_e.png" class="w-3rem scroll-up-button">
      </a>
    </div>
  </div>



</div>

<script src="{{ site.baseurl }}/assets/js/scrollAnimate.js"></script>