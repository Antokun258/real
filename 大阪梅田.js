setInterval(func2,5000);
                                
                                function func2() {
                                    var x = document.getElementById("");
                                    switch (x.innerHTML) {
                                        case "　大阪梅田":
                                            x.innerHTML = " Osaka-umeda";
                                            break;
                                        case " Osaka-umeda":
                                            x.innerHTML = "　大阪梅田";
                                    }
                                }