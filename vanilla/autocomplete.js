function autocomplete(inp, arr) {
    inp.addEventListener("input", function(e) {
        closeAllLists();
        var a, b, val = this.value;
        a = document.createElement("div");
        a.setAttribute("id", "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        inp.parentNode.appendChild(a);
        for (var i=0; i<arr.length; i++) {
            if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
                b = document.createElement("div");
                b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
                b.innerHTML += arr[i].substr(val.length);
                b.innerHTML += "<input type='hidden' value='" + arr[i] + "'/>";
                b.addEventListener("click", function(e) {
                    inp.value = this.getElementsByTagName("input")[0].value;
                    closeAllLists();
                });
            }
            a.appendChild(b);
        }
    });

    function closeAllLists(element) {
        var x = document.getElementsByClassName("autocomplete-items");
        for (var i=0; i<x.length; i++) {
            if (element != x[i] && element != inp) {
                x[i].parentNode.removeChild(x[i]);
            }
        }
    }

    document.addEventListener("click", function(e) {
        closeAllLists(e.target);
    });
}

var countries = ["India", "United States", "Indonesia"];
autocomplete(document.getElementById("myInput"), countries);