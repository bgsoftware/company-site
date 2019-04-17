---
layout: default
title: Home
---


<div class="container">



  <!--- Mission Statement. --->
  <div class="py-15">
    <div class="row">
      <div class="col-3"></div>
      <div class="col-6 text-center">
        <p class="font-size-125">
          Benningfield Group partners with small and medium-sized businesses to create personalized software that's easy to learn, simple to launch, and tailored specifically to your unique needs.
        </p>
      </div>
      <div class="col-3"></div>
    </div>
  </div>



  <!--- Services. --->
  <div id="services">
    <div class="pt-10">
      <h1 class="text-center">Services</h1>
      <div class="d-flex flex-row justify-content-between">
        {% for service in site.data.services %}
          <div class="card w-18rem">
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
    <div class="pt-10 d-flex flex-column align-items-center">
      <h1 class="text-center pb-2">Capabilities</h1>

      <div id="capabilities-carousel" class="carousel slide w-90" data-ride="carousel">
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
    <div class="pt-10 d-flex flex-column align-items-center">
      <h1 class="text-center pb-2">Clients</h1>
      <div id="clients-carousel" class="carousel slide w-90" data-ride="carousel">
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
  <div id="aboutus">
    <div class="pt-15 pb-30 d-flex justify-content-center align-items-center flex-column">
      <h1 class="text-center">About Us</h1>
      <img class="w-75 text-center" src="{{site.baseurl}}/assets/images/BG/teamPhoto.jpg">
      <br>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo duis ut diam quam nulla porttitor massa id. Habitant morbi tristique senectus et netus. Lorem mollis aliquam ut porttitor leo a diam sollicitudin tempor. Mi ipsum faucibus vitae aliquet. In mollis nunc sed id semper risus in hendrerit. Platea dictumst vestibulum rhoncus est pellentesque. Arcu non sodales neque sodales ut etiam sit amet nisl. Amet mattis vulputate enim nulla aliquet porttitor lacus. Eget nunc lobortis mattis aliquam faucibus purus in massa. Arcu cursus vitae congue mauris rhoncus aenean vel. Volutpat sed cras ornare arcu dui vivamus arcu.
      </p>
    </div>
  </div>

</div>
