console.log('This is app.js');
//  define a global variable to hold the url
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

function DrawBargraph(sampleId)
{
    console.log(`DrawBargraph(${sampleId})`);

    d3.json(url).then(data => {
        
        let samples = data.samples;
        let resutArray = samples.filter(s => s.id == sampleId);
        let result = resutArray[0];

        let otu_ids = result.otu_ids;
        let otu_labels = result.otu_labels;
        let sample_values = result.sample_values;

        let yticks = otu_ids.slice(0, 10). map(otuId => `OTU ${otuId}`);
        
        // create a trace object
        let barData = {
            x: sample_values.slice(0, 10).reverse(),
            y: yticks,
            type: `bar`,
            text: otu_labels.slice(0, 10).reverse(),
            orintation: `h`
        };
        // put the trace obj
        let barArray = [barData];

        // create a layout 
        let barLayout = {
            title: "Top 10 bacteria Cultures Found",
            // margin: {t: 30, 1: 150}
        }
        // call the ploty function
        Plotly.newPlot("bar", barArray, barLayout);

    });

}

function DrawBubblechart(sampleId)
{
    console.log(`DrawBubblechart(${sampleId})`);
    
    d3.json(url).then(data => {

        let samples = data.samples;
        let resutArray = samples.filter(s => s.id == sampleId);
        let result = resutArray[0];


        let otu_ids = result.otu_ids;
        let otu_labels = result.otu_labels;
        let sample_values = result.sample_values;

        // create a trace
        let bubbleData = {
            x: otu_ids,
            y: sample_values,
            text: otu_labels,
            mode: "markers",
            marker: {
                size: sample_values,
                color: otu_ids,
                colorscale: "Earth"
            }
        }
        // Put the trace into an array
        let bubbleArray = [bubbleData];
        //  create a layout
        let bubbleLayout = {
            title: "Bacteria Culture Sample",
            margin: {t: 30},
            hovermode: "closest",
            xaxis: {title: "OTU ID"}
        };

        // call plotly
        Plotly.newPlot("bubble", bubbleArray, bubbleLayout);


    });
}

function ShowMetadat(sampleId)
{
    console.log(`ShowMetadata(${sampleId})`);
}

function optionChanged(sampleId)
{
    console.log(`optionChanged new value: ${sampleId}`);
    DrawBargraph(sampleId);
    DrawBubblechart(sampleId);
    ShowMetadat(sampleId);
    // drawGauge(sampleId);
}


function InitDashboard()
{
    console.log(`InitDashboard()`);
    // initialize the dropdown 
    let selector = d3.select("#selDataset");

    d3.json(url).then(data => {
        console.log("here is the data:", data);

        let sampleNames = data.names;
        console.log("here are the sample names:", sampleNames);

        //  Populate the dropdown
        for (let i = 0; i < sampleNames.length; i++) {
            let sampleId = sampleNames[i];
            selector.append("option").text(sampleId).property("value", sampleId);

        };

        // read the current value for the dropdown
        let initialId = selector.property("value");
        console.log(`initialId = ${initialId}`);

        // Draw the bargrapg for the selected sample id
        DrawBargraph(initialId);

        // Draw the bubblechar for the selected sample id
        DrawBubblechart(initialId);

        //  show metadata for the selected sample id
        ShowMetadat(initialId);


    });

}
InitDashboard();

