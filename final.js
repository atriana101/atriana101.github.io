$(document).ready(function () {
    $("#mission").click(function () {
        let html = `
        <h2 class="mb-15">MISSION</h2>
        <p>Here to provide information that aims to reduce food insecurity and food waste, building a stronger community. We promote equal access to healthy food through the installation of community fridges (public refrigerators) that are used to share food and ideas at the neighborhood level.</p>
        `
        $("#result").html(html)
    })

    $("#bring").click(function () {
        let html = `
        <h2 class="mb-15">WHAT TO BRING</h2>
        <p>Deciding what to drop off should be done with care. Think nonperishable goods, snacks, boxed meals, bottled water, juice, and bread.</p>
        `
        $("#result").html(html)
    })

    $("#articles").click(function () {
        let html = `
        <h2 class="mb-15">ARTICLES</h2>
        <a href="https://www.vox.com/the-goods/22285863/community-fridges-neighborhoods-free-food" target="_blank">https://www.vox.com/the-goods/22285863/community-fridges-neighborhoods-free-food</a>
        <br><br>
        <a href="https://mashable.com/article/how-to-get-involved-community-fridge" target="_blank">https://mashable.com/article/how-to-get-involved-community-fridge</a>
        <br><br>
        <a href="https://www.consumerreports.org/food-insecurity-hunger/how-community-fridgesfreedgeshelp-feed-america-a2777334975/" target="_blank">https://www.consumerreports.org/food-insecurity-hunger/how-community-fridgesfreedgeshelp-feed-america-a2777334975/</a>
        <br><br>
        <a href="https://www.thecut.com/2020/07/new-york-community-fridges.html" target="_blank">https://www.thecut.com/2020/07/new-york-community-fridges.html</a>
        `
        $("#result").html(html)
    })

    $("#location").click(function () {
        var api = "https://atriana101.github.io/final.json";

        var button = $(this);
        $.ajax({
            url: api,
            method: 'GET',
            cache: false,
            type: "text/json"
        })
            .always(function () {
                $(button).html('LOADING...');
            })
            .done(function (evt) {
                // Disable button
                $(button).prop('disabled', true);
                // Set timeout for lazy loading
                setTimeout(function () {
                    var result = evt;
                    var html = '';
                    html += '<div class="tables-content">';
                    for (var i = 0; i < result.Data.length; i++) {
                        html += '<h2 class="tables-name">' + result.Data[i].Borough + '</h2>';

                        if (result.Data[i].Fridges.length > 0) {
                            html += '<table class="table">'
                                + '<thead>'
                                + '<tr>'
                                + '<th scope="col">Nama</th>'
                                + '<th scope="col">Address</th>'
                                + '<th scope="col">Info</th>'
                                + '</tr>'
                                + '</thead>'
                                + '<tbody>';

                            for (var j = 0; j < result.Data[i].Fridges.length; j++) {
                                html += '<tr>'
                                    + '<th scope="row">' + result.Data[i].Fridges[j].Name + '</th>'
                                    + '<td>' + result.Data[i].Fridges[j].Address + '</td>'
                                    + '<td>' + result.Data[i].Fridges[j].Info + '</td>'
                                    + '</tr>';
                            }
                            html += '</tbody></table>';
                        }
                    }
                    html += '</div>';

                    // Set all content
                    $('#result').html(html);

                }, 1000);
            })
            .fail(function () {
                alert('Error : Failed to reach API Url or check your connection');
                $(button).prop('disabled', false);
            })
            .then(function (evt) {
                setTimeout(function () {
                    $(button).html('LOCATIONS');
                }, 1000);
            });


        // $("#result").html(html)
    })
})