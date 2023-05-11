setInterval(func2,5000);
                                
                                function func2() {
                                    var x = document.getElementById("");
                                    switch (x.innerHTML) {
                                        case "　特急　":
                                            x.innerHTML = "Limited Exp.";
                                            break;
                                        case "Limited Exp.":
                                            x.innerHTML = "　特急　";
                                    }
                                }