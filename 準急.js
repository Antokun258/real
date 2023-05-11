setInterval(func2,5000);
                                
                                function func2() {
                                    var x = document.getElementById("1810");
                                    switch (x.innerHTML) {
                                        case "　準急　":
                                            x.innerHTML = "Semi-Exp.";
                                            break;
                                        case "Semi-Exp.":
                                            x.innerHTML = "　準急　";
                                    }
                                }