setInterval(func2,5000);
                                
                                function func2() {
                                    var x = document.getElementById("");
                                    switch (x.innerHTML) {
                                        case "　夙川":
                                            x.innerHTML = " Shukugawa";
                                            break;
                                        case " Shukugawa":
                                            x.innerHTML = "　夙川";
                                    }
                                }