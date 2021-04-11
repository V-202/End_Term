function add() {
    var place = document.getElementById("place").value;
    var date = document.getElementById("date").value;
    var to = document.getElementById("till").value;
    var xhttp = new XMLHttpRequest();
    var url = "https://api.covid19api.com/country/" + place + "?from=" + date + "T00:00:00Z&to=" + to + "T00:00:00Z";

    //Get request to the api
    xhttp.open("GET", url, true);
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var list = JSON.parse(this.responseText);
            var caseCount = 0;
            var deathCount = 0;
            var activeCases = 0;
            for (var i = 0; i < list.length; i++) {
                create(list[i].Confirmed, list[i].Active, list[i].Deaths);
            }

        }
    };
    xhttp.send();

}




function create(caseCount, activeCases, deathCount) {
    var area = document.getElementById("Container");

    var divArea = document.createElement("div");

    //Confirmed cases 
    var post = document.createElement("p");
    var box = document.createTextNode("Confirmed cases:");
    post.appendChild(box);

    var span = document.createElement("span");
    var cs = document.createTextNode(caseCount);

    span.appendChild(cs);
    post.appendChild(span);
    divArea.appendChild(post);

    //Active cases
    var a = document.createElement("p");
    var aText = document.createTextNode("Active cases:");
    a.appendChild(aText);

    var d = document.createElement("span");
    var dText = document.createTextNode(activeCases);

    d.appendChild(dText);
    a.appendChild(d);
    divArea.appendChild(a);

    //Death cases
    var b = document.createElement("p");
    var bText = document.createTextNode("Death cases:");
    b.appendChild(bText);

    var any = document.createElement("span");
    var anyText = document.createTextNode(deathCount);

    any.appendChild(anyText);
    b.appendChild(any);
    divArea.appendChild(b);


    divArea.setAttribute("class", "Color");

    area.appendChild(divArea);

}