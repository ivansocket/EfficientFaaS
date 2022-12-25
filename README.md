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

# Configurations

On the ConfigurationFile, 3 properties can be found and changed.

<ul>
  <li>property - A string that represents the name of the property passed in the JSON body for the request sent by the user</li>
  <li>cachingService - A string that defines the connection that occurs on the cache_proxy module, it can have 3 different values:
   <ul>
   <li>nodeLocal</li>
   <li>redisLocal</li>
   <li>redisRemote</li>
   </ul>
   <li>redisRemoteConnectionString - A string that has the connection parameters for redis remote caching service</li>
</ul>

# Getting Started

In order to run EfficientFaaS directly on your device:

<ol>
  <li>Install Node.js</li>
  <li>Clone the repo  EfficientFaaS</li>
        <code>https://github.com/ivansocket/EfficientFaaS.git</code>
  <li>Adapt the ConfigurationFile.json to your settings, and configure the caching service</li>
  <li>Edit the index.js file and introduce the code that you want to execute when the function is triggered</li>
  <li>Execute EfficientFaaS by running: npx @google-cloud/functions-framework --target={nameOfTheFunction set on index.js} --port {port}</li>
</ol>

