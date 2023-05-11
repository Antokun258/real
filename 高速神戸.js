setInterval(func2,5000);
                                
                                function func2() {
                                    var x = document.getElementById("");
                                    switch (x.innerHTML) {
                                        case "　高速神戸":
                                            x.innerHTML = " Kosoku-kobe";
                                            break;
                                        case " Kosoku-kobe":
                                            x.innerHTML = "　高速神戸";
                                    }
                                }