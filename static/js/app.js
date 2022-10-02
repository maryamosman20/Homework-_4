// console.log('This is app.js');

// const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// function DrawBargraph(sampleId)
// {
//     console.log(`DrwaBargraph(${sampleId})`);

//     d3.json(url).then(data => {
//       console.log(data);  
//       let samples = data.samples;
//       let resutArray = samples.filter(s => s.id == sampleId);
//       let result = resutArray[0];

//       let otu_ids = result.otu_ids;
//       let otu_labels = result.otu_labels;
//       let sample_values = result.sample_values;

//       let yticks = otu_ids.slice(0, 10).map(otuid => `OTU ${otuid}`);
//       console.log(`yticks = ${yticks}`);

//       //   create a trace object 
//       let barData = [
//       {
//         x: sample_values.slice(0, 10),
//         y: yticks,
//         type: `bar`,
//         text: otu_labels.slice(0, 10),
//         orientation: `h`

//       }];

//     // Put the trace object into an array
//     //let barArray = [barData];

//     // create a layout object
//     let barlayout = {
//         title: "Top 10 Bacteria Cultures Found",
//     }

//     // call the Plotly function
//     Plotly.newPlot("bar", barData, barlayout);
//     });

// }

// function DrawBubblechart(sampleId)
// {
//     console.log(`DrawBubblechart(${sampleId})`);

// }

// function DrawGauge(sampleId)
// {
//     console.log(`DrawGauge(${sampleId})`);
// }

// function ShowMetadat()
// {
//     console.log(`ShowMetadata(${sampleId})`);
// }

// function optionChanged(sampleId)
// {
//     console.log(`optionChanged(${sampleId})`);
// }

// function InitDashboard()
// {
//     console.log('InitDashboard()');

//     // get a handle to the dropdown
//     let selector = d3.select("#selDataset");

   

//     d3.json(url).then(data => 
//         {
//         console.log("Here is the data:", data);

//         let sampleNames = data.names;
//         console.log("Here are the sample names:", sampleNames);
//         // Populate the dropdown

//         for ( let i = 0; i < sampleNames.length; i++) {
//             let sampleId = sampleNames[i];
//             console.log(`sampleId = ${sampleId}`);
//             selector.append("option").text(sampleId).property("value", sampleId);
//         };
//         // Read the current value from the dropdown
//          let initialId = selector.property("value");
//          console.log(`initialId = ${initialId}`);

//         // Draw the value
//     });


// }

// InitDashboard();


