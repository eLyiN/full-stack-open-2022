<h4>2.12* Data for countries, step1</h4>
<p>The API <a href="https://restcountries.com">https://restcountries.com</a> provides data for different countries in a machine-readable format, a so-called REST API.</p>
<p>Create an application, in which one can look at data of various countries. The application should probably get the data from the endpoint <a href="https://restcountries.com/v3.1/all">all</a>.</p>
<p>The user interface is very simple. The country to be shown is found by typing a search query into the search field.</p>
<p>If there are too many (over 10) countries that match the query, then the user is prompted to make their query more specific:</p>
<picture><img style="border-color:#EB8755" alt="fullstack content" src="/static/d8a3e3b3af8907d0c3dd495ef0d26ba6/5a190/19b1.png"/></picture>
<p>If there are ten or fewer countries, but more than one, then all countries matching the query are shown:</p>
<picture><img style="border-color:#EB8755" alt="fullstack content" src="/static/1d4ebf199806ccfe0df529c08e2a0c6d/5a190/19b2.png"/></picture>
<p>When there is only one country matching the query, then the basic data of the country (eg. capital and area), its flag and the languages spoken there, are shown:</p>
<picture><img style="border-color:#EB8755" alt="fullstack content" src="/static/1da341d99aa963449991676f4f6c34b3/5a190/19c3.png"/></picture>
<p><strong>NB</strong>: It is enough that your application works for most of the countries. Some countries, like <i>Sudan</i>, can be hard to support, since the name of the country is part of the name of another country, <i>South Sudan</i>. You don&#x27;t need to worry about these edge cases.</p>
<p><strong>WARNING</strong> create-react-app will automatically turn your project into a git-repository unless you create your application inside of an existing git repository. <strong>Most likely you do not want each of your projects to be a separate repository</strong>, so simply run the <em>rm -rf .git</em> command at the root of your application.</p>
<h4>2.13*: Data for countries, step2</h4>
<p><strong>There is still a lot to do in this part, so don&#x27;t get stuck on this exercise!</strong></p>
<p>Improve on the application in the previous exercise, such that when the names of multiple countries are shown on the page there is a button next to the name of the country, which when pressed shows the view for that country:</p>
<picture><img style="border-color:#EB8755" alt="fullstack content" src="/static/b8986829d36bd14bbbd6270e0e8d2edf/5a190/19b4.png"/></picture>
<p>In this exercise it is also enough that your application works for most of the countries. Countries whose name appears in the name of another country, like <i>Sudan</i>, can be ignored.</p>
<h4>2.14*: Data for countries, step3</h4>
<p><strong>There is still a lot to do in this part, so don&#x27;t get stuck on this exercise!</strong></p>
<p>Add to the view showing the data of a single country, the weather report for the capital of that country. There are dozens of providers for weather data. One suggested API is <a href="https://openweathermap.org">https://openweathermap.org</a>. Note that it might take some minutes until a generated api key is valid.</p>
<picture><img style="border-color:#EB8755" alt="fullstack content" src="/static/5b436dff5ae7a4e1f6e15c7ba95a29be/5a190/19x.png"/></picture>
<p>If you use Open weather map, <a href="https://openweathermap.org/weather-conditions#Icon-list">here</a> is the description how to get weather icons.</p>
<p><strong>NB:</strong> In some browsers (such as Firefox) the chosen API might send an error response, which indicates that HTTPS encryption is not supported, although the request URL starts with <em>http://</em>. This issue can be fixed by completing the exercise using Chrome.</p>
<p><strong>NB:</strong> You need an api-key to use almost every weather service. Do not save the api-key to source control! Nor hardcode the api-key to your source code. Instead use an <a href="https://create-react-app.dev/docs/adding-custom-environment-variables/">environment variable</a> to save the key.</p>
<p>Assuming the api-key is <i>t0p53cr3t4p1k3yv4lu3</i>, when the application is started like so:</p>
<div class="gatsby-highlight" data-language="bash"><pre><code class="language-bash"><span class="token assign-left variable">REACT_APP_API_KEY</span><span class="token operator">=</span>t0p53cr3t4p1k3yv4lu3 <span class="token function">npm</span> start // For Linux/macOS Bash
<span class="token punctuation">(</span><span class="token variable">$env</span>:REACT_APP_API_KEY<span class="token operator">=</span><span class="token string">&quot;t0p53cr3t4p1k3yv4lu3&quot;</span><span class="token punctuation">)</span> -and <span class="token punctuation">(</span>npm start<span class="token punctuation">)</span> // For Windows PowerShell
<span class="token builtin class-name">set</span> <span class="token string">&quot;REACT_APP_API_KEY=t0p53cr3t4p1k3yv4lu3&quot;</span> <span class="token operator">&amp;&amp;</span> <span class="token function">npm</span> start // For Windows cmd.exe</code></pre></div>
<p>you can access the value of the key from the <em>process.env</em> object:</p>
<div class="gatsby-highlight" data-language="js"><pre><code class="language-js"><span class="token keyword">const</span> api_key <span class="token operator">=</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">REACT_APP_API_KEY</span>
<span class="token comment">// variable api_key has now the value set in startup</span></code></pre></div>
<p>Note that if you created the application using <code class="language-text">npx create-react-app ...</code> and you want to use a different name for your environment variable then the environment variable name must still begin with <code class="language-text">REACT_APP_</code>. You can also use a <code class="language-text">.env</code> file rather than defining it on the command line each time by creating a file entitled &#x27;.env&#x27; in the root of the project and adding the following. </p>
<div class="gatsby-highlight" data-language="text"><pre><code class="language-text"># .env

REACT_APP_API_KEY=t0p53cr3t4p1k3yv4lu3</code></pre></div>

<p>Note that you will need to restart the server to apply the changes.</p>
