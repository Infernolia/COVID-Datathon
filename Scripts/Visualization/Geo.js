      google.charts.load('current', {
        'packages': ['geochart'],
        // Note: you will need to get a mapsApiKey for your project.
        // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
        'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
      });
      google.charts.setOnLoadCallback(drawRegionsMap);

      function drawRegionsMap() {
        var data = google.visualization.arrayToDataTable([
          ['Country', 'Popularity'],
          ['Gambia', 700],
          ['Russia', 700],
          ['Lithuania', 700],
          ['Georgie', 700],
          ['Belarus', 700],
          ['Latvia', 700],
          ['Kazakhstan', 700],
          ['Germany', 700],
          ['Iceland', 700],
          ['Italy', 700],
          ['Slovakia',700],
          ['Japan',700],
          ['Estonia',700],
          ['Czech Republic',700],
          ['France',700],
          ['Spain',700],
          ['Australia',700],
          ['Finland',700],
          ['Hungary',700],
          ['Austria',700],
          ['Brunei',700],
          ['Israel',700],
          ['Belgium',700],
          ['Croatia',700],
          ['Greece',700],
          ['Denmark',700],
          ['New Zealand',700],
          ['Switzerland',650],
 ['Serbia',650],
 ['Luxembourg',650],
 ['Uruguay',650],
 ['Argentina',650],
 ['Sweden',650],
 ['Slovenia',650],
 ['Ireland',650],
 ['Poland',650],
 ['South Korea',650],
 ['Norway',650],
 ['Netherlands',650],
 ['Portugal',650],
 ['Brazil',650],
 ['Canada',650],
 ['Cambodia',650],
 ['United Kingdom',650],
 ['Jordan',650],
 ['Kuwait',650],
 ['Qatar',650],
 ['Singapore',650],
 ['Sri Lanka',650],
 ['Panama',650],
 ['China',650],
 ['United Arab Emirates',650],
 ['Egypt',600],
['Saudi Arabia',600],
['Vietnam',600],
['South Africa',600],
['Mexico',600],
['Turkey',600],
['Chile',600],
['Algeria',600],
['India',600],
['Ecuador',600],
['Malaysia',600],
['Colombia',600],
['Peru',600],
['Costa Rica',600],
['Iran',600],
['Thailand',600],
['Philippines',600],
['Nigeria',600],
['Ghana',600],
['Pakistan',600],
['Myanmar',600],
['Indonesia',600],
['US',600]

 

          
          

        ]);

        var options = {};

        var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

        chart.draw(data, options);
      }
