setInterval(func2,5000);
                                
                                function func2() {
                                    var x = document.getElementById("");
                                    switch (x.innerHTML) {
                                        case "通勤急行":
                                            x.innerHTML = "Commuter Exp.";
                                            break;
                                        case "Commuter Exp.":
                                            x.innerHTML = "通勤急行";
                                    }
                                }