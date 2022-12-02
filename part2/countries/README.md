# Final Version from Exercises 2.12 - 2.14

<p><strong>There is still a lot to do in this part, so don&#x27;t get stuck on this exercise!</strong></p>
<p>Add to the view showing the data of a single country, the weather report for the capital of that country. There are dozens of providers for weather data. One suggested API is <a href="https://openweathermap.org">https://openweathermap.org</a>. Note that it might take some minutes until a generated api key is valid.</p>
<picture><img style="border-color:#EB8755" alt="fullstack content" src="https://fullstackopen.com/static/5b436dff5ae7a4e1f6e15c7ba95a29be/5a190/19x.png"/></picture>
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
