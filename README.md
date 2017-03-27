# Introduction

<p>By using the advanced React Redux starter kit a stocks watchlist sample app is getting developed. First we focus on the layout. We create React components in @kadirah/storybook which are getting used to create the client application </p>



![alt tag](https://github.com/dennisfleischmann/stocks-watchlist/blob/master/img/home.png)

![alt tag](https://github.com/dennisfleischmann/stocks-watchlist/blob/master/img/create.png)

# Additional Infos

<p>In order to receive usable stocks data the following api is getting used
</p>

<pre>
  <code> "https://www.quandl.com/api/v3/datasets/WIKI/FB/data.json?api_key=YOURAPIKEY"</code>
</pre>

<p>This API will give back the following data</p>

<pre>
  <code>
    {
  "dataset_data":{
     "limit":null,
     "transform":null,
     "column_index":null,
     "column_names":[
        "Date",
        "Open",
        "High",
        "Low"
     ],
     "start_date":"2015-05-24",
     "end_date":"2015-05-28",
     "frequency":"daily",
     "data":[
        [
           "2015-05-28",
           9.58,
           10.17,
           12.96
        ],
        [
           "2015-05-27",
           9.53,
           10.13,
           12.97
        ],
        [
           "2015-05-26",
           9.53,
           10.11,
           12.98
        ]
     ],
     "collapse":null,
     "order":"desc"
  }
}
  </code>
</pre>


# Goals

<ul>
  <li>Keep the components separate</li>
  <li>Reusable Components</li>
  <li>Testable business logic</li>
</ul>