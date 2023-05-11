setInterval(func2,5000);
                                
                                function func2() {
                                    var x = document.getElementById("");
                                    switch (x.innerHTML) {
                                        case "準特急":
                                            x.innerHTML = "Semi-Limited Exp.";
                                            break;
                                        case "Semi-Limited Exp.":
                                            x.innerHTML = "準特急";
                                    }
                                }