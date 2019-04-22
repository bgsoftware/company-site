---
layout: default
title: Home
---

<script src="{{ site.baseurl }}/assets/js/navLinkAnimate.js"></script>
<div class="container-fluid px-0">

<!--   <div
    id="headline"
    class="headline jumbotron-fluid color-white d-flex align-items-center"> -->
    <!--- Mission Statement. --->
    <div class="d-flex align-items-center" style="height: 95vh">
      <div class="row">
        <div class="col-2"></div>
        <div class="col-8 text-center">
          <p class="font-size-2">
            Benningfield Group partners with small and medium-sized businesses to create personalized software that's easy to learn, simple to launch, and tailored specifically to your unique needs.
          </p>
        </div>
      </div>
    </div>
  <!-- </div> -->



  <!--- Services. --->
  <div id="services">
    <div class="pt-5">
      <div class="bg-color-primary w-100 pt-3">
        <h1 class="text-center color-tertiary font-weight-lighter mb-0">Services</h1>
      </div>
      <div class="right-angle-primary"></div>

      <div class="d-flex justify-content-center m-0">
        {% for service in site.data.services %}
          {% if forloop.first == true %}
            <div class="w-18rem">
              <div class="card-body">
                <h5 class="card-title text-center">{{ service.name }}</h5>
                <ul>
                {% for point in service.points %}
                  <li class="card-text">{{ point }}</li>
                {% endfor %}
                </ul>
              </div>
            </div>
          {% endif %}
          {% if forloop.first == false %}
            <div class="w-18rem border-left-primary">
              <div class="card-body">
                <h5 class="card-title text-center">{{ service.name }}</h5>
                <ul>
                {% for point in service.points %}
                  <li class="card-text">{{ point }}</li>
                {% endfor %}
                </ul>
              </div>
            </div>
          {% endif %}
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

  <div id="capabilities">
    <div class="pt-5 d-flex flex-column align-items-center">
      <div class="bg-color-primary w-100 pt-3 mb-0">
        <h1 class="text-center color-tertiary font-weight-lighter">Capabilities</h1>
      </div>
      <div class="right-angle-primary pb-4"></div>

      <div id="capabilities-carousel" class="carousel slide" data-ride="carousel">
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

  <div id="clients">
    <div class="pt-5 d-flex flex-column align-items-center">
      <div class="bg-color-primary w-100 pt-3">
        <h1 class="text-center color-tertiary font-weight-lighter">Clients</h1>
      </div>
      <div class="right-angle-primary pb-4"></div>

      <div id="clients-carousel" class="carousel slide" data-ride="carousel">
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
        <a class="carousel-control-prev" href="#clients-carousel" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon carousel-control-dark" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#clients-carousel" role="button" data-slide="next">
          <span class="carousel-control-next-icon carousel-control-dark" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
  </div>



  <!--- About Us. --->
  <div id="about-us">
    <div class="pt-5 pb-15 d-flex align-items-center flex-column">
      <div class="bg-color-primary w-100 pt-3">
        <h1 class="text-center color-tertiary font-weight-lighter">About Us</h1>
      </div>
      <div class="right-angle-primary"></div>

      <div class="about-us-content">
        <img class="text-center pt-5 w-100 pb-3" src="{{site.baseurl}}/assets/images/BG/teamPhoto.jpg">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo duis ut diam quam nulla porttitor massa id. Habitant morbi tristique senectus et netus. Lorem mollis aliquam ut porttitor leo a diam sollicitudin tempor. Mi ipsum faucibus vitae aliquet. In mollis nunc sed id semper risus in hendrerit. Platea dictumst vestibulum rhoncus est pellentesque. Arcu non sodales neque sodales ut etiam sit amet nisl. Amet mattis vulputate enim nulla aliquet porttitor lacus. Eget nunc lobortis mattis aliquam faucibus purus in massa. Arcu cursus vitae congue mauris rhoncus aenean vel. Volutpat sed cras ornare arcu dui vivamus arcu.
        </p>
      </div>

      <div class="about-us-content d-flex flex-column align-items-center">
        <img id="robin-image" class="text-center pt-5 pb-3 w-100" src="{{site.baseurl}}/assets/images/BG/robin.jpg">
        <h4>Robin Wells, CEO</h4>
      </div>
    </div>
  </div>

</div>
