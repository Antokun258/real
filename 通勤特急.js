setInterval(func2,5000);
                                
                                function func2() {
                                    var x = document.getElementById("");
                                    switch (x.innerHTML) {
                                        case "通勤特急":
                                            x.innerHTML = "Commuter Limited Exp.";
                                            break;
                                        case "Commuter Limited Exp.":
                                            x.innerHTML = "通勤特急";
                                    }
                                }