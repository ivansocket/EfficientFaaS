# EfficientFaaS

EfficientFaaS is an adaptation of the open-souce version of the Google Cloud Platform Functions Framework.

As a need for the Google Cloud Platform Functions Framework, it was found that an
adaptation would be possible in order to promote the use of cache services, thus
making it possible to take advantage of previous processing of the functions to
accelerate the response to future requests. In this way, 3 different caching mechanisms
were implemented, In-Process, Out-of-Process and Network, each responding to
different needs and bringing different advantages.

> **_NOTE:_**  EfficientFaaS was developed during the context of obtaining the Master's degree at Instituto Superior de Engenharia de Lisboa (ISEL), Lisboa, Portugal with the dissertation titled "Reducing Execution Time in FaaS Cloud Platforms" as the document that best describes the solution.

# Modules

For the development of the solution the @google-cloud/functions-framework node module was adapted, and some new modules had to be incremented to the solution.

**Adapted Modules**

<ul>
  <li>function_wrappers - Path - (EfficientFaaS/node_modules/@google-cloud\functions-framework\build\src\function_wrappers.js)</li>
  
</ul>

**New Modules**

<ul>
  <li>cache-provider.js - Path - EfficientFaaS</li>
  <li>functions-manager - Path - EfficientFaaS</li>
  <li>cache_proxy - Path - EfficientFaaS</li>
</ul>