setInterval(func2,5000);
                                
                                function func2() {
                                    var x = document.getElementById("");
                                    switch (x.innerHTML) {
                                        case "　急行　":
                                            x.innerHTML = "Express";
                                            break;
                                        case "Express":
                                            x.innerHTML = "　急行　";
                                    }
                                }